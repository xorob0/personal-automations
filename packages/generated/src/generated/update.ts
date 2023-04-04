import {callService, shadowState, Update, UpdateProperties, UpdateInstallAttributes} from "@herja/core"
export type UpdateIDs = "hacs_update" | "adaptive_lighting_update" | "power_calculation_update" | "open_charge_point_protocol_ocpp_update" | "alarmo_update" | "nibe_uplink_update" | "smartir_update" | "music_assistant_update" | "volkswagen_we_connect_id_update" | "vacuum_card_update" | "ha_floorplan_update" | "fan_control_entity_row_update" | "fan_percent_button_row_update" | "time_picker_card_update" | "mini_graph_card_update" | "alarmo_card_update" | "card_mod_update" | "better_thermostat_ui_update" | "home_assistant_swipe_navigation_update" | "threedy_update" | "office_switch" | "dream_machine_pro" | "u6_lite_living_room" | "living_room_switch" | "u6_lite_tatoo_room" | "unifi_device_update_60_22_32_4f_27_60" | "0xa4c1386aadc6a696" | "washing_machine_outlet" | "dishwasher_outlet" | "coffee_machine_outlet" | "bedroom_tv_light" | "living_room_tripod" | "bedroom_bed_light_2" | "living_room_light" | "living_room_humidifier_switch" | "bedroom_button_gaby" | "bedroom_button_tim" | "desk_outlet" | "bathroom_spot_1" | "hall_stairs" | "kitchen_spot_3" | "garage_car" | "hall_entrance" | "garage_fridge" | "bedroom_humidifier_switch" | "garage_remote" | "toilet" | "bedside_lamp" | "hall_upstairs_spot_1" | "hall_upstairs_spot_2" | "hall_upstairs_spot_3" | "bedroom_secondary_lamp" | "bathroom_spot_2" | "office_light" | "living_room_remote" | "kitchen_spot_2" | "dining_room_spot_1" | "christmas_tree_led_outlet" | "dining_room_spot_2" | "secondary_room_light" | "kitchen_spot_1" | "dining_room_spot_3" | "living_room_spot_3" | "nibe_133481_update" | "browser_mod_update" | "valetudo_map_card_update"
export type UpdateEntities = Record<UpdateIDs, Update>

export const update: Update<UpdateIDs> = {

['hacs_update']: {
  entity_id: "update.hacs_update",
get entity() { return {state: shadowState["update.hacs_update"].state, attributes: shadowState["update.hacs_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hacs_update"})}
},

['adaptive_lighting_update']: {
  entity_id: "update.adaptive_lighting_update",
get entity() { return {state: shadowState["update.adaptive_lighting_update"].state, attributes: shadowState["update.adaptive_lighting_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.adaptive_lighting_update"})}
},

['power_calculation_update']: {
  entity_id: "update.power_calculation_update",
get entity() { return {state: shadowState["update.power_calculation_update"].state, attributes: shadowState["update.power_calculation_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.power_calculation_update"})}
},

['open_charge_point_protocol_ocpp_update']: {
  entity_id: "update.open_charge_point_protocol_ocpp_update",
get entity() { return {state: shadowState["update.open_charge_point_protocol_ocpp_update"].state, attributes: shadowState["update.open_charge_point_protocol_ocpp_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.open_charge_point_protocol_ocpp_update"})}
},

['alarmo_update']: {
  entity_id: "update.alarmo_update",
get entity() { return {state: shadowState["update.alarmo_update"].state, attributes: shadowState["update.alarmo_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.alarmo_update"})}
},

['nibe_uplink_update']: {
  entity_id: "update.nibe_uplink_update",
get entity() { return {state: shadowState["update.nibe_uplink_update"].state, attributes: shadowState["update.nibe_uplink_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.nibe_uplink_update"})}
},

['smartir_update']: {
  entity_id: "update.smartir_update",
get entity() { return {state: shadowState["update.smartir_update"].state, attributes: shadowState["update.smartir_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.smartir_update"})}
},

['music_assistant_update']: {
  entity_id: "update.music_assistant_update",
get entity() { return {state: shadowState["update.music_assistant_update"].state, attributes: shadowState["update.music_assistant_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.music_assistant_update"})}
},

['volkswagen_we_connect_id_update']: {
  entity_id: "update.volkswagen_we_connect_id_update",
get entity() { return {state: shadowState["update.volkswagen_we_connect_id_update"].state, attributes: shadowState["update.volkswagen_we_connect_id_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.volkswagen_we_connect_id_update"})}
},

['vacuum_card_update']: {
  entity_id: "update.vacuum_card_update",
get entity() { return {state: shadowState["update.vacuum_card_update"].state, attributes: shadowState["update.vacuum_card_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.vacuum_card_update"})}
},

['ha_floorplan_update']: {
  entity_id: "update.ha_floorplan_update",
get entity() { return {state: shadowState["update.ha_floorplan_update"].state, attributes: shadowState["update.ha_floorplan_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.ha_floorplan_update"})}
},

['fan_control_entity_row_update']: {
  entity_id: "update.fan_control_entity_row_update",
get entity() { return {state: shadowState["update.fan_control_entity_row_update"].state, attributes: shadowState["update.fan_control_entity_row_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.fan_control_entity_row_update"})}
},

['fan_percent_button_row_update']: {
  entity_id: "update.fan_percent_button_row_update",
get entity() { return {state: shadowState["update.fan_percent_button_row_update"].state, attributes: shadowState["update.fan_percent_button_row_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.fan_percent_button_row_update"})}
},

['time_picker_card_update']: {
  entity_id: "update.time_picker_card_update",
get entity() { return {state: shadowState["update.time_picker_card_update"].state, attributes: shadowState["update.time_picker_card_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.time_picker_card_update"})}
},

['mini_graph_card_update']: {
  entity_id: "update.mini_graph_card_update",
get entity() { return {state: shadowState["update.mini_graph_card_update"].state, attributes: shadowState["update.mini_graph_card_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.mini_graph_card_update"})}
},

['alarmo_card_update']: {
  entity_id: "update.alarmo_card_update",
get entity() { return {state: shadowState["update.alarmo_card_update"].state, attributes: shadowState["update.alarmo_card_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.alarmo_card_update"})}
},

['card_mod_update']: {
  entity_id: "update.card_mod_update",
get entity() { return {state: shadowState["update.card_mod_update"].state, attributes: shadowState["update.card_mod_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.card_mod_update"})}
},

['better_thermostat_ui_update']: {
  entity_id: "update.better_thermostat_ui_update",
get entity() { return {state: shadowState["update.better_thermostat_ui_update"].state, attributes: shadowState["update.better_thermostat_ui_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.better_thermostat_ui_update"})}
},

['home_assistant_swipe_navigation_update']: {
  entity_id: "update.home_assistant_swipe_navigation_update",
get entity() { return {state: shadowState["update.home_assistant_swipe_navigation_update"].state, attributes: shadowState["update.home_assistant_swipe_navigation_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.home_assistant_swipe_navigation_update"})}
},

['threedy_update']: {
  entity_id: "update.threedy_update",
get entity() { return {state: shadowState["update.threedy_update"].state, attributes: shadowState["update.threedy_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.threedy_update"})}
},

['office_switch']: {
  entity_id: "update.office_switch",
get entity() { return {state: shadowState["update.office_switch"].state, attributes: shadowState["update.office_switch"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.office_switch"})}
},

['dream_machine_pro']: {
  entity_id: "update.dream_machine_pro",
get entity() { return {state: shadowState["update.dream_machine_pro"].state, attributes: shadowState["update.dream_machine_pro"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.dream_machine_pro"})}
},

['u6_lite_living_room']: {
  entity_id: "update.u6_lite_living_room",
get entity() { return {state: shadowState["update.u6_lite_living_room"].state, attributes: shadowState["update.u6_lite_living_room"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.u6_lite_living_room"})}
},

['living_room_switch']: {
  entity_id: "update.living_room_switch",
get entity() { return {state: shadowState["update.living_room_switch"].state, attributes: shadowState["update.living_room_switch"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_switch"})}
},

['u6_lite_tatoo_room']: {
  entity_id: "update.u6_lite_tatoo_room",
get entity() { return {state: shadowState["update.u6_lite_tatoo_room"].state, attributes: shadowState["update.u6_lite_tatoo_room"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.u6_lite_tatoo_room"})}
},

['unifi_device_update_60_22_32_4f_27_60']: {
  entity_id: "update.unifi_device_update_60_22_32_4f_27_60",
get entity() { return {state: shadowState["update.unifi_device_update_60_22_32_4f_27_60"].state, attributes: shadowState["update.unifi_device_update_60_22_32_4f_27_60"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.unifi_device_update_60_22_32_4f_27_60"})}
},

['0xa4c1386aadc6a696']: {
  entity_id: "update.0xa4c1386aadc6a696",
get entity() { return {state: shadowState["update.0xa4c1386aadc6a696"].state, attributes: shadowState["update.0xa4c1386aadc6a696"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.0xa4c1386aadc6a696"})}
},

['washing_machine_outlet']: {
  entity_id: "update.washing_machine_outlet",
get entity() { return {state: shadowState["update.washing_machine_outlet"].state, attributes: shadowState["update.washing_machine_outlet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.washing_machine_outlet"})}
},

['dishwasher_outlet']: {
  entity_id: "update.dishwasher_outlet",
get entity() { return {state: shadowState["update.dishwasher_outlet"].state, attributes: shadowState["update.dishwasher_outlet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.dishwasher_outlet"})}
},

['coffee_machine_outlet']: {
  entity_id: "update.coffee_machine_outlet",
get entity() { return {state: shadowState["update.coffee_machine_outlet"].state, attributes: shadowState["update.coffee_machine_outlet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.coffee_machine_outlet"})}
},

['bedroom_tv_light']: {
  entity_id: "update.bedroom_tv_light",
get entity() { return {state: shadowState["update.bedroom_tv_light"].state, attributes: shadowState["update.bedroom_tv_light"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_tv_light"})}
},

['living_room_tripod']: {
  entity_id: "update.living_room_tripod",
get entity() { return {state: shadowState["update.living_room_tripod"].state, attributes: shadowState["update.living_room_tripod"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_tripod"})}
},

['bedroom_bed_light_2']: {
  entity_id: "update.bedroom_bed_light_2",
get entity() { return {state: shadowState["update.bedroom_bed_light_2"].state, attributes: shadowState["update.bedroom_bed_light_2"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_bed_light_2"})}
},

['living_room_light']: {
  entity_id: "update.living_room_light",
get entity() { return {state: shadowState["update.living_room_light"].state, attributes: shadowState["update.living_room_light"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_light"})}
},

['living_room_humidifier_switch']: {
  entity_id: "update.living_room_humidifier_switch",
get entity() { return {state: shadowState["update.living_room_humidifier_switch"].state, attributes: shadowState["update.living_room_humidifier_switch"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_humidifier_switch"})}
},

['bedroom_button_gaby']: {
  entity_id: "update.bedroom_button_gaby",
get entity() { return {state: shadowState["update.bedroom_button_gaby"].state, attributes: shadowState["update.bedroom_button_gaby"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_button_gaby"})}
},

['bedroom_button_tim']: {
  entity_id: "update.bedroom_button_tim",
get entity() { return {state: shadowState["update.bedroom_button_tim"].state, attributes: shadowState["update.bedroom_button_tim"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_button_tim"})}
},

['desk_outlet']: {
  entity_id: "update.desk_outlet",
get entity() { return {state: shadowState["update.desk_outlet"].state, attributes: shadowState["update.desk_outlet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.desk_outlet"})}
},

['bathroom_spot_1']: {
  entity_id: "update.bathroom_spot_1",
get entity() { return {state: shadowState["update.bathroom_spot_1"].state, attributes: shadowState["update.bathroom_spot_1"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bathroom_spot_1"})}
},

['hall_stairs']: {
  entity_id: "update.hall_stairs",
get entity() { return {state: shadowState["update.hall_stairs"].state, attributes: shadowState["update.hall_stairs"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hall_stairs"})}
},

['kitchen_spot_3']: {
  entity_id: "update.kitchen_spot_3",
get entity() { return {state: shadowState["update.kitchen_spot_3"].state, attributes: shadowState["update.kitchen_spot_3"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.kitchen_spot_3"})}
},

['garage_car']: {
  entity_id: "update.garage_car",
get entity() { return {state: shadowState["update.garage_car"].state, attributes: shadowState["update.garage_car"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.garage_car"})}
},

['hall_entrance']: {
  entity_id: "update.hall_entrance",
get entity() { return {state: shadowState["update.hall_entrance"].state, attributes: shadowState["update.hall_entrance"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hall_entrance"})}
},

['garage_fridge']: {
  entity_id: "update.garage_fridge",
get entity() { return {state: shadowState["update.garage_fridge"].state, attributes: shadowState["update.garage_fridge"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.garage_fridge"})}
},

['bedroom_humidifier_switch']: {
  entity_id: "update.bedroom_humidifier_switch",
get entity() { return {state: shadowState["update.bedroom_humidifier_switch"].state, attributes: shadowState["update.bedroom_humidifier_switch"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_humidifier_switch"})}
},

['garage_remote']: {
  entity_id: "update.garage_remote",
get entity() { return {state: shadowState["update.garage_remote"].state, attributes: shadowState["update.garage_remote"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.garage_remote"})}
},

['toilet']: {
  entity_id: "update.toilet",
get entity() { return {state: shadowState["update.toilet"].state, attributes: shadowState["update.toilet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.toilet"})}
},

['bedside_lamp']: {
  entity_id: "update.bedside_lamp",
get entity() { return {state: shadowState["update.bedside_lamp"].state, attributes: shadowState["update.bedside_lamp"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedside_lamp"})}
},

['hall_upstairs_spot_1']: {
  entity_id: "update.hall_upstairs_spot_1",
get entity() { return {state: shadowState["update.hall_upstairs_spot_1"].state, attributes: shadowState["update.hall_upstairs_spot_1"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hall_upstairs_spot_1"})}
},

['hall_upstairs_spot_2']: {
  entity_id: "update.hall_upstairs_spot_2",
get entity() { return {state: shadowState["update.hall_upstairs_spot_2"].state, attributes: shadowState["update.hall_upstairs_spot_2"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hall_upstairs_spot_2"})}
},

['hall_upstairs_spot_3']: {
  entity_id: "update.hall_upstairs_spot_3",
get entity() { return {state: shadowState["update.hall_upstairs_spot_3"].state, attributes: shadowState["update.hall_upstairs_spot_3"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.hall_upstairs_spot_3"})}
},

['bedroom_secondary_lamp']: {
  entity_id: "update.bedroom_secondary_lamp",
get entity() { return {state: shadowState["update.bedroom_secondary_lamp"].state, attributes: shadowState["update.bedroom_secondary_lamp"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bedroom_secondary_lamp"})}
},

['bathroom_spot_2']: {
  entity_id: "update.bathroom_spot_2",
get entity() { return {state: shadowState["update.bathroom_spot_2"].state, attributes: shadowState["update.bathroom_spot_2"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.bathroom_spot_2"})}
},

['office_light']: {
  entity_id: "update.office_light",
get entity() { return {state: shadowState["update.office_light"].state, attributes: shadowState["update.office_light"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.office_light"})}
},

['living_room_remote']: {
  entity_id: "update.living_room_remote",
get entity() { return {state: shadowState["update.living_room_remote"].state, attributes: shadowState["update.living_room_remote"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_remote"})}
},

['kitchen_spot_2']: {
  entity_id: "update.kitchen_spot_2",
get entity() { return {state: shadowState["update.kitchen_spot_2"].state, attributes: shadowState["update.kitchen_spot_2"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.kitchen_spot_2"})}
},

['dining_room_spot_1']: {
  entity_id: "update.dining_room_spot_1",
get entity() { return {state: shadowState["update.dining_room_spot_1"].state, attributes: shadowState["update.dining_room_spot_1"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.dining_room_spot_1"})}
},

['christmas_tree_led_outlet']: {
  entity_id: "update.christmas_tree_led_outlet",
get entity() { return {state: shadowState["update.christmas_tree_led_outlet"].state, attributes: shadowState["update.christmas_tree_led_outlet"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.christmas_tree_led_outlet"})}
},

['dining_room_spot_2']: {
  entity_id: "update.dining_room_spot_2",
get entity() { return {state: shadowState["update.dining_room_spot_2"].state, attributes: shadowState["update.dining_room_spot_2"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.dining_room_spot_2"})}
},

['secondary_room_light']: {
  entity_id: "update.secondary_room_light",
get entity() { return {state: shadowState["update.secondary_room_light"].state, attributes: shadowState["update.secondary_room_light"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.secondary_room_light"})}
},

['kitchen_spot_1']: {
  entity_id: "update.kitchen_spot_1",
get entity() { return {state: shadowState["update.kitchen_spot_1"].state, attributes: shadowState["update.kitchen_spot_1"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.kitchen_spot_1"})}
},

['dining_room_spot_3']: {
  entity_id: "update.dining_room_spot_3",
get entity() { return {state: shadowState["update.dining_room_spot_3"].state, attributes: shadowState["update.dining_room_spot_3"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.dining_room_spot_3"})}
},

['living_room_spot_3']: {
  entity_id: "update.living_room_spot_3",
get entity() { return {state: shadowState["update.living_room_spot_3"].state, attributes: shadowState["update.living_room_spot_3"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.living_room_spot_3"})}
},

['nibe_133481_update']: {
  entity_id: "update.nibe_133481_update",
get entity() { return {state: shadowState["update.nibe_133481_update"].state, attributes: shadowState["update.nibe_133481_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.nibe_133481_update"})}
},

['browser_mod_update']: {
  entity_id: "update.browser_mod_update",
get entity() { return {state: shadowState["update.browser_mod_update"].state, attributes: shadowState["update.browser_mod_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.browser_mod_update"})}
},

['valetudo_map_card_update']: {
  entity_id: "update.valetudo_map_card_update",
get entity() { return {state: shadowState["update.valetudo_map_card_update"].state, attributes: shadowState["update.valetudo_map_card_update"].attributes} as UpdateProperties},
install(attributes: UpdateInstallAttributes) { return callService("update", "install", attributes, {entity_id: "update.valetudo_map_card_update"})}
},

}
