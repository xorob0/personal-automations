import {callService, shadowState, Light, LightProperties, LightTurnOnAttributes} from "@herja/core"
export type LightIDs = "bedside_lamp" | "bedroom_secondary_lamp" | "bedroom_secondary_lights" | "bedroom_lights" | "bathroom" | "garage" | "hall_upstairs" | "hall" | "living_room_all" | "dining_room_spots" | "living_room_spots" | "kitchen_spots" | "bedroom_tv_light" | "living_room_tripod" | "bedroom_bed_light_2" | "living_room_light" | "bathroom_spot_1" | "hall_stairs" | "living_room_spot_1" | "kitchen_spot_3" | "garage_car" | "hall_entrance" | "garage_fridge" | "toilet" | "hall_upstairs_spot_1" | "hall_upstairs_spot_2" | "hall_upstairs_spot_3" | "bathroom_spot_2" | "office_light" | "kitchen_spot_2" | "dining_room_spot_1" | "dining_room_spot_2" | "secondary_room_light" | "kitchen_spot_1" | "dining_room_spot_3" | "living_room_spot_2" | "living_room_spot_3" | "garden_switch"
export type LightEntities = Record<LightIDs, Light>

export const light: Light<LightIDs> = {

['bedside_lamp']: {
  entity_id: "light.bedside_lamp",
get entity() { return {state: shadowState["light.bedside_lamp"].state, attributes: shadowState["light.bedside_lamp"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedside_lamp"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedside_lamp"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedside_lamp"})}
},

['bedroom_secondary_lamp']: {
  entity_id: "light.bedroom_secondary_lamp",
get entity() { return {state: shadowState["light.bedroom_secondary_lamp"].state, attributes: shadowState["light.bedroom_secondary_lamp"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedroom_secondary_lamp"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedroom_secondary_lamp"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedroom_secondary_lamp"})}
},

['bedroom_secondary_lights']: {
  entity_id: "light.bedroom_secondary_lights",
get entity() { return {state: shadowState["light.bedroom_secondary_lights"].state, attributes: shadowState["light.bedroom_secondary_lights"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedroom_secondary_lights"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedroom_secondary_lights"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedroom_secondary_lights"})}
},

['bedroom_lights']: {
  entity_id: "light.bedroom_lights",
get entity() { return {state: shadowState["light.bedroom_lights"].state, attributes: shadowState["light.bedroom_lights"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedroom_lights"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedroom_lights"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedroom_lights"})}
},

['bathroom']: {
  entity_id: "light.bathroom",
get entity() { return {state: shadowState["light.bathroom"].state, attributes: shadowState["light.bathroom"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bathroom"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bathroom"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bathroom"})}
},

['garage']: {
  entity_id: "light.garage",
get entity() { return {state: shadowState["light.garage"].state, attributes: shadowState["light.garage"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.garage"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.garage"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.garage"})}
},

['hall_upstairs']: {
  entity_id: "light.hall_upstairs",
get entity() { return {state: shadowState["light.hall_upstairs"].state, attributes: shadowState["light.hall_upstairs"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_upstairs"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_upstairs"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_upstairs"})}
},

['hall']: {
  entity_id: "light.hall",
get entity() { return {state: shadowState["light.hall"].state, attributes: shadowState["light.hall"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall"})}
},

['living_room_all']: {
  entity_id: "light.living_room_all",
get entity() { return {state: shadowState["light.living_room_all"].state, attributes: shadowState["light.living_room_all"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_all"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_all"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_all"})}
},

['dining_room_spots']: {
  entity_id: "light.dining_room_spots",
get entity() { return {state: shadowState["light.dining_room_spots"].state, attributes: shadowState["light.dining_room_spots"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.dining_room_spots"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.dining_room_spots"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.dining_room_spots"})}
},

['living_room_spots']: {
  entity_id: "light.living_room_spots",
get entity() { return {state: shadowState["light.living_room_spots"].state, attributes: shadowState["light.living_room_spots"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_spots"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_spots"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_spots"})}
},

['kitchen_spots']: {
  entity_id: "light.kitchen_spots",
get entity() { return {state: shadowState["light.kitchen_spots"].state, attributes: shadowState["light.kitchen_spots"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.kitchen_spots"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.kitchen_spots"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.kitchen_spots"})}
},

['bedroom_tv_light']: {
  entity_id: "light.bedroom_tv_light",
get entity() { return {state: shadowState["light.bedroom_tv_light"].state, attributes: shadowState["light.bedroom_tv_light"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedroom_tv_light"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedroom_tv_light"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedroom_tv_light"})}
},

['living_room_tripod']: {
  entity_id: "light.living_room_tripod",
get entity() { return {state: shadowState["light.living_room_tripod"].state, attributes: shadowState["light.living_room_tripod"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_tripod"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_tripod"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_tripod"})}
},

['bedroom_bed_light_2']: {
  entity_id: "light.bedroom_bed_light_2",
get entity() { return {state: shadowState["light.bedroom_bed_light_2"].state, attributes: shadowState["light.bedroom_bed_light_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bedroom_bed_light_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bedroom_bed_light_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bedroom_bed_light_2"})}
},

['living_room_light']: {
  entity_id: "light.living_room_light",
get entity() { return {state: shadowState["light.living_room_light"].state, attributes: shadowState["light.living_room_light"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_light"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_light"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_light"})}
},

['bathroom_spot_1']: {
  entity_id: "light.bathroom_spot_1",
get entity() { return {state: shadowState["light.bathroom_spot_1"].state, attributes: shadowState["light.bathroom_spot_1"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bathroom_spot_1"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bathroom_spot_1"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bathroom_spot_1"})}
},

['hall_stairs']: {
  entity_id: "light.hall_stairs",
get entity() { return {state: shadowState["light.hall_stairs"].state, attributes: shadowState["light.hall_stairs"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_stairs"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_stairs"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_stairs"})}
},

['living_room_spot_1']: {
  entity_id: "light.living_room_spot_1",
get entity() { return {state: shadowState["light.living_room_spot_1"].state, attributes: shadowState["light.living_room_spot_1"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_spot_1"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_spot_1"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_spot_1"})}
},

['kitchen_spot_3']: {
  entity_id: "light.kitchen_spot_3",
get entity() { return {state: shadowState["light.kitchen_spot_3"].state, attributes: shadowState["light.kitchen_spot_3"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.kitchen_spot_3"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.kitchen_spot_3"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.kitchen_spot_3"})}
},

['garage_car']: {
  entity_id: "light.garage_car",
get entity() { return {state: shadowState["light.garage_car"].state, attributes: shadowState["light.garage_car"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.garage_car"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.garage_car"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.garage_car"})}
},

['hall_entrance']: {
  entity_id: "light.hall_entrance",
get entity() { return {state: shadowState["light.hall_entrance"].state, attributes: shadowState["light.hall_entrance"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_entrance"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_entrance"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_entrance"})}
},

['garage_fridge']: {
  entity_id: "light.garage_fridge",
get entity() { return {state: shadowState["light.garage_fridge"].state, attributes: shadowState["light.garage_fridge"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.garage_fridge"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.garage_fridge"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.garage_fridge"})}
},

['toilet']: {
  entity_id: "light.toilet",
get entity() { return {state: shadowState["light.toilet"].state, attributes: shadowState["light.toilet"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.toilet"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.toilet"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.toilet"})}
},

['hall_upstairs_spot_1']: {
  entity_id: "light.hall_upstairs_spot_1",
get entity() { return {state: shadowState["light.hall_upstairs_spot_1"].state, attributes: shadowState["light.hall_upstairs_spot_1"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_upstairs_spot_1"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_upstairs_spot_1"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_upstairs_spot_1"})}
},

['hall_upstairs_spot_2']: {
  entity_id: "light.hall_upstairs_spot_2",
get entity() { return {state: shadowState["light.hall_upstairs_spot_2"].state, attributes: shadowState["light.hall_upstairs_spot_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_upstairs_spot_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_upstairs_spot_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_upstairs_spot_2"})}
},

['hall_upstairs_spot_3']: {
  entity_id: "light.hall_upstairs_spot_3",
get entity() { return {state: shadowState["light.hall_upstairs_spot_3"].state, attributes: shadowState["light.hall_upstairs_spot_3"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.hall_upstairs_spot_3"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.hall_upstairs_spot_3"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.hall_upstairs_spot_3"})}
},

['bathroom_spot_2']: {
  entity_id: "light.bathroom_spot_2",
get entity() { return {state: shadowState["light.bathroom_spot_2"].state, attributes: shadowState["light.bathroom_spot_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.bathroom_spot_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.bathroom_spot_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.bathroom_spot_2"})}
},

['office_light']: {
  entity_id: "light.office_light",
get entity() { return {state: shadowState["light.office_light"].state, attributes: shadowState["light.office_light"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.office_light"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.office_light"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.office_light"})}
},

['kitchen_spot_2']: {
  entity_id: "light.kitchen_spot_2",
get entity() { return {state: shadowState["light.kitchen_spot_2"].state, attributes: shadowState["light.kitchen_spot_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.kitchen_spot_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.kitchen_spot_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.kitchen_spot_2"})}
},

['dining_room_spot_1']: {
  entity_id: "light.dining_room_spot_1",
get entity() { return {state: shadowState["light.dining_room_spot_1"].state, attributes: shadowState["light.dining_room_spot_1"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.dining_room_spot_1"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.dining_room_spot_1"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.dining_room_spot_1"})}
},

['dining_room_spot_2']: {
  entity_id: "light.dining_room_spot_2",
get entity() { return {state: shadowState["light.dining_room_spot_2"].state, attributes: shadowState["light.dining_room_spot_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.dining_room_spot_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.dining_room_spot_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.dining_room_spot_2"})}
},

['secondary_room_light']: {
  entity_id: "light.secondary_room_light",
get entity() { return {state: shadowState["light.secondary_room_light"].state, attributes: shadowState["light.secondary_room_light"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.secondary_room_light"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.secondary_room_light"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.secondary_room_light"})}
},

['kitchen_spot_1']: {
  entity_id: "light.kitchen_spot_1",
get entity() { return {state: shadowState["light.kitchen_spot_1"].state, attributes: shadowState["light.kitchen_spot_1"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.kitchen_spot_1"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.kitchen_spot_1"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.kitchen_spot_1"})}
},

['dining_room_spot_3']: {
  entity_id: "light.dining_room_spot_3",
get entity() { return {state: shadowState["light.dining_room_spot_3"].state, attributes: shadowState["light.dining_room_spot_3"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.dining_room_spot_3"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.dining_room_spot_3"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.dining_room_spot_3"})}
},

['living_room_spot_2']: {
  entity_id: "light.living_room_spot_2",
get entity() { return {state: shadowState["light.living_room_spot_2"].state, attributes: shadowState["light.living_room_spot_2"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_spot_2"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_spot_2"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_spot_2"})}
},

['living_room_spot_3']: {
  entity_id: "light.living_room_spot_3",
get entity() { return {state: shadowState["light.living_room_spot_3"].state, attributes: shadowState["light.living_room_spot_3"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.living_room_spot_3"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.living_room_spot_3"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.living_room_spot_3"})}
},

['garden_switch']: {
  entity_id: "light.garden_switch",
get entity() { return {state: shadowState["light.garden_switch"].state, attributes: shadowState["light.garden_switch"].attributes} as LightProperties},
turnOn(attributes?: LightTurnOnAttributes) { return callService("light", "turn_on", attributes || {}, {entity_id: "light.garden_switch"})},
turnOff() { return callService("light", "turn_off", {}, {entity_id: "light.garden_switch"})},
toggle(attributes?: LightTurnOnAttributes) { return callService("light", "toggle", attributes || {}, {entity_id: "light.garden_switch"})}
},

}
