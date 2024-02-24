import { effect } from "@herja/core";
import {light, sensor, switches} from "generated/src";

export const wallSwitches = () => {
  effect(()=>{
    if(switches.hall_dual_switch_l1.entity.state != null )
      light.hall_upstairs.toggle()
  }, [switches.hall_dual_switch_l1])
  effect(()=>{
    if(switches.hall_dual_switch_l2.entity.state != null)
      light.hall.toggle()
  }, [switches.hall_dual_switch_l2])
  effect(()=>{
    if(switches.hall_stairs_switch.entity.state != null)
      light.hall.toggle()
  }, [switches.hall_stairs_switch])
  effect(()=>{
    if(switches.hall_entrance.entity.state != null)
      light.hall.toggle()
  }, [switches.hall_entrance])
  effect(()=>{
    if(switches.garage_light_switch.entity.state != null)
    light.garage.toggle()
  }, [switches.garage_light_switch])
  effect(()=>{
    if(switches.bedroom_switch.entity.state != null)
      light.bedroom_lights.toggle({brightness: 65})
  }, [switches.bedroom_switch])
  effect(()=>{
    if(sensor.office_switch_action.entity.state != null)
      light.office_light.toggle()
  }, [sensor.office_switch_action])
  effect(()=>{
    if(sensor.bathroom_main_switch_action.entity.state != null)
      light.bathroom_lights.toggle()
  }, [sensor.bathroom_main_switch_action])
};
