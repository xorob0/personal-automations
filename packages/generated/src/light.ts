import {callService, shadowState, Light} from "@herja/core"
    export type LightIDs = "bedside_lamp" | "garden" | "bedroom_secondary_lamp" | "bedroom_lights" | "living_room_spot_3" | "living_room_spot_2" | "dining_room_spot_3" | "kitchen_spot_1" | "living_room_light" | "dining_room_spot_2" | "dining_room_spot_1" | "kitchen_spot_2" | "bedroom_bed_light" | "bathroom_spot_2" | "hall_upstairs_spot_3" | "hall_upstairs_spot_2" | "hall_upstairs_spot_1" | "toilet" | "garage_fridge" | "hall_entrance" | "garage_car" | "kitchen_spot_3" | "living_room_spot_1" | "hall_stairs" | "bathroom_spot_1" | "kitchen_spots" | "living_room_spots" | "dining_room_spots" | "living_room_all" | "hall" | "hall_upstairs" | "garage" | "bathroom" | "living_room_tripod" | "b8030a1c_3ebf007c" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "dc3b1fc5_4961a7e0" | "8ef2ec82_947cc02d" | "da2cf25e_bb796133" | "ccbd4341_01cc53c2" | "00e9e4f0_03e3732b" | "2bd1a2c0_2263df99" | "fde49bad_fb722687" | "7999b6c0_f93fbc37" | "50a79e21_74701770" | "187a9779_66735846" | "a788d83b_085169a8" | "21adb4aa_66a6b9a2" | "3f2bb951_563ca5f2" | "1022b84e_7cd988a8" | "feacdc57_b8eef177" | "f262e3a5_84b84bbf" | "bedroom_secondary_lights"
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

["living_room_spot_3"]: {
entity_id: "light.living_room_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_3"}),
isOn: () => shadowState["light.living_room_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_3"}),
get state() { return shadowState["light.living_room_spot_3"]},
},

["living_room_spot_2"]: {
entity_id: "light.living_room_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_2"}),
isOn: () => shadowState["light.living_room_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_2"}),
get state() { return shadowState["light.living_room_spot_2"]},
},

["dining_room_spot_3"]: {
entity_id: "light.dining_room_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_3"}),
isOn: () => shadowState["light.dining_room_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_3"}),
get state() { return shadowState["light.dining_room_spot_3"]},
},

["kitchen_spot_1"]: {
entity_id: "light.kitchen_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_1"}),
isOn: () => shadowState["light.kitchen_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_1"}),
get state() { return shadowState["light.kitchen_spot_1"]},
},

["living_room_light"]: {
entity_id: "light.living_room_light",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_light"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_light"}),
isOn: () => shadowState["light.living_room_light"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_light"}),
get state() { return shadowState["light.living_room_light"]},
},

["dining_room_spot_2"]: {
entity_id: "light.dining_room_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_2"}),
isOn: () => shadowState["light.dining_room_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_2"}),
get state() { return shadowState["light.dining_room_spot_2"]},
},

["dining_room_spot_1"]: {
entity_id: "light.dining_room_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spot_1"}),
isOn: () => shadowState["light.dining_room_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spot_1"}),
get state() { return shadowState["light.dining_room_spot_1"]},
},

["kitchen_spot_2"]: {
entity_id: "light.kitchen_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_2"}),
isOn: () => shadowState["light.kitchen_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_2"}),
get state() { return shadowState["light.kitchen_spot_2"]},
},

["bedroom_bed_light"]: {
entity_id: "light.bedroom_bed_light",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_bed_light"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_bed_light"}),
isOn: () => shadowState["light.bedroom_bed_light"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_bed_light"}),
get state() { return shadowState["light.bedroom_bed_light"]},
},

["bathroom_spot_2"]: {
entity_id: "light.bathroom_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bathroom_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bathroom_spot_2"}),
isOn: () => shadowState["light.bathroom_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bathroom_spot_2"}),
get state() { return shadowState["light.bathroom_spot_2"]},
},

["hall_upstairs_spot_3"]: {
entity_id: "light.hall_upstairs_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
isOn: () => shadowState["light.hall_upstairs_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_3"}),
get state() { return shadowState["light.hall_upstairs_spot_3"]},
},

["hall_upstairs_spot_2"]: {
entity_id: "light.hall_upstairs_spot_2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
isOn: () => shadowState["light.hall_upstairs_spot_2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_2"}),
get state() { return shadowState["light.hall_upstairs_spot_2"]},
},

["hall_upstairs_spot_1"]: {
entity_id: "light.hall_upstairs_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
isOn: () => shadowState["light.hall_upstairs_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs_spot_1"}),
get state() { return shadowState["light.hall_upstairs_spot_1"]},
},

["toilet"]: {
entity_id: "light.toilet",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.toilet"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.toilet"}),
isOn: () => shadowState["light.toilet"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.toilet"}),
get state() { return shadowState["light.toilet"]},
},

["garage_fridge"]: {
entity_id: "light.garage_fridge",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage_fridge"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage_fridge"}),
isOn: () => shadowState["light.garage_fridge"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage_fridge"}),
get state() { return shadowState["light.garage_fridge"]},
},

["hall_entrance"]: {
entity_id: "light.hall_entrance",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_entrance"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_entrance"}),
isOn: () => shadowState["light.hall_entrance"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_entrance"}),
get state() { return shadowState["light.hall_entrance"]},
},

["garage_car"]: {
entity_id: "light.garage_car",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage_car"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage_car"}),
isOn: () => shadowState["light.garage_car"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage_car"}),
get state() { return shadowState["light.garage_car"]},
},

["kitchen_spot_3"]: {
entity_id: "light.kitchen_spot_3",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spot_3"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spot_3"}),
isOn: () => shadowState["light.kitchen_spot_3"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spot_3"}),
get state() { return shadowState["light.kitchen_spot_3"]},
},

["living_room_spot_1"]: {
entity_id: "light.living_room_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spot_1"}),
isOn: () => shadowState["light.living_room_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spot_1"}),
get state() { return shadowState["light.living_room_spot_1"]},
},

["hall_stairs"]: {
entity_id: "light.hall_stairs",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_stairs"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_stairs"}),
isOn: () => shadowState["light.hall_stairs"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_stairs"}),
get state() { return shadowState["light.hall_stairs"]},
},

["bathroom_spot_1"]: {
entity_id: "light.bathroom_spot_1",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bathroom_spot_1"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bathroom_spot_1"}),
isOn: () => shadowState["light.bathroom_spot_1"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bathroom_spot_1"}),
get state() { return shadowState["light.bathroom_spot_1"]},
},

["kitchen_spots"]: {
entity_id: "light.kitchen_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.kitchen_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.kitchen_spots"}),
isOn: () => shadowState["light.kitchen_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.kitchen_spots"}),
get state() { return shadowState["light.kitchen_spots"]},
},

["living_room_spots"]: {
entity_id: "light.living_room_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_spots"}),
isOn: () => shadowState["light.living_room_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_spots"}),
get state() { return shadowState["light.living_room_spots"]},
},

["dining_room_spots"]: {
entity_id: "light.dining_room_spots",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dining_room_spots"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dining_room_spots"}),
isOn: () => shadowState["light.dining_room_spots"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dining_room_spots"}),
get state() { return shadowState["light.dining_room_spots"]},
},

["living_room_all"]: {
entity_id: "light.living_room_all",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.living_room_all"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.living_room_all"}),
isOn: () => shadowState["light.living_room_all"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.living_room_all"}),
get state() { return shadowState["light.living_room_all"]},
},

["hall"]: {
entity_id: "light.hall",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall"}),
isOn: () => shadowState["light.hall"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall"}),
get state() { return shadowState["light.hall"]},
},

["hall_upstairs"]: {
entity_id: "light.hall_upstairs",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.hall_upstairs"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.hall_upstairs"}),
isOn: () => shadowState["light.hall_upstairs"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.hall_upstairs"}),
get state() { return shadowState["light.hall_upstairs"]},
},

["garage"]: {
entity_id: "light.garage",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.garage"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.garage"}),
isOn: () => shadowState["light.garage"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.garage"}),
get state() { return shadowState["light.garage"]},
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

["b8030a1c_3ebf007c"]: {
entity_id: "light.b8030a1c_3ebf007c",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.b8030a1c_3ebf007c"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.b8030a1c_3ebf007c"}),
isOn: () => shadowState["light.b8030a1c_3ebf007c"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.b8030a1c_3ebf007c"}),
get state() { return shadowState["light.b8030a1c_3ebf007c"]},
},

["ebbff7dd_e82b404f"]: {
entity_id: "light.ebbff7dd_e82b404f",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.ebbff7dd_e82b404f"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.ebbff7dd_e82b404f"}),
isOn: () => shadowState["light.ebbff7dd_e82b404f"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.ebbff7dd_e82b404f"}),
get state() { return shadowState["light.ebbff7dd_e82b404f"]},
},

["aadf3129_ecd1ece2"]: {
entity_id: "light.aadf3129_ecd1ece2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.aadf3129_ecd1ece2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.aadf3129_ecd1ece2"}),
isOn: () => shadowState["light.aadf3129_ecd1ece2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.aadf3129_ecd1ece2"}),
get state() { return shadowState["light.aadf3129_ecd1ece2"]},
},

["dc3b1fc5_4961a7e0"]: {
entity_id: "light.dc3b1fc5_4961a7e0",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.dc3b1fc5_4961a7e0"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.dc3b1fc5_4961a7e0"}),
isOn: () => shadowState["light.dc3b1fc5_4961a7e0"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.dc3b1fc5_4961a7e0"}),
get state() { return shadowState["light.dc3b1fc5_4961a7e0"]},
},

["8ef2ec82_947cc02d"]: {
entity_id: "light.8ef2ec82_947cc02d",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.8ef2ec82_947cc02d"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.8ef2ec82_947cc02d"}),
isOn: () => shadowState["light.8ef2ec82_947cc02d"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.8ef2ec82_947cc02d"}),
get state() { return shadowState["light.8ef2ec82_947cc02d"]},
},

["da2cf25e_bb796133"]: {
entity_id: "light.da2cf25e_bb796133",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.da2cf25e_bb796133"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.da2cf25e_bb796133"}),
isOn: () => shadowState["light.da2cf25e_bb796133"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.da2cf25e_bb796133"}),
get state() { return shadowState["light.da2cf25e_bb796133"]},
},

["ccbd4341_01cc53c2"]: {
entity_id: "light.ccbd4341_01cc53c2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.ccbd4341_01cc53c2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.ccbd4341_01cc53c2"}),
isOn: () => shadowState["light.ccbd4341_01cc53c2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.ccbd4341_01cc53c2"}),
get state() { return shadowState["light.ccbd4341_01cc53c2"]},
},

["00e9e4f0_03e3732b"]: {
entity_id: "light.00e9e4f0_03e3732b",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.00e9e4f0_03e3732b"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.00e9e4f0_03e3732b"}),
isOn: () => shadowState["light.00e9e4f0_03e3732b"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.00e9e4f0_03e3732b"}),
get state() { return shadowState["light.00e9e4f0_03e3732b"]},
},

["2bd1a2c0_2263df99"]: {
entity_id: "light.2bd1a2c0_2263df99",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.2bd1a2c0_2263df99"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.2bd1a2c0_2263df99"}),
isOn: () => shadowState["light.2bd1a2c0_2263df99"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.2bd1a2c0_2263df99"}),
get state() { return shadowState["light.2bd1a2c0_2263df99"]},
},

["fde49bad_fb722687"]: {
entity_id: "light.fde49bad_fb722687",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.fde49bad_fb722687"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.fde49bad_fb722687"}),
isOn: () => shadowState["light.fde49bad_fb722687"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.fde49bad_fb722687"}),
get state() { return shadowState["light.fde49bad_fb722687"]},
},

["7999b6c0_f93fbc37"]: {
entity_id: "light.7999b6c0_f93fbc37",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.7999b6c0_f93fbc37"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.7999b6c0_f93fbc37"}),
isOn: () => shadowState["light.7999b6c0_f93fbc37"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.7999b6c0_f93fbc37"}),
get state() { return shadowState["light.7999b6c0_f93fbc37"]},
},

["50a79e21_74701770"]: {
entity_id: "light.50a79e21_74701770",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.50a79e21_74701770"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.50a79e21_74701770"}),
isOn: () => shadowState["light.50a79e21_74701770"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.50a79e21_74701770"}),
get state() { return shadowState["light.50a79e21_74701770"]},
},

["187a9779_66735846"]: {
entity_id: "light.187a9779_66735846",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.187a9779_66735846"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.187a9779_66735846"}),
isOn: () => shadowState["light.187a9779_66735846"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.187a9779_66735846"}),
get state() { return shadowState["light.187a9779_66735846"]},
},

["a788d83b_085169a8"]: {
entity_id: "light.a788d83b_085169a8",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.a788d83b_085169a8"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.a788d83b_085169a8"}),
isOn: () => shadowState["light.a788d83b_085169a8"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.a788d83b_085169a8"}),
get state() { return shadowState["light.a788d83b_085169a8"]},
},

["21adb4aa_66a6b9a2"]: {
entity_id: "light.21adb4aa_66a6b9a2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.21adb4aa_66a6b9a2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.21adb4aa_66a6b9a2"}),
isOn: () => shadowState["light.21adb4aa_66a6b9a2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.21adb4aa_66a6b9a2"}),
get state() { return shadowState["light.21adb4aa_66a6b9a2"]},
},

["3f2bb951_563ca5f2"]: {
entity_id: "light.3f2bb951_563ca5f2",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.3f2bb951_563ca5f2"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.3f2bb951_563ca5f2"}),
isOn: () => shadowState["light.3f2bb951_563ca5f2"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.3f2bb951_563ca5f2"}),
get state() { return shadowState["light.3f2bb951_563ca5f2"]},
},

["1022b84e_7cd988a8"]: {
entity_id: "light.1022b84e_7cd988a8",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.1022b84e_7cd988a8"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.1022b84e_7cd988a8"}),
isOn: () => shadowState["light.1022b84e_7cd988a8"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.1022b84e_7cd988a8"}),
get state() { return shadowState["light.1022b84e_7cd988a8"]},
},

["feacdc57_b8eef177"]: {
entity_id: "light.feacdc57_b8eef177",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.feacdc57_b8eef177"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.feacdc57_b8eef177"}),
isOn: () => shadowState["light.feacdc57_b8eef177"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.feacdc57_b8eef177"}),
get state() { return shadowState["light.feacdc57_b8eef177"]},
},

["f262e3a5_84b84bbf"]: {
entity_id: "light.f262e3a5_84b84bbf",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.f262e3a5_84b84bbf"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.f262e3a5_84b84bbf"}),
isOn: () => shadowState["light.f262e3a5_84b84bbf"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.f262e3a5_84b84bbf"}),
get state() { return shadowState["light.f262e3a5_84b84bbf"]},
},

["bedroom_secondary_lights"]: {
entity_id: "light.bedroom_secondary_lights",
turn_on: (serviceData = {}) => callService("light", 'turn_on', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
turn_off: (serviceData = {}) => callService("light", 'turn_off', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
isOn: () => shadowState["light.bedroom_secondary_lights"].state === "on",
toggle: (serviceData = {}) => callService("light", 'toggle', serviceData, {entity_id: "light.bedroom_secondary_lights"}),
get state() { return shadowState["light.bedroom_secondary_lights"]},
},
}
