import { shadowState, Sensor} from "@herja/core"
        export type SensorIDs = "wallbox_portal_depot_price" | "wallbox_portal_charging_power" | "wallbox_portal_max_available_power" | "wallbox_portal_charging_speed" | "wallbox_portal_added_range" | "wallbox_portal_added_energy" | "wallbox_portal_discharged_energy" | "wallbox_portal_cost" | "wallbox_portal_current_mode" | "wallbox_portal_state_of_charge" | "wallbox_portal_max_charging_current" | "wallbox_portal_status_description" | "energy_production_today" | "energy_production_tomorrow" | "power_highest_peak_time_today" | "power_highest_peak_time_tomorrow" | "power_production_now" | "energy_current_hour" | "energy_next_hour" | "secondary_room_ir_blaster_temperature" | "secondary_room_ir_blaster_humidity" | "living_room_ir_blaster_temperature_2" | "living_room_ir_blaster_humidity_2" | "status" | "pv_power_a" | "pv_power_b" | "pv_current_a" | "pv_current_b" | "grid_power" | "total_yield" | "daily_yield" | "pv_gen_meter" | "plex_celty_3_0" | "1_yjx_427_car" | "1_yjx_427_ignition_state" | "1_yjx_427_lock" | "1_yjx_427_odometer" | "garage_state" | "1_yjx_427_oil_level" | "garage_position" | "1_yjx_427_rcp_features" | "1_yjx_427_starter_battery_state" | "1_yjx_427_fuel_level" | "kitchen_spot_1_power" | "dining_room_spot_2_power" | "dining_room_spot_1_power" | "living_room_spot_3_power" | "living_room_light_power" | "bedroom_bed_light_power" | "dining_room_spot_3_power" | "hall_entrance_power" | "garage_car_power" | "kitchen_spot_2_power" | "kitchen_spot_3_power" | "hall_stairs_power" | "bathroom_spot_2_power" | "hall_upstairs_spot_3_power" | "hall_upstairs_spot_1_power" | "hall_upstairs_spot_2_power" | "bathroom_spot_1_power" | "toilet_power" | "garage_fridge_power" | "0x14b457fffefafbcf_power" | "kitchen_spot_1_energy" | "dining_room_spot_2_energy" | "dining_room_spot_1_energy" | "living_room_spot_3_energy" | "living_room_light_energy" | "bedroom_bed_light_energy" | "dining_room_spot_3_energy" | "hall_entrance_energy" | "garage_car_energy" | "kitchen_spot_2_energy" | "kitchen_spot_3_energy" | "hall_stairs_energy" | "bathroom_spot_2_energy" | "hall_upstairs_spot_3_energy" | "hall_upstairs_spot_1_energy" | "hall_upstairs_spot_2_energy" | "bathroom_spot_1_energy" | "toilet_energy" | "garage_fridge_energy" | "0x14b457fffefafbcf_energy" | "garage_state_2" | "garage_position_2" | "sensor_cleaning" | "main_filter" | "right_brush" | "main_brush" | "error_description" | "wi_fi_configuration" | "goto_locations" | "zone_presets" | "map_segments" | "sm_g980f_battery_level" | "sm_g980f_battery_state" | "sm_g980f_charger_type" | "sm_g980f_battery_health" | "sm_g980f_battery_temperature" | "sm_g980f_detected_activity" | "sm_g980f_sleep_confidence" | "sm_g980f_sleep_segment" | "sm_g980f_ringer_mode" | "sm_g980f_audio_mode" | "sm_g980f_volume_level_dtmf" | "sm_g980f_bluetooth_connection" | "sm_g980f_ble_transmitter" | "sm_g980f_do_not_disturb_sensor" | "sm_g980f_last_reboot" | "sm_g980f_light_sensor" | "sm_g980f_wifi_connection" | "sm_g980f_wifi_bssid" | "sm_g980f_wifi_ip_address" | "sm_g980f_wifi_link_speed" | "sm_g980f_wifi_frequency" | "sm_g980f_wifi_signal_strength" | "sm_g980f_public_ip_address" | "sm_g980f_network_type" | "sm_g980f_next_alarm" | "sm_g980f_last_notification" | "sm_g980f_last_removed_notification" | "sm_g980f_active_notification_count" | "sm_g980f_media_session" | "sm_g980f_sim_1" | "sm_g980f_sim_2" | "sm_g980f_pressure_sensor" | "sm_g980f_proximity_sensor" | "sm_g980f_steps_sensor" | "sm_g980f_current_time_zone" | "sm_g980f_battery_power" | "sm_g980f_beacon_monitor" | "sm_g980f_accent_color" | "tims_macbook_pro_ssid" | "tims_macbook_pro_internal_battery_level" | "tims_macbook_pro_internal_battery_state" | "tims_macbook_pro_storage" | "tims_macbook_pro_connection_type" | "tims_macbook_pro_active_camera" | "tims_macbook_pro_geocoded_location" | "tims_macbook_pro_active_audio_input" | "tims_macbook_pro_active_audio_output" | "tims_macbook_pro_last_update_trigger" | "tims_macbook_pro_frontmost_app" | "tims_macbook_pro_primary_display_name" | "tims_macbook_pro_displays" | "tims_macbook_pro_primary_display_id" | "tims_macbook_pro_bssid" | "s22_battery_level" | "s22_battery_state" | "s22_charger_type" | "s22_battery_health" | "s22_battery_temperature" | "s22_current_version" | "s22_app_rx_gb" | "s22_app_tx_gb" | "s22_app_memory" | "s22_app_standby_bucket" | "s22_app_importance" | "s22_ringer_mode" | "s22_audio_mode" | "s22_volume_level_alarm" | "s22_volume_level_call" | "s22_volume_level_music" | "s22_volume_level_ringer" | "s22_volume_level_notification" | "s22_volume_level_system" | "s22_volume_level_dtmf" | "s22_volume_level_accessibility" | "s22_bluetooth_connection" | "s22_ble_transmitter" | "s22_do_not_disturb_sensor" | "s22_last_reboot" | "s22_last_update_trigger" | "s22_wifi_connection" | "s22_wifi_bssid" | "s22_wifi_ip_address" | "s22_wifi_link_speed" | "s22_wifi_frequency" | "s22_wifi_signal_strength" | "s22_public_ip_address" | "s22_network_type" | "s22_next_alarm" | "s22_phone_state" | "s22_sim_1" | "s22_sim_2" | "s22_pressure_sensor" | "s22_proximity_sensor" | "s22_steps_sensor" | "s22_internal_storage" | "s22_external_storage" | "s22_current_time_zone" | "s22_total_rx_gb" | "s22_total_tx_gb" | "s22_mobile_rx_gb" | "s22_mobile_tx_gb" | "s22_battery_power" | "nibe_133481_40067" | "nibe_133481_40014" | "nibe_133481_40013" | "nibe_133481_40004" | "nibe_133481_40083" | "nibe_133481_40081" | "nibe_133481_40079" | "nibe_133481_43005" | "nibe_133481_43161" | "nibe_133481_47276" | "nibe_133481_43009" | "nibe_133481_40071" | "nibe_133481_40152" | "nibe_133481_40033" | "nibe_133481_44256" | "nibe_133481_44270" | "nibe_133481_40045" | "nibe_133481_44266" | "nibe_133481_10033" | "nibe_133481_47613" | "nibe_133481_43091" | "nibe_133481_47214" | "nibe_133481_40121" | "nibe_133481_44899" | "nibe_133481_44896" | "nibe_133481_44897" | "nibe_133481_44908" | "nibe_133481_10069" | "nibe_133481_47411" | "nibe_133481_47410" | "nibe_133481_47409" | "nibe_133481_47408" | "nibe_133481_47407" | "nibe_133481_48366" | "nibe_133481_47412" | "nibe_133481_48745" | "nibe_133481_0" | "0x00124b002520a310_battery" | "0x00124b002519b204_battery" | "bedroom_button_gaby_action" | "bedroom_button_gaby_battery" | "bedroom_button_tim_action" | "bedroom_button_tim_battery" | "bathroom_door_battery" | "tripod_button_power_outage_count" | "tripod_button_action" | "tripod_button_battery" | "siren_power_type" | "siren_humidity" | "siren_temperature" | "garage_electric_door_sensor_closed_power_outage_count" | "garage_electric_door_sensor_closed_device_temperature" | "garage_electric_door_sensor_closed_battery" | "bedroom_window_bed_power_outage_count" | "bedroom_window_bed_device_temperature" | "bedroom_window_bed_battery" | "desk_outlet_energy" | "desk_outlet_power" | "living_room_table_button_power_outage_count" | "living_room_table_button_action" | "living_room_table_button_battery" | "living_room_table_sensor_humidity" | "living_room_table_sensor_temperature" | "living_room_table_sensor_battery" | "entrance_door_power_outage_count" | "entrance_door_device_temperature" | "entrance_door_battery" | "toilet_door_battery" | "garden_door_power_outage_count" | "garden_door_device_temperature" | "garden_door_battery" | "garage_door_power_outage_count" | "garage_door_device_temperature" | "garage_door_battery" | "bedroom_humidifier_switch_energy" | "bedroom_humidifier_switch_power" | "garage_remote_action_duration" | "garage_remote_action" | "garage_remote_battery" | "garage_electric_door_sensor_open_power_outage_count" | "garage_electric_door_sensor_open_device_temperature" | "garage_electric_door_sensor_open_battery" | "coffee_machine_button_power_outage_count" | "coffee_machine_button_device_temperature" | "coffee_machine_button_action" | "coffee_machine_button_battery" | "bedside_button_action" | "bedside_button_battery" | "bedside_lamp_energy" | "bedside_lamp_power" | "fridge_door_sensor_power_outage_count" | "fridge_door_sensor_device_temperature" | "fridge_door_sensor_battery" | "stairs_motion_sensor_battery" | "bedroom_secondary_lamp_energy" | "bedroom_secondary_lamp_power" | "living_room_remote_action_duration" | "living_room_remote_action" | "living_room_remote_battery" | "0xa4c1385c18410b5b_humidity" | "0xa4c1385c18410b5b_temperature" | "0xa4c1385c18410b5b_battery" | "coffee_machine_outlet_energy" | "coffee_machine_outlet_power" | "kitchen_button_click" | "kitchen_button_power_outage_count" | "kitchen_button_device_temperature" | "kitchen_button_action" | "kitchen_button_battery" | "nibe_133481_44703" | "nibe_133481_44396" | "nibe_133481_44362" | "nibe_133481_10014" | "nibe_133481_44069" | "nibe_133481_44702" | "nibe_133481_44058" | "nibe_133481_44363" | "nibe_133481_44059" | "nibe_133481_44060" | "nibe_133481_44055" | "nibe_133481_44699" | "nibe_133481_44071" | "nibe_133481_44073" | "nibe_133481_40737" | "nibe_133481_44701" | "nibe_133481_40782" | "nibe_133481_44014" | "last_activity" | "connection_status" | "has_alarmed" | "software_version" | "hacs" | "hygea" | "hygea_be" | "d1df7d67_b4318c17" | "bedroom_ir_blaster_temperature" | "bedroom_ir_blaster_humidity" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "my_wall_panel_battery_level" | "my_wall_panel_light" | "living_room_cluster_size" | "living_room_cluster_leader" | "bedroom_cluster_size" | "bedroom_cluster_leader" | "tims_ipone_room_presence" | "tim_s_watch_room_presence" | "tim_s_ipone_room_presence" | "tim_s_ipone_room_presence_2" | "tim_s_phone_room_presence" | "gaby_s_phone_room_presence" | "garage_cluster_size" | "garage_cluster_leader" | "canon_ts5300_series_black" | "canon_ts5300_series_color" | "canon_ts5300_series" | "0x001788010b21a974_power" | "0x001788010b21a974_energy" | "wvgzzze2zmp011645_climatisation_state" | "wvgzzze2zmp011645_remaining_climatisation_time" | "wvgzzze2zmp011645_target_temperature_c" | "wvgzzze2zmp011645_target_temperature_f" | "wvgzzze2zmp011645_unit_in_car" | "wvgzzze2zmp011645_charging_state" | "wvgzzze2zmp011645_remaining_charging_time" | "wvgzzze2zmp011645_charging_mode" | "wvgzzze2zmp011645_charge_power" | "wvgzzze2zmp011645_charge_rate" | "wvgzzze2zmp011645_charging_settings" | "wvgzzze2zmp011645_charge_type" | "wvgzzze2zmp011645_max_charge_current_ac" | "wvgzzze2zmp011645_target_state_of_charge" | "wvgzzze2zmp011645_state_of_charge" | "wvgzzze2zmp011645_range_in_kilometers" | "wvgzzze2zmp011645_range_in_miles" | "nibe_133481_44061" | "nibe_133481_44700" | "tim_s_id_4_odometer_in_kilometers" | "tim_s_id_4_odometer_in_miles" | "office_ir_blaster_humidity" | "office_ir_blaster_temperature"
export const sensor: Sensor<SensorIDs> = {
  
  ["wallbox_portal_depot_price"]: {
    entity_id: "sensor.wallbox_portal_depot_price",
    get state() { return shadowState["sensor.wallbox_portal_depot_price"]},
  },

  ["wallbox_portal_charging_power"]: {
    entity_id: "sensor.wallbox_portal_charging_power",
    get state() { return shadowState["sensor.wallbox_portal_charging_power"]},
  },

  ["wallbox_portal_max_available_power"]: {
    entity_id: "sensor.wallbox_portal_max_available_power",
    get state() { return shadowState["sensor.wallbox_portal_max_available_power"]},
  },

  ["wallbox_portal_charging_speed"]: {
    entity_id: "sensor.wallbox_portal_charging_speed",
    get state() { return shadowState["sensor.wallbox_portal_charging_speed"]},
  },

  ["wallbox_portal_added_range"]: {
    entity_id: "sensor.wallbox_portal_added_range",
    get state() { return shadowState["sensor.wallbox_portal_added_range"]},
  },

  ["wallbox_portal_added_energy"]: {
    entity_id: "sensor.wallbox_portal_added_energy",
    get state() { return shadowState["sensor.wallbox_portal_added_energy"]},
  },

  ["wallbox_portal_discharged_energy"]: {
    entity_id: "sensor.wallbox_portal_discharged_energy",
    get state() { return shadowState["sensor.wallbox_portal_discharged_energy"]},
  },

  ["wallbox_portal_cost"]: {
    entity_id: "sensor.wallbox_portal_cost",
    get state() { return shadowState["sensor.wallbox_portal_cost"]},
  },

  ["wallbox_portal_current_mode"]: {
    entity_id: "sensor.wallbox_portal_current_mode",
    get state() { return shadowState["sensor.wallbox_portal_current_mode"]},
  },

  ["wallbox_portal_state_of_charge"]: {
    entity_id: "sensor.wallbox_portal_state_of_charge",
    get state() { return shadowState["sensor.wallbox_portal_state_of_charge"]},
  },

  ["wallbox_portal_max_charging_current"]: {
    entity_id: "sensor.wallbox_portal_max_charging_current",
    get state() { return shadowState["sensor.wallbox_portal_max_charging_current"]},
  },

  ["wallbox_portal_status_description"]: {
    entity_id: "sensor.wallbox_portal_status_description",
    get state() { return shadowState["sensor.wallbox_portal_status_description"]},
  },

  ["energy_production_today"]: {
    entity_id: "sensor.energy_production_today",
    get state() { return shadowState["sensor.energy_production_today"]},
  },

  ["energy_production_tomorrow"]: {
    entity_id: "sensor.energy_production_tomorrow",
    get state() { return shadowState["sensor.energy_production_tomorrow"]},
  },

  ["power_highest_peak_time_today"]: {
    entity_id: "sensor.power_highest_peak_time_today",
    get state() { return shadowState["sensor.power_highest_peak_time_today"]},
  },

  ["power_highest_peak_time_tomorrow"]: {
    entity_id: "sensor.power_highest_peak_time_tomorrow",
    get state() { return shadowState["sensor.power_highest_peak_time_tomorrow"]},
  },

  ["power_production_now"]: {
    entity_id: "sensor.power_production_now",
    get state() { return shadowState["sensor.power_production_now"]},
  },

  ["energy_current_hour"]: {
    entity_id: "sensor.energy_current_hour",
    get state() { return shadowState["sensor.energy_current_hour"]},
  },

  ["energy_next_hour"]: {
    entity_id: "sensor.energy_next_hour",
    get state() { return shadowState["sensor.energy_next_hour"]},
  },

  ["secondary_room_ir_blaster_temperature"]: {
    entity_id: "sensor.secondary_room_ir_blaster_temperature",
    get state() { return shadowState["sensor.secondary_room_ir_blaster_temperature"]},
  },

  ["secondary_room_ir_blaster_humidity"]: {
    entity_id: "sensor.secondary_room_ir_blaster_humidity",
    get state() { return shadowState["sensor.secondary_room_ir_blaster_humidity"]},
  },

  ["living_room_ir_blaster_temperature_2"]: {
    entity_id: "sensor.living_room_ir_blaster_temperature_2",
    get state() { return shadowState["sensor.living_room_ir_blaster_temperature_2"]},
  },

  ["living_room_ir_blaster_humidity_2"]: {
    entity_id: "sensor.living_room_ir_blaster_humidity_2",
    get state() { return shadowState["sensor.living_room_ir_blaster_humidity_2"]},
  },

  ["status"]: {
    entity_id: "sensor.status",
    get state() { return shadowState["sensor.status"]},
  },

  ["pv_power_a"]: {
    entity_id: "sensor.pv_power_a",
    get state() { return shadowState["sensor.pv_power_a"]},
  },

  ["pv_power_b"]: {
    entity_id: "sensor.pv_power_b",
    get state() { return shadowState["sensor.pv_power_b"]},
  },

  ["pv_current_a"]: {
    entity_id: "sensor.pv_current_a",
    get state() { return shadowState["sensor.pv_current_a"]},
  },

  ["pv_current_b"]: {
    entity_id: "sensor.pv_current_b",
    get state() { return shadowState["sensor.pv_current_b"]},
  },

  ["grid_power"]: {
    entity_id: "sensor.grid_power",
    get state() { return shadowState["sensor.grid_power"]},
  },

  ["total_yield"]: {
    entity_id: "sensor.total_yield",
    get state() { return shadowState["sensor.total_yield"]},
  },

  ["daily_yield"]: {
    entity_id: "sensor.daily_yield",
    get state() { return shadowState["sensor.daily_yield"]},
  },

  ["pv_gen_meter"]: {
    entity_id: "sensor.pv_gen_meter",
    get state() { return shadowState["sensor.pv_gen_meter"]},
  },

  ["plex_celty_3_0"]: {
    entity_id: "sensor.plex_celty_3_0",
    get state() { return shadowState["sensor.plex_celty_3_0"]},
  },

  ["1_yjx_427_car"]: {
    entity_id: "sensor.1_yjx_427_car",
    get state() { return shadowState["sensor.1_yjx_427_car"]},
  },

  ["1_yjx_427_ignition_state"]: {
    entity_id: "sensor.1_yjx_427_ignition_state",
    get state() { return shadowState["sensor.1_yjx_427_ignition_state"]},
  },

  ["1_yjx_427_lock"]: {
    entity_id: "sensor.1_yjx_427_lock",
    get state() { return shadowState["sensor.1_yjx_427_lock"]},
  },

  ["1_yjx_427_odometer"]: {
    entity_id: "sensor.1_yjx_427_odometer",
    get state() { return shadowState["sensor.1_yjx_427_odometer"]},
  },

  ["garage_state"]: {
    entity_id: "sensor.garage_state",
    get state() { return shadowState["sensor.garage_state"]},
  },

  ["1_yjx_427_oil_level"]: {
    entity_id: "sensor.1_yjx_427_oil_level",
    get state() { return shadowState["sensor.1_yjx_427_oil_level"]},
  },

  ["garage_position"]: {
    entity_id: "sensor.garage_position",
    get state() { return shadowState["sensor.garage_position"]},
  },

  ["1_yjx_427_rcp_features"]: {
    entity_id: "sensor.1_yjx_427_rcp_features",
    get state() { return shadowState["sensor.1_yjx_427_rcp_features"]},
  },

  ["1_yjx_427_starter_battery_state"]: {
    entity_id: "sensor.1_yjx_427_starter_battery_state",
    get state() { return shadowState["sensor.1_yjx_427_starter_battery_state"]},
  },

  ["1_yjx_427_fuel_level"]: {
    entity_id: "sensor.1_yjx_427_fuel_level",
    get state() { return shadowState["sensor.1_yjx_427_fuel_level"]},
  },

  ["kitchen_spot_1_power"]: {
    entity_id: "sensor.kitchen_spot_1_power",
    get state() { return shadowState["sensor.kitchen_spot_1_power"]},
  },

  ["dining_room_spot_2_power"]: {
    entity_id: "sensor.dining_room_spot_2_power",
    get state() { return shadowState["sensor.dining_room_spot_2_power"]},
  },

  ["dining_room_spot_1_power"]: {
    entity_id: "sensor.dining_room_spot_1_power",
    get state() { return shadowState["sensor.dining_room_spot_1_power"]},
  },

  ["living_room_spot_3_power"]: {
    entity_id: "sensor.living_room_spot_3_power",
    get state() { return shadowState["sensor.living_room_spot_3_power"]},
  },

  ["living_room_light_power"]: {
    entity_id: "sensor.living_room_light_power",
    get state() { return shadowState["sensor.living_room_light_power"]},
  },

  ["bedroom_bed_light_power"]: {
    entity_id: "sensor.bedroom_bed_light_power",
    get state() { return shadowState["sensor.bedroom_bed_light_power"]},
  },

  ["dining_room_spot_3_power"]: {
    entity_id: "sensor.dining_room_spot_3_power",
    get state() { return shadowState["sensor.dining_room_spot_3_power"]},
  },

  ["hall_entrance_power"]: {
    entity_id: "sensor.hall_entrance_power",
    get state() { return shadowState["sensor.hall_entrance_power"]},
  },

  ["garage_car_power"]: {
    entity_id: "sensor.garage_car_power",
    get state() { return shadowState["sensor.garage_car_power"]},
  },

  ["kitchen_spot_2_power"]: {
    entity_id: "sensor.kitchen_spot_2_power",
    get state() { return shadowState["sensor.kitchen_spot_2_power"]},
  },

  ["kitchen_spot_3_power"]: {
    entity_id: "sensor.kitchen_spot_3_power",
    get state() { return shadowState["sensor.kitchen_spot_3_power"]},
  },

  ["hall_stairs_power"]: {
    entity_id: "sensor.hall_stairs_power",
    get state() { return shadowState["sensor.hall_stairs_power"]},
  },

  ["bathroom_spot_2_power"]: {
    entity_id: "sensor.bathroom_spot_2_power",
    get state() { return shadowState["sensor.bathroom_spot_2_power"]},
  },

  ["hall_upstairs_spot_3_power"]: {
    entity_id: "sensor.hall_upstairs_spot_3_power",
    get state() { return shadowState["sensor.hall_upstairs_spot_3_power"]},
  },

  ["hall_upstairs_spot_1_power"]: {
    entity_id: "sensor.hall_upstairs_spot_1_power",
    get state() { return shadowState["sensor.hall_upstairs_spot_1_power"]},
  },

  ["hall_upstairs_spot_2_power"]: {
    entity_id: "sensor.hall_upstairs_spot_2_power",
    get state() { return shadowState["sensor.hall_upstairs_spot_2_power"]},
  },

  ["bathroom_spot_1_power"]: {
    entity_id: "sensor.bathroom_spot_1_power",
    get state() { return shadowState["sensor.bathroom_spot_1_power"]},
  },

  ["toilet_power"]: {
    entity_id: "sensor.toilet_power",
    get state() { return shadowState["sensor.toilet_power"]},
  },

  ["garage_fridge_power"]: {
    entity_id: "sensor.garage_fridge_power",
    get state() { return shadowState["sensor.garage_fridge_power"]},
  },

  ["0x14b457fffefafbcf_power"]: {
    entity_id: "sensor.0x14b457fffefafbcf_power",
    get state() { return shadowState["sensor.0x14b457fffefafbcf_power"]},
  },

  ["kitchen_spot_1_energy"]: {
    entity_id: "sensor.kitchen_spot_1_energy",
    get state() { return shadowState["sensor.kitchen_spot_1_energy"]},
  },

  ["dining_room_spot_2_energy"]: {
    entity_id: "sensor.dining_room_spot_2_energy",
    get state() { return shadowState["sensor.dining_room_spot_2_energy"]},
  },

  ["dining_room_spot_1_energy"]: {
    entity_id: "sensor.dining_room_spot_1_energy",
    get state() { return shadowState["sensor.dining_room_spot_1_energy"]},
  },

  ["living_room_spot_3_energy"]: {
    entity_id: "sensor.living_room_spot_3_energy",
    get state() { return shadowState["sensor.living_room_spot_3_energy"]},
  },

  ["living_room_light_energy"]: {
    entity_id: "sensor.living_room_light_energy",
    get state() { return shadowState["sensor.living_room_light_energy"]},
  },

  ["bedroom_bed_light_energy"]: {
    entity_id: "sensor.bedroom_bed_light_energy",
    get state() { return shadowState["sensor.bedroom_bed_light_energy"]},
  },

  ["dining_room_spot_3_energy"]: {
    entity_id: "sensor.dining_room_spot_3_energy",
    get state() { return shadowState["sensor.dining_room_spot_3_energy"]},
  },

  ["hall_entrance_energy"]: {
    entity_id: "sensor.hall_entrance_energy",
    get state() { return shadowState["sensor.hall_entrance_energy"]},
  },

  ["garage_car_energy"]: {
    entity_id: "sensor.garage_car_energy",
    get state() { return shadowState["sensor.garage_car_energy"]},
  },

  ["kitchen_spot_2_energy"]: {
    entity_id: "sensor.kitchen_spot_2_energy",
    get state() { return shadowState["sensor.kitchen_spot_2_energy"]},
  },

  ["kitchen_spot_3_energy"]: {
    entity_id: "sensor.kitchen_spot_3_energy",
    get state() { return shadowState["sensor.kitchen_spot_3_energy"]},
  },

  ["hall_stairs_energy"]: {
    entity_id: "sensor.hall_stairs_energy",
    get state() { return shadowState["sensor.hall_stairs_energy"]},
  },

  ["bathroom_spot_2_energy"]: {
    entity_id: "sensor.bathroom_spot_2_energy",
    get state() { return shadowState["sensor.bathroom_spot_2_energy"]},
  },

  ["hall_upstairs_spot_3_energy"]: {
    entity_id: "sensor.hall_upstairs_spot_3_energy",
    get state() { return shadowState["sensor.hall_upstairs_spot_3_energy"]},
  },

  ["hall_upstairs_spot_1_energy"]: {
    entity_id: "sensor.hall_upstairs_spot_1_energy",
    get state() { return shadowState["sensor.hall_upstairs_spot_1_energy"]},
  },

  ["hall_upstairs_spot_2_energy"]: {
    entity_id: "sensor.hall_upstairs_spot_2_energy",
    get state() { return shadowState["sensor.hall_upstairs_spot_2_energy"]},
  },

  ["bathroom_spot_1_energy"]: {
    entity_id: "sensor.bathroom_spot_1_energy",
    get state() { return shadowState["sensor.bathroom_spot_1_energy"]},
  },

  ["toilet_energy"]: {
    entity_id: "sensor.toilet_energy",
    get state() { return shadowState["sensor.toilet_energy"]},
  },

  ["garage_fridge_energy"]: {
    entity_id: "sensor.garage_fridge_energy",
    get state() { return shadowState["sensor.garage_fridge_energy"]},
  },

  ["0x14b457fffefafbcf_energy"]: {
    entity_id: "sensor.0x14b457fffefafbcf_energy",
    get state() { return shadowState["sensor.0x14b457fffefafbcf_energy"]},
  },

  ["garage_state_2"]: {
    entity_id: "sensor.garage_state_2",
    get state() { return shadowState["sensor.garage_state_2"]},
  },

  ["garage_position_2"]: {
    entity_id: "sensor.garage_position_2",
    get state() { return shadowState["sensor.garage_position_2"]},
  },

  ["sensor_cleaning"]: {
    entity_id: "sensor.sensor_cleaning",
    get state() { return shadowState["sensor.sensor_cleaning"]},
  },

  ["main_filter"]: {
    entity_id: "sensor.main_filter",
    get state() { return shadowState["sensor.main_filter"]},
  },

  ["right_brush"]: {
    entity_id: "sensor.right_brush",
    get state() { return shadowState["sensor.right_brush"]},
  },

  ["main_brush"]: {
    entity_id: "sensor.main_brush",
    get state() { return shadowState["sensor.main_brush"]},
  },

  ["error_description"]: {
    entity_id: "sensor.error_description",
    get state() { return shadowState["sensor.error_description"]},
  },

  ["wi_fi_configuration"]: {
    entity_id: "sensor.wi_fi_configuration",
    get state() { return shadowState["sensor.wi_fi_configuration"]},
  },

  ["goto_locations"]: {
    entity_id: "sensor.goto_locations",
    get state() { return shadowState["sensor.goto_locations"]},
  },

  ["zone_presets"]: {
    entity_id: "sensor.zone_presets",
    get state() { return shadowState["sensor.zone_presets"]},
  },

  ["map_segments"]: {
    entity_id: "sensor.map_segments",
    get state() { return shadowState["sensor.map_segments"]},
  },

  ["sm_g980f_battery_level"]: {
    entity_id: "sensor.sm_g980f_battery_level",
    get state() { return shadowState["sensor.sm_g980f_battery_level"]},
  },

  ["sm_g980f_battery_state"]: {
    entity_id: "sensor.sm_g980f_battery_state",
    get state() { return shadowState["sensor.sm_g980f_battery_state"]},
  },

  ["sm_g980f_charger_type"]: {
    entity_id: "sensor.sm_g980f_charger_type",
    get state() { return shadowState["sensor.sm_g980f_charger_type"]},
  },

  ["sm_g980f_battery_health"]: {
    entity_id: "sensor.sm_g980f_battery_health",
    get state() { return shadowState["sensor.sm_g980f_battery_health"]},
  },

  ["sm_g980f_battery_temperature"]: {
    entity_id: "sensor.sm_g980f_battery_temperature",
    get state() { return shadowState["sensor.sm_g980f_battery_temperature"]},
  },

  ["sm_g980f_detected_activity"]: {
    entity_id: "sensor.sm_g980f_detected_activity",
    get state() { return shadowState["sensor.sm_g980f_detected_activity"]},
  },

  ["sm_g980f_sleep_confidence"]: {
    entity_id: "sensor.sm_g980f_sleep_confidence",
    get state() { return shadowState["sensor.sm_g980f_sleep_confidence"]},
  },

  ["sm_g980f_sleep_segment"]: {
    entity_id: "sensor.sm_g980f_sleep_segment",
    get state() { return shadowState["sensor.sm_g980f_sleep_segment"]},
  },

  ["sm_g980f_ringer_mode"]: {
    entity_id: "sensor.sm_g980f_ringer_mode",
    get state() { return shadowState["sensor.sm_g980f_ringer_mode"]},
  },

  ["sm_g980f_audio_mode"]: {
    entity_id: "sensor.sm_g980f_audio_mode",
    get state() { return shadowState["sensor.sm_g980f_audio_mode"]},
  },

  ["sm_g980f_volume_level_dtmf"]: {
    entity_id: "sensor.sm_g980f_volume_level_dtmf",
    get state() { return shadowState["sensor.sm_g980f_volume_level_dtmf"]},
  },

  ["sm_g980f_bluetooth_connection"]: {
    entity_id: "sensor.sm_g980f_bluetooth_connection",
    get state() { return shadowState["sensor.sm_g980f_bluetooth_connection"]},
  },

  ["sm_g980f_ble_transmitter"]: {
    entity_id: "sensor.sm_g980f_ble_transmitter",
    get state() { return shadowState["sensor.sm_g980f_ble_transmitter"]},
  },

  ["sm_g980f_do_not_disturb_sensor"]: {
    entity_id: "sensor.sm_g980f_do_not_disturb_sensor",
    get state() { return shadowState["sensor.sm_g980f_do_not_disturb_sensor"]},
  },

  ["sm_g980f_last_reboot"]: {
    entity_id: "sensor.sm_g980f_last_reboot",
    get state() { return shadowState["sensor.sm_g980f_last_reboot"]},
  },

  ["sm_g980f_light_sensor"]: {
    entity_id: "sensor.sm_g980f_light_sensor",
    get state() { return shadowState["sensor.sm_g980f_light_sensor"]},
  },

  ["sm_g980f_wifi_connection"]: {
    entity_id: "sensor.sm_g980f_wifi_connection",
    get state() { return shadowState["sensor.sm_g980f_wifi_connection"]},
  },

  ["sm_g980f_wifi_bssid"]: {
    entity_id: "sensor.sm_g980f_wifi_bssid",
    get state() { return shadowState["sensor.sm_g980f_wifi_bssid"]},
  },

  ["sm_g980f_wifi_ip_address"]: {
    entity_id: "sensor.sm_g980f_wifi_ip_address",
    get state() { return shadowState["sensor.sm_g980f_wifi_ip_address"]},
  },

  ["sm_g980f_wifi_link_speed"]: {
    entity_id: "sensor.sm_g980f_wifi_link_speed",
    get state() { return shadowState["sensor.sm_g980f_wifi_link_speed"]},
  },

  ["sm_g980f_wifi_frequency"]: {
    entity_id: "sensor.sm_g980f_wifi_frequency",
    get state() { return shadowState["sensor.sm_g980f_wifi_frequency"]},
  },

  ["sm_g980f_wifi_signal_strength"]: {
    entity_id: "sensor.sm_g980f_wifi_signal_strength",
    get state() { return shadowState["sensor.sm_g980f_wifi_signal_strength"]},
  },

  ["sm_g980f_public_ip_address"]: {
    entity_id: "sensor.sm_g980f_public_ip_address",
    get state() { return shadowState["sensor.sm_g980f_public_ip_address"]},
  },

  ["sm_g980f_network_type"]: {
    entity_id: "sensor.sm_g980f_network_type",
    get state() { return shadowState["sensor.sm_g980f_network_type"]},
  },

  ["sm_g980f_next_alarm"]: {
    entity_id: "sensor.sm_g980f_next_alarm",
    get state() { return shadowState["sensor.sm_g980f_next_alarm"]},
  },

  ["sm_g980f_last_notification"]: {
    entity_id: "sensor.sm_g980f_last_notification",
    get state() { return shadowState["sensor.sm_g980f_last_notification"]},
  },

  ["sm_g980f_last_removed_notification"]: {
    entity_id: "sensor.sm_g980f_last_removed_notification",
    get state() { return shadowState["sensor.sm_g980f_last_removed_notification"]},
  },

  ["sm_g980f_active_notification_count"]: {
    entity_id: "sensor.sm_g980f_active_notification_count",
    get state() { return shadowState["sensor.sm_g980f_active_notification_count"]},
  },

  ["sm_g980f_media_session"]: {
    entity_id: "sensor.sm_g980f_media_session",
    get state() { return shadowState["sensor.sm_g980f_media_session"]},
  },

  ["sm_g980f_sim_1"]: {
    entity_id: "sensor.sm_g980f_sim_1",
    get state() { return shadowState["sensor.sm_g980f_sim_1"]},
  },

  ["sm_g980f_sim_2"]: {
    entity_id: "sensor.sm_g980f_sim_2",
    get state() { return shadowState["sensor.sm_g980f_sim_2"]},
  },

  ["sm_g980f_pressure_sensor"]: {
    entity_id: "sensor.sm_g980f_pressure_sensor",
    get state() { return shadowState["sensor.sm_g980f_pressure_sensor"]},
  },

  ["sm_g980f_proximity_sensor"]: {
    entity_id: "sensor.sm_g980f_proximity_sensor",
    get state() { return shadowState["sensor.sm_g980f_proximity_sensor"]},
  },

  ["sm_g980f_steps_sensor"]: {
    entity_id: "sensor.sm_g980f_steps_sensor",
    get state() { return shadowState["sensor.sm_g980f_steps_sensor"]},
  },

  ["sm_g980f_current_time_zone"]: {
    entity_id: "sensor.sm_g980f_current_time_zone",
    get state() { return shadowState["sensor.sm_g980f_current_time_zone"]},
  },

  ["sm_g980f_battery_power"]: {
    entity_id: "sensor.sm_g980f_battery_power",
    get state() { return shadowState["sensor.sm_g980f_battery_power"]},
  },

  ["sm_g980f_beacon_monitor"]: {
    entity_id: "sensor.sm_g980f_beacon_monitor",
    get state() { return shadowState["sensor.sm_g980f_beacon_monitor"]},
  },

  ["sm_g980f_accent_color"]: {
    entity_id: "sensor.sm_g980f_accent_color",
    get state() { return shadowState["sensor.sm_g980f_accent_color"]},
  },

  ["tims_macbook_pro_ssid"]: {
    entity_id: "sensor.tims_macbook_pro_ssid",
    get state() { return shadowState["sensor.tims_macbook_pro_ssid"]},
  },

  ["tims_macbook_pro_internal_battery_level"]: {
    entity_id: "sensor.tims_macbook_pro_internal_battery_level",
    get state() { return shadowState["sensor.tims_macbook_pro_internal_battery_level"]},
  },

  ["tims_macbook_pro_internal_battery_state"]: {
    entity_id: "sensor.tims_macbook_pro_internal_battery_state",
    get state() { return shadowState["sensor.tims_macbook_pro_internal_battery_state"]},
  },

  ["tims_macbook_pro_storage"]: {
    entity_id: "sensor.tims_macbook_pro_storage",
    get state() { return shadowState["sensor.tims_macbook_pro_storage"]},
  },

  ["tims_macbook_pro_connection_type"]: {
    entity_id: "sensor.tims_macbook_pro_connection_type",
    get state() { return shadowState["sensor.tims_macbook_pro_connection_type"]},
  },

  ["tims_macbook_pro_active_camera"]: {
    entity_id: "sensor.tims_macbook_pro_active_camera",
    get state() { return shadowState["sensor.tims_macbook_pro_active_camera"]},
  },

  ["tims_macbook_pro_geocoded_location"]: {
    entity_id: "sensor.tims_macbook_pro_geocoded_location",
    get state() { return shadowState["sensor.tims_macbook_pro_geocoded_location"]},
  },

  ["tims_macbook_pro_active_audio_input"]: {
    entity_id: "sensor.tims_macbook_pro_active_audio_input",
    get state() { return shadowState["sensor.tims_macbook_pro_active_audio_input"]},
  },

  ["tims_macbook_pro_active_audio_output"]: {
    entity_id: "sensor.tims_macbook_pro_active_audio_output",
    get state() { return shadowState["sensor.tims_macbook_pro_active_audio_output"]},
  },

  ["tims_macbook_pro_last_update_trigger"]: {
    entity_id: "sensor.tims_macbook_pro_last_update_trigger",
    get state() { return shadowState["sensor.tims_macbook_pro_last_update_trigger"]},
  },

  ["tims_macbook_pro_frontmost_app"]: {
    entity_id: "sensor.tims_macbook_pro_frontmost_app",
    get state() { return shadowState["sensor.tims_macbook_pro_frontmost_app"]},
  },

  ["tims_macbook_pro_primary_display_name"]: {
    entity_id: "sensor.tims_macbook_pro_primary_display_name",
    get state() { return shadowState["sensor.tims_macbook_pro_primary_display_name"]},
  },

  ["tims_macbook_pro_displays"]: {
    entity_id: "sensor.tims_macbook_pro_displays",
    get state() { return shadowState["sensor.tims_macbook_pro_displays"]},
  },

  ["tims_macbook_pro_primary_display_id"]: {
    entity_id: "sensor.tims_macbook_pro_primary_display_id",
    get state() { return shadowState["sensor.tims_macbook_pro_primary_display_id"]},
  },

  ["tims_macbook_pro_bssid"]: {
    entity_id: "sensor.tims_macbook_pro_bssid",
    get state() { return shadowState["sensor.tims_macbook_pro_bssid"]},
  },

  ["s22_battery_level"]: {
    entity_id: "sensor.s22_battery_level",
    get state() { return shadowState["sensor.s22_battery_level"]},
  },

  ["s22_battery_state"]: {
    entity_id: "sensor.s22_battery_state",
    get state() { return shadowState["sensor.s22_battery_state"]},
  },

  ["s22_charger_type"]: {
    entity_id: "sensor.s22_charger_type",
    get state() { return shadowState["sensor.s22_charger_type"]},
  },

  ["s22_battery_health"]: {
    entity_id: "sensor.s22_battery_health",
    get state() { return shadowState["sensor.s22_battery_health"]},
  },

  ["s22_battery_temperature"]: {
    entity_id: "sensor.s22_battery_temperature",
    get state() { return shadowState["sensor.s22_battery_temperature"]},
  },

  ["s22_current_version"]: {
    entity_id: "sensor.s22_current_version",
    get state() { return shadowState["sensor.s22_current_version"]},
  },

  ["s22_app_rx_gb"]: {
    entity_id: "sensor.s22_app_rx_gb",
    get state() { return shadowState["sensor.s22_app_rx_gb"]},
  },

  ["s22_app_tx_gb"]: {
    entity_id: "sensor.s22_app_tx_gb",
    get state() { return shadowState["sensor.s22_app_tx_gb"]},
  },

  ["s22_app_memory"]: {
    entity_id: "sensor.s22_app_memory",
    get state() { return shadowState["sensor.s22_app_memory"]},
  },

  ["s22_app_standby_bucket"]: {
    entity_id: "sensor.s22_app_standby_bucket",
    get state() { return shadowState["sensor.s22_app_standby_bucket"]},
  },

  ["s22_app_importance"]: {
    entity_id: "sensor.s22_app_importance",
    get state() { return shadowState["sensor.s22_app_importance"]},
  },

  ["s22_ringer_mode"]: {
    entity_id: "sensor.s22_ringer_mode",
    get state() { return shadowState["sensor.s22_ringer_mode"]},
  },

  ["s22_audio_mode"]: {
    entity_id: "sensor.s22_audio_mode",
    get state() { return shadowState["sensor.s22_audio_mode"]},
  },

  ["s22_volume_level_alarm"]: {
    entity_id: "sensor.s22_volume_level_alarm",
    get state() { return shadowState["sensor.s22_volume_level_alarm"]},
  },

  ["s22_volume_level_call"]: {
    entity_id: "sensor.s22_volume_level_call",
    get state() { return shadowState["sensor.s22_volume_level_call"]},
  },

  ["s22_volume_level_music"]: {
    entity_id: "sensor.s22_volume_level_music",
    get state() { return shadowState["sensor.s22_volume_level_music"]},
  },

  ["s22_volume_level_ringer"]: {
    entity_id: "sensor.s22_volume_level_ringer",
    get state() { return shadowState["sensor.s22_volume_level_ringer"]},
  },

  ["s22_volume_level_notification"]: {
    entity_id: "sensor.s22_volume_level_notification",
    get state() { return shadowState["sensor.s22_volume_level_notification"]},
  },

  ["s22_volume_level_system"]: {
    entity_id: "sensor.s22_volume_level_system",
    get state() { return shadowState["sensor.s22_volume_level_system"]},
  },

  ["s22_volume_level_dtmf"]: {
    entity_id: "sensor.s22_volume_level_dtmf",
    get state() { return shadowState["sensor.s22_volume_level_dtmf"]},
  },

  ["s22_volume_level_accessibility"]: {
    entity_id: "sensor.s22_volume_level_accessibility",
    get state() { return shadowState["sensor.s22_volume_level_accessibility"]},
  },

  ["s22_bluetooth_connection"]: {
    entity_id: "sensor.s22_bluetooth_connection",
    get state() { return shadowState["sensor.s22_bluetooth_connection"]},
  },

  ["s22_ble_transmitter"]: {
    entity_id: "sensor.s22_ble_transmitter",
    get state() { return shadowState["sensor.s22_ble_transmitter"]},
  },

  ["s22_do_not_disturb_sensor"]: {
    entity_id: "sensor.s22_do_not_disturb_sensor",
    get state() { return shadowState["sensor.s22_do_not_disturb_sensor"]},
  },

  ["s22_last_reboot"]: {
    entity_id: "sensor.s22_last_reboot",
    get state() { return shadowState["sensor.s22_last_reboot"]},
  },

  ["s22_last_update_trigger"]: {
    entity_id: "sensor.s22_last_update_trigger",
    get state() { return shadowState["sensor.s22_last_update_trigger"]},
  },

  ["s22_wifi_connection"]: {
    entity_id: "sensor.s22_wifi_connection",
    get state() { return shadowState["sensor.s22_wifi_connection"]},
  },

  ["s22_wifi_bssid"]: {
    entity_id: "sensor.s22_wifi_bssid",
    get state() { return shadowState["sensor.s22_wifi_bssid"]},
  },

  ["s22_wifi_ip_address"]: {
    entity_id: "sensor.s22_wifi_ip_address",
    get state() { return shadowState["sensor.s22_wifi_ip_address"]},
  },

  ["s22_wifi_link_speed"]: {
    entity_id: "sensor.s22_wifi_link_speed",
    get state() { return shadowState["sensor.s22_wifi_link_speed"]},
  },

  ["s22_wifi_frequency"]: {
    entity_id: "sensor.s22_wifi_frequency",
    get state() { return shadowState["sensor.s22_wifi_frequency"]},
  },

  ["s22_wifi_signal_strength"]: {
    entity_id: "sensor.s22_wifi_signal_strength",
    get state() { return shadowState["sensor.s22_wifi_signal_strength"]},
  },

  ["s22_public_ip_address"]: {
    entity_id: "sensor.s22_public_ip_address",
    get state() { return shadowState["sensor.s22_public_ip_address"]},
  },

  ["s22_network_type"]: {
    entity_id: "sensor.s22_network_type",
    get state() { return shadowState["sensor.s22_network_type"]},
  },

  ["s22_next_alarm"]: {
    entity_id: "sensor.s22_next_alarm",
    get state() { return shadowState["sensor.s22_next_alarm"]},
  },

  ["s22_phone_state"]: {
    entity_id: "sensor.s22_phone_state",
    get state() { return shadowState["sensor.s22_phone_state"]},
  },

  ["s22_sim_1"]: {
    entity_id: "sensor.s22_sim_1",
    get state() { return shadowState["sensor.s22_sim_1"]},
  },

  ["s22_sim_2"]: {
    entity_id: "sensor.s22_sim_2",
    get state() { return shadowState["sensor.s22_sim_2"]},
  },

  ["s22_pressure_sensor"]: {
    entity_id: "sensor.s22_pressure_sensor",
    get state() { return shadowState["sensor.s22_pressure_sensor"]},
  },

  ["s22_proximity_sensor"]: {
    entity_id: "sensor.s22_proximity_sensor",
    get state() { return shadowState["sensor.s22_proximity_sensor"]},
  },

  ["s22_steps_sensor"]: {
    entity_id: "sensor.s22_steps_sensor",
    get state() { return shadowState["sensor.s22_steps_sensor"]},
  },

  ["s22_internal_storage"]: {
    entity_id: "sensor.s22_internal_storage",
    get state() { return shadowState["sensor.s22_internal_storage"]},
  },

  ["s22_external_storage"]: {
    entity_id: "sensor.s22_external_storage",
    get state() { return shadowState["sensor.s22_external_storage"]},
  },

  ["s22_current_time_zone"]: {
    entity_id: "sensor.s22_current_time_zone",
    get state() { return shadowState["sensor.s22_current_time_zone"]},
  },

  ["s22_total_rx_gb"]: {
    entity_id: "sensor.s22_total_rx_gb",
    get state() { return shadowState["sensor.s22_total_rx_gb"]},
  },

  ["s22_total_tx_gb"]: {
    entity_id: "sensor.s22_total_tx_gb",
    get state() { return shadowState["sensor.s22_total_tx_gb"]},
  },

  ["s22_mobile_rx_gb"]: {
    entity_id: "sensor.s22_mobile_rx_gb",
    get state() { return shadowState["sensor.s22_mobile_rx_gb"]},
  },

  ["s22_mobile_tx_gb"]: {
    entity_id: "sensor.s22_mobile_tx_gb",
    get state() { return shadowState["sensor.s22_mobile_tx_gb"]},
  },

  ["s22_battery_power"]: {
    entity_id: "sensor.s22_battery_power",
    get state() { return shadowState["sensor.s22_battery_power"]},
  },

  ["nibe_133481_40067"]: {
    entity_id: "sensor.nibe_133481_40067",
    get state() { return shadowState["sensor.nibe_133481_40067"]},
  },

  ["nibe_133481_40014"]: {
    entity_id: "sensor.nibe_133481_40014",
    get state() { return shadowState["sensor.nibe_133481_40014"]},
  },

  ["nibe_133481_40013"]: {
    entity_id: "sensor.nibe_133481_40013",
    get state() { return shadowState["sensor.nibe_133481_40013"]},
  },

  ["nibe_133481_40004"]: {
    entity_id: "sensor.nibe_133481_40004",
    get state() { return shadowState["sensor.nibe_133481_40004"]},
  },

  ["nibe_133481_40083"]: {
    entity_id: "sensor.nibe_133481_40083",
    get state() { return shadowState["sensor.nibe_133481_40083"]},
  },

  ["nibe_133481_40081"]: {
    entity_id: "sensor.nibe_133481_40081",
    get state() { return shadowState["sensor.nibe_133481_40081"]},
  },

  ["nibe_133481_40079"]: {
    entity_id: "sensor.nibe_133481_40079",
    get state() { return shadowState["sensor.nibe_133481_40079"]},
  },

  ["nibe_133481_43005"]: {
    entity_id: "sensor.nibe_133481_43005",
    get state() { return shadowState["sensor.nibe_133481_43005"]},
  },

  ["nibe_133481_43161"]: {
    entity_id: "sensor.nibe_133481_43161",
    get state() { return shadowState["sensor.nibe_133481_43161"]},
  },

  ["nibe_133481_47276"]: {
    entity_id: "sensor.nibe_133481_47276",
    get state() { return shadowState["sensor.nibe_133481_47276"]},
  },

  ["nibe_133481_43009"]: {
    entity_id: "sensor.nibe_133481_43009",
    get state() { return shadowState["sensor.nibe_133481_43009"]},
  },

  ["nibe_133481_40071"]: {
    entity_id: "sensor.nibe_133481_40071",
    get state() { return shadowState["sensor.nibe_133481_40071"]},
  },

  ["nibe_133481_40152"]: {
    entity_id: "sensor.nibe_133481_40152",
    get state() { return shadowState["sensor.nibe_133481_40152"]},
  },

  ["nibe_133481_40033"]: {
    entity_id: "sensor.nibe_133481_40033",
    get state() { return shadowState["sensor.nibe_133481_40033"]},
  },

  ["nibe_133481_44256"]: {
    entity_id: "sensor.nibe_133481_44256",
    get state() { return shadowState["sensor.nibe_133481_44256"]},
  },

  ["nibe_133481_44270"]: {
    entity_id: "sensor.nibe_133481_44270",
    get state() { return shadowState["sensor.nibe_133481_44270"]},
  },

  ["nibe_133481_40045"]: {
    entity_id: "sensor.nibe_133481_40045",
    get state() { return shadowState["sensor.nibe_133481_40045"]},
  },

  ["nibe_133481_44266"]: {
    entity_id: "sensor.nibe_133481_44266",
    get state() { return shadowState["sensor.nibe_133481_44266"]},
  },

  ["nibe_133481_10033"]: {
    entity_id: "sensor.nibe_133481_10033",
    get state() { return shadowState["sensor.nibe_133481_10033"]},
  },

  ["nibe_133481_47613"]: {
    entity_id: "sensor.nibe_133481_47613",
    get state() { return shadowState["sensor.nibe_133481_47613"]},
  },

  ["nibe_133481_43091"]: {
    entity_id: "sensor.nibe_133481_43091",
    get state() { return shadowState["sensor.nibe_133481_43091"]},
  },

  ["nibe_133481_47214"]: {
    entity_id: "sensor.nibe_133481_47214",
    get state() { return shadowState["sensor.nibe_133481_47214"]},
  },

  ["nibe_133481_40121"]: {
    entity_id: "sensor.nibe_133481_40121",
    get state() { return shadowState["sensor.nibe_133481_40121"]},
  },

  ["nibe_133481_44899"]: {
    entity_id: "sensor.nibe_133481_44899",
    get state() { return shadowState["sensor.nibe_133481_44899"]},
  },

  ["nibe_133481_44896"]: {
    entity_id: "sensor.nibe_133481_44896",
    get state() { return shadowState["sensor.nibe_133481_44896"]},
  },

  ["nibe_133481_44897"]: {
    entity_id: "sensor.nibe_133481_44897",
    get state() { return shadowState["sensor.nibe_133481_44897"]},
  },

  ["nibe_133481_44908"]: {
    entity_id: "sensor.nibe_133481_44908",
    get state() { return shadowState["sensor.nibe_133481_44908"]},
  },

  ["nibe_133481_10069"]: {
    entity_id: "sensor.nibe_133481_10069",
    get state() { return shadowState["sensor.nibe_133481_10069"]},
  },

  ["nibe_133481_47411"]: {
    entity_id: "sensor.nibe_133481_47411",
    get state() { return shadowState["sensor.nibe_133481_47411"]},
  },

  ["nibe_133481_47410"]: {
    entity_id: "sensor.nibe_133481_47410",
    get state() { return shadowState["sensor.nibe_133481_47410"]},
  },

  ["nibe_133481_47409"]: {
    entity_id: "sensor.nibe_133481_47409",
    get state() { return shadowState["sensor.nibe_133481_47409"]},
  },

  ["nibe_133481_47408"]: {
    entity_id: "sensor.nibe_133481_47408",
    get state() { return shadowState["sensor.nibe_133481_47408"]},
  },

  ["nibe_133481_47407"]: {
    entity_id: "sensor.nibe_133481_47407",
    get state() { return shadowState["sensor.nibe_133481_47407"]},
  },

  ["nibe_133481_48366"]: {
    entity_id: "sensor.nibe_133481_48366",
    get state() { return shadowState["sensor.nibe_133481_48366"]},
  },

  ["nibe_133481_47412"]: {
    entity_id: "sensor.nibe_133481_47412",
    get state() { return shadowState["sensor.nibe_133481_47412"]},
  },

  ["nibe_133481_48745"]: {
    entity_id: "sensor.nibe_133481_48745",
    get state() { return shadowState["sensor.nibe_133481_48745"]},
  },

  ["nibe_133481_0"]: {
    entity_id: "sensor.nibe_133481_0",
    get state() { return shadowState["sensor.nibe_133481_0"]},
  },

  ["0x00124b002520a310_battery"]: {
    entity_id: "sensor.0x00124b002520a310_battery",
    get state() { return shadowState["sensor.0x00124b002520a310_battery"]},
  },

  ["0x00124b002519b204_battery"]: {
    entity_id: "sensor.0x00124b002519b204_battery",
    get state() { return shadowState["sensor.0x00124b002519b204_battery"]},
  },

  ["bedroom_button_gaby_action"]: {
    entity_id: "sensor.bedroom_button_gaby_action",
    get state() { return shadowState["sensor.bedroom_button_gaby_action"]},
  },

  ["bedroom_button_gaby_battery"]: {
    entity_id: "sensor.bedroom_button_gaby_battery",
    get state() { return shadowState["sensor.bedroom_button_gaby_battery"]},
  },

  ["bedroom_button_tim_action"]: {
    entity_id: "sensor.bedroom_button_tim_action",
    get state() { return shadowState["sensor.bedroom_button_tim_action"]},
  },

  ["bedroom_button_tim_battery"]: {
    entity_id: "sensor.bedroom_button_tim_battery",
    get state() { return shadowState["sensor.bedroom_button_tim_battery"]},
  },

  ["bathroom_door_battery"]: {
    entity_id: "sensor.bathroom_door_battery",
    get state() { return shadowState["sensor.bathroom_door_battery"]},
  },

  ["tripod_button_power_outage_count"]: {
    entity_id: "sensor.tripod_button_power_outage_count",
    get state() { return shadowState["sensor.tripod_button_power_outage_count"]},
  },

  ["tripod_button_action"]: {
    entity_id: "sensor.tripod_button_action",
    get state() { return shadowState["sensor.tripod_button_action"]},
  },

  ["tripod_button_battery"]: {
    entity_id: "sensor.tripod_button_battery",
    get state() { return shadowState["sensor.tripod_button_battery"]},
  },

  ["siren_power_type"]: {
    entity_id: "sensor.siren_power_type",
    get state() { return shadowState["sensor.siren_power_type"]},
  },

  ["siren_humidity"]: {
    entity_id: "sensor.siren_humidity",
    get state() { return shadowState["sensor.siren_humidity"]},
  },

  ["siren_temperature"]: {
    entity_id: "sensor.siren_temperature",
    get state() { return shadowState["sensor.siren_temperature"]},
  },

  ["garage_electric_door_sensor_closed_power_outage_count"]: {
    entity_id: "sensor.garage_electric_door_sensor_closed_power_outage_count",
    get state() { return shadowState["sensor.garage_electric_door_sensor_closed_power_outage_count"]},
  },

  ["garage_electric_door_sensor_closed_device_temperature"]: {
    entity_id: "sensor.garage_electric_door_sensor_closed_device_temperature",
    get state() { return shadowState["sensor.garage_electric_door_sensor_closed_device_temperature"]},
  },

  ["garage_electric_door_sensor_closed_battery"]: {
    entity_id: "sensor.garage_electric_door_sensor_closed_battery",
    get state() { return shadowState["sensor.garage_electric_door_sensor_closed_battery"]},
  },

  ["bedroom_window_bed_power_outage_count"]: {
    entity_id: "sensor.bedroom_window_bed_power_outage_count",
    get state() { return shadowState["sensor.bedroom_window_bed_power_outage_count"]},
  },

  ["bedroom_window_bed_device_temperature"]: {
    entity_id: "sensor.bedroom_window_bed_device_temperature",
    get state() { return shadowState["sensor.bedroom_window_bed_device_temperature"]},
  },

  ["bedroom_window_bed_battery"]: {
    entity_id: "sensor.bedroom_window_bed_battery",
    get state() { return shadowState["sensor.bedroom_window_bed_battery"]},
  },

  ["desk_outlet_energy"]: {
    entity_id: "sensor.desk_outlet_energy",
    get state() { return shadowState["sensor.desk_outlet_energy"]},
  },

  ["desk_outlet_power"]: {
    entity_id: "sensor.desk_outlet_power",
    get state() { return shadowState["sensor.desk_outlet_power"]},
  },

  ["living_room_table_button_power_outage_count"]: {
    entity_id: "sensor.living_room_table_button_power_outage_count",
    get state() { return shadowState["sensor.living_room_table_button_power_outage_count"]},
  },

  ["living_room_table_button_action"]: {
    entity_id: "sensor.living_room_table_button_action",
    get state() { return shadowState["sensor.living_room_table_button_action"]},
  },

  ["living_room_table_button_battery"]: {
    entity_id: "sensor.living_room_table_button_battery",
    get state() { return shadowState["sensor.living_room_table_button_battery"]},
  },

  ["living_room_table_sensor_humidity"]: {
    entity_id: "sensor.living_room_table_sensor_humidity",
    get state() { return shadowState["sensor.living_room_table_sensor_humidity"]},
  },

  ["living_room_table_sensor_temperature"]: {
    entity_id: "sensor.living_room_table_sensor_temperature",
    get state() { return shadowState["sensor.living_room_table_sensor_temperature"]},
  },

  ["living_room_table_sensor_battery"]: {
    entity_id: "sensor.living_room_table_sensor_battery",
    get state() { return shadowState["sensor.living_room_table_sensor_battery"]},
  },

  ["entrance_door_power_outage_count"]: {
    entity_id: "sensor.entrance_door_power_outage_count",
    get state() { return shadowState["sensor.entrance_door_power_outage_count"]},
  },

  ["entrance_door_device_temperature"]: {
    entity_id: "sensor.entrance_door_device_temperature",
    get state() { return shadowState["sensor.entrance_door_device_temperature"]},
  },

  ["entrance_door_battery"]: {
    entity_id: "sensor.entrance_door_battery",
    get state() { return shadowState["sensor.entrance_door_battery"]},
  },

  ["toilet_door_battery"]: {
    entity_id: "sensor.toilet_door_battery",
    get state() { return shadowState["sensor.toilet_door_battery"]},
  },

  ["garden_door_power_outage_count"]: {
    entity_id: "sensor.garden_door_power_outage_count",
    get state() { return shadowState["sensor.garden_door_power_outage_count"]},
  },

  ["garden_door_device_temperature"]: {
    entity_id: "sensor.garden_door_device_temperature",
    get state() { return shadowState["sensor.garden_door_device_temperature"]},
  },

  ["garden_door_battery"]: {
    entity_id: "sensor.garden_door_battery",
    get state() { return shadowState["sensor.garden_door_battery"]},
  },

  ["garage_door_power_outage_count"]: {
    entity_id: "sensor.garage_door_power_outage_count",
    get state() { return shadowState["sensor.garage_door_power_outage_count"]},
  },

  ["garage_door_device_temperature"]: {
    entity_id: "sensor.garage_door_device_temperature",
    get state() { return shadowState["sensor.garage_door_device_temperature"]},
  },

  ["garage_door_battery"]: {
    entity_id: "sensor.garage_door_battery",
    get state() { return shadowState["sensor.garage_door_battery"]},
  },

  ["bedroom_humidifier_switch_energy"]: {
    entity_id: "sensor.bedroom_humidifier_switch_energy",
    get state() { return shadowState["sensor.bedroom_humidifier_switch_energy"]},
  },

  ["bedroom_humidifier_switch_power"]: {
    entity_id: "sensor.bedroom_humidifier_switch_power",
    get state() { return shadowState["sensor.bedroom_humidifier_switch_power"]},
  },

  ["garage_remote_action_duration"]: {
    entity_id: "sensor.garage_remote_action_duration",
    get state() { return shadowState["sensor.garage_remote_action_duration"]},
  },

  ["garage_remote_action"]: {
    entity_id: "sensor.garage_remote_action",
    get state() { return shadowState["sensor.garage_remote_action"]},
  },

  ["garage_remote_battery"]: {
    entity_id: "sensor.garage_remote_battery",
    get state() { return shadowState["sensor.garage_remote_battery"]},
  },

  ["garage_electric_door_sensor_open_power_outage_count"]: {
    entity_id: "sensor.garage_electric_door_sensor_open_power_outage_count",
    get state() { return shadowState["sensor.garage_electric_door_sensor_open_power_outage_count"]},
  },

  ["garage_electric_door_sensor_open_device_temperature"]: {
    entity_id: "sensor.garage_electric_door_sensor_open_device_temperature",
    get state() { return shadowState["sensor.garage_electric_door_sensor_open_device_temperature"]},
  },

  ["garage_electric_door_sensor_open_battery"]: {
    entity_id: "sensor.garage_electric_door_sensor_open_battery",
    get state() { return shadowState["sensor.garage_electric_door_sensor_open_battery"]},
  },

  ["coffee_machine_button_power_outage_count"]: {
    entity_id: "sensor.coffee_machine_button_power_outage_count",
    get state() { return shadowState["sensor.coffee_machine_button_power_outage_count"]},
  },

  ["coffee_machine_button_device_temperature"]: {
    entity_id: "sensor.coffee_machine_button_device_temperature",
    get state() { return shadowState["sensor.coffee_machine_button_device_temperature"]},
  },

  ["coffee_machine_button_action"]: {
    entity_id: "sensor.coffee_machine_button_action",
    get state() { return shadowState["sensor.coffee_machine_button_action"]},
  },

  ["coffee_machine_button_battery"]: {
    entity_id: "sensor.coffee_machine_button_battery",
    get state() { return shadowState["sensor.coffee_machine_button_battery"]},
  },

  ["bedside_button_action"]: {
    entity_id: "sensor.bedside_button_action",
    get state() { return shadowState["sensor.bedside_button_action"]},
  },

  ["bedside_button_battery"]: {
    entity_id: "sensor.bedside_button_battery",
    get state() { return shadowState["sensor.bedside_button_battery"]},
  },

  ["bedside_lamp_energy"]: {
    entity_id: "sensor.bedside_lamp_energy",
    get state() { return shadowState["sensor.bedside_lamp_energy"]},
  },

  ["bedside_lamp_power"]: {
    entity_id: "sensor.bedside_lamp_power",
    get state() { return shadowState["sensor.bedside_lamp_power"]},
  },

  ["fridge_door_sensor_power_outage_count"]: {
    entity_id: "sensor.fridge_door_sensor_power_outage_count",
    get state() { return shadowState["sensor.fridge_door_sensor_power_outage_count"]},
  },

  ["fridge_door_sensor_device_temperature"]: {
    entity_id: "sensor.fridge_door_sensor_device_temperature",
    get state() { return shadowState["sensor.fridge_door_sensor_device_temperature"]},
  },

  ["fridge_door_sensor_battery"]: {
    entity_id: "sensor.fridge_door_sensor_battery",
    get state() { return shadowState["sensor.fridge_door_sensor_battery"]},
  },

  ["stairs_motion_sensor_battery"]: {
    entity_id: "sensor.stairs_motion_sensor_battery",
    get state() { return shadowState["sensor.stairs_motion_sensor_battery"]},
  },

  ["bedroom_secondary_lamp_energy"]: {
    entity_id: "sensor.bedroom_secondary_lamp_energy",
    get state() { return shadowState["sensor.bedroom_secondary_lamp_energy"]},
  },

  ["bedroom_secondary_lamp_power"]: {
    entity_id: "sensor.bedroom_secondary_lamp_power",
    get state() { return shadowState["sensor.bedroom_secondary_lamp_power"]},
  },

  ["living_room_remote_action_duration"]: {
    entity_id: "sensor.living_room_remote_action_duration",
    get state() { return shadowState["sensor.living_room_remote_action_duration"]},
  },

  ["living_room_remote_action"]: {
    entity_id: "sensor.living_room_remote_action",
    get state() { return shadowState["sensor.living_room_remote_action"]},
  },

  ["living_room_remote_battery"]: {
    entity_id: "sensor.living_room_remote_battery",
    get state() { return shadowState["sensor.living_room_remote_battery"]},
  },

  ["0xa4c1385c18410b5b_humidity"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_humidity",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_humidity"]},
  },

  ["0xa4c1385c18410b5b_temperature"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_temperature",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_temperature"]},
  },

  ["0xa4c1385c18410b5b_battery"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_battery",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_battery"]},
  },

  ["coffee_machine_outlet_energy"]: {
    entity_id: "sensor.coffee_machine_outlet_energy",
    get state() { return shadowState["sensor.coffee_machine_outlet_energy"]},
  },

  ["coffee_machine_outlet_power"]: {
    entity_id: "sensor.coffee_machine_outlet_power",
    get state() { return shadowState["sensor.coffee_machine_outlet_power"]},
  },

  ["kitchen_button_click"]: {
    entity_id: "sensor.kitchen_button_click",
    get state() { return shadowState["sensor.kitchen_button_click"]},
  },

  ["kitchen_button_power_outage_count"]: {
    entity_id: "sensor.kitchen_button_power_outage_count",
    get state() { return shadowState["sensor.kitchen_button_power_outage_count"]},
  },

  ["kitchen_button_device_temperature"]: {
    entity_id: "sensor.kitchen_button_device_temperature",
    get state() { return shadowState["sensor.kitchen_button_device_temperature"]},
  },

  ["kitchen_button_action"]: {
    entity_id: "sensor.kitchen_button_action",
    get state() { return shadowState["sensor.kitchen_button_action"]},
  },

  ["kitchen_button_battery"]: {
    entity_id: "sensor.kitchen_button_battery",
    get state() { return shadowState["sensor.kitchen_button_battery"]},
  },

  ["nibe_133481_44703"]: {
    entity_id: "sensor.nibe_133481_44703",
    get state() { return shadowState["sensor.nibe_133481_44703"]},
  },

  ["nibe_133481_44396"]: {
    entity_id: "sensor.nibe_133481_44396",
    get state() { return shadowState["sensor.nibe_133481_44396"]},
  },

  ["nibe_133481_44362"]: {
    entity_id: "sensor.nibe_133481_44362",
    get state() { return shadowState["sensor.nibe_133481_44362"]},
  },

  ["nibe_133481_10014"]: {
    entity_id: "sensor.nibe_133481_10014",
    get state() { return shadowState["sensor.nibe_133481_10014"]},
  },

  ["nibe_133481_44069"]: {
    entity_id: "sensor.nibe_133481_44069",
    get state() { return shadowState["sensor.nibe_133481_44069"]},
  },

  ["nibe_133481_44702"]: {
    entity_id: "sensor.nibe_133481_44702",
    get state() { return shadowState["sensor.nibe_133481_44702"]},
  },

  ["nibe_133481_44058"]: {
    entity_id: "sensor.nibe_133481_44058",
    get state() { return shadowState["sensor.nibe_133481_44058"]},
  },

  ["nibe_133481_44363"]: {
    entity_id: "sensor.nibe_133481_44363",
    get state() { return shadowState["sensor.nibe_133481_44363"]},
  },

  ["nibe_133481_44059"]: {
    entity_id: "sensor.nibe_133481_44059",
    get state() { return shadowState["sensor.nibe_133481_44059"]},
  },

  ["nibe_133481_44060"]: {
    entity_id: "sensor.nibe_133481_44060",
    get state() { return shadowState["sensor.nibe_133481_44060"]},
  },

  ["nibe_133481_44055"]: {
    entity_id: "sensor.nibe_133481_44055",
    get state() { return shadowState["sensor.nibe_133481_44055"]},
  },

  ["nibe_133481_44699"]: {
    entity_id: "sensor.nibe_133481_44699",
    get state() { return shadowState["sensor.nibe_133481_44699"]},
  },

  ["nibe_133481_44071"]: {
    entity_id: "sensor.nibe_133481_44071",
    get state() { return shadowState["sensor.nibe_133481_44071"]},
  },

  ["nibe_133481_44073"]: {
    entity_id: "sensor.nibe_133481_44073",
    get state() { return shadowState["sensor.nibe_133481_44073"]},
  },

  ["nibe_133481_40737"]: {
    entity_id: "sensor.nibe_133481_40737",
    get state() { return shadowState["sensor.nibe_133481_40737"]},
  },

  ["nibe_133481_44701"]: {
    entity_id: "sensor.nibe_133481_44701",
    get state() { return shadowState["sensor.nibe_133481_44701"]},
  },

  ["nibe_133481_40782"]: {
    entity_id: "sensor.nibe_133481_40782",
    get state() { return shadowState["sensor.nibe_133481_40782"]},
  },

  ["nibe_133481_44014"]: {
    entity_id: "sensor.nibe_133481_44014",
    get state() { return shadowState["sensor.nibe_133481_44014"]},
  },

  ["last_activity"]: {
    entity_id: "sensor.last_activity",
    get state() { return shadowState["sensor.last_activity"]},
  },

  ["connection_status"]: {
    entity_id: "sensor.connection_status",
    get state() { return shadowState["sensor.connection_status"]},
  },

  ["has_alarmed"]: {
    entity_id: "sensor.has_alarmed",
    get state() { return shadowState["sensor.has_alarmed"]},
  },

  ["software_version"]: {
    entity_id: "sensor.software_version",
    get state() { return shadowState["sensor.software_version"]},
  },

  ["hacs"]: {
    entity_id: "sensor.hacs",
    get state() { return shadowState["sensor.hacs"]},
  },

  ["hygea"]: {
    entity_id: "sensor.hygea",
    get state() { return shadowState["sensor.hygea"]},
  },

  ["hygea_be"]: {
    entity_id: "sensor.hygea_be",
    get state() { return shadowState["sensor.hygea_be"]},
  },

  ["d1df7d67_b4318c17"]: {
    entity_id: "sensor.d1df7d67_b4318c17",
    get state() { return shadowState["sensor.d1df7d67_b4318c17"]},
  },

  ["bedroom_ir_blaster_temperature"]: {
    entity_id: "sensor.bedroom_ir_blaster_temperature",
    get state() { return shadowState["sensor.bedroom_ir_blaster_temperature"]},
  },

  ["bedroom_ir_blaster_humidity"]: {
    entity_id: "sensor.bedroom_ir_blaster_humidity",
    get state() { return shadowState["sensor.bedroom_ir_blaster_humidity"]},
  },

  ["ebbff7dd_e82b404f"]: {
    entity_id: "sensor.ebbff7dd_e82b404f",
    get state() { return shadowState["sensor.ebbff7dd_e82b404f"]},
  },

  ["aadf3129_ecd1ece2"]: {
    entity_id: "sensor.aadf3129_ecd1ece2",
    get state() { return shadowState["sensor.aadf3129_ecd1ece2"]},
  },

  ["my_wall_panel_battery_level"]: {
    entity_id: "sensor.my_wall_panel_battery_level",
    get state() { return shadowState["sensor.my_wall_panel_battery_level"]},
  },

  ["my_wall_panel_light"]: {
    entity_id: "sensor.my_wall_panel_light",
    get state() { return shadowState["sensor.my_wall_panel_light"]},
  },

  ["living_room_cluster_size"]: {
    entity_id: "sensor.living_room_cluster_size",
    get state() { return shadowState["sensor.living_room_cluster_size"]},
  },

  ["living_room_cluster_leader"]: {
    entity_id: "sensor.living_room_cluster_leader",
    get state() { return shadowState["sensor.living_room_cluster_leader"]},
  },

  ["bedroom_cluster_size"]: {
    entity_id: "sensor.bedroom_cluster_size",
    get state() { return shadowState["sensor.bedroom_cluster_size"]},
  },

  ["bedroom_cluster_leader"]: {
    entity_id: "sensor.bedroom_cluster_leader",
    get state() { return shadowState["sensor.bedroom_cluster_leader"]},
  },

  ["tims_ipone_room_presence"]: {
    entity_id: "sensor.tims_ipone_room_presence",
    get state() { return shadowState["sensor.tims_ipone_room_presence"]},
  },

  ["tim_s_watch_room_presence"]: {
    entity_id: "sensor.tim_s_watch_room_presence",
    get state() { return shadowState["sensor.tim_s_watch_room_presence"]},
  },

  ["tim_s_ipone_room_presence"]: {
    entity_id: "sensor.tim_s_ipone_room_presence",
    get state() { return shadowState["sensor.tim_s_ipone_room_presence"]},
  },

  ["tim_s_ipone_room_presence_2"]: {
    entity_id: "sensor.tim_s_ipone_room_presence_2",
    get state() { return shadowState["sensor.tim_s_ipone_room_presence_2"]},
  },

  ["tim_s_phone_room_presence"]: {
    entity_id: "sensor.tim_s_phone_room_presence",
    get state() { return shadowState["sensor.tim_s_phone_room_presence"]},
  },

  ["gaby_s_phone_room_presence"]: {
    entity_id: "sensor.gaby_s_phone_room_presence",
    get state() { return shadowState["sensor.gaby_s_phone_room_presence"]},
  },

  ["garage_cluster_size"]: {
    entity_id: "sensor.garage_cluster_size",
    get state() { return shadowState["sensor.garage_cluster_size"]},
  },

  ["garage_cluster_leader"]: {
    entity_id: "sensor.garage_cluster_leader",
    get state() { return shadowState["sensor.garage_cluster_leader"]},
  },

  ["canon_ts5300_series_black"]: {
    entity_id: "sensor.canon_ts5300_series_black",
    get state() { return shadowState["sensor.canon_ts5300_series_black"]},
  },

  ["canon_ts5300_series_color"]: {
    entity_id: "sensor.canon_ts5300_series_color",
    get state() { return shadowState["sensor.canon_ts5300_series_color"]},
  },

  ["canon_ts5300_series"]: {
    entity_id: "sensor.canon_ts5300_series",
    get state() { return shadowState["sensor.canon_ts5300_series"]},
  },

  ["0x001788010b21a974_power"]: {
    entity_id: "sensor.0x001788010b21a974_power",
    get state() { return shadowState["sensor.0x001788010b21a974_power"]},
  },

  ["0x001788010b21a974_energy"]: {
    entity_id: "sensor.0x001788010b21a974_energy",
    get state() { return shadowState["sensor.0x001788010b21a974_energy"]},
  },

  ["wvgzzze2zmp011645_climatisation_state"]: {
    entity_id: "sensor.wvgzzze2zmp011645_climatisation_state",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_climatisation_state"]},
  },

  ["wvgzzze2zmp011645_remaining_climatisation_time"]: {
    entity_id: "sensor.wvgzzze2zmp011645_remaining_climatisation_time",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_remaining_climatisation_time"]},
  },

  ["wvgzzze2zmp011645_target_temperature_c"]: {
    entity_id: "sensor.wvgzzze2zmp011645_target_temperature_c",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_target_temperature_c"]},
  },

  ["wvgzzze2zmp011645_target_temperature_f"]: {
    entity_id: "sensor.wvgzzze2zmp011645_target_temperature_f",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_target_temperature_f"]},
  },

  ["wvgzzze2zmp011645_unit_in_car"]: {
    entity_id: "sensor.wvgzzze2zmp011645_unit_in_car",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_unit_in_car"]},
  },

  ["wvgzzze2zmp011645_charging_state"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charging_state",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charging_state"]},
  },

  ["wvgzzze2zmp011645_remaining_charging_time"]: {
    entity_id: "sensor.wvgzzze2zmp011645_remaining_charging_time",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_remaining_charging_time"]},
  },

  ["wvgzzze2zmp011645_charging_mode"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charging_mode",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charging_mode"]},
  },

  ["wvgzzze2zmp011645_charge_power"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charge_power",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charge_power"]},
  },

  ["wvgzzze2zmp011645_charge_rate"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charge_rate",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charge_rate"]},
  },

  ["wvgzzze2zmp011645_charging_settings"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charging_settings",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charging_settings"]},
  },

  ["wvgzzze2zmp011645_charge_type"]: {
    entity_id: "sensor.wvgzzze2zmp011645_charge_type",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_charge_type"]},
  },

  ["wvgzzze2zmp011645_max_charge_current_ac"]: {
    entity_id: "sensor.wvgzzze2zmp011645_max_charge_current_ac",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_max_charge_current_ac"]},
  },

  ["wvgzzze2zmp011645_target_state_of_charge"]: {
    entity_id: "sensor.wvgzzze2zmp011645_target_state_of_charge",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_target_state_of_charge"]},
  },

  ["wvgzzze2zmp011645_state_of_charge"]: {
    entity_id: "sensor.wvgzzze2zmp011645_state_of_charge",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_state_of_charge"]},
  },

  ["wvgzzze2zmp011645_range_in_kilometers"]: {
    entity_id: "sensor.wvgzzze2zmp011645_range_in_kilometers",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_range_in_kilometers"]},
  },

  ["wvgzzze2zmp011645_range_in_miles"]: {
    entity_id: "sensor.wvgzzze2zmp011645_range_in_miles",
    get state() { return shadowState["sensor.wvgzzze2zmp011645_range_in_miles"]},
  },

  ["nibe_133481_44061"]: {
    entity_id: "sensor.nibe_133481_44061",
    get state() { return shadowState["sensor.nibe_133481_44061"]},
  },

  ["nibe_133481_44700"]: {
    entity_id: "sensor.nibe_133481_44700",
    get state() { return shadowState["sensor.nibe_133481_44700"]},
  },

  ["tim_s_id_4_odometer_in_kilometers"]: {
    entity_id: "sensor.tim_s_id_4_odometer_in_kilometers",
    get state() { return shadowState["sensor.tim_s_id_4_odometer_in_kilometers"]},
  },

  ["tim_s_id_4_odometer_in_miles"]: {
    entity_id: "sensor.tim_s_id_4_odometer_in_miles",
    get state() { return shadowState["sensor.tim_s_id_4_odometer_in_miles"]},
  },

  ["office_ir_blaster_humidity"]: {
    entity_id: "sensor.office_ir_blaster_humidity",
    get state() { return shadowState["sensor.office_ir_blaster_humidity"]},
  },

  ["office_ir_blaster_temperature"]: {
    entity_id: "sensor.office_ir_blaster_temperature",
    get state() { return shadowState["sensor.office_ir_blaster_temperature"]},
  },
}
  