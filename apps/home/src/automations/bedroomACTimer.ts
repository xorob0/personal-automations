import { callService, shadowState } from "@herja/core";


export const BedroomACTimer = () => {
  setInterval(() =>{
    const inputDateTime = shadowState['input_datetime.turn_off_ac_at'].state
    const inputBoolean = shadowState['input_boolean.auto_turn_off_ac'].state
    const now = new Date().toTimeString().split(' ')[0]
    if(inputBoolean === "on" && inputDateTime === now){
      callService('climate', 'turn_off', undefined, {entity_id: "climate.bedroom_ac" })
      callService('input_boolean', 'turn_off', undefined, {entity_id: "input_boolean.auto_turn_off_ac" })
    }
  }, 1000)
};
