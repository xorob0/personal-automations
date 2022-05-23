import {effect} from '@herja/core';
import { binary_sensor, light } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const turnOnGarageLightWhenADoorIsOpened = () => {effect(() => {
  if(binary_sensor.garage_electric_door_sensor_closed_contact.isOn() ||
    binary_sensor.garage_door_contact.isOn()
  ) {
    clearTimeout(timeoutID as number|undefined);
    light.garage.turn_on()
  }
  else{
    timeoutID = setTimeout(() => {
      light.garage.turn_off()
    }, 2 * 60 * 1000);
  }
}, [binary_sensor.garage_door_contact, binary_sensor.garage_electric_door_sensor_closed_contact])}

