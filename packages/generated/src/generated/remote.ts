import {callService, shadowState, Remote, RemoteProperties} from "@herja/core"
export type RemoteIDs = "living_room_ir_blaster_remote_2" | "bedroom_ir_blaster_remote" | "secondary_room_ir_blaster_remote" | "office_ir_blaster_remote"
export type RemoteEntities = Record<RemoteIDs, Remote>

export const remote: Remote<RemoteIDs> = {

['living_room_ir_blaster_remote_2']: {
  entity_id: "remote.living_room_ir_blaster_remote_2",
get entity() { return {state: shadowState["remote.living_room_ir_blaster_remote_2"].state, attributes: shadowState["remote.living_room_ir_blaster_remote_2"].attributes} as RemoteProperties},
turnOn() { return callService("remote", "turn_on", {}, {entity_id: "remote.living_room_ir_blaster_remote_2"})},
turnOff() { return callService("remote", "turn_off", {}, {entity_id: "remote.living_room_ir_blaster_remote_2"})},
sendCommand(command: string|string[]) { return callService("remote", "send_command", {command}, {entity_id: "remote.living_room_ir_blaster_remote_2"})},
learnCommand(attributes: {command: string, timeout:number}) { return callService("remote", "press", attributes, {entity_id: "remote.living_room_ir_blaster_remote_2"})},
toggle() { return callService("remote", "toggle", {}, {entity_id: "remote.living_room_ir_blaster_remote_2"})},
deleteCommand(command:string) { return callService("remote", "delete_command", {command}, {entity_id: "remote.living_room_ir_blaster_remote_2"})}
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

}
