import {callService, shadowState, Switch} from "@herja/core"
        export type SwitchIDs = "wallbox_portal_pause_resume" | "adaptive_lighting_floor0" | "adaptive_lighting_sleep_mode_floor0" | "adaptive_lighting_adapt_color_floor0" | "adaptive_lighting_adapt_brightness_floor0" | "adaptive_lighting_floor1" | "adaptive_lighting_sleep_mode_floor1" | "adaptive_lighting_adapt_color_floor1" | "adaptive_lighting_adapt_brightness_floor1" | "adaptive_lighting_bathroom" | "adaptive_lighting_sleep_mode_bathroom" | "adaptive_lighting_adapt_color_bathroom" | "adaptive_lighting_adapt_brightness_bathroom" | "adaptive_lighting_toilets" | "adaptive_lighting_sleep_mode_toilets" | "adaptive_lighting_adapt_color_toilets" | "adaptive_lighting_adapt_brightness_toilets" | "hall_stairs_switch" | "coffee_machine_outlet" | "garage_button" | "bedroom_secondary_lamp" | "bedside_lamp" | "bedroom_humidifier_switch" | "garage_light_switch" | "garden" | "hall_dual_switch_l1" | "hall_dual_switch_l2" | "hall_entrance" | "desk_outlet" | "siren_humidity_alarm" | "siren_temperature_alarm" | "siren_alarm" | "bedroom_switch" | "nibe_133481_48043" | "1_yjx_427_auxheat" | "scene_max_brightness" | "scene_medium_brightness" | "living_room_humidifier" | "bedroom_humidifier" | "siren" | "living_room_bluetooth_inquiries" | "bedroom_bluetooth_inquiries" | "garage_bluetooth_inquiries" | "bedroom_tv"
export const switches: Switch<SwitchIDs> = {
  
  ["wallbox_portal_pause_resume"]: {
    entity_id: "switch.wallbox_portal_pause_resume",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    isOn: () => shadowState["switch.wallbox_portal_pause_resume"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    get state() { return shadowState["switch.wallbox_portal_pause_resume"]},
  },

  ["adaptive_lighting_floor0"]: {
    entity_id: "switch.adaptive_lighting_floor0",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_floor0"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_floor0"}),
    isOn: () => shadowState["switch.adaptive_lighting_floor0"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_floor0"}),
    get state() { return shadowState["switch.adaptive_lighting_floor0"]},
  },

  ["adaptive_lighting_sleep_mode_floor0"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_floor0",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor0"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor0"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_floor0"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor0"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_floor0"]},
  },

  ["adaptive_lighting_adapt_color_floor0"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_floor0",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor0"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor0"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_floor0"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor0"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_floor0"]},
  },

  ["adaptive_lighting_adapt_brightness_floor0"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_floor0",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor0"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor0"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_floor0"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor0"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_floor0"]},
  },

  ["adaptive_lighting_floor1"]: {
    entity_id: "switch.adaptive_lighting_floor1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_floor1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_floor1"}),
    isOn: () => shadowState["switch.adaptive_lighting_floor1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_floor1"}),
    get state() { return shadowState["switch.adaptive_lighting_floor1"]},
  },

  ["adaptive_lighting_sleep_mode_floor1"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_floor1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor1"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_floor1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_floor1"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_floor1"]},
  },

  ["adaptive_lighting_adapt_color_floor1"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_floor1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor1"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_floor1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_floor1"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_floor1"]},
  },

  ["adaptive_lighting_adapt_brightness_floor1"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_floor1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor1"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_floor1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_floor1"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_floor1"]},
  },

  ["adaptive_lighting_bathroom"]: {
    entity_id: "switch.adaptive_lighting_bathroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_bathroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_bathroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_bathroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_bathroom"}),
    get state() { return shadowState["switch.adaptive_lighting_bathroom"]},
  },

  ["adaptive_lighting_sleep_mode_bathroom"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_bathroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bathroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bathroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_bathroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bathroom"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_bathroom"]},
  },

  ["adaptive_lighting_adapt_color_bathroom"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_bathroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bathroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bathroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_bathroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bathroom"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_bathroom"]},
  },

  ["adaptive_lighting_adapt_brightness_bathroom"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_bathroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bathroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bathroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_bathroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bathroom"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_bathroom"]},
  },

  ["adaptive_lighting_toilets"]: {
    entity_id: "switch.adaptive_lighting_toilets",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_toilets"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_toilets"}),
    isOn: () => shadowState["switch.adaptive_lighting_toilets"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_toilets"}),
    get state() { return shadowState["switch.adaptive_lighting_toilets"]},
  },

  ["adaptive_lighting_sleep_mode_toilets"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_toilets",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_toilets"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_toilets"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_toilets"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_toilets"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_toilets"]},
  },

  ["adaptive_lighting_adapt_color_toilets"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_toilets",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_toilets"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_toilets"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_toilets"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_toilets"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_toilets"]},
  },

  ["adaptive_lighting_adapt_brightness_toilets"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_toilets",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_toilets"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_toilets"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_toilets"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_toilets"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_toilets"]},
  },

  ["hall_stairs_switch"]: {
    entity_id: "switch.hall_stairs_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    isOn: () => shadowState["switch.hall_stairs_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    get state() { return shadowState["switch.hall_stairs_switch"]},
  },

  ["coffee_machine_outlet"]: {
    entity_id: "switch.coffee_machine_outlet",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    isOn: () => shadowState["switch.coffee_machine_outlet"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    get state() { return shadowState["switch.coffee_machine_outlet"]},
  },

  ["garage_button"]: {
    entity_id: "switch.garage_button",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garage_button"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garage_button"}),
    isOn: () => shadowState["switch.garage_button"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garage_button"}),
    get state() { return shadowState["switch.garage_button"]},
  },

  ["bedroom_secondary_lamp"]: {
    entity_id: "switch.bedroom_secondary_lamp",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    isOn: () => shadowState["switch.bedroom_secondary_lamp"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    get state() { return shadowState["switch.bedroom_secondary_lamp"]},
  },

  ["bedside_lamp"]: {
    entity_id: "switch.bedside_lamp",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedside_lamp"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedside_lamp"}),
    isOn: () => shadowState["switch.bedside_lamp"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedside_lamp"}),
    get state() { return shadowState["switch.bedside_lamp"]},
  },

  ["bedroom_humidifier_switch"]: {
    entity_id: "switch.bedroom_humidifier_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    isOn: () => shadowState["switch.bedroom_humidifier_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    get state() { return shadowState["switch.bedroom_humidifier_switch"]},
  },

  ["garage_light_switch"]: {
    entity_id: "switch.garage_light_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garage_light_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garage_light_switch"}),
    isOn: () => shadowState["switch.garage_light_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garage_light_switch"}),
    get state() { return shadowState["switch.garage_light_switch"]},
  },

  ["garden"]: {
    entity_id: "switch.garden",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garden"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garden"}),
    isOn: () => shadowState["switch.garden"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garden"}),
    get state() { return shadowState["switch.garden"]},
  },

  ["hall_dual_switch_l1"]: {
    entity_id: "switch.hall_dual_switch_l1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    isOn: () => shadowState["switch.hall_dual_switch_l1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    get state() { return shadowState["switch.hall_dual_switch_l1"]},
  },

  ["hall_dual_switch_l2"]: {
    entity_id: "switch.hall_dual_switch_l2",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    isOn: () => shadowState["switch.hall_dual_switch_l2"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    get state() { return shadowState["switch.hall_dual_switch_l2"]},
  },

  ["hall_entrance"]: {
    entity_id: "switch.hall_entrance",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_entrance"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_entrance"}),
    isOn: () => shadowState["switch.hall_entrance"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_entrance"}),
    get state() { return shadowState["switch.hall_entrance"]},
  },

  ["desk_outlet"]: {
    entity_id: "switch.desk_outlet",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.desk_outlet"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.desk_outlet"}),
    isOn: () => shadowState["switch.desk_outlet"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.desk_outlet"}),
    get state() { return shadowState["switch.desk_outlet"]},
  },

  ["siren_humidity_alarm"]: {
    entity_id: "switch.siren_humidity_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    isOn: () => shadowState["switch.siren_humidity_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    get state() { return shadowState["switch.siren_humidity_alarm"]},
  },

  ["siren_temperature_alarm"]: {
    entity_id: "switch.siren_temperature_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    isOn: () => shadowState["switch.siren_temperature_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    get state() { return shadowState["switch.siren_temperature_alarm"]},
  },

  ["siren_alarm"]: {
    entity_id: "switch.siren_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_alarm"}),
    isOn: () => shadowState["switch.siren_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_alarm"}),
    get state() { return shadowState["switch.siren_alarm"]},
  },

  ["bedroom_switch"]: {
    entity_id: "switch.bedroom_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_switch"}),
    isOn: () => shadowState["switch.bedroom_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_switch"}),
    get state() { return shadowState["switch.bedroom_switch"]},
  },

  ["nibe_133481_48043"]: {
    entity_id: "switch.nibe_133481_48043",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    isOn: () => shadowState["switch.nibe_133481_48043"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    get state() { return shadowState["switch.nibe_133481_48043"]},
  },

  ["1_yjx_427_auxheat"]: {
    entity_id: "switch.1_yjx_427_auxheat",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.1_yjx_427_auxheat"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.1_yjx_427_auxheat"}),
    isOn: () => shadowState["switch.1_yjx_427_auxheat"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.1_yjx_427_auxheat"}),
    get state() { return shadowState["switch.1_yjx_427_auxheat"]},
  },

  ["scene_max_brightness"]: {
    entity_id: "switch.scene_max_brightness",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.scene_max_brightness"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.scene_max_brightness"}),
    isOn: () => shadowState["switch.scene_max_brightness"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.scene_max_brightness"}),
    get state() { return shadowState["switch.scene_max_brightness"]},
  },

  ["scene_medium_brightness"]: {
    entity_id: "switch.scene_medium_brightness",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.scene_medium_brightness"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.scene_medium_brightness"}),
    isOn: () => shadowState["switch.scene_medium_brightness"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.scene_medium_brightness"}),
    get state() { return shadowState["switch.scene_medium_brightness"]},
  },

  ["living_room_humidifier"]: {
    entity_id: "switch.living_room_humidifier",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.living_room_humidifier"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.living_room_humidifier"}),
    isOn: () => shadowState["switch.living_room_humidifier"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.living_room_humidifier"}),
    get state() { return shadowState["switch.living_room_humidifier"]},
  },

  ["bedroom_humidifier"]: {
    entity_id: "switch.bedroom_humidifier",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_humidifier"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_humidifier"}),
    isOn: () => shadowState["switch.bedroom_humidifier"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_humidifier"}),
    get state() { return shadowState["switch.bedroom_humidifier"]},
  },

  ["siren"]: {
    entity_id: "switch.siren",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren"}),
    isOn: () => shadowState["switch.siren"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren"}),
    get state() { return shadowState["switch.siren"]},
  },

  ["living_room_bluetooth_inquiries"]: {
    entity_id: "switch.living_room_bluetooth_inquiries",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.living_room_bluetooth_inquiries"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.living_room_bluetooth_inquiries"}),
    isOn: () => shadowState["switch.living_room_bluetooth_inquiries"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.living_room_bluetooth_inquiries"}),
    get state() { return shadowState["switch.living_room_bluetooth_inquiries"]},
  },

  ["bedroom_bluetooth_inquiries"]: {
    entity_id: "switch.bedroom_bluetooth_inquiries",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_bluetooth_inquiries"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_bluetooth_inquiries"}),
    isOn: () => shadowState["switch.bedroom_bluetooth_inquiries"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_bluetooth_inquiries"}),
    get state() { return shadowState["switch.bedroom_bluetooth_inquiries"]},
  },

  ["garage_bluetooth_inquiries"]: {
    entity_id: "switch.garage_bluetooth_inquiries",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garage_bluetooth_inquiries"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garage_bluetooth_inquiries"}),
    isOn: () => shadowState["switch.garage_bluetooth_inquiries"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garage_bluetooth_inquiries"}),
    get state() { return shadowState["switch.garage_bluetooth_inquiries"]},
  },

  ["bedroom_tv"]: {
    entity_id: "switch.bedroom_tv",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_tv"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_tv"}),
    isOn: () => shadowState["switch.bedroom_tv"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_tv"}),
    get state() { return shadowState["switch.bedroom_tv"]},
  },
}
  