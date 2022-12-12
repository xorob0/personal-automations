import { callService, effect } from "@herja/core";
import { binary_sensor, switches } from "generated/src";
import { COVER_STATE, createMQTTCover } from "mqtt-utils/src";

const MOVE_SPEED = 190;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let state = COVER_STATE.CLOSED;

let intervalID: NodeJS.Timer|undefined  = undefined;

export const garage = () => {
  console.log('starting garage')
  const {setPosition: setPercentOpen, setState} = createMQTTCover({
    name: 'Garage Cover',
    onOpen: (position) => {
      console.log('event garage open', state)
      clearInterval(intervalID as number|undefined);
      if (position === 0) {
        switches.garage_button.turnOn();
        return;
      }
      if (position === 100) {
        return;
      }
      switch (state) {
        case COVER_STATE.CLOSED:
          switches.garage_button.turnOn();
          break;
        case COVER_STATE.OPEN:
          switches.garage_button.turnOn();
          setTimeout(switches.garage_button.turnOn, 1000);
          setTimeout(switches.garage_button.turnOn, 2000);
          break;
        case COVER_STATE.CLOSING:
          switches.garage_button.turnOn();
          setTimeout(switches.garage_button.turnOn, 1000);
          break;
      }
      // TODO Ensure every 30s
    },
    onClose: (position) => {
      console.log('event garage close', position, state)
      clearInterval(intervalID as number|undefined);
      if (position === 100) {
        switches.garage_button.turnOn();
        return;
      }
      if (position === 0) {
        return;
      }
      switch (state) {
        case COVER_STATE.OPEN:
          switches.garage_button.turnOn();
          break;
        case COVER_STATE.CLOSED:
          switches.garage_button.turnOn();
          setTimeout(switches.garage_button.turnOn, 1000);
          setTimeout(switches.garage_button.turnOn, 2000);
          break;
        case COVER_STATE.OPENING:
          switches.garage_button.turnOn();
          setTimeout(switches.garage_button.turnOn, 1000);
          break;
      }
    },
    onStop: (position) => {
      console.log('event garage stop', position, state)
      clearInterval(intervalID as number|undefined);
      switch (state) {
        case COVER_STATE.CLOSING:
          switches.garage_button.turnOn();
          break;
        case COVER_STATE.OPENING:
          switches.garage_button.turnOn();
          break;
      }
    },
    onSetPercent : async (position) => {
        console.log(position);
        clearInterval(intervalID as number|undefined);
        // TODO handle position 0
        console.log('setting position', position);
        console.log('closing');
        callService('cover', 'close_cover', undefined, {
          entity_id: 'cover.garage_cover',
        });
        await delay(MOVE_SPEED * position * 0.2);
        console.log('opening');
        callService('cover', 'open_cover', undefined, {
          entity_id: 'cover.garage_cover',
        });
        await delay(MOVE_SPEED * position);
        console.log('stopping');
        callService('cover', 'stop_cover', undefined, {
          entity_id: 'cover.garage_cover',
        });
      },
  })

  const IntervalIncrement = () => {
    console.log("IntervalIncrement");
    clearInterval(intervalID as number|undefined);
    intervalID = setInterval(() => {
      setPercentOpen(position => position <= 99 ? position + 1 : 99);
    }, MOVE_SPEED);
  };
  const IntervalDecrement = () => {
    console.log("IntervalDecrement");
    clearInterval(intervalID as number|undefined);
    intervalID = setInterval(() => {
      setPercentOpen(position => position >= 1 ? position - 1 : 1);
    }, MOVE_SPEED);
  };

  if (!binary_sensor.garage_electric_door_sensor_closed_contact.isOn()) {
    setState(COVER_STATE.CLOSED)
    console.log('detected as closed')
    setPercentOpen(0)
  }
  else if (!binary_sensor.garage_electric_door_sensor_open_contact.isOn()) {
    setState(COVER_STATE.OPEN)
    console.log('detected as open')
    setPercentOpen(100)
  }
  else {
    setState(COVER_STATE.OPENING)
    console.log('detected as unknown, assuming opening')
    setPercentOpen(50)
  }

    effect(() => {
      console.log('binary_sensor.garage_electric_door_sensor_closed_contact changed', binary_sensor.garage_electric_door_sensor_closed_contact.isOn())
    if (binary_sensor.garage_electric_door_sensor_closed_contact.isOn()) {
      setState(COVER_STATE.OPENING);
      IntervalIncrement();
    } else {
      clearInterval(intervalID as number|undefined);
      setPercentOpen(0);
      setState(COVER_STATE.OPENING);
    }
  }, [binary_sensor.garage_electric_door_sensor_closed_contact]);

  effect(() => {
    console.log('binary_sensor.garage_electric_door_sensor_open_contact changed', binary_sensor.garage_electric_door_sensor_open_contact.isOn())
    if (binary_sensor.garage_electric_door_sensor_open_contact.isOn()) {
      setState(COVER_STATE.CLOSING);
      IntervalDecrement();
    } else {
      clearInterval(intervalID as number|undefined);
      setPercentOpen(100);
      setState(COVER_STATE.OPEN);
    }
  }, [binary_sensor.garage_electric_door_sensor_open_contact]);

  effect(() => {
    console.log('switches.garage_button changed', switches.garage_button.isOn(), state)
    if (switches.garage_button.isOn()) {
      clearInterval(intervalID as number|undefined);
      switch (state) {
        case COVER_STATE.CLOSED:
          setState(COVER_STATE.OPENING);
          IntervalIncrement();
          break;
        case COVER_STATE.CLOSING:
          setState(COVER_STATE.CLOSED);
          break;
        case COVER_STATE.OPEN:
          setState(COVER_STATE.CLOSING);
          IntervalDecrement();
          break;
        case COVER_STATE.OPENING:
          setState(COVER_STATE.OPEN);
          break;
      }
    }
  }, [switches.garage_button]);
};
