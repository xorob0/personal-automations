import {callService, shadowState, Remote, RemoteProperties} from "@herja/core"
export type RemoteIDs = "office_ir_blaster_remote" | "secondary_room_ir_blaster_remote" | "bedroom_ir_blaster_remote" | "living_room_ir_blaster_remote" | "living_room"
export type RemoteEntities = Record<RemoteIDs, Remote>

export const remote: Remote<RemoteIDs> = {

['office_ir_blaster_remote']: {
  entity_id: "remote.office_ir_blaster_remote",
get entity() { return {state: shadowState["remote.office_ir_blaster_remote"].state, attributes: shadowState["remote.office_ir_blaster_remote"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.office_ir_blaster_remote"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.office_ir_blaster_remote"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.office_ir_blaster_remote"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.office_ir_blaster_remote"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.office_ir_blaster_remote"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.office_ir_blaster_remote"})}
},

['secondary_room_ir_blaster_remote']: {
  entity_id: "remote.secondary_room_ir_blaster_remote",
get entity() { return {state: shadowState["remote.secondary_room_ir_blaster_remote"].state, attributes: shadowState["remote.secondary_room_ir_blaster_remote"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.secondary_room_ir_blaster_remote"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.secondary_room_ir_blaster_remote"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.secondary_room_ir_blaster_remote"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.secondary_room_ir_blaster_remote"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.secondary_room_ir_blaster_remote"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.secondary_room_ir_blaster_remote"})}
},

['bedroom_ir_blaster_remote']: {
  entity_id: "remote.bedroom_ir_blaster_remote",
get entity() { return {state: shadowState["remote.bedroom_ir_blaster_remote"].state, attributes: shadowState["remote.bedroom_ir_blaster_remote"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.bedroom_ir_blaster_remote"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.bedroom_ir_blaster_remote"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.bedroom_ir_blaster_remote"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.bedroom_ir_blaster_remote"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.bedroom_ir_blaster_remote"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.bedroom_ir_blaster_remote"})}
},

['living_room_ir_blaster_remote']: {
  entity_id: "remote.living_room_ir_blaster_remote",
get entity() { return {state: shadowState["remote.living_room_ir_blaster_remote"].state, attributes: shadowState["remote.living_room_ir_blaster_remote"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.living_room_ir_blaster_remote"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.living_room_ir_blaster_remote"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.living_room_ir_blaster_remote"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.living_room_ir_blaster_remote"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.living_room_ir_blaster_remote"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.living_room_ir_blaster_remote"})}
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
