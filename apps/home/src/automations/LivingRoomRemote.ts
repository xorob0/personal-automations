import { effect } from "@herja/core";
import { light, sensor } from "generated/src";

const TRANSITION = 0.5
export const livingRoomRemote = () => {
  effect((event)=>{
    switch(event?.data.new_state.state){
      case "on_press": {
        light.living_room_all.turnOn({transition: TRANSITION})
        break;
      }
      case "off_press": {
        light.living_room_all.turnOff()
        break;
      }
      case "up_press": {
        const newBrightness = (light.living_room_all.entity.attributes?.brightness || 0) + 10
        light.living_room_all.turnOn({brightness: newBrightness, transition: TRANSITION })
        break;
      }
      case "down_press": {
        const newBrightness = (light.living_room_all.entity.attributes?.brightness || 0) - 10
        light.living_room_all.turnOn({brightness: newBrightness, transition: TRANSITION })
        break;
      }
    }
  }, [sensor.living_room_remote_action])
};
