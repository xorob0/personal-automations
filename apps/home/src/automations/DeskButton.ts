import { effect } from "@herja/core";
import { sensor, switches } from "generated/src";

export const deskButton = () => {
  effect((event)=>{
    if(event.data.new_state.state === 'single')
      switches.desk_outlet.toggle()
      }, [sensor.office_desk_button_click])
};
