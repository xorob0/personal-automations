import { effect } from "@herja/core";
import { switches, cover, sensor } from "generated/src";

export const garageRemote = () => {
  effect(()=>{
    switch (sensor.garage_remote_action.state.state){
      case 'off_press': {
        cover.garage_electric_door.close()
        break;
      }
      case 'on_press': {
        cover.garage_electric_door.open()
        break;
      }
      case 'down_press': {
        cover.garage_electric_door.setPosition({position: 20})
        break
      }
      case 'up_press': {
        switches.garage_button.turn_on()
        break;
      }
    }
  }, [sensor.garage_remote_action])
};
