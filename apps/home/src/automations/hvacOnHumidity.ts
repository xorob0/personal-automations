import { effect } from "@herja/core";
import { sensor} from "generated/src";
import { fan } from "generated/src/generated/fan";

let showerOn = false;
let valueBeforeShower = 0;

export const hvacOnHumidity = () => {
  effect((event)=>{
    if(parseFloat(event?.data.new_state.state || '') > 65){
      valueBeforeShower = fan.afzuiging_badkamer.entity.attributes.percentage
      fan.afzuiging_badkamer.setSpeedPercentage?.(100)
      showerOn = true
    }
    else if(showerOn && parseFloat(event?.data.new_state.state || '') < 55){
      fan.afzuiging_badkamer.setSpeedPercentage?.(valueBeforeShower)
      showerOn = false
    }
  }, [sensor["0xa4c1385c18410b5b_humidity"]])

  effect(()=>{
   showerOn = false
   fan.afzuiging_badkamer.setSpeedPercentage?.(0)
  }, ["0 4 * * *"])
};
