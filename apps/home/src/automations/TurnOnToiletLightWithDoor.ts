import { effect } from "@herja/core";
import { binary_sensor, light } from "generated/src";

export const turnOnToiletLightWithDoor = () => {
  effect((event)=>{
    console.log(event)
    if(event.data.new_state.state === 'on')
      light.toilet.turnOn()
  },[binary_sensor.toilet_door_contact])
};
