import {  effect} from "@herja/core";
import { alarm_control_panel, binary_sensor, light, sun } from "generated/src";


let timeoutID: NodeJS.Timer|undefined = undefined;
export const TurnOnUpstairsHallWithSensor = () => {
  effect((event)=>{
    if(event?.data.new_state.state && alarm_control_panel.alarmo.isDisarmed() && sun.sun.isBelowHorizon()){
      light.hall_upstairs.turnOn()

      clearTimeout(timeoutID as number|undefined);
      timeoutID = setTimeout(() => {
        light.hall_upstairs.turnOff()
      },2 * 60 * 1000)
    }
  }, [binary_sensor.stairs_motion_sensor_occupancy])
};
