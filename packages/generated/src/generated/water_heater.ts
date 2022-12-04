import {callService, shadowState, WaterHeater, WaterHeaterProperties} from "@herja/core"
export type WaterHeaterIDs = "nibe_133481_40014_47387"
export type WaterHeaterEntities = Record<WaterHeaterIDs, WaterHeater>

export const water_heater: WaterHeater<WaterHeaterIDs> = {

['nibe_133481_40014_47387']: {
  entity_id: "water_heater.nibe_133481_40014_47387",
get entity() { return {state: shadowState["water_heater.nibe_133481_40014_47387"].state, attributes: shadowState["water_heater.nibe_133481_40014_47387"].attributes} as WaterHeaterProperties},
setOperationMode(operation_mode:string) { return callService("water_heater", "set_operation_mode", {operation_mode}, {entity_id: "nibe_133481_40014_47387"})},
setTemperature(temperature: number) { return callService("water_heater", "set_temperature", {temperature}, {entity_id: "nibe_133481_40014_47387"})},
turnOffAwayMode() { return callService("water_heater", "turn_off_away_mode", {}, {entity_id: "nibe_133481_40014_47387"})},
turnOnAwayMode() { return callService("water_heater", "turn_on_away_mode", {}, {entity_id: "nibe_133481_40014_47387"})}
},

}
