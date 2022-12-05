import { effect } from "@herja/core";
import { binary_sensor, light } from "generated/src";

export const turnOnBathroomLightWithDoor = () => {
  effect((event)=>{
    if(event?.data.new_state.state === 'on')
      light.bathroom.turnOn()
  },[binary_sensor.bathroom_door_contact])
};
