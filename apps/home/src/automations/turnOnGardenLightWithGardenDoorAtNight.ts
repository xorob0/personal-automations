import { effect, shadowState } from '@herja/core';
import { binary_sensor, light, sun } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const turnOnGardenLightWithGardenDoorAtNight = () => {
  effect(() => {
    if (
      shadowState['sun.sun'].state === 'below_horizon' &&
      binary_sensor.garden_door_contact.isOn()
    ) {
      clearTimeout(timeoutID as number|undefined);
      light.garden.turnOn();
    } else {
      timeoutID = setTimeout(() => {
        light.garden.turnOff();
      }, 10 * 60 * 1000);
    }
  }, [sun.sun, binary_sensor.garden_door_contact]);
};
