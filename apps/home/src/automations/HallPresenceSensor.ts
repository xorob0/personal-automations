import { effect } from "@herja/core";
import { alarm_control_panel, binary_sensor, light, sun } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;
export const hallPresenceSensor = () => {
  effect((event)=>{
    if(event?.data.new_state.state === 'on' && alarm_control_panel.alarmo.isDisarmed() && sun.sun.isBelowHorizon()) {
      light.hall.turnOn()

      clearTimeout(timeoutID as number|undefined);
      timeoutID = setTimeout(() => {
        light.hall.turnOff()
      },2 * 60 * 1000)
    }
  }, [binary_sensor.hall_motion_sensor_occupancy, binary_sensor.garage_door_contact, binary_sensor.entrance_door_contact])
};
