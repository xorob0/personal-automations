import { effect } from "@herja/core";
import { switches, cover, sensor } from "generated/src";

export const garageRemote = () => {
  effect((event)=>{
    switch (event?.data.new_state.state){
      case 'off_press': {
        cover.garage_cover.close()
        break;
      }
      case 'on_press': {
        cover.garage_cover.open()
        break;
      }
      case 'down_press': {
        cover.garage_cover.setPosition( 20)
        break
      }
      case 'up_press': {
        switches.garage_button.turnOn()
        break;
      }
    }
  }, [sensor.garage_remote_action])
};
