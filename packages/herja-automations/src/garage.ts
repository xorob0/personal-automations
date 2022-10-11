import { callService, effect } from "@herja/core";
import { binary_sensor, switches } from "generated/src";
import * as mqtt from 'mqtt';

const MOVE_SPEED = 190;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let percentOpen: number = -1;

enum GarageState {
  Unknown = 'unknown',
  Open = 'open',
  Closed = 'closed',
  Opening = 'opening',
  Closing = 'closing',
}

let state = GarageState.Unknown;

let intervalID: NodeJS.Timer|undefined  = undefined;

export const garage = (client: mqtt.MqttClient) => {
  console.log('starting garage')
  const setPercentOpen = (value: number) => {
    console.log("setPercentOpen", value);
    percentOpen = value;
    client.publish('herja/sensor/garage_position', value.toString());
  };
  const setState = (value: GarageState) => {
    console.log("setState", value);
    state = value;
    client.publish('herja/sensor/garage_state', value.toString());
  };

  const IntervalIncrement = () => {
    console.log("IntervalIncrement");
    clearInterval(intervalID as number|undefined);
    intervalID = setInterval(() => {
      if (percentOpen < 99) setPercentOpen(percentOpen + 1);
    }, MOVE_SPEED);
  };
  const IntervalDecrement = () => {
    console.log("IntervalDecrement");
    clearInterval(intervalID as number|undefined);
    intervalID = setInterval(() => {
      if (percentOpen > 1) setPercentOpen(percentOpen - 1);
    }, MOVE_SPEED);
  };

  if (!binary_sensor.garage_electric_door_sensor_closed_contact.isOn()) {
    setState(GarageState.Closed)
    console.log('detected as closed')
    percentOpen = 0
  }
  else if (!binary_sensor.garage_electric_door_sensor_open_contact.isOn()) {
    setState(GarageState.Open)
    console.log('detected as open')
    percentOpen = 100
  }
  else {
    setState(GarageState.Opening)
    console.log('detected as unknown, assuming opening')
    percentOpen = 50
  }

    effect(() => {
      console.log('binary_sensor.garage_electric_door_sensor_closed_contact changed', binary_sensor.garage_electric_door_sensor_closed_contact.isOn())
    if (binary_sensor.garage_electric_door_sensor_closed_contact.isOn()) {
      setState(GarageState.Opening);
      IntervalIncrement();
    } else {
      clearInterval(intervalID as number|undefined);
      setPercentOpen(0);
      setState(GarageState.Closed);
    }
  }, [binary_sensor.garage_electric_door_sensor_closed_contact]);

  effect(() => {
    console.log('binary_sensor.garage_electric_door_sensor_open_contact changed', binary_sensor.garage_electric_door_sensor_open_contact.isOn())
    if (binary_sensor.garage_electric_door_sensor_open_contact.isOn()) {
      setState(GarageState.Closing);
      IntervalDecrement();
    } else {
      clearInterval(intervalID as number|undefined);
      setPercentOpen(100);
      setState(GarageState.Open);
    }
  }, [binary_sensor.garage_electric_door_sensor_open_contact]);

  effect(() => {
    console.log('switches.garage_button changed', switches.garage_button.isOn(), state)
    if (switches.garage_button.isOn()) {
      clearInterval(intervalID as number|undefined);
      switch (state) {
        case GarageState.Closed:
          setState(GarageState.Opening);
          IntervalIncrement();
          break;
        case GarageState.Closing:
          setState(GarageState.Closed);
          break;
        case GarageState.Open:
          setState(GarageState.Closing);
          IntervalDecrement();
          break;
        case GarageState.Opening:
          setState(GarageState.Open);
          break;
      }
    }
  }, [switches.garage_button]);

  effect(() => {
    console.log('event garage open', percentOpen, state)
    clearInterval(intervalID as number|undefined);
    if (percentOpen === 0) {
      switches.garage_button.turn_on();
      return;
    }
    if (percentOpen === 100) {
      return;
    }
    switch (state) {
      case GarageState.Closed:
        switches.garage_button.turn_on();
        break;
      case GarageState.Open:
        switches.garage_button.turn_on();
        setTimeout(switches.garage_button.turn_on, 100);
        setTimeout(switches.garage_button.turn_on, 200);
        break;
      case GarageState.Closing:
        switches.garage_button.turn_on();
        setTimeout(switches.garage_button.turn_on, 100);
        break;
    }
    // TODO Ensure every 30s
  }, [{ eventType: 'garage.open' }]);

  effect(() => {
    console.log('event garage close', percentOpen, state)
    clearInterval(intervalID as number|undefined);
    if (percentOpen === 100) {
      switches.garage_button.turn_on();
      return;
    }
    if (percentOpen === 0) {
      return;
    }
    switch (state) {
      case GarageState.Open:
        switches.garage_button.turn_on();
        break;
      case GarageState.Closed:
        switches.garage_button.turn_on();
        setTimeout(switches.garage_button.turn_on, 100);
        setTimeout(switches.garage_button.turn_on, 200);
        break;
      case GarageState.Opening:
        switches.garage_button.turn_on();
        setTimeout(switches.garage_button.turn_on, 100);
        break;
    }
    // TODO Ensure every 30s
  }, [{ eventType: 'garage.close' }]);

  effect(() => {
    console.log('event garage stop', percentOpen, state)
    clearInterval(intervalID as number|undefined);
    switch (state) {
      case GarageState.Closing:
        switches.garage_button.turn_on();
        break;
      case GarageState.Opening:
        switches.garage_button.turn_on();
        break;
    }
  }, [{ eventType: 'garage.stop' }]);

  effect(
    async (event) => {
      console.log('event garage set position', percentOpen, state, event)
      console.log(event.data.position);
      if(typeof event.data.position !== 'number')
        return
      clearInterval(intervalID as number|undefined);
      // TODO handle position 0
      console.log('setting position', event.data.position);
      console.log('closing');
      callService('cover', 'close_cover', undefined, {
        entity_id: 'cover.garage_electric_door',
      });
      await delay(MOVE_SPEED * event.data.position * 0.2);
      console.log('opening');
      callService('cover', 'open_cover', undefined, {
        entity_id: 'cover.garage_electric_door',
      });
      await delay(MOVE_SPEED * event.data.position);
      console.log('stopping');
      callService('cover', 'stop_cover', undefined, {
        entity_id: 'cover.garage_electric_door',
      });
    },
    [{ eventType: 'garage.set_position' }]
  );
};
