import {shadowState, BinarySensor} from "@herja/core"
        export type BinarySensorIDs = "gaby_s_galaxy_s21_living_room" | "tim_s_galaxy_s22_living_room" | "gaby_s_galaxy_s21_bedroom" | "tim_s_galaxy_s22_bedroom" | "gaby_s_galaxy_s21_garage" | "tim_s_galaxy_s22_garage" | "id_4_garage" | "gaby_s_galaxy_s21_4" | "tim_s_galaxy_s22_4" | "id_4_2" | "gaby_s_galaxy_s21_office" | "tim_s_galaxy_s22_office" | "0x0017880109bde997_update_available" | "0xb4e3f9fffebc2a4e_update_available" | "0xb4e3f9fffe77c636_update_available" | "bedroom_button_gaby_update_available" | "bedroom_button_tim_update_available" | "bathroom_door_battery_low" | "bathroom_door_contact" | "siren_battery_low" | "garage_electric_door_sensor_closed_contact" | "bedroom_window_bed_contact" | "desk_outlet_update_available" | "bathroom_spot_1_update_available" | "hall_stairs_update_available" | "kitchen_spot_3_update_available" | "garage_car_update_available" | "hall_entrance_update_available" | "garage_fridge_update_available" | "entrance_door_contact" | "toilet_door_battery_low" | "toilet_door_contact" | "garden_door_contact" | "garage_door_contact" | "bedroom_humidifier_switch_update_available" | "garage_remote_update_available" | "garage_electric_door_sensor_open_contact" | "toilet_update_available" | "bedside_lamp_update_available" | "fridge_door_sensor_contact" | "hall_upstairs_spot_1_update_available" | "hall_upstairs_spot_2_update_available" | "hall_upstairs_spot_3_update_available" | "stairs_motion_sensor_tamper" | "stairs_motion_sensor_battery_low" | "stairs_motion_sensor_occupancy" | "bedroom_secondary_lamp_update_available" | "bathroom_spot_2_update_available" | "bedroom_bed_light_update_available" | "living_room_remote_update_available" | "kitchen_spot_2_update_available" | "dining_room_spot_1_update_available" | "coffee_machine_outlet_update_available" | "dining_room_spot_2_update_available" | "living_room_light_update_available" | "kitchen_spot_1_update_available" | "dining_room_spot_3_update_available" | "living_room_spot_3_update_available" | "sm_g980f_is_charging" | "sm_g980f_headphones" | "sm_g980f_mic_muted" | "sm_g980f_speakerphone" | "sm_g980f_music_active" | "sm_g980f_bluetooth_state" | "sm_g980f_device_locked" | "sm_g980f_device_secure" | "sm_g980f_keyguard_locked" | "sm_g980f_keyguard_secure" | "sm_g980f_mobile_data" | "sm_g980f_mobile_data_roaming" | "sm_g980f_wifi_state" | "s22_is_charging" | "s22_app_inactive" | "s22_headphones" | "s22_mic_muted" | "s22_speakerphone" | "s22_music_active" | "s22_bluetooth_state" | "s22_work_profile" | "s22_device_locked" | "s22_device_secure" | "s22_keyguard_locked" | "s22_keyguard_secure" | "s22_mobile_data" | "s22_mobile_data_roaming" | "s22_wifi_state" | "s22_interactive" | "s22_doze_mode" | "s22_power_save" | "tims_iphone_focus" | "tims_macbook_pro_camera_in_use" | "tims_macbook_pro_audio_input_in_use" | "tims_macbook_pro_audio_output_in_use" | "tims_macbook_pro_active" | "tims_macbook_pro_focus" | "wvgzzze2zmp011645_climatisation_without_external_power" | "wvgzzze2zmp011645_climatisation_at_unlock" | "wvgzzze2zmp011645_zone_front_left_enabled" | "wvgzzze2zmp011645_zone_front_right_enabled" | "wvgzzze2zmp011645_window_heating_enabled" | "wvgzzze2zmp011645_front_window_heating_state" | "wvgzzze2zmp011645_rear_window_heating_state" | "wvgzzze2zmp011645_auto_unlock_plug_when_charged" | "wvgzzze2zmp011645_plug_connection_state" | "wvgzzze2zmp011645_plug_lock_state" | "tim_s_id_4_insufficient_battery_level_warning" | "tim_s_id_4_car_is_online" | "tim_s_id_4_car_is_active" | "tim_s_id_4_overall_status" | "tim_s_id_4_door_lock_status" | "updater" | "my_wall_panel_usb_plugged" | "my_wall_panel_ac_plugged" | "my_wall_panel_charging" | "my_wall_panel_face_detected" | "my_wall_panel_motion_detected" | "gaby_s_galaxy_s21" | "tim_s_galaxy_s22" | "gaby_s_galaxy_s21_2" | "tim_s_galaxy_s22_2" | "gaby_s_galaxy_s21_3" | "tim_s_galaxy_s22_3" | "id_4"
export const binary_sensor: BinarySensor<BinarySensorIDs> = {
  
  ["gaby_s_galaxy_s21_living_room"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_living_room",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_living_room"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_living_room"]},
  },

  ["tim_s_galaxy_s22_living_room"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_living_room",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_living_room"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_living_room"]},
  },

  ["gaby_s_galaxy_s21_bedroom"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_bedroom",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_bedroom"]},
  },

  ["tim_s_galaxy_s22_bedroom"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_bedroom",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_bedroom"]},
  },

  ["gaby_s_galaxy_s21_garage"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_garage",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_garage"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_garage"]},
  },

  ["tim_s_galaxy_s22_garage"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_garage",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_garage"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_garage"]},
  },

  ["id_4_garage"]: {
    entity_id: "binary_sensor.id_4_garage",
    isOn: () => shadowState["binary_sensor.id_4_garage"].state === "on",
    get state() { return shadowState["binary_sensor.id_4_garage"]},
  },

  ["gaby_s_galaxy_s21_4"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_4",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_4"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_4"]},
  },

  ["tim_s_galaxy_s22_4"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_4",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_4"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_4"]},
  },

  ["id_4_2"]: {
    entity_id: "binary_sensor.id_4_2",
    isOn: () => shadowState["binary_sensor.id_4_2"].state === "on",
    get state() { return shadowState["binary_sensor.id_4_2"]},
  },

  ["gaby_s_galaxy_s21_office"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_office",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_office"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_office"]},
  },

  ["tim_s_galaxy_s22_office"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_office",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_office"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_office"]},
  },

  ["0x0017880109bde997_update_available"]: {
    entity_id: "binary_sensor.0x0017880109bde997_update_available",
    isOn: () => shadowState["binary_sensor.0x0017880109bde997_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.0x0017880109bde997_update_available"]},
  },

  ["0xb4e3f9fffebc2a4e_update_available"]: {
    entity_id: "binary_sensor.0xb4e3f9fffebc2a4e_update_available",
    isOn: () => shadowState["binary_sensor.0xb4e3f9fffebc2a4e_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.0xb4e3f9fffebc2a4e_update_available"]},
  },

  ["0xb4e3f9fffe77c636_update_available"]: {
    entity_id: "binary_sensor.0xb4e3f9fffe77c636_update_available",
    isOn: () => shadowState["binary_sensor.0xb4e3f9fffe77c636_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.0xb4e3f9fffe77c636_update_available"]},
  },

  ["bedroom_button_gaby_update_available"]: {
    entity_id: "binary_sensor.bedroom_button_gaby_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_button_gaby_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_button_gaby_update_available"]},
  },

  ["bedroom_button_tim_update_available"]: {
    entity_id: "binary_sensor.bedroom_button_tim_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_button_tim_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_button_tim_update_available"]},
  },

  ["bathroom_door_battery_low"]: {
    entity_id: "binary_sensor.bathroom_door_battery_low",
    isOn: () => shadowState["binary_sensor.bathroom_door_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_door_battery_low"]},
  },

  ["bathroom_door_contact"]: {
    entity_id: "binary_sensor.bathroom_door_contact",
    isOn: () => shadowState["binary_sensor.bathroom_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_door_contact"]},
  },

  ["siren_battery_low"]: {
    entity_id: "binary_sensor.siren_battery_low",
    isOn: () => shadowState["binary_sensor.siren_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.siren_battery_low"]},
  },

  ["garage_electric_door_sensor_closed_contact"]: {
    entity_id: "binary_sensor.garage_electric_door_sensor_closed_contact",
    isOn: () => shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"]},
  },

  ["bedroom_window_bed_contact"]: {
    entity_id: "binary_sensor.bedroom_window_bed_contact",
    isOn: () => shadowState["binary_sensor.bedroom_window_bed_contact"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_window_bed_contact"]},
  },

  ["desk_outlet_update_available"]: {
    entity_id: "binary_sensor.desk_outlet_update_available",
    isOn: () => shadowState["binary_sensor.desk_outlet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.desk_outlet_update_available"]},
  },

  ["bathroom_spot_1_update_available"]: {
    entity_id: "binary_sensor.bathroom_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.bathroom_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_spot_1_update_available"]},
  },

  ["hall_stairs_update_available"]: {
    entity_id: "binary_sensor.hall_stairs_update_available",
    isOn: () => shadowState["binary_sensor.hall_stairs_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_stairs_update_available"]},
  },

  ["kitchen_spot_3_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_3_update_available"]},
  },

  ["garage_car_update_available"]: {
    entity_id: "binary_sensor.garage_car_update_available",
    isOn: () => shadowState["binary_sensor.garage_car_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_car_update_available"]},
  },

  ["hall_entrance_update_available"]: {
    entity_id: "binary_sensor.hall_entrance_update_available",
    isOn: () => shadowState["binary_sensor.hall_entrance_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_entrance_update_available"]},
  },

  ["garage_fridge_update_available"]: {
    entity_id: "binary_sensor.garage_fridge_update_available",
    isOn: () => shadowState["binary_sensor.garage_fridge_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_fridge_update_available"]},
  },

  ["entrance_door_contact"]: {
    entity_id: "binary_sensor.entrance_door_contact",
    isOn: () => shadowState["binary_sensor.entrance_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.entrance_door_contact"]},
  },

  ["toilet_door_battery_low"]: {
    entity_id: "binary_sensor.toilet_door_battery_low",
    isOn: () => shadowState["binary_sensor.toilet_door_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_door_battery_low"]},
  },

  ["toilet_door_contact"]: {
    entity_id: "binary_sensor.toilet_door_contact",
    isOn: () => shadowState["binary_sensor.toilet_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_door_contact"]},
  },

  ["garden_door_contact"]: {
    entity_id: "binary_sensor.garden_door_contact",
    isOn: () => shadowState["binary_sensor.garden_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garden_door_contact"]},
  },

  ["garage_door_contact"]: {
    entity_id: "binary_sensor.garage_door_contact",
    isOn: () => shadowState["binary_sensor.garage_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_door_contact"]},
  },

  ["bedroom_humidifier_switch_update_available"]: {
    entity_id: "binary_sensor.bedroom_humidifier_switch_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_humidifier_switch_update_available"]},
  },

  ["garage_remote_update_available"]: {
    entity_id: "binary_sensor.garage_remote_update_available",
    isOn: () => shadowState["binary_sensor.garage_remote_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_remote_update_available"]},
  },

  ["garage_electric_door_sensor_open_contact"]: {
    entity_id: "binary_sensor.garage_electric_door_sensor_open_contact",
    isOn: () => shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_electric_door_sensor_open_contact"]},
  },

  ["toilet_update_available"]: {
    entity_id: "binary_sensor.toilet_update_available",
    isOn: () => shadowState["binary_sensor.toilet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_update_available"]},
  },

  ["bedside_lamp_update_available"]: {
    entity_id: "binary_sensor.bedside_lamp_update_available",
    isOn: () => shadowState["binary_sensor.bedside_lamp_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedside_lamp_update_available"]},
  },

  ["fridge_door_sensor_contact"]: {
    entity_id: "binary_sensor.fridge_door_sensor_contact",
    isOn: () => shadowState["binary_sensor.fridge_door_sensor_contact"].state === "on",
    get state() { return shadowState["binary_sensor.fridge_door_sensor_contact"]},
  },

  ["hall_upstairs_spot_1_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_1_update_available"]},
  },

  ["hall_upstairs_spot_2_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_2_update_available"]},
  },

  ["hall_upstairs_spot_3_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_3_update_available"]},
  },

  ["stairs_motion_sensor_tamper"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_tamper",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_tamper"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_tamper"]},
  },

  ["stairs_motion_sensor_battery_low"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_battery_low",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_battery_low"]},
  },

  ["stairs_motion_sensor_occupancy"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_occupancy",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_occupancy"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_occupancy"]},
  },

  ["bedroom_secondary_lamp_update_available"]: {
    entity_id: "binary_sensor.bedroom_secondary_lamp_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_secondary_lamp_update_available"]},
  },

  ["bathroom_spot_2_update_available"]: {
    entity_id: "binary_sensor.bathroom_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.bathroom_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_spot_2_update_available"]},
  },

  ["bedroom_bed_light_update_available"]: {
    entity_id: "binary_sensor.bedroom_bed_light_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_bed_light_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_bed_light_update_available"]},
  },

  ["living_room_remote_update_available"]: {
    entity_id: "binary_sensor.living_room_remote_update_available",
    isOn: () => shadowState["binary_sensor.living_room_remote_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_remote_update_available"]},
  },

  ["kitchen_spot_2_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_2_update_available"]},
  },

  ["dining_room_spot_1_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_1_update_available"]},
  },

  ["coffee_machine_outlet_update_available"]: {
    entity_id: "binary_sensor.coffee_machine_outlet_update_available",
    isOn: () => shadowState["binary_sensor.coffee_machine_outlet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.coffee_machine_outlet_update_available"]},
  },

  ["dining_room_spot_2_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_2_update_available"]},
  },

  ["living_room_light_update_available"]: {
    entity_id: "binary_sensor.living_room_light_update_available",
    isOn: () => shadowState["binary_sensor.living_room_light_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_light_update_available"]},
  },

  ["kitchen_spot_1_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_1_update_available"]},
  },

  ["dining_room_spot_3_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_3_update_available"]},
  },

  ["living_room_spot_3_update_available"]: {
    entity_id: "binary_sensor.living_room_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.living_room_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_spot_3_update_available"]},
  },

  ["sm_g980f_is_charging"]: {
    entity_id: "binary_sensor.sm_g980f_is_charging",
    isOn: () => shadowState["binary_sensor.sm_g980f_is_charging"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_is_charging"]},
  },

  ["sm_g980f_headphones"]: {
    entity_id: "binary_sensor.sm_g980f_headphones",
    isOn: () => shadowState["binary_sensor.sm_g980f_headphones"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_headphones"]},
  },

  ["sm_g980f_mic_muted"]: {
    entity_id: "binary_sensor.sm_g980f_mic_muted",
    isOn: () => shadowState["binary_sensor.sm_g980f_mic_muted"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_mic_muted"]},
  },

  ["sm_g980f_speakerphone"]: {
    entity_id: "binary_sensor.sm_g980f_speakerphone",
    isOn: () => shadowState["binary_sensor.sm_g980f_speakerphone"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_speakerphone"]},
  },

  ["sm_g980f_music_active"]: {
    entity_id: "binary_sensor.sm_g980f_music_active",
    isOn: () => shadowState["binary_sensor.sm_g980f_music_active"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_music_active"]},
  },

  ["sm_g980f_bluetooth_state"]: {
    entity_id: "binary_sensor.sm_g980f_bluetooth_state",
    isOn: () => shadowState["binary_sensor.sm_g980f_bluetooth_state"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_bluetooth_state"]},
  },

  ["sm_g980f_device_locked"]: {
    entity_id: "binary_sensor.sm_g980f_device_locked",
    isOn: () => shadowState["binary_sensor.sm_g980f_device_locked"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_device_locked"]},
  },

  ["sm_g980f_device_secure"]: {
    entity_id: "binary_sensor.sm_g980f_device_secure",
    isOn: () => shadowState["binary_sensor.sm_g980f_device_secure"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_device_secure"]},
  },

  ["sm_g980f_keyguard_locked"]: {
    entity_id: "binary_sensor.sm_g980f_keyguard_locked",
    isOn: () => shadowState["binary_sensor.sm_g980f_keyguard_locked"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_keyguard_locked"]},
  },

  ["sm_g980f_keyguard_secure"]: {
    entity_id: "binary_sensor.sm_g980f_keyguard_secure",
    isOn: () => shadowState["binary_sensor.sm_g980f_keyguard_secure"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_keyguard_secure"]},
  },

  ["sm_g980f_mobile_data"]: {
    entity_id: "binary_sensor.sm_g980f_mobile_data",
    isOn: () => shadowState["binary_sensor.sm_g980f_mobile_data"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_mobile_data"]},
  },

  ["sm_g980f_mobile_data_roaming"]: {
    entity_id: "binary_sensor.sm_g980f_mobile_data_roaming",
    isOn: () => shadowState["binary_sensor.sm_g980f_mobile_data_roaming"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_mobile_data_roaming"]},
  },

  ["sm_g980f_wifi_state"]: {
    entity_id: "binary_sensor.sm_g980f_wifi_state",
    isOn: () => shadowState["binary_sensor.sm_g980f_wifi_state"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_wifi_state"]},
  },

  ["s22_is_charging"]: {
    entity_id: "binary_sensor.s22_is_charging",
    isOn: () => shadowState["binary_sensor.s22_is_charging"].state === "on",
    get state() { return shadowState["binary_sensor.s22_is_charging"]},
  },

  ["s22_app_inactive"]: {
    entity_id: "binary_sensor.s22_app_inactive",
    isOn: () => shadowState["binary_sensor.s22_app_inactive"].state === "on",
    get state() { return shadowState["binary_sensor.s22_app_inactive"]},
  },

  ["s22_headphones"]: {
    entity_id: "binary_sensor.s22_headphones",
    isOn: () => shadowState["binary_sensor.s22_headphones"].state === "on",
    get state() { return shadowState["binary_sensor.s22_headphones"]},
  },

  ["s22_mic_muted"]: {
    entity_id: "binary_sensor.s22_mic_muted",
    isOn: () => shadowState["binary_sensor.s22_mic_muted"].state === "on",
    get state() { return shadowState["binary_sensor.s22_mic_muted"]},
  },

  ["s22_speakerphone"]: {
    entity_id: "binary_sensor.s22_speakerphone",
    isOn: () => shadowState["binary_sensor.s22_speakerphone"].state === "on",
    get state() { return shadowState["binary_sensor.s22_speakerphone"]},
  },

  ["s22_music_active"]: {
    entity_id: "binary_sensor.s22_music_active",
    isOn: () => shadowState["binary_sensor.s22_music_active"].state === "on",
    get state() { return shadowState["binary_sensor.s22_music_active"]},
  },

  ["s22_bluetooth_state"]: {
    entity_id: "binary_sensor.s22_bluetooth_state",
    isOn: () => shadowState["binary_sensor.s22_bluetooth_state"].state === "on",
    get state() { return shadowState["binary_sensor.s22_bluetooth_state"]},
  },

  ["s22_work_profile"]: {
    entity_id: "binary_sensor.s22_work_profile",
    isOn: () => shadowState["binary_sensor.s22_work_profile"].state === "on",
    get state() { return shadowState["binary_sensor.s22_work_profile"]},
  },

  ["s22_device_locked"]: {
    entity_id: "binary_sensor.s22_device_locked",
    isOn: () => shadowState["binary_sensor.s22_device_locked"].state === "on",
    get state() { return shadowState["binary_sensor.s22_device_locked"]},
  },

  ["s22_device_secure"]: {
    entity_id: "binary_sensor.s22_device_secure",
    isOn: () => shadowState["binary_sensor.s22_device_secure"].state === "on",
    get state() { return shadowState["binary_sensor.s22_device_secure"]},
  },

  ["s22_keyguard_locked"]: {
    entity_id: "binary_sensor.s22_keyguard_locked",
    isOn: () => shadowState["binary_sensor.s22_keyguard_locked"].state === "on",
    get state() { return shadowState["binary_sensor.s22_keyguard_locked"]},
  },

  ["s22_keyguard_secure"]: {
    entity_id: "binary_sensor.s22_keyguard_secure",
    isOn: () => shadowState["binary_sensor.s22_keyguard_secure"].state === "on",
    get state() { return shadowState["binary_sensor.s22_keyguard_secure"]},
  },

  ["s22_mobile_data"]: {
    entity_id: "binary_sensor.s22_mobile_data",
    isOn: () => shadowState["binary_sensor.s22_mobile_data"].state === "on",
    get state() { return shadowState["binary_sensor.s22_mobile_data"]},
  },

  ["s22_mobile_data_roaming"]: {
    entity_id: "binary_sensor.s22_mobile_data_roaming",
    isOn: () => shadowState["binary_sensor.s22_mobile_data_roaming"].state === "on",
    get state() { return shadowState["binary_sensor.s22_mobile_data_roaming"]},
  },

  ["s22_wifi_state"]: {
    entity_id: "binary_sensor.s22_wifi_state",
    isOn: () => shadowState["binary_sensor.s22_wifi_state"].state === "on",
    get state() { return shadowState["binary_sensor.s22_wifi_state"]},
  },

  ["s22_interactive"]: {
    entity_id: "binary_sensor.s22_interactive",
    isOn: () => shadowState["binary_sensor.s22_interactive"].state === "on",
    get state() { return shadowState["binary_sensor.s22_interactive"]},
  },

  ["s22_doze_mode"]: {
    entity_id: "binary_sensor.s22_doze_mode",
    isOn: () => shadowState["binary_sensor.s22_doze_mode"].state === "on",
    get state() { return shadowState["binary_sensor.s22_doze_mode"]},
  },

  ["s22_power_save"]: {
    entity_id: "binary_sensor.s22_power_save",
    isOn: () => shadowState["binary_sensor.s22_power_save"].state === "on",
    get state() { return shadowState["binary_sensor.s22_power_save"]},
  },

  ["tims_iphone_focus"]: {
    entity_id: "binary_sensor.tims_iphone_focus",
    isOn: () => shadowState["binary_sensor.tims_iphone_focus"].state === "on",
    get state() { return shadowState["binary_sensor.tims_iphone_focus"]},
  },

  ["tims_macbook_pro_camera_in_use"]: {
    entity_id: "binary_sensor.tims_macbook_pro_camera_in_use",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_camera_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_camera_in_use"]},
  },

  ["tims_macbook_pro_audio_input_in_use"]: {
    entity_id: "binary_sensor.tims_macbook_pro_audio_input_in_use",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_audio_input_in_use"]},
  },

  ["tims_macbook_pro_audio_output_in_use"]: {
    entity_id: "binary_sensor.tims_macbook_pro_audio_output_in_use",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"]},
  },

  ["tims_macbook_pro_active"]: {
    entity_id: "binary_sensor.tims_macbook_pro_active",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_active"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_active"]},
  },

  ["tims_macbook_pro_focus"]: {
    entity_id: "binary_sensor.tims_macbook_pro_focus",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_focus"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_focus"]},
  },

  ["wvgzzze2zmp011645_climatisation_without_external_power"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_climatisation_without_external_power",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_climatisation_without_external_power"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_climatisation_without_external_power"]},
  },

  ["wvgzzze2zmp011645_climatisation_at_unlock"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_climatisation_at_unlock",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_climatisation_at_unlock"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_climatisation_at_unlock"]},
  },

  ["wvgzzze2zmp011645_zone_front_left_enabled"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_zone_front_left_enabled",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_zone_front_left_enabled"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_zone_front_left_enabled"]},
  },

  ["wvgzzze2zmp011645_zone_front_right_enabled"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_zone_front_right_enabled",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_zone_front_right_enabled"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_zone_front_right_enabled"]},
  },

  ["wvgzzze2zmp011645_window_heating_enabled"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_window_heating_enabled",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_window_heating_enabled"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_window_heating_enabled"]},
  },

  ["wvgzzze2zmp011645_front_window_heating_state"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_front_window_heating_state",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_front_window_heating_state"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_front_window_heating_state"]},
  },

  ["wvgzzze2zmp011645_rear_window_heating_state"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_rear_window_heating_state",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_rear_window_heating_state"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_rear_window_heating_state"]},
  },

  ["wvgzzze2zmp011645_auto_unlock_plug_when_charged"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_auto_unlock_plug_when_charged",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_auto_unlock_plug_when_charged"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_auto_unlock_plug_when_charged"]},
  },

  ["wvgzzze2zmp011645_plug_connection_state"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_plug_connection_state",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_plug_connection_state"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_plug_connection_state"]},
  },

  ["wvgzzze2zmp011645_plug_lock_state"]: {
    entity_id: "binary_sensor.wvgzzze2zmp011645_plug_lock_state",
    isOn: () => shadowState["binary_sensor.wvgzzze2zmp011645_plug_lock_state"].state === "on",
    get state() { return shadowState["binary_sensor.wvgzzze2zmp011645_plug_lock_state"]},
  },

  ["tim_s_id_4_insufficient_battery_level_warning"]: {
    entity_id: "binary_sensor.tim_s_id_4_insufficient_battery_level_warning",
    isOn: () => shadowState["binary_sensor.tim_s_id_4_insufficient_battery_level_warning"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_id_4_insufficient_battery_level_warning"]},
  },

  ["tim_s_id_4_car_is_online"]: {
    entity_id: "binary_sensor.tim_s_id_4_car_is_online",
    isOn: () => shadowState["binary_sensor.tim_s_id_4_car_is_online"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_id_4_car_is_online"]},
  },

  ["tim_s_id_4_car_is_active"]: {
    entity_id: "binary_sensor.tim_s_id_4_car_is_active",
    isOn: () => shadowState["binary_sensor.tim_s_id_4_car_is_active"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_id_4_car_is_active"]},
  },

  ["tim_s_id_4_overall_status"]: {
    entity_id: "binary_sensor.tim_s_id_4_overall_status",
    isOn: () => shadowState["binary_sensor.tim_s_id_4_overall_status"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_id_4_overall_status"]},
  },

  ["tim_s_id_4_door_lock_status"]: {
    entity_id: "binary_sensor.tim_s_id_4_door_lock_status",
    isOn: () => shadowState["binary_sensor.tim_s_id_4_door_lock_status"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_id_4_door_lock_status"]},
  },

  ["updater"]: {
    entity_id: "binary_sensor.updater",
    isOn: () => shadowState["binary_sensor.updater"].state === "on",
    get state() { return shadowState["binary_sensor.updater"]},
  },

  ["my_wall_panel_usb_plugged"]: {
    entity_id: "binary_sensor.my_wall_panel_usb_plugged",
    isOn: () => shadowState["binary_sensor.my_wall_panel_usb_plugged"].state === "on",
    get state() { return shadowState["binary_sensor.my_wall_panel_usb_plugged"]},
  },

  ["my_wall_panel_ac_plugged"]: {
    entity_id: "binary_sensor.my_wall_panel_ac_plugged",
    isOn: () => shadowState["binary_sensor.my_wall_panel_ac_plugged"].state === "on",
    get state() { return shadowState["binary_sensor.my_wall_panel_ac_plugged"]},
  },

  ["my_wall_panel_charging"]: {
    entity_id: "binary_sensor.my_wall_panel_charging",
    isOn: () => shadowState["binary_sensor.my_wall_panel_charging"].state === "on",
    get state() { return shadowState["binary_sensor.my_wall_panel_charging"]},
  },

  ["my_wall_panel_face_detected"]: {
    entity_id: "binary_sensor.my_wall_panel_face_detected",
    isOn: () => shadowState["binary_sensor.my_wall_panel_face_detected"].state === "on",
    get state() { return shadowState["binary_sensor.my_wall_panel_face_detected"]},
  },

  ["my_wall_panel_motion_detected"]: {
    entity_id: "binary_sensor.my_wall_panel_motion_detected",
    isOn: () => shadowState["binary_sensor.my_wall_panel_motion_detected"].state === "on",
    get state() { return shadowState["binary_sensor.my_wall_panel_motion_detected"]},
  },

  ["gaby_s_galaxy_s21"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21"]},
  },

  ["tim_s_galaxy_s22"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22"]},
  },

  ["gaby_s_galaxy_s21_2"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_2",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_2"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_2"]},
  },

  ["tim_s_galaxy_s22_2"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_2",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_2"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_2"]},
  },

  ["gaby_s_galaxy_s21_3"]: {
    entity_id: "binary_sensor.gaby_s_galaxy_s21_3",
    isOn: () => shadowState["binary_sensor.gaby_s_galaxy_s21_3"].state === "on",
    get state() { return shadowState["binary_sensor.gaby_s_galaxy_s21_3"]},
  },

  ["tim_s_galaxy_s22_3"]: {
    entity_id: "binary_sensor.tim_s_galaxy_s22_3",
    isOn: () => shadowState["binary_sensor.tim_s_galaxy_s22_3"].state === "on",
    get state() { return shadowState["binary_sensor.tim_s_galaxy_s22_3"]},
  },

  ["id_4"]: {
    entity_id: "binary_sensor.id_4",
    isOn: () => shadowState["binary_sensor.id_4"].state === "on",
    get state() { return shadowState["binary_sensor.id_4"]},
  },
}
  