import {callService, shadowState, Switch, SwitchProperties, SwitchStateMapper} from "@herja/core"
export type SwitchIDs = "adaptive_lighting_bedroom" | "adaptive_lighting_sleep_mode_bedroom" | "adaptive_lighting_adapt_color_bedroom" | "adaptive_lighting_adapt_brightness_bedroom" | "adaptive_lighting_hall" | "adaptive_lighting_sleep_mode_hall" | "adaptive_lighting_adapt_color_hall" | "adaptive_lighting_adapt_brightness_hall" | "adaptive_lighting_living_room" | "adaptive_lighting_sleep_mode_living_room" | "adaptive_lighting_adapt_color_living_room" | "adaptive_lighting_adapt_brightness_living_room" | "wallbox_portal_pause_resume" | "g4_doorbell_status_light_on" | "g4_doorbell_high_fps" | "g4_doorbell_system_sounds" | "g4_doorbell_overlay_show_name" | "g4_doorbell_overlay_show_date" | "g4_doorbell_overlay_show_logo" | "g4_doorbell_overlay_show_bitrate" | "g4_doorbell_detections_motion" | "g4_doorbell_detections_person" | "g4_doorbell_detections_vehicle" | "g4_doorbell_detections_package" | "dream_machine_pro_analytics_enabled" | "dream_machine_pro_insights_enabled" | "g4_doorbell_privacy_mode" | "hall_stairs_switch" | "bedside_lamp" | "bedroom_secondary_lamp" | "garage_button" | "christmas_tree_led_outlet" | "washing_machine_plug" | "bedroom_switch" | "siren_alarm" | "siren_temperature_alarm" | "siren_humidity_alarm" | "desk_outlet" | "hall_entrance" | "hall_dual_switch_l2" | "hall_dual_switch_l1" | "garden" | "garage_light_switch" | "bedroom_humidifier_switch" | "nibe_133481_48043" | "scene_max_brightness" | "scene_medium_brightness" | "living_room_humidifier" | "bedroom_humidifier" | "siren" | "living_room_bluetooth_inquiries" | "bedroom_bluetooth_inquiries" | "garage_bluetooth_inquiries" | "0x00124b00239c172d" | "g4_doorbell_hdr_mode" | "g4_bullet_overlay_show_name" | "g4_bullet_overlay_show_date" | "g4_bullet_overlay_show_logo" | "g4_bullet_overlay_show_bitrate" | "g4_bullet_detections_motion" | "g4_bullet_privacy_mode" | "uvc_g4_bullet"
export type SwitchEntities = Record<SwitchIDs, Switch>

export const switches: Switch<SwitchIDs> = {

['adaptive_lighting_bedroom']: {
  entity_id: "switch.adaptive_lighting_bedroom",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_bedroom"].state as string], attributes: shadowState["switch.adaptive_lighting_bedroom"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_bedroom"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_bedroom"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_bedroom"})},
isOn() { return shadowState["switch.adaptive_lighting_bedroom"].state === "on" }
},

['adaptive_lighting_sleep_mode_bedroom']: {
  entity_id: "switch.adaptive_lighting_sleep_mode_bedroom",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_sleep_mode_bedroom"].state as string], attributes: shadowState["switch.adaptive_lighting_sleep_mode_bedroom"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_sleep_mode_bedroom"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_sleep_mode_bedroom"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_sleep_mode_bedroom"})},
isOn() { return shadowState["switch.adaptive_lighting_sleep_mode_bedroom"].state === "on" }
},

['adaptive_lighting_adapt_color_bedroom']: {
  entity_id: "switch.adaptive_lighting_adapt_color_bedroom",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_color_bedroom"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_color_bedroom"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_color_bedroom"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_color_bedroom"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_color_bedroom"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_color_bedroom"].state === "on" }
},

['adaptive_lighting_adapt_brightness_bedroom']: {
  entity_id: "switch.adaptive_lighting_adapt_brightness_bedroom",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_brightness_bedroom"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_brightness_bedroom"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_brightness_bedroom"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_brightness_bedroom"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_brightness_bedroom"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_brightness_bedroom"].state === "on" }
},

['adaptive_lighting_hall']: {
  entity_id: "switch.adaptive_lighting_hall",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_hall"].state as string], attributes: shadowState["switch.adaptive_lighting_hall"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_hall"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_hall"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_hall"})},
isOn() { return shadowState["switch.adaptive_lighting_hall"].state === "on" }
},

['adaptive_lighting_sleep_mode_hall']: {
  entity_id: "switch.adaptive_lighting_sleep_mode_hall",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_sleep_mode_hall"].state as string], attributes: shadowState["switch.adaptive_lighting_sleep_mode_hall"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_sleep_mode_hall"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_sleep_mode_hall"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_sleep_mode_hall"})},
isOn() { return shadowState["switch.adaptive_lighting_sleep_mode_hall"].state === "on" }
},

['adaptive_lighting_adapt_color_hall']: {
  entity_id: "switch.adaptive_lighting_adapt_color_hall",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_color_hall"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_color_hall"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_color_hall"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_color_hall"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_color_hall"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_color_hall"].state === "on" }
},

['adaptive_lighting_adapt_brightness_hall']: {
  entity_id: "switch.adaptive_lighting_adapt_brightness_hall",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_brightness_hall"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_brightness_hall"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_brightness_hall"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_brightness_hall"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_brightness_hall"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_brightness_hall"].state === "on" }
},

['adaptive_lighting_living_room']: {
  entity_id: "switch.adaptive_lighting_living_room",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_living_room"].state as string], attributes: shadowState["switch.adaptive_lighting_living_room"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_living_room"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_living_room"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_living_room"})},
isOn() { return shadowState["switch.adaptive_lighting_living_room"].state === "on" }
},

['adaptive_lighting_sleep_mode_living_room']: {
  entity_id: "switch.adaptive_lighting_sleep_mode_living_room",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_sleep_mode_living_room"].state as string], attributes: shadowState["switch.adaptive_lighting_sleep_mode_living_room"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_sleep_mode_living_room"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_sleep_mode_living_room"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_sleep_mode_living_room"})},
isOn() { return shadowState["switch.adaptive_lighting_sleep_mode_living_room"].state === "on" }
},

['adaptive_lighting_adapt_color_living_room']: {
  entity_id: "switch.adaptive_lighting_adapt_color_living_room",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_color_living_room"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_color_living_room"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_color_living_room"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_color_living_room"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_color_living_room"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_color_living_room"].state === "on" }
},

['adaptive_lighting_adapt_brightness_living_room']: {
  entity_id: "switch.adaptive_lighting_adapt_brightness_living_room",
get entity() { return {state: SwitchStateMapper[shadowState["switch.adaptive_lighting_adapt_brightness_living_room"].state as string], attributes: shadowState["switch.adaptive_lighting_adapt_brightness_living_room"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "adaptive_lighting_adapt_brightness_living_room"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "adaptive_lighting_adapt_brightness_living_room"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "adaptive_lighting_adapt_brightness_living_room"})},
isOn() { return shadowState["switch.adaptive_lighting_adapt_brightness_living_room"].state === "on" }
},

['wallbox_portal_pause_resume']: {
  entity_id: "switch.wallbox_portal_pause_resume",
get entity() { return {state: SwitchStateMapper[shadowState["switch.wallbox_portal_pause_resume"].state as string], attributes: shadowState["switch.wallbox_portal_pause_resume"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "wallbox_portal_pause_resume"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "wallbox_portal_pause_resume"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "wallbox_portal_pause_resume"})},
isOn() { return shadowState["switch.wallbox_portal_pause_resume"].state === "on" }
},

['g4_doorbell_status_light_on']: {
  entity_id: "switch.g4_doorbell_status_light_on",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_status_light_on"].state as string], attributes: shadowState["switch.g4_doorbell_status_light_on"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_status_light_on"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_status_light_on"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_status_light_on"})},
isOn() { return shadowState["switch.g4_doorbell_status_light_on"].state === "on" }
},

['g4_doorbell_high_fps']: {
  entity_id: "switch.g4_doorbell_high_fps",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_high_fps"].state as string], attributes: shadowState["switch.g4_doorbell_high_fps"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_high_fps"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_high_fps"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_high_fps"})},
isOn() { return shadowState["switch.g4_doorbell_high_fps"].state === "on" }
},

['g4_doorbell_system_sounds']: {
  entity_id: "switch.g4_doorbell_system_sounds",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_system_sounds"].state as string], attributes: shadowState["switch.g4_doorbell_system_sounds"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_system_sounds"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_system_sounds"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_system_sounds"})},
isOn() { return shadowState["switch.g4_doorbell_system_sounds"].state === "on" }
},

['g4_doorbell_overlay_show_name']: {
  entity_id: "switch.g4_doorbell_overlay_show_name",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_overlay_show_name"].state as string], attributes: shadowState["switch.g4_doorbell_overlay_show_name"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_overlay_show_name"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_overlay_show_name"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_overlay_show_name"})},
isOn() { return shadowState["switch.g4_doorbell_overlay_show_name"].state === "on" }
},

['g4_doorbell_overlay_show_date']: {
  entity_id: "switch.g4_doorbell_overlay_show_date",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_overlay_show_date"].state as string], attributes: shadowState["switch.g4_doorbell_overlay_show_date"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_overlay_show_date"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_overlay_show_date"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_overlay_show_date"})},
isOn() { return shadowState["switch.g4_doorbell_overlay_show_date"].state === "on" }
},

['g4_doorbell_overlay_show_logo']: {
  entity_id: "switch.g4_doorbell_overlay_show_logo",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_overlay_show_logo"].state as string], attributes: shadowState["switch.g4_doorbell_overlay_show_logo"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_overlay_show_logo"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_overlay_show_logo"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_overlay_show_logo"})},
isOn() { return shadowState["switch.g4_doorbell_overlay_show_logo"].state === "on" }
},

['g4_doorbell_overlay_show_bitrate']: {
  entity_id: "switch.g4_doorbell_overlay_show_bitrate",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_overlay_show_bitrate"].state as string], attributes: shadowState["switch.g4_doorbell_overlay_show_bitrate"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_overlay_show_bitrate"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_overlay_show_bitrate"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_overlay_show_bitrate"})},
isOn() { return shadowState["switch.g4_doorbell_overlay_show_bitrate"].state === "on" }
},

['g4_doorbell_detections_motion']: {
  entity_id: "switch.g4_doorbell_detections_motion",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_detections_motion"].state as string], attributes: shadowState["switch.g4_doorbell_detections_motion"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_detections_motion"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_detections_motion"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_detections_motion"})},
isOn() { return shadowState["switch.g4_doorbell_detections_motion"].state === "on" }
},

['g4_doorbell_detections_person']: {
  entity_id: "switch.g4_doorbell_detections_person",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_detections_person"].state as string], attributes: shadowState["switch.g4_doorbell_detections_person"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_detections_person"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_detections_person"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_detections_person"})},
isOn() { return shadowState["switch.g4_doorbell_detections_person"].state === "on" }
},

['g4_doorbell_detections_vehicle']: {
  entity_id: "switch.g4_doorbell_detections_vehicle",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_detections_vehicle"].state as string], attributes: shadowState["switch.g4_doorbell_detections_vehicle"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_detections_vehicle"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_detections_vehicle"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_detections_vehicle"})},
isOn() { return shadowState["switch.g4_doorbell_detections_vehicle"].state === "on" }
},

['g4_doorbell_detections_package']: {
  entity_id: "switch.g4_doorbell_detections_package",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_detections_package"].state as string], attributes: shadowState["switch.g4_doorbell_detections_package"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_detections_package"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_detections_package"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_detections_package"})},
isOn() { return shadowState["switch.g4_doorbell_detections_package"].state === "on" }
},

['dream_machine_pro_analytics_enabled']: {
  entity_id: "switch.dream_machine_pro_analytics_enabled",
get entity() { return {state: SwitchStateMapper[shadowState["switch.dream_machine_pro_analytics_enabled"].state as string], attributes: shadowState["switch.dream_machine_pro_analytics_enabled"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "dream_machine_pro_analytics_enabled"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "dream_machine_pro_analytics_enabled"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "dream_machine_pro_analytics_enabled"})},
isOn() { return shadowState["switch.dream_machine_pro_analytics_enabled"].state === "on" }
},

['dream_machine_pro_insights_enabled']: {
  entity_id: "switch.dream_machine_pro_insights_enabled",
get entity() { return {state: SwitchStateMapper[shadowState["switch.dream_machine_pro_insights_enabled"].state as string], attributes: shadowState["switch.dream_machine_pro_insights_enabled"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "dream_machine_pro_insights_enabled"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "dream_machine_pro_insights_enabled"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "dream_machine_pro_insights_enabled"})},
isOn() { return shadowState["switch.dream_machine_pro_insights_enabled"].state === "on" }
},

['g4_doorbell_privacy_mode']: {
  entity_id: "switch.g4_doorbell_privacy_mode",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_privacy_mode"].state as string], attributes: shadowState["switch.g4_doorbell_privacy_mode"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_privacy_mode"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_privacy_mode"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_privacy_mode"})},
isOn() { return shadowState["switch.g4_doorbell_privacy_mode"].state === "on" }
},

['hall_stairs_switch']: {
  entity_id: "switch.hall_stairs_switch",
get entity() { return {state: SwitchStateMapper[shadowState["switch.hall_stairs_switch"].state as string], attributes: shadowState["switch.hall_stairs_switch"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "hall_stairs_switch"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "hall_stairs_switch"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "hall_stairs_switch"})},
isOn() { return shadowState["switch.hall_stairs_switch"].state === "on" }
},

['bedside_lamp']: {
  entity_id: "switch.bedside_lamp",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedside_lamp"].state as string], attributes: shadowState["switch.bedside_lamp"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedside_lamp"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedside_lamp"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedside_lamp"})},
isOn() { return shadowState["switch.bedside_lamp"].state === "on" }
},

['bedroom_secondary_lamp']: {
  entity_id: "switch.bedroom_secondary_lamp",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedroom_secondary_lamp"].state as string], attributes: shadowState["switch.bedroom_secondary_lamp"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedroom_secondary_lamp"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedroom_secondary_lamp"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedroom_secondary_lamp"})},
isOn() { return shadowState["switch.bedroom_secondary_lamp"].state === "on" }
},

['garage_button']: {
  entity_id: "switch.garage_button",
get entity() { return {state: SwitchStateMapper[shadowState["switch.garage_button"].state as string], attributes: shadowState["switch.garage_button"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "garage_button"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "garage_button"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "garage_button"})},
isOn() { return shadowState["switch.garage_button"].state === "on" }
},

['christmas_tree_led_outlet']: {
  entity_id: "switch.christmas_tree_led_outlet",
get entity() { return {state: SwitchStateMapper[shadowState["switch.christmas_tree_led_outlet"].state as string], attributes: shadowState["switch.christmas_tree_led_outlet"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "christmas_tree_led_outlet"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "christmas_tree_led_outlet"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "christmas_tree_led_outlet"})},
isOn() { return shadowState["switch.christmas_tree_led_outlet"].state === "on" }
},

['washing_machine_plug']: {
  entity_id: "switch.washing_machine_plug",
get entity() { return {state: SwitchStateMapper[shadowState["switch.washing_machine_plug"].state as string], attributes: shadowState["switch.washing_machine_plug"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "washing_machine_plug"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "washing_machine_plug"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "washing_machine_plug"})},
isOn() { return shadowState["switch.washing_machine_plug"].state === "on" }
},

['bedroom_switch']: {
  entity_id: "switch.bedroom_switch",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedroom_switch"].state as string], attributes: shadowState["switch.bedroom_switch"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedroom_switch"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedroom_switch"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedroom_switch"})},
isOn() { return shadowState["switch.bedroom_switch"].state === "on" }
},

['siren_alarm']: {
  entity_id: "switch.siren_alarm",
get entity() { return {state: SwitchStateMapper[shadowState["switch.siren_alarm"].state as string], attributes: shadowState["switch.siren_alarm"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "siren_alarm"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "siren_alarm"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "siren_alarm"})},
isOn() { return shadowState["switch.siren_alarm"].state === "on" }
},

['siren_temperature_alarm']: {
  entity_id: "switch.siren_temperature_alarm",
get entity() { return {state: SwitchStateMapper[shadowState["switch.siren_temperature_alarm"].state as string], attributes: shadowState["switch.siren_temperature_alarm"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "siren_temperature_alarm"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "siren_temperature_alarm"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "siren_temperature_alarm"})},
isOn() { return shadowState["switch.siren_temperature_alarm"].state === "on" }
},

['siren_humidity_alarm']: {
  entity_id: "switch.siren_humidity_alarm",
get entity() { return {state: SwitchStateMapper[shadowState["switch.siren_humidity_alarm"].state as string], attributes: shadowState["switch.siren_humidity_alarm"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "siren_humidity_alarm"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "siren_humidity_alarm"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "siren_humidity_alarm"})},
isOn() { return shadowState["switch.siren_humidity_alarm"].state === "on" }
},

['desk_outlet']: {
  entity_id: "switch.desk_outlet",
get entity() { return {state: SwitchStateMapper[shadowState["switch.desk_outlet"].state as string], attributes: shadowState["switch.desk_outlet"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "desk_outlet"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "desk_outlet"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "desk_outlet"})},
isOn() { return shadowState["switch.desk_outlet"].state === "on" }
},

['hall_entrance']: {
  entity_id: "switch.hall_entrance",
get entity() { return {state: SwitchStateMapper[shadowState["switch.hall_entrance"].state as string], attributes: shadowState["switch.hall_entrance"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "hall_entrance"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "hall_entrance"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "hall_entrance"})},
isOn() { return shadowState["switch.hall_entrance"].state === "on" }
},

['hall_dual_switch_l2']: {
  entity_id: "switch.hall_dual_switch_l2",
get entity() { return {state: SwitchStateMapper[shadowState["switch.hall_dual_switch_l2"].state as string], attributes: shadowState["switch.hall_dual_switch_l2"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "hall_dual_switch_l2"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "hall_dual_switch_l2"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "hall_dual_switch_l2"})},
isOn() { return shadowState["switch.hall_dual_switch_l2"].state === "on" }
},

['hall_dual_switch_l1']: {
  entity_id: "switch.hall_dual_switch_l1",
get entity() { return {state: SwitchStateMapper[shadowState["switch.hall_dual_switch_l1"].state as string], attributes: shadowState["switch.hall_dual_switch_l1"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "hall_dual_switch_l1"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "hall_dual_switch_l1"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "hall_dual_switch_l1"})},
isOn() { return shadowState["switch.hall_dual_switch_l1"].state === "on" }
},

['garden']: {
  entity_id: "switch.garden",
get entity() { return {state: SwitchStateMapper[shadowState["switch.garden"].state as string], attributes: shadowState["switch.garden"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "garden"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "garden"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "garden"})},
isOn() { return shadowState["switch.garden"].state === "on" }
},

['garage_light_switch']: {
  entity_id: "switch.garage_light_switch",
get entity() { return {state: SwitchStateMapper[shadowState["switch.garage_light_switch"].state as string], attributes: shadowState["switch.garage_light_switch"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "garage_light_switch"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "garage_light_switch"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "garage_light_switch"})},
isOn() { return shadowState["switch.garage_light_switch"].state === "on" }
},

['bedroom_humidifier_switch']: {
  entity_id: "switch.bedroom_humidifier_switch",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedroom_humidifier_switch"].state as string], attributes: shadowState["switch.bedroom_humidifier_switch"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedroom_humidifier_switch"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedroom_humidifier_switch"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedroom_humidifier_switch"})},
isOn() { return shadowState["switch.bedroom_humidifier_switch"].state === "on" }
},

['nibe_133481_48043']: {
  entity_id: "switch.nibe_133481_48043",
get entity() { return {state: SwitchStateMapper[shadowState["switch.nibe_133481_48043"].state as string], attributes: shadowState["switch.nibe_133481_48043"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "nibe_133481_48043"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "nibe_133481_48043"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "nibe_133481_48043"})},
isOn() { return shadowState["switch.nibe_133481_48043"].state === "on" }
},

['scene_max_brightness']: {
  entity_id: "switch.scene_max_brightness",
get entity() { return {state: SwitchStateMapper[shadowState["switch.scene_max_brightness"].state as string], attributes: shadowState["switch.scene_max_brightness"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "scene_max_brightness"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "scene_max_brightness"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "scene_max_brightness"})},
isOn() { return shadowState["switch.scene_max_brightness"].state === "on" }
},

['scene_medium_brightness']: {
  entity_id: "switch.scene_medium_brightness",
get entity() { return {state: SwitchStateMapper[shadowState["switch.scene_medium_brightness"].state as string], attributes: shadowState["switch.scene_medium_brightness"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "scene_medium_brightness"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "scene_medium_brightness"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "scene_medium_brightness"})},
isOn() { return shadowState["switch.scene_medium_brightness"].state === "on" }
},

['living_room_humidifier']: {
  entity_id: "switch.living_room_humidifier",
get entity() { return {state: SwitchStateMapper[shadowState["switch.living_room_humidifier"].state as string], attributes: shadowState["switch.living_room_humidifier"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "living_room_humidifier"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "living_room_humidifier"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "living_room_humidifier"})},
isOn() { return shadowState["switch.living_room_humidifier"].state === "on" }
},

['bedroom_humidifier']: {
  entity_id: "switch.bedroom_humidifier",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedroom_humidifier"].state as string], attributes: shadowState["switch.bedroom_humidifier"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedroom_humidifier"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedroom_humidifier"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedroom_humidifier"})},
isOn() { return shadowState["switch.bedroom_humidifier"].state === "on" }
},

['siren']: {
  entity_id: "switch.siren",
get entity() { return {state: SwitchStateMapper[shadowState["switch.siren"].state as string], attributes: shadowState["switch.siren"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "siren"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "siren"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "siren"})},
isOn() { return shadowState["switch.siren"].state === "on" }
},

['living_room_bluetooth_inquiries']: {
  entity_id: "switch.living_room_bluetooth_inquiries",
get entity() { return {state: SwitchStateMapper[shadowState["switch.living_room_bluetooth_inquiries"].state as string], attributes: shadowState["switch.living_room_bluetooth_inquiries"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "living_room_bluetooth_inquiries"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "living_room_bluetooth_inquiries"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "living_room_bluetooth_inquiries"})},
isOn() { return shadowState["switch.living_room_bluetooth_inquiries"].state === "on" }
},

['bedroom_bluetooth_inquiries']: {
  entity_id: "switch.bedroom_bluetooth_inquiries",
get entity() { return {state: SwitchStateMapper[shadowState["switch.bedroom_bluetooth_inquiries"].state as string], attributes: shadowState["switch.bedroom_bluetooth_inquiries"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "bedroom_bluetooth_inquiries"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "bedroom_bluetooth_inquiries"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "bedroom_bluetooth_inquiries"})},
isOn() { return shadowState["switch.bedroom_bluetooth_inquiries"].state === "on" }
},

['garage_bluetooth_inquiries']: {
  entity_id: "switch.garage_bluetooth_inquiries",
get entity() { return {state: SwitchStateMapper[shadowState["switch.garage_bluetooth_inquiries"].state as string], attributes: shadowState["switch.garage_bluetooth_inquiries"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "garage_bluetooth_inquiries"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "garage_bluetooth_inquiries"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "garage_bluetooth_inquiries"})},
isOn() { return shadowState["switch.garage_bluetooth_inquiries"].state === "on" }
},

['0x00124b00239c172d']: {
  entity_id: "switch.0x00124b00239c172d",
get entity() { return {state: SwitchStateMapper[shadowState["switch.0x00124b00239c172d"].state as string], attributes: shadowState["switch.0x00124b00239c172d"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "0x00124b00239c172d"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "0x00124b00239c172d"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "0x00124b00239c172d"})},
isOn() { return shadowState["switch.0x00124b00239c172d"].state === "on" }
},

['g4_doorbell_hdr_mode']: {
  entity_id: "switch.g4_doorbell_hdr_mode",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_doorbell_hdr_mode"].state as string], attributes: shadowState["switch.g4_doorbell_hdr_mode"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_doorbell_hdr_mode"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_doorbell_hdr_mode"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_doorbell_hdr_mode"})},
isOn() { return shadowState["switch.g4_doorbell_hdr_mode"].state === "on" }
},

['g4_bullet_overlay_show_name']: {
  entity_id: "switch.g4_bullet_overlay_show_name",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_overlay_show_name"].state as string], attributes: shadowState["switch.g4_bullet_overlay_show_name"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_overlay_show_name"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_overlay_show_name"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_overlay_show_name"})},
isOn() { return shadowState["switch.g4_bullet_overlay_show_name"].state === "on" }
},

['g4_bullet_overlay_show_date']: {
  entity_id: "switch.g4_bullet_overlay_show_date",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_overlay_show_date"].state as string], attributes: shadowState["switch.g4_bullet_overlay_show_date"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_overlay_show_date"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_overlay_show_date"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_overlay_show_date"})},
isOn() { return shadowState["switch.g4_bullet_overlay_show_date"].state === "on" }
},

['g4_bullet_overlay_show_logo']: {
  entity_id: "switch.g4_bullet_overlay_show_logo",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_overlay_show_logo"].state as string], attributes: shadowState["switch.g4_bullet_overlay_show_logo"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_overlay_show_logo"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_overlay_show_logo"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_overlay_show_logo"})},
isOn() { return shadowState["switch.g4_bullet_overlay_show_logo"].state === "on" }
},

['g4_bullet_overlay_show_bitrate']: {
  entity_id: "switch.g4_bullet_overlay_show_bitrate",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_overlay_show_bitrate"].state as string], attributes: shadowState["switch.g4_bullet_overlay_show_bitrate"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_overlay_show_bitrate"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_overlay_show_bitrate"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_overlay_show_bitrate"})},
isOn() { return shadowState["switch.g4_bullet_overlay_show_bitrate"].state === "on" }
},

['g4_bullet_detections_motion']: {
  entity_id: "switch.g4_bullet_detections_motion",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_detections_motion"].state as string], attributes: shadowState["switch.g4_bullet_detections_motion"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_detections_motion"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_detections_motion"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_detections_motion"})},
isOn() { return shadowState["switch.g4_bullet_detections_motion"].state === "on" }
},

['g4_bullet_privacy_mode']: {
  entity_id: "switch.g4_bullet_privacy_mode",
get entity() { return {state: SwitchStateMapper[shadowState["switch.g4_bullet_privacy_mode"].state as string], attributes: shadowState["switch.g4_bullet_privacy_mode"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "g4_bullet_privacy_mode"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "g4_bullet_privacy_mode"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "g4_bullet_privacy_mode"})},
isOn() { return shadowState["switch.g4_bullet_privacy_mode"].state === "on" }
},

['uvc_g4_bullet']: {
  entity_id: "switch.uvc_g4_bullet",
get entity() { return {state: SwitchStateMapper[shadowState["switch.uvc_g4_bullet"].state as string], attributes: shadowState["switch.uvc_g4_bullet"].attributes} as SwitchProperties},
turnOff() { return callService("switch", "turn_off", {}, {entity_id: "uvc_g4_bullet"})},
turnOn() { return callService("switch", "turn_on", {}, {entity_id: "uvc_g4_bullet"})},
toggle() { return callService("switch", "toggle", {}, {entity_id: "uvc_g4_bullet"})},
isOn() { return shadowState["switch.uvc_g4_bullet"].state === "on" }
},

}
