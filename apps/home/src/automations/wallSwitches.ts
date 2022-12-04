import { effect } from "@herja/core";
import { light, switches } from "generated/src";

export const wallSwitches = () => {
  effect(()=>{
    if(!switches.hall_dual_switch_l1.entity.state != null )
      return
    light.hall_upstairs.toggle()
  }, [switches.hall_dual_switch_l1])
  effect(()=>{
    if(!switches.hall_dual_switch_l2.entity.state != null)
      return
    light.hall.toggle()
  }, [switches.hall_dual_switch_l2])
  effect(()=>{
    if(!switches.hall_stairs_switch.entity.state != null)
      return
    light.hall.toggle()
  }, [switches.hall_stairs_switch])
  effect(()=>{
    if(!switches.hall_entrance.entity.state != null)
      return
    light.hall.toggle()
  }, [switches.hall_entrance])
  effect(()=>{
    if(!switches.garage_light_switch.entity.state != null)
      return
    light.garage.toggle()
  }, [switches.garage_light_switch])
  effect(()=>{
    if(!switches.bedroom_switch.entity.state != null)
      return
    light.bedroom_lights.toggle({brightness: 65})
  }, [switches.bedroom_switch])
};
