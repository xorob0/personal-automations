import {callService, shadowState, Switch} from "@herja/core"
        export type SwitchIDs = "wallbox_portal_pause_resume" | "bedroom_switch" | "siren_alarm" | "siren_temperature_alarm" | "siren_humidity_alarm" | "desk_outlet" | "hall_entrance" | "hall_dual_switch_l2" | "hall_dual_switch_l1" | "garden" | "garage_light_switch" | "bedroom_humidifier_switch" | "bedside_lamp" | "bedroom_secondary_lamp" | "garage_button" | "coffee_machine_outlet" | "hall_stairs_switch" | "nibe_133481_48043" | "scene_max_brightness" | "scene_medium_brightness" | "living_room_humidifier" | "bedroom_humidifier" | "siren" | "living_room_bluetooth_inquiries" | "bedroom_bluetooth_inquiries" | "garage_bluetooth_inquiries" | "0x00124b00239c172d" | "adaptive_lighting_bedroom" | "adaptive_lighting_sleep_mode_bedroom" | "adaptive_lighting_adapt_color_bedroom" | "adaptive_lighting_adapt_brightness_bedroom" | "adaptive_lighting_hall" | "adaptive_lighting_sleep_mode_hall" | "adaptive_lighting_adapt_color_hall" | "adaptive_lighting_adapt_brightness_hall" | "adaptive_lighting_living_room" | "adaptive_lighting_sleep_mode_living_room" | "adaptive_lighting_adapt_color_living_room" | "adaptive_lighting_adapt_brightness_living_room"
export const switches: Switch<SwitchIDs> = {
  
  ["wallbox_portal_pause_resume"]: {
    entity_id: "switch.wallbox_portal_pause_resume",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    isOn: () => shadowState["switch.wallbox_portal_pause_resume"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.wallbox_portal_pause_resume"}),
    get state() { return shadowState["switch.wallbox_portal_pause_resume"]},
  },

  ["bedroom_switch"]: {
    entity_id: "switch.bedroom_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_switch"}),
    isOn: () => shadowState["switch.bedroom_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_switch"}),
    get state() { return shadowState["switch.bedroom_switch"]},
  },

  ["siren_alarm"]: {
    entity_id: "switch.siren_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_alarm"}),
    isOn: () => shadowState["switch.siren_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_alarm"}),
    get state() { return shadowState["switch.siren_alarm"]},
  },

  ["siren_temperature_alarm"]: {
    entity_id: "switch.siren_temperature_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    isOn: () => shadowState["switch.siren_temperature_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_temperature_alarm"}),
    get state() { return shadowState["switch.siren_temperature_alarm"]},
  },

  ["siren_humidity_alarm"]: {
    entity_id: "switch.siren_humidity_alarm",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    isOn: () => shadowState["switch.siren_humidity_alarm"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.siren_humidity_alarm"}),
    get state() { return shadowState["switch.siren_humidity_alarm"]},
  },

  ["desk_outlet"]: {
    entity_id: "switch.desk_outlet",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.desk_outlet"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.desk_outlet"}),
    isOn: () => shadowState["switch.desk_outlet"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.desk_outlet"}),
    get state() { return shadowState["switch.desk_outlet"]},
  },

  ["hall_entrance"]: {
    entity_id: "switch.hall_entrance",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_entrance"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_entrance"}),
    isOn: () => shadowState["switch.hall_entrance"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_entrance"}),
    get state() { return shadowState["switch.hall_entrance"]},
  },

  ["hall_dual_switch_l2"]: {
    entity_id: "switch.hall_dual_switch_l2",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    isOn: () => shadowState["switch.hall_dual_switch_l2"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_dual_switch_l2"}),
    get state() { return shadowState["switch.hall_dual_switch_l2"]},
  },

  ["hall_dual_switch_l1"]: {
    entity_id: "switch.hall_dual_switch_l1",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    isOn: () => shadowState["switch.hall_dual_switch_l1"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_dual_switch_l1"}),
    get state() { return shadowState["switch.hall_dual_switch_l1"]},
  },

  ["garden"]: {
    entity_id: "switch.garden",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garden"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garden"}),
    isOn: () => shadowState["switch.garden"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garden"}),
    get state() { return shadowState["switch.garden"]},
  },

  ["garage_light_switch"]: {
    entity_id: "switch.garage_light_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garage_light_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garage_light_switch"}),
    isOn: () => shadowState["switch.garage_light_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garage_light_switch"}),
    get state() { return shadowState["switch.garage_light_switch"]},
  },

  ["bedroom_humidifier_switch"]: {
    entity_id: "switch.bedroom_humidifier_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    isOn: () => shadowState["switch.bedroom_humidifier_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_humidifier_switch"}),
    get state() { return shadowState["switch.bedroom_humidifier_switch"]},
  },

  ["bedside_lamp"]: {
    entity_id: "switch.bedside_lamp",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedside_lamp"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedside_lamp"}),
    isOn: () => shadowState["switch.bedside_lamp"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedside_lamp"}),
    get state() { return shadowState["switch.bedside_lamp"]},
  },

  ["bedroom_secondary_lamp"]: {
    entity_id: "switch.bedroom_secondary_lamp",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    isOn: () => shadowState["switch.bedroom_secondary_lamp"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.bedroom_secondary_lamp"}),
    get state() { return shadowState["switch.bedroom_secondary_lamp"]},
  },

  ["garage_button"]: {
    entity_id: "switch.garage_button",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.garage_button"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.garage_button"}),
    isOn: () => shadowState["switch.garage_button"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.garage_button"}),
    get state() { return shadowState["switch.garage_button"]},
  },

  ["coffee_machine_outlet"]: {
    entity_id: "switch.coffee_machine_outlet",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    isOn: () => shadowState["switch.coffee_machine_outlet"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.coffee_machine_outlet"}),
    get state() { return shadowState["switch.coffee_machine_outlet"]},
  },

  ["hall_stairs_switch"]: {
    entity_id: "switch.hall_stairs_switch",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    isOn: () => shadowState["switch.hall_stairs_switch"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.hall_stairs_switch"}),
    get state() { return shadowState["switch.hall_stairs_switch"]},
  },

  ["nibe_133481_48043"]: {
    entity_id: "switch.nibe_133481_48043",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    isOn: () => shadowState["switch.nibe_133481_48043"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.nibe_133481_48043"}),
    get state() { return shadowState["switch.nibe_133481_48043"]},
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

  ["0x00124b00239c172d"]: {
    entity_id: "switch.0x00124b00239c172d",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.0x00124b00239c172d"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.0x00124b00239c172d"}),
    isOn: () => shadowState["switch.0x00124b00239c172d"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.0x00124b00239c172d"}),
    get state() { return shadowState["switch.0x00124b00239c172d"]},
  },

  ["adaptive_lighting_bedroom"]: {
    entity_id: "switch.adaptive_lighting_bedroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_bedroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_bedroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_bedroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_bedroom"}),
    get state() { return shadowState["switch.adaptive_lighting_bedroom"]},
  },

  ["adaptive_lighting_sleep_mode_bedroom"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_bedroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bedroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bedroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_bedroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_bedroom"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_bedroom"]},
  },

  ["adaptive_lighting_adapt_color_bedroom"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_bedroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bedroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bedroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_bedroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_bedroom"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_bedroom"]},
  },

  ["adaptive_lighting_adapt_brightness_bedroom"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_bedroom",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bedroom"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bedroom"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_bedroom"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_bedroom"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_bedroom"]},
  },

  ["adaptive_lighting_hall"]: {
    entity_id: "switch.adaptive_lighting_hall",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_hall"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_hall"}),
    isOn: () => shadowState["switch.adaptive_lighting_hall"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_hall"}),
    get state() { return shadowState["switch.adaptive_lighting_hall"]},
  },

  ["adaptive_lighting_sleep_mode_hall"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_hall",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_hall"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_hall"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_hall"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_hall"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_hall"]},
  },

  ["adaptive_lighting_adapt_color_hall"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_hall",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_hall"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_hall"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_hall"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_hall"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_hall"]},
  },

  ["adaptive_lighting_adapt_brightness_hall"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_hall",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_hall"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_hall"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_hall"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_hall"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_hall"]},
  },

  ["adaptive_lighting_living_room"]: {
    entity_id: "switch.adaptive_lighting_living_room",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_living_room"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_living_room"}),
    isOn: () => shadowState["switch.adaptive_lighting_living_room"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_living_room"}),
    get state() { return shadowState["switch.adaptive_lighting_living_room"]},
  },

  ["adaptive_lighting_sleep_mode_living_room"]: {
    entity_id: "switch.adaptive_lighting_sleep_mode_living_room",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_living_room"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_living_room"}),
    isOn: () => shadowState["switch.adaptive_lighting_sleep_mode_living_room"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_sleep_mode_living_room"}),
    get state() { return shadowState["switch.adaptive_lighting_sleep_mode_living_room"]},
  },

  ["adaptive_lighting_adapt_color_living_room"]: {
    entity_id: "switch.adaptive_lighting_adapt_color_living_room",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_living_room"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_living_room"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_color_living_room"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_color_living_room"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_color_living_room"]},
  },

  ["adaptive_lighting_adapt_brightness_living_room"]: {
    entity_id: "switch.adaptive_lighting_adapt_brightness_living_room",
    turn_on: (serviceData = {}) => callService("switch", 'turn_on', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_living_room"}),
    turn_off: (serviceData = {}) => callService("switch", 'turn_off', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_living_room"}),
    isOn: () => shadowState["switch.adaptive_lighting_adapt_brightness_living_room"].state === "on",
    toggle: (serviceData = {}) => callService("switch", 'toggle', serviceData, {entity_id: "switch.adaptive_lighting_adapt_brightness_living_room"}),
    get state() { return shadowState["switch.adaptive_lighting_adapt_brightness_living_room"]},
  },
}
  