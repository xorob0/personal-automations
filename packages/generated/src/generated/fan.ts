import {callService, shadowState, Fan, FanProperties, FanStateMapper} from "@herja/core"
export type FanIDs = "afzuiging_badkamer"
export type FanEntities = Record<FanIDs, Fan>

export const fan: Fan<FanIDs> = {

['afzuiging_badkamer']: {
  entity_id: "fan.afzuiging_badkamer",
get entity() { return {
  state: FanStateMapper[shadowState["fan.afzuiging_badkamer"].state as string],
  attributes: shadowState["fan.afzuiging_badkamer"].attributes
} as unknown as FanProperties},
setDirection(direction:string) { return callService("fan", "set_direction", {direction}, {entity_id: "fan.afzuiging_badkamer"})},
setPresetMode(preset_mode:string) { return callService("fan", "set_preset_mode", {preset_mode}, {entity_id: "fan.afzuiging_badkamer"})},
setSpeedPercentage(percentage:number) { return callService("fan", "set_percentage", {percentage:percentage.toString()}, {entity_id: "fan.afzuiging_badkamer"})},
turnOn() { return callService("fan", "turn_on", {}, {entity_id: "fan.afzuiging_badkamer"})},
turnOff() { return callService("fan", "turn_off", {}, {entity_id: "fan.afzuiging_badkamer"})},
setOscillating(oscillating:boolean) { return callService("fan", "turn_off", {oscillating}, {entity_id: "fan.afzuiging_badkamer"})}
},

}
