import {callService, shadowState, Select, SelectProperties} from "@herja/core"
export type SelectIDs = "washing_machine_outlet_indicator_mode" | "washing_machine_outlet_power_outage_memory" | "dishwasher_outlet_indicator_mode" | "dishwasher_outlet_power_outage_memory" | "coffee_machine_outlet_indicator_mode" | "coffee_machine_outlet_power_outage_memory" | "bedroom_tv_light_power_on_behavior" | "living_room_tripod_power_on_behavior" | "bedroom_bed_light_power_on_behavior_2" | "living_room_light_power_on_behavior" | "living_room_humidifier_switch_indicator_mode" | "living_room_humidifier_switch_power_outage_memory" | "bedroom_switch_switch_type" | "bedroom_switch_power_on_behavior" | "siren_volume" | "siren_melody" | "desk_outlet_indicator_mode" | "desk_outlet_power_outage_memory" | "bathroom_spot_1_power_on_behavior" | "hall_entrance_switch_type" | "hall_entrance_power_on_behavior" | "hall_dual_switch_switch_type" | "hall_dual_switch_power_on_behavior" | "garden_switch_type" | "garden_power_on_behavior" | "hall_stairs_power_on_behavior" | "kitchen_spot_3_power_on_behavior" | "garage_car_power_on_behavior" | "hall_entrance_power_on_behavior_2" | "garage_fridge_power_on_behavior" | "garage_light_switch_switch_type" | "garage_light_switch_power_on_behavior" | "bedroom_humidifier_switch_indicator_mode" | "bedroom_humidifier_switch_power_outage_memory" | "toilet_power_on_behavior" | "bedside_lamp_indicator_mode" | "bedside_lamp_power_outage_memory" | "hall_upstairs_spot_1_power_on_behavior" | "hall_upstairs_spot_2_power_on_behavior" | "hall_upstairs_spot_3_power_on_behavior" | "bedroom_secondary_lamp_indicator_mode" | "bedroom_secondary_lamp_power_outage_memory" | "bathroom_spot_2_power_on_behavior" | "office_light_power_on_behavior" | "garage_button_power_on_behavior" | "kitchen_spot_2_power_on_behavior" | "dining_room_spot_1_power_on_behavior" | "christmas_tree_led_outlet_indicator_mode" | "christmas_tree_led_outlet_power_outage_memory" | "dining_room_spot_2_power_on_behavior" | "secondary_room_light_power_on_behavior" | "kitchen_spot_1_power_on_behavior" | "dining_room_spot_3_power_on_behavior" | "hall_stairs_switch_switch_type" | "hall_stairs_switch_power_on_behavior" | "living_room_spot_3_power_on_behavior" | "g4_bullet_recording_mode" | "g4_bullet_infrared_mode" | "g4_doorbell_recording_mode" | "g4_doorbell_infrared_mode" | "g4_doorbell_doorbell_text" | "g4_doorbell_chime_type" | "g4_instant_recording_mode" | "garden_switch_type_2" | "garden_power_on_behavior_2" | "3dprinter_indicator_mode" | "3dprinter_power_outage_memory"
export type SelectEntities = Record<SelectIDs, Select>

export const select: Select<SelectIDs> = {

['washing_machine_outlet_indicator_mode']: {
  entity_id: "select.washing_machine_outlet_indicator_mode",
get entity() { return {state: shadowState["select.washing_machine_outlet_indicator_mode"].state, attributes: shadowState["select.washing_machine_outlet_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.washing_machine_outlet_indicator_mode"})}
},

['washing_machine_outlet_power_outage_memory']: {
  entity_id: "select.washing_machine_outlet_power_outage_memory",
get entity() { return {state: shadowState["select.washing_machine_outlet_power_outage_memory"].state, attributes: shadowState["select.washing_machine_outlet_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.washing_machine_outlet_power_outage_memory"})}
},

['dishwasher_outlet_indicator_mode']: {
  entity_id: "select.dishwasher_outlet_indicator_mode",
get entity() { return {state: shadowState["select.dishwasher_outlet_indicator_mode"].state, attributes: shadowState["select.dishwasher_outlet_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.dishwasher_outlet_indicator_mode"})}
},

['dishwasher_outlet_power_outage_memory']: {
  entity_id: "select.dishwasher_outlet_power_outage_memory",
get entity() { return {state: shadowState["select.dishwasher_outlet_power_outage_memory"].state, attributes: shadowState["select.dishwasher_outlet_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.dishwasher_outlet_power_outage_memory"})}
},

['coffee_machine_outlet_indicator_mode']: {
  entity_id: "select.coffee_machine_outlet_indicator_mode",
get entity() { return {state: shadowState["select.coffee_machine_outlet_indicator_mode"].state, attributes: shadowState["select.coffee_machine_outlet_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.coffee_machine_outlet_indicator_mode"})}
},

['coffee_machine_outlet_power_outage_memory']: {
  entity_id: "select.coffee_machine_outlet_power_outage_memory",
get entity() { return {state: shadowState["select.coffee_machine_outlet_power_outage_memory"].state, attributes: shadowState["select.coffee_machine_outlet_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.coffee_machine_outlet_power_outage_memory"})}
},

['bedroom_tv_light_power_on_behavior']: {
  entity_id: "select.bedroom_tv_light_power_on_behavior",
get entity() { return {state: shadowState["select.bedroom_tv_light_power_on_behavior"].state, attributes: shadowState["select.bedroom_tv_light_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_tv_light_power_on_behavior"})}
},

['living_room_tripod_power_on_behavior']: {
  entity_id: "select.living_room_tripod_power_on_behavior",
get entity() { return {state: shadowState["select.living_room_tripod_power_on_behavior"].state, attributes: shadowState["select.living_room_tripod_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.living_room_tripod_power_on_behavior"})}
},

['bedroom_bed_light_power_on_behavior_2']: {
  entity_id: "select.bedroom_bed_light_power_on_behavior_2",
get entity() { return {state: shadowState["select.bedroom_bed_light_power_on_behavior_2"].state, attributes: shadowState["select.bedroom_bed_light_power_on_behavior_2"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_bed_light_power_on_behavior_2"})}
},

['living_room_light_power_on_behavior']: {
  entity_id: "select.living_room_light_power_on_behavior",
get entity() { return {state: shadowState["select.living_room_light_power_on_behavior"].state, attributes: shadowState["select.living_room_light_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.living_room_light_power_on_behavior"})}
},

['living_room_humidifier_switch_indicator_mode']: {
  entity_id: "select.living_room_humidifier_switch_indicator_mode",
get entity() { return {state: shadowState["select.living_room_humidifier_switch_indicator_mode"].state, attributes: shadowState["select.living_room_humidifier_switch_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.living_room_humidifier_switch_indicator_mode"})}
},

['living_room_humidifier_switch_power_outage_memory']: {
  entity_id: "select.living_room_humidifier_switch_power_outage_memory",
get entity() { return {state: shadowState["select.living_room_humidifier_switch_power_outage_memory"].state, attributes: shadowState["select.living_room_humidifier_switch_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.living_room_humidifier_switch_power_outage_memory"})}
},

['bedroom_switch_switch_type']: {
  entity_id: "select.bedroom_switch_switch_type",
get entity() { return {state: shadowState["select.bedroom_switch_switch_type"].state, attributes: shadowState["select.bedroom_switch_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_switch_switch_type"})}
},

['bedroom_switch_power_on_behavior']: {
  entity_id: "select.bedroom_switch_power_on_behavior",
get entity() { return {state: shadowState["select.bedroom_switch_power_on_behavior"].state, attributes: shadowState["select.bedroom_switch_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_switch_power_on_behavior"})}
},

['siren_volume']: {
  entity_id: "select.siren_volume",
get entity() { return {state: shadowState["select.siren_volume"].state, attributes: shadowState["select.siren_volume"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.siren_volume"})}
},

['siren_melody']: {
  entity_id: "select.siren_melody",
get entity() { return {state: shadowState["select.siren_melody"].state, attributes: shadowState["select.siren_melody"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.siren_melody"})}
},

['desk_outlet_indicator_mode']: {
  entity_id: "select.desk_outlet_indicator_mode",
get entity() { return {state: shadowState["select.desk_outlet_indicator_mode"].state, attributes: shadowState["select.desk_outlet_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.desk_outlet_indicator_mode"})}
},

['desk_outlet_power_outage_memory']: {
  entity_id: "select.desk_outlet_power_outage_memory",
get entity() { return {state: shadowState["select.desk_outlet_power_outage_memory"].state, attributes: shadowState["select.desk_outlet_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.desk_outlet_power_outage_memory"})}
},

['bathroom_spot_1_power_on_behavior']: {
  entity_id: "select.bathroom_spot_1_power_on_behavior",
get entity() { return {state: shadowState["select.bathroom_spot_1_power_on_behavior"].state, attributes: shadowState["select.bathroom_spot_1_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bathroom_spot_1_power_on_behavior"})}
},

['hall_entrance_switch_type']: {
  entity_id: "select.hall_entrance_switch_type",
get entity() { return {state: shadowState["select.hall_entrance_switch_type"].state, attributes: shadowState["select.hall_entrance_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_entrance_switch_type"})}
},

['hall_entrance_power_on_behavior']: {
  entity_id: "select.hall_entrance_power_on_behavior",
get entity() { return {state: shadowState["select.hall_entrance_power_on_behavior"].state, attributes: shadowState["select.hall_entrance_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_entrance_power_on_behavior"})}
},

['hall_dual_switch_switch_type']: {
  entity_id: "select.hall_dual_switch_switch_type",
get entity() { return {state: shadowState["select.hall_dual_switch_switch_type"].state, attributes: shadowState["select.hall_dual_switch_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_dual_switch_switch_type"})}
},

['hall_dual_switch_power_on_behavior']: {
  entity_id: "select.hall_dual_switch_power_on_behavior",
get entity() { return {state: shadowState["select.hall_dual_switch_power_on_behavior"].state, attributes: shadowState["select.hall_dual_switch_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_dual_switch_power_on_behavior"})}
},

['garden_switch_type']: {
  entity_id: "select.garden_switch_type",
get entity() { return {state: shadowState["select.garden_switch_type"].state, attributes: shadowState["select.garden_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garden_switch_type"})}
},

['garden_power_on_behavior']: {
  entity_id: "select.garden_power_on_behavior",
get entity() { return {state: shadowState["select.garden_power_on_behavior"].state, attributes: shadowState["select.garden_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garden_power_on_behavior"})}
},

['hall_stairs_power_on_behavior']: {
  entity_id: "select.hall_stairs_power_on_behavior",
get entity() { return {state: shadowState["select.hall_stairs_power_on_behavior"].state, attributes: shadowState["select.hall_stairs_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_stairs_power_on_behavior"})}
},

['kitchen_spot_3_power_on_behavior']: {
  entity_id: "select.kitchen_spot_3_power_on_behavior",
get entity() { return {state: shadowState["select.kitchen_spot_3_power_on_behavior"].state, attributes: shadowState["select.kitchen_spot_3_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.kitchen_spot_3_power_on_behavior"})}
},

['garage_car_power_on_behavior']: {
  entity_id: "select.garage_car_power_on_behavior",
get entity() { return {state: shadowState["select.garage_car_power_on_behavior"].state, attributes: shadowState["select.garage_car_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garage_car_power_on_behavior"})}
},

['hall_entrance_power_on_behavior_2']: {
  entity_id: "select.hall_entrance_power_on_behavior_2",
get entity() { return {state: shadowState["select.hall_entrance_power_on_behavior_2"].state, attributes: shadowState["select.hall_entrance_power_on_behavior_2"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_entrance_power_on_behavior_2"})}
},

['garage_fridge_power_on_behavior']: {
  entity_id: "select.garage_fridge_power_on_behavior",
get entity() { return {state: shadowState["select.garage_fridge_power_on_behavior"].state, attributes: shadowState["select.garage_fridge_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garage_fridge_power_on_behavior"})}
},

['garage_light_switch_switch_type']: {
  entity_id: "select.garage_light_switch_switch_type",
get entity() { return {state: shadowState["select.garage_light_switch_switch_type"].state, attributes: shadowState["select.garage_light_switch_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garage_light_switch_switch_type"})}
},

['garage_light_switch_power_on_behavior']: {
  entity_id: "select.garage_light_switch_power_on_behavior",
get entity() { return {state: shadowState["select.garage_light_switch_power_on_behavior"].state, attributes: shadowState["select.garage_light_switch_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garage_light_switch_power_on_behavior"})}
},

['bedroom_humidifier_switch_indicator_mode']: {
  entity_id: "select.bedroom_humidifier_switch_indicator_mode",
get entity() { return {state: shadowState["select.bedroom_humidifier_switch_indicator_mode"].state, attributes: shadowState["select.bedroom_humidifier_switch_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_humidifier_switch_indicator_mode"})}
},

['bedroom_humidifier_switch_power_outage_memory']: {
  entity_id: "select.bedroom_humidifier_switch_power_outage_memory",
get entity() { return {state: shadowState["select.bedroom_humidifier_switch_power_outage_memory"].state, attributes: shadowState["select.bedroom_humidifier_switch_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_humidifier_switch_power_outage_memory"})}
},

['toilet_power_on_behavior']: {
  entity_id: "select.toilet_power_on_behavior",
get entity() { return {state: shadowState["select.toilet_power_on_behavior"].state, attributes: shadowState["select.toilet_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.toilet_power_on_behavior"})}
},

['bedside_lamp_indicator_mode']: {
  entity_id: "select.bedside_lamp_indicator_mode",
get entity() { return {state: shadowState["select.bedside_lamp_indicator_mode"].state, attributes: shadowState["select.bedside_lamp_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedside_lamp_indicator_mode"})}
},

['bedside_lamp_power_outage_memory']: {
  entity_id: "select.bedside_lamp_power_outage_memory",
get entity() { return {state: shadowState["select.bedside_lamp_power_outage_memory"].state, attributes: shadowState["select.bedside_lamp_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedside_lamp_power_outage_memory"})}
},

['hall_upstairs_spot_1_power_on_behavior']: {
  entity_id: "select.hall_upstairs_spot_1_power_on_behavior",
get entity() { return {state: shadowState["select.hall_upstairs_spot_1_power_on_behavior"].state, attributes: shadowState["select.hall_upstairs_spot_1_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_upstairs_spot_1_power_on_behavior"})}
},

['hall_upstairs_spot_2_power_on_behavior']: {
  entity_id: "select.hall_upstairs_spot_2_power_on_behavior",
get entity() { return {state: shadowState["select.hall_upstairs_spot_2_power_on_behavior"].state, attributes: shadowState["select.hall_upstairs_spot_2_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_upstairs_spot_2_power_on_behavior"})}
},

['hall_upstairs_spot_3_power_on_behavior']: {
  entity_id: "select.hall_upstairs_spot_3_power_on_behavior",
get entity() { return {state: shadowState["select.hall_upstairs_spot_3_power_on_behavior"].state, attributes: shadowState["select.hall_upstairs_spot_3_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_upstairs_spot_3_power_on_behavior"})}
},

['bedroom_secondary_lamp_indicator_mode']: {
  entity_id: "select.bedroom_secondary_lamp_indicator_mode",
get entity() { return {state: shadowState["select.bedroom_secondary_lamp_indicator_mode"].state, attributes: shadowState["select.bedroom_secondary_lamp_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_secondary_lamp_indicator_mode"})}
},

['bedroom_secondary_lamp_power_outage_memory']: {
  entity_id: "select.bedroom_secondary_lamp_power_outage_memory",
get entity() { return {state: shadowState["select.bedroom_secondary_lamp_power_outage_memory"].state, attributes: shadowState["select.bedroom_secondary_lamp_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bedroom_secondary_lamp_power_outage_memory"})}
},

['bathroom_spot_2_power_on_behavior']: {
  entity_id: "select.bathroom_spot_2_power_on_behavior",
get entity() { return {state: shadowState["select.bathroom_spot_2_power_on_behavior"].state, attributes: shadowState["select.bathroom_spot_2_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.bathroom_spot_2_power_on_behavior"})}
},

['office_light_power_on_behavior']: {
  entity_id: "select.office_light_power_on_behavior",
get entity() { return {state: shadowState["select.office_light_power_on_behavior"].state, attributes: shadowState["select.office_light_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.office_light_power_on_behavior"})}
},

['garage_button_power_on_behavior']: {
  entity_id: "select.garage_button_power_on_behavior",
get entity() { return {state: shadowState["select.garage_button_power_on_behavior"].state, attributes: shadowState["select.garage_button_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garage_button_power_on_behavior"})}
},

['kitchen_spot_2_power_on_behavior']: {
  entity_id: "select.kitchen_spot_2_power_on_behavior",
get entity() { return {state: shadowState["select.kitchen_spot_2_power_on_behavior"].state, attributes: shadowState["select.kitchen_spot_2_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.kitchen_spot_2_power_on_behavior"})}
},

['dining_room_spot_1_power_on_behavior']: {
  entity_id: "select.dining_room_spot_1_power_on_behavior",
get entity() { return {state: shadowState["select.dining_room_spot_1_power_on_behavior"].state, attributes: shadowState["select.dining_room_spot_1_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.dining_room_spot_1_power_on_behavior"})}
},

['christmas_tree_led_outlet_indicator_mode']: {
  entity_id: "select.christmas_tree_led_outlet_indicator_mode",
get entity() { return {state: shadowState["select.christmas_tree_led_outlet_indicator_mode"].state, attributes: shadowState["select.christmas_tree_led_outlet_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.christmas_tree_led_outlet_indicator_mode"})}
},

['christmas_tree_led_outlet_power_outage_memory']: {
  entity_id: "select.christmas_tree_led_outlet_power_outage_memory",
get entity() { return {state: shadowState["select.christmas_tree_led_outlet_power_outage_memory"].state, attributes: shadowState["select.christmas_tree_led_outlet_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.christmas_tree_led_outlet_power_outage_memory"})}
},

['dining_room_spot_2_power_on_behavior']: {
  entity_id: "select.dining_room_spot_2_power_on_behavior",
get entity() { return {state: shadowState["select.dining_room_spot_2_power_on_behavior"].state, attributes: shadowState["select.dining_room_spot_2_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.dining_room_spot_2_power_on_behavior"})}
},

['secondary_room_light_power_on_behavior']: {
  entity_id: "select.secondary_room_light_power_on_behavior",
get entity() { return {state: shadowState["select.secondary_room_light_power_on_behavior"].state, attributes: shadowState["select.secondary_room_light_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.secondary_room_light_power_on_behavior"})}
},

['kitchen_spot_1_power_on_behavior']: {
  entity_id: "select.kitchen_spot_1_power_on_behavior",
get entity() { return {state: shadowState["select.kitchen_spot_1_power_on_behavior"].state, attributes: shadowState["select.kitchen_spot_1_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.kitchen_spot_1_power_on_behavior"})}
},

['dining_room_spot_3_power_on_behavior']: {
  entity_id: "select.dining_room_spot_3_power_on_behavior",
get entity() { return {state: shadowState["select.dining_room_spot_3_power_on_behavior"].state, attributes: shadowState["select.dining_room_spot_3_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.dining_room_spot_3_power_on_behavior"})}
},

['hall_stairs_switch_switch_type']: {
  entity_id: "select.hall_stairs_switch_switch_type",
get entity() { return {state: shadowState["select.hall_stairs_switch_switch_type"].state, attributes: shadowState["select.hall_stairs_switch_switch_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_stairs_switch_switch_type"})}
},

['hall_stairs_switch_power_on_behavior']: {
  entity_id: "select.hall_stairs_switch_power_on_behavior",
get entity() { return {state: shadowState["select.hall_stairs_switch_power_on_behavior"].state, attributes: shadowState["select.hall_stairs_switch_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.hall_stairs_switch_power_on_behavior"})}
},

['living_room_spot_3_power_on_behavior']: {
  entity_id: "select.living_room_spot_3_power_on_behavior",
get entity() { return {state: shadowState["select.living_room_spot_3_power_on_behavior"].state, attributes: shadowState["select.living_room_spot_3_power_on_behavior"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.living_room_spot_3_power_on_behavior"})}
},

['g4_bullet_recording_mode']: {
  entity_id: "select.g4_bullet_recording_mode",
get entity() { return {state: shadowState["select.g4_bullet_recording_mode"].state, attributes: shadowState["select.g4_bullet_recording_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_bullet_recording_mode"})}
},

['g4_bullet_infrared_mode']: {
  entity_id: "select.g4_bullet_infrared_mode",
get entity() { return {state: shadowState["select.g4_bullet_infrared_mode"].state, attributes: shadowState["select.g4_bullet_infrared_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_bullet_infrared_mode"})}
},

['g4_doorbell_recording_mode']: {
  entity_id: "select.g4_doorbell_recording_mode",
get entity() { return {state: shadowState["select.g4_doorbell_recording_mode"].state, attributes: shadowState["select.g4_doorbell_recording_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_doorbell_recording_mode"})}
},

['g4_doorbell_infrared_mode']: {
  entity_id: "select.g4_doorbell_infrared_mode",
get entity() { return {state: shadowState["select.g4_doorbell_infrared_mode"].state, attributes: shadowState["select.g4_doorbell_infrared_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_doorbell_infrared_mode"})}
},

['g4_doorbell_doorbell_text']: {
  entity_id: "select.g4_doorbell_doorbell_text",
get entity() { return {state: shadowState["select.g4_doorbell_doorbell_text"].state, attributes: shadowState["select.g4_doorbell_doorbell_text"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_doorbell_doorbell_text"})}
},

['g4_doorbell_chime_type']: {
  entity_id: "select.g4_doorbell_chime_type",
get entity() { return {state: shadowState["select.g4_doorbell_chime_type"].state, attributes: shadowState["select.g4_doorbell_chime_type"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_doorbell_chime_type"})}
},

['g4_instant_recording_mode']: {
  entity_id: "select.g4_instant_recording_mode",
get entity() { return {state: shadowState["select.g4_instant_recording_mode"].state, attributes: shadowState["select.g4_instant_recording_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.g4_instant_recording_mode"})}
},

['garden_switch_type_2']: {
  entity_id: "select.garden_switch_type_2",
get entity() { return {state: shadowState["select.garden_switch_type_2"].state, attributes: shadowState["select.garden_switch_type_2"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garden_switch_type_2"})}
},

['garden_power_on_behavior_2']: {
  entity_id: "select.garden_power_on_behavior_2",
get entity() { return {state: shadowState["select.garden_power_on_behavior_2"].state, attributes: shadowState["select.garden_power_on_behavior_2"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.garden_power_on_behavior_2"})}
},

['3dprinter_indicator_mode']: {
  entity_id: "select.3dprinter_indicator_mode",
get entity() { return {state: shadowState["select.3dprinter_indicator_mode"].state, attributes: shadowState["select.3dprinter_indicator_mode"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.3dprinter_indicator_mode"})}
},

['3dprinter_power_outage_memory']: {
  entity_id: "select.3dprinter_power_outage_memory",
get entity() { return {state: shadowState["select.3dprinter_power_outage_memory"].state, attributes: shadowState["select.3dprinter_power_outage_memory"].attributes} as SelectProperties},
selectOption(option:string) { return callService("select", "select_option", {option}, {entity_id: "select.3dprinter_power_outage_memory"})}
},

}
