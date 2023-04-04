import {shadowState, BinarySensor, BinarySensorProperties, BinarySensorStateMapper} from "@herja/core"
export type BinarySensorIDs = "octoprint_printing" | "octoprint_printing_error" | "gaby_s_galaxy_s21_bedroom" | "tim_s_galaxy_s22_bedroom" | "gaby_s_galaxy_s21_garage" | "tim_s_galaxy_s22_garage" | "id_4_garage" | "tim_watch_living_room_presence" | "gaby_living_room_presence" | "tim_iphone_living_room_presence" | "gaby_s_galaxy_s21_4" | "tim_s_galaxy_s22_4" | "id_4_2" | "tim_watch_office_presence" | "gaby_office_presence" | "tim_iphone_office_presence" | "sm_g980f_is_charging" | "sm_g980f_headphones" | "sm_g980f_mic_muted" | "sm_g980f_speakerphone" | "sm_g980f_music_active" | "sm_g980f_bluetooth_state" | "sm_g980f_device_locked" | "sm_g980f_device_secure" | "sm_g980f_keyguard_locked" | "sm_g980f_keyguard_secure" | "sm_g980f_mobile_data" | "sm_g980f_mobile_data_roaming" | "sm_g980f_wifi_state" | "tims_macbook_pro_camera_in_use" | "tims_macbook_pro_audio_input_in_use" | "tims_macbook_pro_audio_output_in_use" | "tims_macbook_pro_active" | "tims_macbook_pro_focus" | "tims_iphone_focus" | "bedroom_button_gaby_update_available" | "bedroom_button_tim_update_available" | "bathroom_door_battery_low" | "bathroom_door_contact" | "siren_battery_low" | "garage_electric_door_sensor_closed_contact" | "bedroom_window_bed_contact" | "desk_outlet_update_available" | "bathroom_spot_1_update_available" | "hall_stairs_update_available" | "kitchen_spot_3_update_available" | "garage_car_update_available" | "hall_entrance_update_available" | "garage_fridge_update_available" | "entrance_door_contact" | "toilet_door_battery_low" | "toilet_door_contact" | "garden_door_contact" | "garage_door_contact" | "bedroom_humidifier_switch_update_available" | "garage_remote_update_available" | "garage_electric_door_sensor_open_contact" | "toilet_update_available" | "bedside_lamp_update_available" | "fridge_door_sensor_contact" | "hall_upstairs_spot_1_update_available" | "hall_upstairs_spot_2_update_available" | "hall_upstairs_spot_3_update_available" | "stairs_motion_sensor_tamper" | "stairs_motion_sensor_battery_low" | "stairs_motion_sensor_occupancy" | "bedroom_secondary_lamp_update_available" | "bathroom_spot_2_update_available" | "kitchen_spot_2_update_available" | "dining_room_spot_1_update_available" | "christmas_tree_led_outlet_update_available" | "dining_room_spot_2_update_available" | "kitchen_spot_1_update_available" | "dining_room_spot_3_update_available" | "living_room_spot_3_update_available" | "g4_bullet_is_dark" | "g4_doorbell_is_dark" | "g4_bullet_motion" | "g4_bullet_object_detected" | "g4_bullet_person_detected" | "g4_bullet_vehicle_detected" | "g4_bullet_audio_object_detected" | "g4_doorbell_doorbell" | "g4_doorbell_motion" | "g4_doorbell_object_detected" | "g4_doorbell_person_detected" | "g4_doorbell_vehicle_detected" | "g4_doorbell_package_detected" | "g4_doorbell_audio_object_detected" | "dream_machine_pro_hdd_1" | "dishwasher_washing" | "washing_machine_washing" | "updater" | "my_wall_panel_usb_plugged" | "my_wall_panel_ac_plugged" | "my_wall_panel_charging" | "my_wall_panel_face_detected" | "my_wall_panel_motion_detected" | "gaby_s_galaxy_s21" | "tim_s_galaxy_s22" | "gaby_s_galaxy_s21_3" | "tim_s_galaxy_s22_3" | "id_4" | "nextcloud_system_enable_avatars" | "nextcloud_system_enable_previews" | "nextcloud_system_filelocking_enabled" | "nextcloud_system_debug" | "tim_living_room_presence" | "gaby_s_galaxy_s21_office_2" | "g4_instant_is_dark" | "g4_instant_motion"
export type BinarySensorEntities = Record<BinarySensorIDs, BinarySensor>

export const binary_sensor: BinarySensor<BinarySensorIDs> = {

['octoprint_printing']: {
  entity_id: "binary_sensor.octoprint_printing",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.octoprint_printing"].state as string], attributes: shadowState["binary_sensor.octoprint_printing"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.octoprint_printing"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.octoprint_printing"].state.toString() === "off"}
},

['octoprint_printing_error']: {
  entity_id: "binary_sensor.octoprint_printing_error",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.octoprint_printing_error"].state as string], attributes: shadowState["binary_sensor.octoprint_printing_error"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.octoprint_printing_error"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.octoprint_printing_error"].state.toString() === "off"}
},

['gaby_s_galaxy_s21_bedroom']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21_bedroom",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"].state.toString() === "off"}
},

['tim_s_galaxy_s22_bedroom']: {
  entity_id: "binary_sensor.tim_s_galaxy_s22_bedroom",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"].state as string], attributes: shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"].state.toString() === "off"}
},

['gaby_s_galaxy_s21_garage']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21_garage",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21_garage"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21_garage"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21_garage"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21_garage"].state.toString() === "off"}
},

['tim_s_galaxy_s22_garage']: {
  entity_id: "binary_sensor.tim_s_galaxy_s22_garage",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_s_galaxy_s22_garage"].state as string], attributes: shadowState["binary_sensor.tim_s_galaxy_s22_garage"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_s_galaxy_s22_garage"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_s_galaxy_s22_garage"].state.toString() === "off"}
},

['id_4_garage']: {
  entity_id: "binary_sensor.id_4_garage",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.id_4_garage"].state as string], attributes: shadowState["binary_sensor.id_4_garage"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.id_4_garage"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.id_4_garage"].state.toString() === "off"}
},

['tim_watch_living_room_presence']: {
  entity_id: "binary_sensor.tim_watch_living_room_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_watch_living_room_presence"].state as string], attributes: shadowState["binary_sensor.tim_watch_living_room_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_watch_living_room_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_watch_living_room_presence"].state.toString() === "off"}
},

['gaby_living_room_presence']: {
  entity_id: "binary_sensor.gaby_living_room_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_living_room_presence"].state as string], attributes: shadowState["binary_sensor.gaby_living_room_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_living_room_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_living_room_presence"].state.toString() === "off"}
},

['tim_iphone_living_room_presence']: {
  entity_id: "binary_sensor.tim_iphone_living_room_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_iphone_living_room_presence"].state as string], attributes: shadowState["binary_sensor.tim_iphone_living_room_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_iphone_living_room_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_iphone_living_room_presence"].state.toString() === "off"}
},

['gaby_s_galaxy_s21_4']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21_4",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21_4"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21_4"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21_4"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21_4"].state.toString() === "off"}
},

['tim_s_galaxy_s22_4']: {
  entity_id: "binary_sensor.tim_s_galaxy_s22_4",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_s_galaxy_s22_4"].state as string], attributes: shadowState["binary_sensor.tim_s_galaxy_s22_4"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_s_galaxy_s22_4"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_s_galaxy_s22_4"].state.toString() === "off"}
},

['id_4_2']: {
  entity_id: "binary_sensor.id_4_2",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.id_4_2"].state as string], attributes: shadowState["binary_sensor.id_4_2"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.id_4_2"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.id_4_2"].state.toString() === "off"}
},

['tim_watch_office_presence']: {
  entity_id: "binary_sensor.tim_watch_office_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_watch_office_presence"].state as string], attributes: shadowState["binary_sensor.tim_watch_office_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_watch_office_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_watch_office_presence"].state.toString() === "off"}
},

['gaby_office_presence']: {
  entity_id: "binary_sensor.gaby_office_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_office_presence"].state as string], attributes: shadowState["binary_sensor.gaby_office_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_office_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_office_presence"].state.toString() === "off"}
},

['tim_iphone_office_presence']: {
  entity_id: "binary_sensor.tim_iphone_office_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_iphone_office_presence"].state as string], attributes: shadowState["binary_sensor.tim_iphone_office_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_iphone_office_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_iphone_office_presence"].state.toString() === "off"}
},

['sm_g980f_is_charging']: {
  entity_id: "binary_sensor.sm_g980f_is_charging",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_is_charging"].state as string], attributes: shadowState["binary_sensor.sm_g980f_is_charging"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_is_charging"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_is_charging"].state.toString() === "off"}
},

['sm_g980f_headphones']: {
  entity_id: "binary_sensor.sm_g980f_headphones",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_headphones"].state as string], attributes: shadowState["binary_sensor.sm_g980f_headphones"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_headphones"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_headphones"].state.toString() === "off"}
},

['sm_g980f_mic_muted']: {
  entity_id: "binary_sensor.sm_g980f_mic_muted",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_mic_muted"].state as string], attributes: shadowState["binary_sensor.sm_g980f_mic_muted"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_mic_muted"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_mic_muted"].state.toString() === "off"}
},

['sm_g980f_speakerphone']: {
  entity_id: "binary_sensor.sm_g980f_speakerphone",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_speakerphone"].state as string], attributes: shadowState["binary_sensor.sm_g980f_speakerphone"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_speakerphone"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_speakerphone"].state.toString() === "off"}
},

['sm_g980f_music_active']: {
  entity_id: "binary_sensor.sm_g980f_music_active",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_music_active"].state as string], attributes: shadowState["binary_sensor.sm_g980f_music_active"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_music_active"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_music_active"].state.toString() === "off"}
},

['sm_g980f_bluetooth_state']: {
  entity_id: "binary_sensor.sm_g980f_bluetooth_state",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_bluetooth_state"].state as string], attributes: shadowState["binary_sensor.sm_g980f_bluetooth_state"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_bluetooth_state"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_bluetooth_state"].state.toString() === "off"}
},

['sm_g980f_device_locked']: {
  entity_id: "binary_sensor.sm_g980f_device_locked",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_device_locked"].state as string], attributes: shadowState["binary_sensor.sm_g980f_device_locked"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_device_locked"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_device_locked"].state.toString() === "off"}
},

['sm_g980f_device_secure']: {
  entity_id: "binary_sensor.sm_g980f_device_secure",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_device_secure"].state as string], attributes: shadowState["binary_sensor.sm_g980f_device_secure"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_device_secure"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_device_secure"].state.toString() === "off"}
},

['sm_g980f_keyguard_locked']: {
  entity_id: "binary_sensor.sm_g980f_keyguard_locked",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_keyguard_locked"].state as string], attributes: shadowState["binary_sensor.sm_g980f_keyguard_locked"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_keyguard_locked"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_keyguard_locked"].state.toString() === "off"}
},

['sm_g980f_keyguard_secure']: {
  entity_id: "binary_sensor.sm_g980f_keyguard_secure",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_keyguard_secure"].state as string], attributes: shadowState["binary_sensor.sm_g980f_keyguard_secure"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_keyguard_secure"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_keyguard_secure"].state.toString() === "off"}
},

['sm_g980f_mobile_data']: {
  entity_id: "binary_sensor.sm_g980f_mobile_data",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_mobile_data"].state as string], attributes: shadowState["binary_sensor.sm_g980f_mobile_data"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_mobile_data"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_mobile_data"].state.toString() === "off"}
},

['sm_g980f_mobile_data_roaming']: {
  entity_id: "binary_sensor.sm_g980f_mobile_data_roaming",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_mobile_data_roaming"].state as string], attributes: shadowState["binary_sensor.sm_g980f_mobile_data_roaming"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_mobile_data_roaming"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_mobile_data_roaming"].state.toString() === "off"}
},

['sm_g980f_wifi_state']: {
  entity_id: "binary_sensor.sm_g980f_wifi_state",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.sm_g980f_wifi_state"].state as string], attributes: shadowState["binary_sensor.sm_g980f_wifi_state"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.sm_g980f_wifi_state"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.sm_g980f_wifi_state"].state.toString() === "off"}
},

['tims_macbook_pro_camera_in_use']: {
  entity_id: "binary_sensor.tims_macbook_pro_camera_in_use",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_macbook_pro_camera_in_use"].state as string], attributes: shadowState["binary_sensor.tims_macbook_pro_camera_in_use"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_macbook_pro_camera_in_use"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_macbook_pro_camera_in_use"].state.toString() === "off"}
},

['tims_macbook_pro_audio_input_in_use']: {
  entity_id: "binary_sensor.tims_macbook_pro_audio_input_in_use",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"].state as string], attributes: shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"].state.toString() === "off"}
},

['tims_macbook_pro_audio_output_in_use']: {
  entity_id: "binary_sensor.tims_macbook_pro_audio_output_in_use",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].state as string], attributes: shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].state.toString() === "off"}
},

['tims_macbook_pro_active']: {
  entity_id: "binary_sensor.tims_macbook_pro_active",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_macbook_pro_active"].state as string], attributes: shadowState["binary_sensor.tims_macbook_pro_active"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_macbook_pro_active"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_macbook_pro_active"].state.toString() === "off"}
},

['tims_macbook_pro_focus']: {
  entity_id: "binary_sensor.tims_macbook_pro_focus",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_macbook_pro_focus"].state as string], attributes: shadowState["binary_sensor.tims_macbook_pro_focus"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_macbook_pro_focus"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_macbook_pro_focus"].state.toString() === "off"}
},

['tims_iphone_focus']: {
  entity_id: "binary_sensor.tims_iphone_focus",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tims_iphone_focus"].state as string], attributes: shadowState["binary_sensor.tims_iphone_focus"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tims_iphone_focus"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tims_iphone_focus"].state.toString() === "off"}
},

['bedroom_button_gaby_update_available']: {
  entity_id: "binary_sensor.bedroom_button_gaby_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedroom_button_gaby_update_available"].state as string], attributes: shadowState["binary_sensor.bedroom_button_gaby_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedroom_button_gaby_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedroom_button_gaby_update_available"].state.toString() === "off"}
},

['bedroom_button_tim_update_available']: {
  entity_id: "binary_sensor.bedroom_button_tim_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedroom_button_tim_update_available"].state as string], attributes: shadowState["binary_sensor.bedroom_button_tim_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedroom_button_tim_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedroom_button_tim_update_available"].state.toString() === "off"}
},

['bathroom_door_battery_low']: {
  entity_id: "binary_sensor.bathroom_door_battery_low",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bathroom_door_battery_low"].state as string], attributes: shadowState["binary_sensor.bathroom_door_battery_low"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bathroom_door_battery_low"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bathroom_door_battery_low"].state.toString() === "off"}
},

['bathroom_door_contact']: {
  entity_id: "binary_sensor.bathroom_door_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bathroom_door_contact"].state as string], attributes: shadowState["binary_sensor.bathroom_door_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bathroom_door_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bathroom_door_contact"].state.toString() === "off"}
},

['siren_battery_low']: {
  entity_id: "binary_sensor.siren_battery_low",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.siren_battery_low"].state as string], attributes: shadowState["binary_sensor.siren_battery_low"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.siren_battery_low"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.siren_battery_low"].state.toString() === "off"}
},

['garage_electric_door_sensor_closed_contact']: {
  entity_id: "binary_sensor.garage_electric_door_sensor_closed_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].state as string], attributes: shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].state.toString() === "off"}
},

['bedroom_window_bed_contact']: {
  entity_id: "binary_sensor.bedroom_window_bed_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedroom_window_bed_contact"].state as string], attributes: shadowState["binary_sensor.bedroom_window_bed_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedroom_window_bed_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedroom_window_bed_contact"].state.toString() === "off"}
},

['desk_outlet_update_available']: {
  entity_id: "binary_sensor.desk_outlet_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.desk_outlet_update_available"].state as string], attributes: shadowState["binary_sensor.desk_outlet_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.desk_outlet_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.desk_outlet_update_available"].state.toString() === "off"}
},

['bathroom_spot_1_update_available']: {
  entity_id: "binary_sensor.bathroom_spot_1_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bathroom_spot_1_update_available"].state as string], attributes: shadowState["binary_sensor.bathroom_spot_1_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bathroom_spot_1_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bathroom_spot_1_update_available"].state.toString() === "off"}
},

['hall_stairs_update_available']: {
  entity_id: "binary_sensor.hall_stairs_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.hall_stairs_update_available"].state as string], attributes: shadowState["binary_sensor.hall_stairs_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.hall_stairs_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.hall_stairs_update_available"].state.toString() === "off"}
},

['kitchen_spot_3_update_available']: {
  entity_id: "binary_sensor.kitchen_spot_3_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.kitchen_spot_3_update_available"].state as string], attributes: shadowState["binary_sensor.kitchen_spot_3_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.kitchen_spot_3_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.kitchen_spot_3_update_available"].state.toString() === "off"}
},

['garage_car_update_available']: {
  entity_id: "binary_sensor.garage_car_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_car_update_available"].state as string], attributes: shadowState["binary_sensor.garage_car_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_car_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_car_update_available"].state.toString() === "off"}
},

['hall_entrance_update_available']: {
  entity_id: "binary_sensor.hall_entrance_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.hall_entrance_update_available"].state as string], attributes: shadowState["binary_sensor.hall_entrance_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.hall_entrance_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.hall_entrance_update_available"].state.toString() === "off"}
},

['garage_fridge_update_available']: {
  entity_id: "binary_sensor.garage_fridge_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_fridge_update_available"].state as string], attributes: shadowState["binary_sensor.garage_fridge_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_fridge_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_fridge_update_available"].state.toString() === "off"}
},

['entrance_door_contact']: {
  entity_id: "binary_sensor.entrance_door_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.entrance_door_contact"].state as string], attributes: shadowState["binary_sensor.entrance_door_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.entrance_door_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.entrance_door_contact"].state.toString() === "off"}
},

['toilet_door_battery_low']: {
  entity_id: "binary_sensor.toilet_door_battery_low",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.toilet_door_battery_low"].state as string], attributes: shadowState["binary_sensor.toilet_door_battery_low"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.toilet_door_battery_low"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.toilet_door_battery_low"].state.toString() === "off"}
},

['toilet_door_contact']: {
  entity_id: "binary_sensor.toilet_door_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.toilet_door_contact"].state as string], attributes: shadowState["binary_sensor.toilet_door_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.toilet_door_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.toilet_door_contact"].state.toString() === "off"}
},

['garden_door_contact']: {
  entity_id: "binary_sensor.garden_door_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garden_door_contact"].state as string], attributes: shadowState["binary_sensor.garden_door_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garden_door_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garden_door_contact"].state.toString() === "off"}
},

['garage_door_contact']: {
  entity_id: "binary_sensor.garage_door_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_door_contact"].state as string], attributes: shadowState["binary_sensor.garage_door_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_door_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_door_contact"].state.toString() === "off"}
},

['bedroom_humidifier_switch_update_available']: {
  entity_id: "binary_sensor.bedroom_humidifier_switch_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].state as string], attributes: shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].state.toString() === "off"}
},

['garage_remote_update_available']: {
  entity_id: "binary_sensor.garage_remote_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_remote_update_available"].state as string], attributes: shadowState["binary_sensor.garage_remote_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_remote_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_remote_update_available"].state.toString() === "off"}
},

['garage_electric_door_sensor_open_contact']: {
  entity_id: "binary_sensor.garage_electric_door_sensor_open_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].state as string], attributes: shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].state.toString() === "off"}
},

['toilet_update_available']: {
  entity_id: "binary_sensor.toilet_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.toilet_update_available"].state as string], attributes: shadowState["binary_sensor.toilet_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.toilet_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.toilet_update_available"].state.toString() === "off"}
},

['bedside_lamp_update_available']: {
  entity_id: "binary_sensor.bedside_lamp_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedside_lamp_update_available"].state as string], attributes: shadowState["binary_sensor.bedside_lamp_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedside_lamp_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedside_lamp_update_available"].state.toString() === "off"}
},

['fridge_door_sensor_contact']: {
  entity_id: "binary_sensor.fridge_door_sensor_contact",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.fridge_door_sensor_contact"].state as string], attributes: shadowState["binary_sensor.fridge_door_sensor_contact"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.fridge_door_sensor_contact"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.fridge_door_sensor_contact"].state.toString() === "off"}
},

['hall_upstairs_spot_1_update_available']: {
  entity_id: "binary_sensor.hall_upstairs_spot_1_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].state as string], attributes: shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].state.toString() === "off"}
},

['hall_upstairs_spot_2_update_available']: {
  entity_id: "binary_sensor.hall_upstairs_spot_2_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].state as string], attributes: shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].state.toString() === "off"}
},

['hall_upstairs_spot_3_update_available']: {
  entity_id: "binary_sensor.hall_upstairs_spot_3_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].state as string], attributes: shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].state.toString() === "off"}
},

['stairs_motion_sensor_tamper']: {
  entity_id: "binary_sensor.stairs_motion_sensor_tamper",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.stairs_motion_sensor_tamper"].state as string], attributes: shadowState["binary_sensor.stairs_motion_sensor_tamper"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.stairs_motion_sensor_tamper"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.stairs_motion_sensor_tamper"].state.toString() === "off"}
},

['stairs_motion_sensor_battery_low']: {
  entity_id: "binary_sensor.stairs_motion_sensor_battery_low",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.stairs_motion_sensor_battery_low"].state as string], attributes: shadowState["binary_sensor.stairs_motion_sensor_battery_low"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.stairs_motion_sensor_battery_low"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.stairs_motion_sensor_battery_low"].state.toString() === "off"}
},

['stairs_motion_sensor_occupancy']: {
  entity_id: "binary_sensor.stairs_motion_sensor_occupancy",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.stairs_motion_sensor_occupancy"].state as string], attributes: shadowState["binary_sensor.stairs_motion_sensor_occupancy"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.stairs_motion_sensor_occupancy"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.stairs_motion_sensor_occupancy"].state.toString() === "off"}
},

['bedroom_secondary_lamp_update_available']: {
  entity_id: "binary_sensor.bedroom_secondary_lamp_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].state as string], attributes: shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].state.toString() === "off"}
},

['bathroom_spot_2_update_available']: {
  entity_id: "binary_sensor.bathroom_spot_2_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.bathroom_spot_2_update_available"].state as string], attributes: shadowState["binary_sensor.bathroom_spot_2_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.bathroom_spot_2_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.bathroom_spot_2_update_available"].state.toString() === "off"}
},

['kitchen_spot_2_update_available']: {
  entity_id: "binary_sensor.kitchen_spot_2_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.kitchen_spot_2_update_available"].state as string], attributes: shadowState["binary_sensor.kitchen_spot_2_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.kitchen_spot_2_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.kitchen_spot_2_update_available"].state.toString() === "off"}
},

['dining_room_spot_1_update_available']: {
  entity_id: "binary_sensor.dining_room_spot_1_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.dining_room_spot_1_update_available"].state as string], attributes: shadowState["binary_sensor.dining_room_spot_1_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.dining_room_spot_1_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.dining_room_spot_1_update_available"].state.toString() === "off"}
},

['christmas_tree_led_outlet_update_available']: {
  entity_id: "binary_sensor.christmas_tree_led_outlet_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.christmas_tree_led_outlet_update_available"].state as string], attributes: shadowState["binary_sensor.christmas_tree_led_outlet_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.christmas_tree_led_outlet_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.christmas_tree_led_outlet_update_available"].state.toString() === "off"}
},

['dining_room_spot_2_update_available']: {
  entity_id: "binary_sensor.dining_room_spot_2_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.dining_room_spot_2_update_available"].state as string], attributes: shadowState["binary_sensor.dining_room_spot_2_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.dining_room_spot_2_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.dining_room_spot_2_update_available"].state.toString() === "off"}
},

['kitchen_spot_1_update_available']: {
  entity_id: "binary_sensor.kitchen_spot_1_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.kitchen_spot_1_update_available"].state as string], attributes: shadowState["binary_sensor.kitchen_spot_1_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.kitchen_spot_1_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.kitchen_spot_1_update_available"].state.toString() === "off"}
},

['dining_room_spot_3_update_available']: {
  entity_id: "binary_sensor.dining_room_spot_3_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.dining_room_spot_3_update_available"].state as string], attributes: shadowState["binary_sensor.dining_room_spot_3_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.dining_room_spot_3_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.dining_room_spot_3_update_available"].state.toString() === "off"}
},

['living_room_spot_3_update_available']: {
  entity_id: "binary_sensor.living_room_spot_3_update_available",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.living_room_spot_3_update_available"].state as string], attributes: shadowState["binary_sensor.living_room_spot_3_update_available"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.living_room_spot_3_update_available"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.living_room_spot_3_update_available"].state.toString() === "off"}
},

['g4_bullet_is_dark']: {
  entity_id: "binary_sensor.g4_bullet_is_dark",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_is_dark"].state as string], attributes: shadowState["binary_sensor.g4_bullet_is_dark"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_is_dark"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_is_dark"].state.toString() === "off"}
},

['g4_doorbell_is_dark']: {
  entity_id: "binary_sensor.g4_doorbell_is_dark",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_is_dark"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_is_dark"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_is_dark"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_is_dark"].state.toString() === "off"}
},

['g4_bullet_motion']: {
  entity_id: "binary_sensor.g4_bullet_motion",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_motion"].state as string], attributes: shadowState["binary_sensor.g4_bullet_motion"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_motion"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_motion"].state.toString() === "off"}
},

['g4_bullet_object_detected']: {
  entity_id: "binary_sensor.g4_bullet_object_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_object_detected"].state as string], attributes: shadowState["binary_sensor.g4_bullet_object_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_object_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_object_detected"].state.toString() === "off"}
},

['g4_bullet_person_detected']: {
  entity_id: "binary_sensor.g4_bullet_person_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_person_detected"].state as string], attributes: shadowState["binary_sensor.g4_bullet_person_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_person_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_person_detected"].state.toString() === "off"}
},

['g4_bullet_vehicle_detected']: {
  entity_id: "binary_sensor.g4_bullet_vehicle_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_vehicle_detected"].state as string], attributes: shadowState["binary_sensor.g4_bullet_vehicle_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_vehicle_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_vehicle_detected"].state.toString() === "off"}
},

['g4_bullet_audio_object_detected']: {
  entity_id: "binary_sensor.g4_bullet_audio_object_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_bullet_audio_object_detected"].state as string], attributes: shadowState["binary_sensor.g4_bullet_audio_object_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_bullet_audio_object_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_bullet_audio_object_detected"].state.toString() === "off"}
},

['g4_doorbell_doorbell']: {
  entity_id: "binary_sensor.g4_doorbell_doorbell",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_doorbell"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_doorbell"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_doorbell"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_doorbell"].state.toString() === "off"}
},

['g4_doorbell_motion']: {
  entity_id: "binary_sensor.g4_doorbell_motion",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_motion"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_motion"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_motion"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_motion"].state.toString() === "off"}
},

['g4_doorbell_object_detected']: {
  entity_id: "binary_sensor.g4_doorbell_object_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_object_detected"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_object_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_object_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_object_detected"].state.toString() === "off"}
},

['g4_doorbell_person_detected']: {
  entity_id: "binary_sensor.g4_doorbell_person_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_person_detected"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_person_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_person_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_person_detected"].state.toString() === "off"}
},

['g4_doorbell_vehicle_detected']: {
  entity_id: "binary_sensor.g4_doorbell_vehicle_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_vehicle_detected"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_vehicle_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_vehicle_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_vehicle_detected"].state.toString() === "off"}
},

['g4_doorbell_package_detected']: {
  entity_id: "binary_sensor.g4_doorbell_package_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_package_detected"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_package_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_package_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_package_detected"].state.toString() === "off"}
},

['g4_doorbell_audio_object_detected']: {
  entity_id: "binary_sensor.g4_doorbell_audio_object_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_doorbell_audio_object_detected"].state as string], attributes: shadowState["binary_sensor.g4_doorbell_audio_object_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_doorbell_audio_object_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_doorbell_audio_object_detected"].state.toString() === "off"}
},

['dream_machine_pro_hdd_1']: {
  entity_id: "binary_sensor.dream_machine_pro_hdd_1",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.dream_machine_pro_hdd_1"].state as string], attributes: shadowState["binary_sensor.dream_machine_pro_hdd_1"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.dream_machine_pro_hdd_1"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.dream_machine_pro_hdd_1"].state.toString() === "off"}
},

['dishwasher_washing']: {
  entity_id: "binary_sensor.dishwasher_washing",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.dishwasher_washing"].state as string], attributes: shadowState["binary_sensor.dishwasher_washing"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.dishwasher_washing"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.dishwasher_washing"].state.toString() === "off"}
},

['washing_machine_washing']: {
  entity_id: "binary_sensor.washing_machine_washing",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.washing_machine_washing"].state as string], attributes: shadowState["binary_sensor.washing_machine_washing"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.washing_machine_washing"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.washing_machine_washing"].state.toString() === "off"}
},

['updater']: {
  entity_id: "binary_sensor.updater",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.updater"].state as string], attributes: shadowState["binary_sensor.updater"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.updater"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.updater"].state.toString() === "off"}
},

['my_wall_panel_usb_plugged']: {
  entity_id: "binary_sensor.my_wall_panel_usb_plugged",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.my_wall_panel_usb_plugged"].state as string], attributes: shadowState["binary_sensor.my_wall_panel_usb_plugged"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.my_wall_panel_usb_plugged"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.my_wall_panel_usb_plugged"].state.toString() === "off"}
},

['my_wall_panel_ac_plugged']: {
  entity_id: "binary_sensor.my_wall_panel_ac_plugged",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.my_wall_panel_ac_plugged"].state as string], attributes: shadowState["binary_sensor.my_wall_panel_ac_plugged"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.my_wall_panel_ac_plugged"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.my_wall_panel_ac_plugged"].state.toString() === "off"}
},

['my_wall_panel_charging']: {
  entity_id: "binary_sensor.my_wall_panel_charging",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.my_wall_panel_charging"].state as string], attributes: shadowState["binary_sensor.my_wall_panel_charging"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.my_wall_panel_charging"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.my_wall_panel_charging"].state.toString() === "off"}
},

['my_wall_panel_face_detected']: {
  entity_id: "binary_sensor.my_wall_panel_face_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.my_wall_panel_face_detected"].state as string], attributes: shadowState["binary_sensor.my_wall_panel_face_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.my_wall_panel_face_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.my_wall_panel_face_detected"].state.toString() === "off"}
},

['my_wall_panel_motion_detected']: {
  entity_id: "binary_sensor.my_wall_panel_motion_detected",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.my_wall_panel_motion_detected"].state as string], attributes: shadowState["binary_sensor.my_wall_panel_motion_detected"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.my_wall_panel_motion_detected"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.my_wall_panel_motion_detected"].state.toString() === "off"}
},

['gaby_s_galaxy_s21']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21"].state.toString() === "off"}
},

['tim_s_galaxy_s22']: {
  entity_id: "binary_sensor.tim_s_galaxy_s22",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_s_galaxy_s22"].state as string], attributes: shadowState["binary_sensor.tim_s_galaxy_s22"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_s_galaxy_s22"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_s_galaxy_s22"].state.toString() === "off"}
},

['gaby_s_galaxy_s21_3']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21_3",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21_3"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21_3"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21_3"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21_3"].state.toString() === "off"}
},

['tim_s_galaxy_s22_3']: {
  entity_id: "binary_sensor.tim_s_galaxy_s22_3",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_s_galaxy_s22_3"].state as string], attributes: shadowState["binary_sensor.tim_s_galaxy_s22_3"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_s_galaxy_s22_3"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_s_galaxy_s22_3"].state.toString() === "off"}
},

['id_4']: {
  entity_id: "binary_sensor.id_4",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.id_4"].state as string], attributes: shadowState["binary_sensor.id_4"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.id_4"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.id_4"].state.toString() === "off"}
},

['nextcloud_system_enable_avatars']: {
  entity_id: "binary_sensor.nextcloud_system_enable_avatars",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.nextcloud_system_enable_avatars"].state as string], attributes: shadowState["binary_sensor.nextcloud_system_enable_avatars"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.nextcloud_system_enable_avatars"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.nextcloud_system_enable_avatars"].state.toString() === "off"}
},

['nextcloud_system_enable_previews']: {
  entity_id: "binary_sensor.nextcloud_system_enable_previews",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.nextcloud_system_enable_previews"].state as string], attributes: shadowState["binary_sensor.nextcloud_system_enable_previews"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.nextcloud_system_enable_previews"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.nextcloud_system_enable_previews"].state.toString() === "off"}
},

['nextcloud_system_filelocking_enabled']: {
  entity_id: "binary_sensor.nextcloud_system_filelocking_enabled",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.nextcloud_system_filelocking_enabled"].state as string], attributes: shadowState["binary_sensor.nextcloud_system_filelocking_enabled"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.nextcloud_system_filelocking_enabled"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.nextcloud_system_filelocking_enabled"].state.toString() === "off"}
},

['nextcloud_system_debug']: {
  entity_id: "binary_sensor.nextcloud_system_debug",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.nextcloud_system_debug"].state as string], attributes: shadowState["binary_sensor.nextcloud_system_debug"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.nextcloud_system_debug"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.nextcloud_system_debug"].state.toString() === "off"}
},

['tim_living_room_presence']: {
  entity_id: "binary_sensor.tim_living_room_presence",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.tim_living_room_presence"].state as string], attributes: shadowState["binary_sensor.tim_living_room_presence"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.tim_living_room_presence"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.tim_living_room_presence"].state.toString() === "off"}
},

['gaby_s_galaxy_s21_office_2']: {
  entity_id: "binary_sensor.gaby_s_galaxy_s21_office_2",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.gaby_s_galaxy_s21_office_2"].state as string], attributes: shadowState["binary_sensor.gaby_s_galaxy_s21_office_2"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.gaby_s_galaxy_s21_office_2"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.gaby_s_galaxy_s21_office_2"].state.toString() === "off"}
},

['g4_instant_is_dark']: {
  entity_id: "binary_sensor.g4_instant_is_dark",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_instant_is_dark"].state as string], attributes: shadowState["binary_sensor.g4_instant_is_dark"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_instant_is_dark"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_instant_is_dark"].state.toString() === "off"}
},

['g4_instant_motion']: {
  entity_id: "binary_sensor.g4_instant_motion",
get entity() { return {state: BinarySensorStateMapper[shadowState["binary_sensor.g4_instant_motion"].state as string], attributes: shadowState["binary_sensor.g4_instant_motion"].attributes} as BinarySensorProperties},
isOn() { return shadowState["binary_sensor.g4_instant_motion"].state.toString() === "on"},
isOff() { return shadowState["binary_sensor.g4_instant_motion"].state.toString() === "off"}
},

}
