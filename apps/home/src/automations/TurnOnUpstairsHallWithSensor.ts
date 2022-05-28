import {  effect} from "@herja/core";
import { alarm_control_panel, binary_sensor, light } from "generated/src";

export const TurnOnUpstairsHallWithSensor = () => {
  effect((event)=>{
    if(event.data.new_state.state && alarm_control_panel.alarmo.isDisarmed())
    {
      light.hall_upstairs.turn_on()
      setTimeout(() => {
        light.hall_upstairs.turn_off()
      },2 * 60 * 1000)
    }
  }, [binary_sensor.stairs_motion_sensor_occupancy])
};