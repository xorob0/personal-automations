import {  effect } from "@herja/core";
import { binary_sensor, light, person, sun } from "generated/src";

export const turnOnSomeLightsWhenComingHome = () => {
  effect(() => {
  }, [person.tim, person.gaby]);
  effect(() => {
    const nobodyHome = !(person.gaby.isHome() || person.tim.isHome());
    if(nobodyHome)
      return
    if(!(binary_sensor.garage_door_contact.isOn() || binary_sensor.entrance_door_contact.isOn()))
      return
    if(sun.sun.isAboveHorizon())
      return
    light.hall.turnOn()
  }, [binary_sensor.garage_door_contact, binary_sensor.entrance_door_contact]);
};
