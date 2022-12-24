import { callService, effect } from "@herja/core";
import { sensor } from "generated/src";
import { callbackAfterDelay } from "@herja/automations";
import { BINARY_SENSOR_STATE, createMQTTBinarySensor } from "mqtt-utils/src/binary_sensor";

const idlePowerWashingMachine= 10;
const idlePowerDishWasher = 5;

const delayWashingMachine = 3 * 60 * 1000;
const delayDishWasher = 5 * 60 * 1000;

export const machines = () => {
  const {setState: setStateDishWasher} = createMQTTBinarySensor({
    name: 'dishwasher_washing',
  })
  const {setState: setStateWashingMachine} = createMQTTBinarySensor({
    name: 'dishwasher_washing',
  })

  effect(()=>{
    if(sensor.dishwasher_outlet_power.entity.state <= idlePowerDishWasher)
      setStateDishWasher(BINARY_SENSOR_STATE.OFF);
    else
      setStateDishWasher(BINARY_SENSOR_STATE.ON);
  }, [sensor.dishwasher_outlet_power])

  effect(()=>{
    if(sensor.washing_machine_outlet_power.entity.state <= idlePowerWashingMachine)
      setStateWashingMachine(BINARY_SENSOR_STATE.OFF);
    else
      setStateWashingMachine(BINARY_SENSOR_STATE.ON);
  }, [sensor.washing_machine_outlet_power])

  // callbackAfterDelay({
  //   condition: () => sensor.washing_machine_outlet_power.entity.state > idlePowerWashingMachine,
  //   sensor: sensor.washing_machine_outlet_power,
  //   callback: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Washing machine finished', message: `The washing machine has finished washing`}),
  //   delay:  delayWashingMachine,
  // });
  // callbackAfterDelay({
  //   condition: () => sensor.dishwasher_outlet_power.entity.state > idlePowerDishWasher,
  //   sensor: sensor.dishwasher_outlet_power,
  //   callback: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Dishwasher finished', message: `The dishwasher has finished washing`}),
  //   delay: delayDishWasher,
  // });

}
