import { effect } from "@herja/core";
import { light, switches } from "generated/src";

export const wallSwitches = () => {
  effect(()=>{
    if(!switches.hall_dual_switch_l1.state.state.match(/(on|off)/ ))
      return
    light.hall_upstairs.toggle()
  }, [switches.hall_dual_switch_l1])
  effect(()=>{
    if(!switches.hall_dual_switch_l2.state.state.match(/(on|off)/ ))
      return
    light.hall.toggle()
  }, [switches.hall_dual_switch_l2])
  effect(()=>{
    if(!switches.hall_stairs_switch.state.state.match(/(on|off)/ ))
      return
    light.hall.toggle()
  }, [switches.hall_stairs_switch])
  effect(()=>{
    if(!switches.hall_entrance.state.state.match(/(on|off)/ ))
      return
    light.hall.toggle()
  }, [switches.hall_entrance])
  effect(()=>{
    if(!switches.garage_light_switch.state.state.match(/(on|off)/ ))
      return
    light.garage.toggle()
  }, [switches.garage_light_switch])
  effect(()=>{
    if(!switches.bedroom_switch.state.state.match(/(on|off)/ ))
      return
    light.bedroom_lights.toggle({brightness: 65})
  }, [switches.bedroom_switch])
};
