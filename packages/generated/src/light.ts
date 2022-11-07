import {callService, shadowState, Light} from "@herja/core"
    export type LightIDs = "bedside_lamp" | "garden" | "bedroom_secondary_lamp" | "bedroom_lights" | "bedroom_secondary_lights" | "garage" | "hall_upstairs" | "hall" | "living_room_all" | "dining_room_spots" | "living_room_spots" | "kitchen_spots" | "0x0017880109bde997" | "0xb4e3f9fffebc2a4e" | "0xb4e3f9fffe77c636" | "bathroom_spot_1" | "hall_stairs" | "living_room_spot_1" | "kitchen_spot_3" | "garage_car" | "hall_entrance" | "garage_fridge" | "toilet" | "hall_upstairs_spot_1" | "hall_upstairs_spot_2" | "hall_upstairs_spot_3" | "bathroom_spot_2" | "bedroom_bed_light" | "kitchen_spot_2" | "dining_room_spot_1" | "dining_room_spot_2" | "living_room_light" | "kitchen_spot_1" | "dining_room_spot_3" | "living_room_spot_2" | "living_room_spot_3" | "bathroom" | "living_room_tripod"
export const light: Light<LightIDs> = {

["bedside_lamp"]: {
entity_id: "light.bedside_lamp",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedside_lamp"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedside_lamp"}),
isOn: () => shadowState["light.bedside_lamp"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedside_lamp"}),
get state() { return shadowState["light.bedside_lamp"]},
},

["garden"]: {
entity_id: "light.garden",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garden"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garden"}),
isOn: () => shadowState["light.garden"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garden"}),
get state() { return shadowState["light.garden"]},
},

["bedroom_secondary_lamp"]: {
entity_id: "light.bedroom_secondary_lamp",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_secondary_lamp"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_secondary_lamp"}),
isOn: () => shadowState["light.bedroom_secondary_lamp"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_secondary_lamp"}),
get state() { return shadowState["light.bedroom_secondary_lamp"]},
},

["bedroom_lights"]: {
entity_id: "light.bedroom_lights",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_lights"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_lights"}),
isOn: () => shadowState["light.bedroom_lights"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_lights"}),
get state() { return shadowState["light.bedroom_lights"]},
},

["bedroom_secondary_lights"]: {
entity_id: "light.bedroom_secondary_lights",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
isOn: () => shadowState["light.bedroom_secondary_lights"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
get state() { return shadowState["light.bedroom_secondary_lights"]},
},

["garage"]: {
entity_id: "light.garage",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage"}),
isOn: () => shadowState["light.garage"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage"}),
get state() { return shadowState["light.garage"]},
},

["hall_upstairs"]: {
entity_id: "light.hall_upstairs",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs"}),
isOn: () => shadowState["light.hall_upstairs"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs"}),
get state() { return shadowState["light.hall_upstairs"]},
},

["hall"]: {
entity_id: "light.hall",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall"}),
isOn: () => shadowState["light.hall"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall"}),
get state() { return shadowState["light.hall"]},
},

["living_room_all"]: {
entity_id: "light.living_room_all",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_all"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_all"}),
isOn: () => shadowState["light.living_room_all"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_all"}),
get state() { return shadowState["light.living_room_all"]},
},

["dining_room_spots"]: {
entity_id: "light.dining_room_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spots"}),
isOn: () => shadowState["light.dining_room_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spots"}),
get state() { return shadowState["light.dining_room_spots"]},
},

["living_room_spots"]: {
entity_id: "light.living_room_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spots"}),
isOn: () => shadowState["light.living_room_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spots"}),
get state() { return shadowState["light.living_room_spots"]},
},

["kitchen_spots"]: {
entity_id: "light.kitchen_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spots"}),
isOn: () => shadowState["light.kitchen_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spots"}),
get state() { return shadowState["light.kitchen_spots"]},
},

["0x0017880109bde997"]: {
entity_id: "light.0x0017880109bde997",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.0x0017880109bde997"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.0x0017880109bde997"}),
isOn: () => shadowState["light.0x0017880109bde997"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.0x0017880109bde997"}),
get state() { return shadowState["light.0x0017880109bde997"]},
},

["0xb4e3f9fffebc2a4e"]: {
entity_id: "light.0xb4e3f9fffebc2a4e",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.0xb4e3f9fffebc2a4e"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.0xb4e3f9fffebc2a4e"}),
isOn: () => shadowState["light.0xb4e3f9fffebc2a4e"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.0xb4e3f9fffebc2a4e"}),
get state() { return shadowState["light.0xb4e3f9fffebc2a4e"]},
},

["0xb4e3f9fffe77c636"]: {
entity_id: "light.0xb4e3f9fffe77c636",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.0xb4e3f9fffe77c636"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.0xb4e3f9fffe77c636"}),
isOn: () => shadowState["light.0xb4e3f9fffe77c636"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.0xb4e3f9fffe77c636"}),
get state() { return shadowState["light.0xb4e3f9fffe77c636"]},
},

["bathroom_spot_1"]: {
entity_id: "light.bathroom_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bathroom_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bathroom_spot_1"}),
isOn: () => shadowState["light.bathroom_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bathroom_spot_1"}),
get state() { return shadowState["light.bathroom_spot_1"]},
},

["hall_stairs"]: {
entity_id: "light.hall_stairs",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_stairs"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_stairs"}),
isOn: () => shadowState["light.hall_stairs"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_stairs"}),
get state() { return shadowState["light.hall_stairs"]},
},

["living_room_spot_1"]: {
entity_id: "light.living_room_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_1"}),
isOn: () => shadowState["light.living_room_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_1"}),
get state() { return shadowState["light.living_room_spot_1"]},
},

["kitchen_spot_3"]: {
entity_id: "light.kitchen_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_3"}),
isOn: () => shadowState["light.kitchen_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_3"}),
get state() { return shadowState["light.kitchen_spot_3"]},
},

["garage_car"]: {
entity_id: "light.garage_car",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage_car"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage_car"}),
isOn: () => shadowState["light.garage_car"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage_car"}),
get state() { return shadowState["light.garage_car"]},
},

["hall_entrance"]: {
entity_id: "light.hall_entrance",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_entrance"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_entrance"}),
isOn: () => shadowState["light.hall_entrance"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_entrance"}),
get state() { return shadowState["light.hall_entrance"]},
},

["garage_fridge"]: {
entity_id: "light.garage_fridge",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage_fridge"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage_fridge"}),
isOn: () => shadowState["light.garage_fridge"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage_fridge"}),
get state() { return shadowState["light.garage_fridge"]},
},

["toilet"]: {
entity_id: "light.toilet",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.toilet"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.toilet"}),
isOn: () => shadowState["light.toilet"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.toilet"}),
get state() { return shadowState["light.toilet"]},
},

["hall_upstairs_spot_1"]: {
entity_id: "light.hall_upstairs_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
isOn: () => shadowState["light.hall_upstairs_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
get state() { return shadowState["light.hall_upstairs_spot_1"]},
},

["hall_upstairs_spot_2"]: {
entity_id: "light.hall_upstairs_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
isOn: () => shadowState["light.hall_upstairs_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
get state() { return shadowState["light.hall_upstairs_spot_2"]},
},

["hall_upstairs_spot_3"]: {
entity_id: "light.hall_upstairs_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
isOn: () => shadowState["light.hall_upstairs_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
get state() { return shadowState["light.hall_upstairs_spot_3"]},
},

["bathroom_spot_2"]: {
entity_id: "light.bathroom_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bathroom_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bathroom_spot_2"}),
isOn: () => shadowState["light.bathroom_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bathroom_spot_2"}),
get state() { return shadowState["light.bathroom_spot_2"]},
},

["bedroom_bed_light"]: {
entity_id: "light.bedroom_bed_light",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_bed_light"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_bed_light"}),
isOn: () => shadowState["light.bedroom_bed_light"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_bed_light"}),
get state() { return shadowState["light.bedroom_bed_light"]},
},

["kitchen_spot_2"]: {
entity_id: "light.kitchen_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_2"}),
isOn: () => shadowState["light.kitchen_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_2"}),
get state() { return shadowState["light.kitchen_spot_2"]},
},

["dining_room_spot_1"]: {
entity_id: "light.dining_room_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_1"}),
isOn: () => shadowState["light.dining_room_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_1"}),
get state() { return shadowState["light.dining_room_spot_1"]},
},

["dining_room_spot_2"]: {
entity_id: "light.dining_room_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_2"}),
isOn: () => shadowState["light.dining_room_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_2"}),
get state() { return shadowState["light.dining_room_spot_2"]},
},

["living_room_light"]: {
entity_id: "light.living_room_light",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_light"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_light"}),
isOn: () => shadowState["light.living_room_light"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_light"}),
get state() { return shadowState["light.living_room_light"]},
},

["kitchen_spot_1"]: {
entity_id: "light.kitchen_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_1"}),
isOn: () => shadowState["light.kitchen_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_1"}),
get state() { return shadowState["light.kitchen_spot_1"]},
},

["dining_room_spot_3"]: {
entity_id: "light.dining_room_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_3"}),
isOn: () => shadowState["light.dining_room_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_3"}),
get state() { return shadowState["light.dining_room_spot_3"]},
},

["living_room_spot_2"]: {
entity_id: "light.living_room_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_2"}),
isOn: () => shadowState["light.living_room_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_2"}),
get state() { return shadowState["light.living_room_spot_2"]},
},

["living_room_spot_3"]: {
entity_id: "light.living_room_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_3"}),
isOn: () => shadowState["light.living_room_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_3"}),
get state() { return shadowState["light.living_room_spot_3"]},
},

["bathroom"]: {
entity_id: "light.bathroom",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bathroom"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bathroom"}),
isOn: () => shadowState["light.bathroom"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bathroom"}),
get state() { return shadowState["light.bathroom"]},
},

["living_room_tripod"]: {
entity_id: "light.living_room_tripod",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_tripod"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_tripod"}),
isOn: () => shadowState["light.living_room_tripod"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_tripod"}),
get state() { return shadowState["light.living_room_tripod"]},
},
}
