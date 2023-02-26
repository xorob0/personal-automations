import {callService, shadowState, Remote, RemoteProperties} from "@herja/core"
export type RemoteIDs = "living_room_ir_blaster" | "bedroom_ir_blaster" | "living_room"
export type RemoteEntities = Record<RemoteIDs, Remote>

export const remote: Remote<RemoteIDs> = {

['living_room_ir_blaster']: {
  entity_id: "remote.living_room_ir_blaster",
get entity() { return {state: shadowState["remote.living_room_ir_blaster"].state, attributes: shadowState["remote.living_room_ir_blaster"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.living_room_ir_blaster"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.living_room_ir_blaster"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.living_room_ir_blaster"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.living_room_ir_blaster"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.living_room_ir_blaster"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.living_room_ir_blaster"})}
},

['bedroom_ir_blaster']: {
  entity_id: "remote.bedroom_ir_blaster",
get entity() { return {state: shadowState["remote.bedroom_ir_blaster"].state, attributes: shadowState["remote.bedroom_ir_blaster"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.bedroom_ir_blaster"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.bedroom_ir_blaster"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.bedroom_ir_blaster"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.bedroom_ir_blaster"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.bedroom_ir_blaster"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.bedroom_ir_blaster"})}
},

['living_room']: {
  entity_id: "remote.living_room",
get entity() { return {state: shadowState["remote.living_room"].state, attributes: shadowState["remote.living_room"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.living_room"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.living_room"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.living_room"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.living_room"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.living_room"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.living_room"})}
},

}
