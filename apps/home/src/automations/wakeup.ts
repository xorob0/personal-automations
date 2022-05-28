import {  effect } from "@herja/core";
import {  person, light } from "generated/src";

export const wakeup = () => {
  effect((event)=>{
    if(event.data.actionName !== 'alarm')
      return
    if(event.data.value === 'snooze' && !person.gaby.isHome()){
      light.bedside_lamp.turn_on()
    }
    if(event.data.value === 'stopped' && !person.gaby.isHome()){
      light.bedroom_bed_light.turn_on()
    }
  }, [{eventType: "shortcut_event"}])


};
