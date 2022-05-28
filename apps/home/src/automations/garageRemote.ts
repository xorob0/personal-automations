import { effect } from "@herja/core";
import { switches, cover, sensor } from "generated/src";

export const garageRemote = () => {
  effect(()=>{
    console.log(sensor.garage_remote_action.state.state)
    if(sensor.garage_remote_action.state.state === 'off_press'){
      cover.garage_electric_door.close()
    }
    if(sensor.garage_remote_action.state.state === 'on_press'){
      cover.garage_electric_door.open()
    }
    if(sensor.garage_remote_action.state.state === 'down_press'){
      cover.garage_electric_door.setPosition({position: 20})
    }
    if(sensor.garage_remote_action.state.state === 'up_press'){
      switches.garage_button.turn_on()
    }
  }, [sensor.garage_remote_action])
};
