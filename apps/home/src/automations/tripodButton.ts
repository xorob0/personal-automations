import {  effect} from "@herja/core";
import { sensor, light } from "generated/src";


export const tripodButton = () => {
  effect(()=>{
    if(sensor.tripod_button_action.state.state !== '')
      light.living_room_tripod.toggle()
  }, [sensor.tripod_button_action])
};
