import {  effect} from "@herja/core";
import { sensor, switches } from "generated/src";


export const coffeeMachineButton = () => {
  effect(()=>{
    if(sensor.tripod_button_action.state !== '')
      switches.coffee_machine_outlet.toggle()
  }, [sensor.coffee_machine_button_action])
};
