import {  effect } from "@herja/core";
import { binary_sensor, light, person, sun } from "generated/src";

let nobodyHome: boolean = false

export const turnOnSomeLightsWhenComingHome = () => {
  effect(() => {
    nobodyHome = !(person.gaby.isHome() || person.tim.isHome());
  }, [person.tim, person.gaby]);
  effect(() => {
    if(!nobodyHome)
      return
    if(!(binary_sensor.garage_door_contact.isOn() || binary_sensor.entrance_door_contact.isOn()))
      return
    if(!sun.sun.isAboveHorizon())
      return
    light.hall.turn_on()
    light.living_room_tripod.turn_on()
    nobodyHome = false
  }, [binary_sensor.garage_door_contact, binary_sensor.entrance_door_contact]);
};
