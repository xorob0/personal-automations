import {callService, shadowState, Humidifier, HumidifierProperties} from "@herja/core"
export type HumidifierIDs = "bedroom_humidifier" | "living_room_humidifier"
export type HumidifierEntities = Record<HumidifierIDs, Humidifier>

export const humidifier: Humidifier<HumidifierIDs> = {

['bedroom_humidifier']: {
  entity_id: "humidifier.bedroom_humidifier",
get entity() { return {state: shadowState["humidifier.bedroom_humidifier"].state, attributes: shadowState["humidifier.bedroom_humidifier"].attributes} as HumidifierProperties},
turnOn() { return callService("humidifier", "turn_on", {}, {entity_id: "humidifier.bedroom_humidifier"})},
turnOff() { return callService("humidifier", "turn_off", {}, {entity_id: "humidifier.bedroom_humidifier"})}
},

['living_room_humidifier']: {
  entity_id: "humidifier.living_room_humidifier",
get entity() { return {state: shadowState["humidifier.living_room_humidifier"].state, attributes: shadowState["humidifier.living_room_humidifier"].attributes} as HumidifierProperties},
turnOn() { return callService("humidifier", "turn_on", {}, {entity_id: "humidifier.living_room_humidifier"})},
turnOff() { return callService("humidifier", "turn_off", {}, {entity_id: "humidifier.living_room_humidifier"})}
},

}
