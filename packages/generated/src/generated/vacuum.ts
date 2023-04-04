import {callService, shadowState, Vacuum, VacuumProperties} from "@herja/core"
export type VacuumIDs = "valetudo_downstair_vacuum"
export type VacuumEntities = Record<VacuumIDs, Vacuum>

export const vacuum: Vacuum<VacuumIDs> = {

['valetudo_downstair_vacuum']: {
  entity_id: "vacuum.valetudo_downstair_vacuum",
get entity() { return {state: shadowState["vacuum.valetudo_downstair_vacuum"].state, attributes: shadowState["vacuum.valetudo_downstair_vacuum"].attributes} as VacuumProperties},
turnOn() { return callService("vacuum", "turn_on", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
turnOff() { return callService("vacuum", "turn_off", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
returnToBase() { return callService("vacuum", "return_to_base", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
locate() { return callService("vacuum", "locate", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
start() { return callService("vacuum", "start", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
stop() { return callService("vacuum", "stop", {}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
sendCommand(command:string) { return callService("vacuum", "send_command", {command}, {entity_id: "vacuum.valetudo_downstair_vacuum"})},
setFanSpeed(fan_speed: string) { return callService("vacuum", "set_fan_speed", {fan_speed}, {entity_id: "vacuum.valetudo_downstair_vacuum"})}
},

}
