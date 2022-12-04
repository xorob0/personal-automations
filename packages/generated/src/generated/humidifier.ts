import {callService, shadowState, Humidifier, HumidifierProperties} from "@herja/core"
export type HumidifierIDs = "bedroom" | "living_room"
export type HumidifierEntities = Record<HumidifierIDs, Humidifier>

export const humidifier: Humidifier<HumidifierIDs> = {

['bedroom']: {
  entity_id: "humidifier.bedroom",
get entity() { return {state: shadowState["humidifier.bedroom"].state, attributes: shadowState["humidifier.bedroom"].attributes} as HumidifierProperties},
turnOn() { return callService("humidifier", "turn_on", {}, {entity_id: "humidifier.bedroom"})},
turnOff() { return callService("humidifier", "turn_off", {}, {entity_id: "humidifier.bedroom"})}
},

['living_room']: {
  entity_id: "humidifier.living_room",
get entity() { return {state: shadowState["humidifier.living_room"].state, attributes: shadowState["humidifier.living_room"].attributes} as HumidifierProperties},
turnOn() { return callService("humidifier", "turn_on", {}, {entity_id: "humidifier.living_room"})},
turnOff() { return callService("humidifier", "turn_off", {}, {entity_id: "humidifier.living_room"})}
},

}
