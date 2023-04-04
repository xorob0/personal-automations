import { effect } from "@herja/core";
import { binary_sensor, sensor, switches } from "generated/src";

// TODO change button coffe machine
let timeoutID: NodeJS.Timer|undefined = undefined;
export const coffeeMachineButton = () => {
  effect(()=>{
    if(sensor.coffee_machine_button_action.entity.state === "on") {
      switches.coffee_machine_outlet.turnOn()
    }
    if(sensor.coffee_machine_button_action.entity.state === "brightness_stop") {
      switches.coffee_machine_outlet.turnOff()
    }
    }, [sensor.coffee_machine_button_action])

  effect(()=>{
    clearTimeout(timeoutID as number|undefined);
    if(switches.coffee_machine_outlet.isOn())
      timeoutID = setTimeout(()=>{
        switches.coffee_machine_outlet.turnOff()
    },90 * 60 * 1000)
  }, [switches.coffee_machine_outlet])
};
