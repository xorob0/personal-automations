import {callService, shadowState, Vacuum, VacuumProperties} from "@herja/core"
export type VacuumIDs = "valetudo"
export type VacuumEntities = Record<VacuumIDs, Vacuum>

export const vacuum: Vacuum<VacuumIDs> = {

['valetudo']: {
  entity_id: "vacuum.valetudo",
get entity() { return {state: shadowState["vacuum.valetudo"].state, attributes: shadowState["vacuum.valetudo"].attributes} as VacuumProperties},
turnOn() { return callService("vacuum", "turn_on", {}, {entity_id: "vacuum.valetudo"})},
turnOff() { return callService("vacuum", "turn_off", {}, {entity_id: "vacuum.valetudo"})},
returnToBase() { return callService("vacuum", "return_to_base", {}, {entity_id: "vacuum.valetudo"})},
locate() { return callService("vacuum", "locate", {}, {entity_id: "vacuum.valetudo"})},
start() { return callService("vacuum", "start", {}, {entity_id: "vacuum.valetudo"})},
stop() { return callService("vacuum", "stop", {}, {entity_id: "vacuum.valetudo"})},
sendCommand(command:string) { return callService("vacuum", "send_command", {command}, {entity_id: "vacuum.valetudo"})},
setFanSpeed(fan_speed: string) { return callService("vacuum", "set_fan_speed", {fan_speed}, {entity_id: "vacuum.valetudo"})}
},

}
