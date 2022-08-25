import {shadowState, BinarySensor} from "@herja/core"
        export type BinarySensorIDs = "tims_ipone_focus" | "sm_g980f_is_charging" | "mirahi_c02d96kqmd6t_camera_in_use" | "mirahi_c02d96kqmd6t_audio_input_in_use" | "mirahi_c02d96kqmd6t_audio_output_in_use" | "mirahi_c02d96kqmd6t_focus" | "mirahi_c02d96kqmd6t_active" | "tims_macbook_pro_audio_output_in_use" | "tims_macbook_pro_camera_in_use" | "tims_macbook_pro_audio_input_in_use" | "tims_macbook_pro_active" | "tims_macbook_pro_focus" | "s22_is_charging" | "living_room_spot_3_update_available" | "dining_room_spot_3_update_available" | "kitchen_spot_1_update_available" | "living_room_light_update_available" | "dining_room_spot_2_update_available" | "coffee_machine_outlet_update_available" | "dining_room_spot_1_update_available" | "kitchen_spot_2_update_available" | "living_room_remote_update_available" | "bedroom_bed_light_update_available" | "bathroom_spot_2_update_available" | "bedroom_secondary_lamp_update_available" | "stairs_motion_sensor_occupancy" | "stairs_motion_sensor_battery_low" | "stairs_motion_sensor_tamper" | "hall_upstairs_spot_3_update_available" | "hall_upstairs_spot_2_update_available" | "hall_upstairs_spot_1_update_available" | "fridge_door_sensor_contact" | "bedside_lamp_update_available" | "toilet_update_available" | "garage_electric_door_sensor_open_contact" | "garage_remote_update_available" | "bedroom_humidifier_switch_update_available" | "garage_door_contact" | "garden_door_contact" | "toilet_door_contact" | "toilet_door_battery_low" | "entrance_door_contact" | "garage_fridge_update_available" | "hall_entrance_update_available" | "garage_car_update_available" | "kitchen_spot_3_update_available" | "hall_stairs_update_available" | "bathroom_spot_1_update_available" | "desk_outlet_update_available" | "bedroom_window_bed_contact" | "garage_electric_door_sensor_closed_contact" | "siren_battery_low" | "bathroom_door_contact" | "bathroom_door_battery_low" | "bedroom_button_tim_update_available" | "bedroom_button_gaby_update_available" | "0x00124b002519b204_contact" | "0x00124b002519b204_battery_low" | "1_yjx_427_park_brake_status" | "1_yjx_427_tire_warning" | "1_yjx_427_low_brake_fluid_warning" | "1_yjx_427_low_coolant_level_warning" | "1_yjx_427_low_wash_water_warning" | "1_yjx_427_windows_closed" | "wvgzzze2zmp011645_climatisation_without_external_power" | "wvgzzze2zmp011645_climatisation_at_unlock" | "wvgzzze2zmp011645_zone_front_left_enabled" | "wvgzzze2zmp011645_zone_front_right_enabled" | "wvgzzze2zmp011645_window_heating_enabled" | "wvgzzze2zmp011645_front_window_heating_state" | "wvgzzze2zmp011645_rear_window_heating_state" | "wvgzzze2zmp011645_auto_unlock_plug_when_charged" | "wvgzzze2zmp011645_plug_connection_state" | "wvgzzze2zmp011645_plug_lock_state" | "tim_s_id_4_insufficient_battery_level_warning" | "tim_s_id_4_car_is_online" | "tim_s_id_4_car_is_active" | "updater" | "1_yjx_427_liquid_range_critical" | "my_wall_panel_usb_plugged" | "my_wall_panel_ac_plugged" | "my_wall_panel_charging" | "my_wall_panel_face_detected" | "my_wall_panel_motion_detected" | "protection_window"
export const binary_sensor: BinarySensor<BinarySensorIDs> = {
  
  ["tims_ipone_focus"]: {
    entity_id: "binary_sensor.tims_ipone_focus",
    isOn: () => shadowState["binary_sensor.tims_ipone_focus"].state === "on",
    get state() { return shadowState["binary_sensor.tims_ipone_focus"]},
  },

  ["sm_g980f_is_charging"]: {
    entity_id: "binary_sensor.sm_g980f_is_charging",
    isOn: () => shadowState["binary_sensor.sm_g980f_is_charging"].state === "on",
    get state() { return shadowState["binary_sensor.sm_g980f_is_charging"]},
  },

  ["mirahi_c02d96kqmd6t_camera_in_use"]: {
    entity_id: "binary_sensor.mirahi_c02d96kqmd6t_camera_in_use",
    isOn: () => shadowState["binary_sensor.mirahi_c02d96kqmd6t_camera_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.mirahi_c02d96kqmd6t_camera_in_use"]},
  },

  ["mirahi_c02d96kqmd6t_audio_input_in_use"]: {
    entity_id: "binary_sensor.mirahi_c02d96kqmd6t_audio_input_in_use",
    isOn: () => shadowState["binary_sensor.mirahi_c02d96kqmd6t_audio_input_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.mirahi_c02d96kqmd6t_audio_input_in_use"]},
  },

  ["mirahi_c02d96kqmd6t_audio_output_in_use"]: {
    entity_id: "binary_sensor.mirahi_c02d96kqmd6t_audio_output_in_use",
    isOn: () => shadowState["binary_sensor.mirahi_c02d96kqmd6t_audio_output_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.mirahi_c02d96kqmd6t_audio_output_in_use"]},
  },

  ["mirahi_c02d96kqmd6t_focus"]: {
    entity_id: "binary_sensor.mirahi_c02d96kqmd6t_focus",
    isOn: () => shadowState["binary_sensor.mirahi_c02d96kqmd6t_focus"].state === "on",
    get state() { return shadowState["binary_sensor.mirahi_c02d96kqmd6t_focus"]},
  },

  ["mirahi_c02d96kqmd6t_active"]: {
    entity_id: "binary_sensor.mirahi_c02d96kqmd6t_active",
    isOn: () => shadowState["binary_sensor.mirahi_c02d96kqmd6t_active"].state === "on",
    get state() { return shadowState["binary_sensor.mirahi_c02d96kqmd6t_active"]},
  },

  ["tims_macbook_pro_audio_output_in_use"]: {
    entity_id: "binary_sensor.tims_macbook_pro_audio_output_in_use",
    isOn: () => shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"].state === "on",
    get state() { return shadowState["binary_sensor.tims_macbook_pro_audio_output_in_use"]},
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

  ["s22_is_charging"]: {
    entity_id: "binary_sensor.s22_is_charging",
    isOn: () => shadowState["binary_sensor.s22_is_charging"].state === "on",
    get state() { return shadowState["binary_sensor.s22_is_charging"]},
  },

  ["living_room_spot_3_update_available"]: {
    entity_id: "binary_sensor.living_room_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.living_room_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_spot_3_update_available"]},
  },

  ["dining_room_spot_3_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_3_update_available"]},
  },

  ["kitchen_spot_1_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_1_update_available"]},
  },

  ["living_room_light_update_available"]: {
    entity_id: "binary_sensor.living_room_light_update_available",
    isOn: () => shadowState["binary_sensor.living_room_light_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_light_update_available"]},
  },

  ["dining_room_spot_2_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_2_update_available"]},
  },

  ["coffee_machine_outlet_update_available"]: {
    entity_id: "binary_sensor.coffee_machine_outlet_update_available",
    isOn: () => shadowState["binary_sensor.coffee_machine_outlet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.coffee_machine_outlet_update_available"]},
  },

  ["dining_room_spot_1_update_available"]: {
    entity_id: "binary_sensor.dining_room_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.dining_room_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.dining_room_spot_1_update_available"]},
  },

  ["kitchen_spot_2_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_2_update_available"]},
  },

  ["living_room_remote_update_available"]: {
    entity_id: "binary_sensor.living_room_remote_update_available",
    isOn: () => shadowState["binary_sensor.living_room_remote_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.living_room_remote_update_available"]},
  },

  ["bedroom_bed_light_update_available"]: {
    entity_id: "binary_sensor.bedroom_bed_light_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_bed_light_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_bed_light_update_available"]},
  },

  ["bathroom_spot_2_update_available"]: {
    entity_id: "binary_sensor.bathroom_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.bathroom_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_spot_2_update_available"]},
  },

  ["bedroom_secondary_lamp_update_available"]: {
    entity_id: "binary_sensor.bedroom_secondary_lamp_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_secondary_lamp_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_secondary_lamp_update_available"]},
  },

  ["stairs_motion_sensor_occupancy"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_occupancy",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_occupancy"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_occupancy"]},
  },

  ["stairs_motion_sensor_battery_low"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_battery_low",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_battery_low"]},
  },

  ["stairs_motion_sensor_tamper"]: {
    entity_id: "binary_sensor.stairs_motion_sensor_tamper",
    isOn: () => shadowState["binary_sensor.stairs_motion_sensor_tamper"].state === "on",
    get state() { return shadowState["binary_sensor.stairs_motion_sensor_tamper"]},
  },

  ["hall_upstairs_spot_3_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_3_update_available"]},
  },

  ["hall_upstairs_spot_2_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_2_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_2_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_2_update_available"]},
  },

  ["hall_upstairs_spot_1_update_available"]: {
    entity_id: "binary_sensor.hall_upstairs_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.hall_upstairs_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_upstairs_spot_1_update_available"]},
  },

  ["fridge_door_sensor_contact"]: {
    entity_id: "binary_sensor.fridge_door_sensor_contact",
    isOn: () => shadowState["binary_sensor.fridge_door_sensor_contact"].state === "on",
    get state() { return shadowState["binary_sensor.fridge_door_sensor_contact"]},
  },

  ["bedside_lamp_update_available"]: {
    entity_id: "binary_sensor.bedside_lamp_update_available",
    isOn: () => shadowState["binary_sensor.bedside_lamp_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedside_lamp_update_available"]},
  },

  ["toilet_update_available"]: {
    entity_id: "binary_sensor.toilet_update_available",
    isOn: () => shadowState["binary_sensor.toilet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_update_available"]},
  },

  ["garage_electric_door_sensor_open_contact"]: {
    entity_id: "binary_sensor.garage_electric_door_sensor_open_contact",
    isOn: () => shadowState["binary_sensor.garage_electric_door_sensor_open_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_electric_door_sensor_open_contact"]},
  },

  ["garage_remote_update_available"]: {
    entity_id: "binary_sensor.garage_remote_update_available",
    isOn: () => shadowState["binary_sensor.garage_remote_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_remote_update_available"]},
  },

  ["bedroom_humidifier_switch_update_available"]: {
    entity_id: "binary_sensor.bedroom_humidifier_switch_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_humidifier_switch_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_humidifier_switch_update_available"]},
  },

  ["garage_door_contact"]: {
    entity_id: "binary_sensor.garage_door_contact",
    isOn: () => shadowState["binary_sensor.garage_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_door_contact"]},
  },

  ["garden_door_contact"]: {
    entity_id: "binary_sensor.garden_door_contact",
    isOn: () => shadowState["binary_sensor.garden_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garden_door_contact"]},
  },

  ["toilet_door_contact"]: {
    entity_id: "binary_sensor.toilet_door_contact",
    isOn: () => shadowState["binary_sensor.toilet_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_door_contact"]},
  },

  ["toilet_door_battery_low"]: {
    entity_id: "binary_sensor.toilet_door_battery_low",
    isOn: () => shadowState["binary_sensor.toilet_door_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.toilet_door_battery_low"]},
  },

  ["entrance_door_contact"]: {
    entity_id: "binary_sensor.entrance_door_contact",
    isOn: () => shadowState["binary_sensor.entrance_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.entrance_door_contact"]},
  },

  ["garage_fridge_update_available"]: {
    entity_id: "binary_sensor.garage_fridge_update_available",
    isOn: () => shadowState["binary_sensor.garage_fridge_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_fridge_update_available"]},
  },

  ["hall_entrance_update_available"]: {
    entity_id: "binary_sensor.hall_entrance_update_available",
    isOn: () => shadowState["binary_sensor.hall_entrance_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_entrance_update_available"]},
  },

  ["garage_car_update_available"]: {
    entity_id: "binary_sensor.garage_car_update_available",
    isOn: () => shadowState["binary_sensor.garage_car_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.garage_car_update_available"]},
  },

  ["kitchen_spot_3_update_available"]: {
    entity_id: "binary_sensor.kitchen_spot_3_update_available",
    isOn: () => shadowState["binary_sensor.kitchen_spot_3_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.kitchen_spot_3_update_available"]},
  },

  ["hall_stairs_update_available"]: {
    entity_id: "binary_sensor.hall_stairs_update_available",
    isOn: () => shadowState["binary_sensor.hall_stairs_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.hall_stairs_update_available"]},
  },

  ["bathroom_spot_1_update_available"]: {
    entity_id: "binary_sensor.bathroom_spot_1_update_available",
    isOn: () => shadowState["binary_sensor.bathroom_spot_1_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_spot_1_update_available"]},
  },

  ["desk_outlet_update_available"]: {
    entity_id: "binary_sensor.desk_outlet_update_available",
    isOn: () => shadowState["binary_sensor.desk_outlet_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.desk_outlet_update_available"]},
  },

  ["bedroom_window_bed_contact"]: {
    entity_id: "binary_sensor.bedroom_window_bed_contact",
    isOn: () => shadowState["binary_sensor.bedroom_window_bed_contact"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_window_bed_contact"]},
  },

  ["garage_electric_door_sensor_closed_contact"]: {
    entity_id: "binary_sensor.garage_electric_door_sensor_closed_contact",
    isOn: () => shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"].state === "on",
    get state() { return shadowState["binary_sensor.garage_electric_door_sensor_closed_contact"]},
  },

  ["siren_battery_low"]: {
    entity_id: "binary_sensor.siren_battery_low",
    isOn: () => shadowState["binary_sensor.siren_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.siren_battery_low"]},
  },

  ["bathroom_door_contact"]: {
    entity_id: "binary_sensor.bathroom_door_contact",
    isOn: () => shadowState["binary_sensor.bathroom_door_contact"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_door_contact"]},
  },

  ["bathroom_door_battery_low"]: {
    entity_id: "binary_sensor.bathroom_door_battery_low",
    isOn: () => shadowState["binary_sensor.bathroom_door_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.bathroom_door_battery_low"]},
  },

  ["bedroom_button_tim_update_available"]: {
    entity_id: "binary_sensor.bedroom_button_tim_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_button_tim_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_button_tim_update_available"]},
  },

  ["bedroom_button_gaby_update_available"]: {
    entity_id: "binary_sensor.bedroom_button_gaby_update_available",
    isOn: () => shadowState["binary_sensor.bedroom_button_gaby_update_available"].state === "on",
    get state() { return shadowState["binary_sensor.bedroom_button_gaby_update_available"]},
  },

  ["0x00124b002519b204_contact"]: {
    entity_id: "binary_sensor.0x00124b002519b204_contact",
    isOn: () => shadowState["binary_sensor.0x00124b002519b204_contact"].state === "on",
    get state() { return shadowState["binary_sensor.0x00124b002519b204_contact"]},
  },

  ["0x00124b002519b204_battery_low"]: {
    entity_id: "binary_sensor.0x00124b002519b204_battery_low",
    isOn: () => shadowState["binary_sensor.0x00124b002519b204_battery_low"].state === "on",
    get state() { return shadowState["binary_sensor.0x00124b002519b204_battery_low"]},
  },

  ["1_yjx_427_park_brake_status"]: {
    entity_id: "binary_sensor.1_yjx_427_park_brake_status",
    isOn: () => shadowState["binary_sensor.1_yjx_427_park_brake_status"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_park_brake_status"]},
  },

  ["1_yjx_427_tire_warning"]: {
    entity_id: "binary_sensor.1_yjx_427_tire_warning",
    isOn: () => shadowState["binary_sensor.1_yjx_427_tire_warning"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_tire_warning"]},
  },

  ["1_yjx_427_low_brake_fluid_warning"]: {
    entity_id: "binary_sensor.1_yjx_427_low_brake_fluid_warning",
    isOn: () => shadowState["binary_sensor.1_yjx_427_low_brake_fluid_warning"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_low_brake_fluid_warning"]},
  },

  ["1_yjx_427_low_coolant_level_warning"]: {
    entity_id: "binary_sensor.1_yjx_427_low_coolant_level_warning",
    isOn: () => shadowState["binary_sensor.1_yjx_427_low_coolant_level_warning"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_low_coolant_level_warning"]},
  },

  ["1_yjx_427_low_wash_water_warning"]: {
    entity_id: "binary_sensor.1_yjx_427_low_wash_water_warning",
    isOn: () => shadowState["binary_sensor.1_yjx_427_low_wash_water_warning"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_low_wash_water_warning"]},
  },

  ["1_yjx_427_windows_closed"]: {
    entity_id: "binary_sensor.1_yjx_427_windows_closed",
    isOn: () => shadowState["binary_sensor.1_yjx_427_windows_closed"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_windows_closed"]},
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

  ["updater"]: {
    entity_id: "binary_sensor.updater",
    isOn: () => shadowState["binary_sensor.updater"].state === "on",
    get state() { return shadowState["binary_sensor.updater"]},
  },

  ["1_yjx_427_liquid_range_critical"]: {
    entity_id: "binary_sensor.1_yjx_427_liquid_range_critical",
    isOn: () => shadowState["binary_sensor.1_yjx_427_liquid_range_critical"].state === "on",
    get state() { return shadowState["binary_sensor.1_yjx_427_liquid_range_critical"]},
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

  ["protection_window"]: {
    entity_id: "binary_sensor.protection_window",
    isOn: () => shadowState["binary_sensor.protection_window"].state === "on",
    get state() { return shadowState["binary_sensor.protection_window"]},
  },
}
  