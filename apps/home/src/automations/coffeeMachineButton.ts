// import {  effect} from "@herja/core";
// import { sensor, switches } from "generated/src";
//
// let timeoutID: NodeJS.Timer|undefined = undefined;

// TODO re enable when I have another coffee machine outlet
export const coffeeMachineButton = () => {
  // effect(()=>{
  //   if(sensor.tripod_button_action.state.state === 'single')
  //     switches.coffee_machine_outlet.toggle()
  // }, [sensor.coffee_machine_button_action])
  // effect(()=>{
  //   if(switches.coffee_machine_outlet.isOn())
  //     timeoutID = setTimeout(()=>{
  //       switches.coffee_machine_outlet.turn_off()
  //     },90 * 60 * 1000)
  //   else{
  //     clearTimeout(timeoutID as number|undefined);
  //   }
  // }, [switches.coffee_machine_outlet])
};
