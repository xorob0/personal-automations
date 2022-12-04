import {shadowState, Sensor, SensorProperties} from "@herja/core"
export type SensorIDs = "energy_production_today" | "energy_production_tomorrow" | "power_highest_peak_time_today" | "power_highest_peak_time_tomorrow" | "power_production_now" | "energy_current_hour" | "energy_next_hour" | "plex_celty_3_0" | "garage_state" | "garage_position" | "wallbox_portal_depot_price" | "wallbox_portal_charging_power" | "wallbox_portal_max_available_power" | "wallbox_portal_charging_speed" | "wallbox_portal_added_range" | "wallbox_portal_added_energy" | "wallbox_portal_discharged_energy" | "wallbox_portal_cost" | "wallbox_portal_current_mode" | "wallbox_portal_state_of_charge" | "wallbox_portal_max_charging_current" | "wallbox_portal_status_description" | "kitchen_spot_1_power" | "dining_room_spot_2_power" | "dining_room_spot_1_power" | "living_room_spot_3_power" | "dining_room_spot_3_power" | "hall_entrance_power" | "kitchen_spot_2_power" | "kitchen_spot_3_power" | "hall_stairs_power" | "bathroom_spot_2_power" | "hall_upstairs_spot_3_power" | "hall_upstairs_spot_1_power" | "hall_upstairs_spot_2_power" | "bathroom_spot_1_power" | "toilet_power" | "garage_fridge_power" | "0x14b457fffefafbcf_power" | "0x0017880109bde997_power" | "0x001788010b21a974_power" | "kitchen_spot_1_energy" | "dining_room_spot_2_energy" | "dining_room_spot_1_energy" | "living_room_spot_3_energy" | "dining_room_spot_3_energy" | "hall_entrance_energy" | "kitchen_spot_2_energy" | "kitchen_spot_3_energy" | "hall_stairs_energy" | "bathroom_spot_2_energy" | "hall_upstairs_spot_3_energy" | "hall_upstairs_spot_1_energy" | "hall_upstairs_spot_2_energy" | "bathroom_spot_1_energy" | "toilet_energy" | "garage_fridge_energy" | "0x14b457fffefafbcf_energy" | "0x0017880109bde997_energy" | "0x001788010b21a974_energy" | "unifi_dream_machine_external_ip" | "unifi_dream_machine_kib_s_received" | "unifi_dream_machine_kib_s_sent" | "g4_doorbell_storage_used" | "g4_doorbell_disk_write_rate" | "g4_doorbell_voltage" | "g4_doorbell_detected_object" | "dream_machine_pro_uptime" | "dream_machine_pro_storage_utilization" | "dream_machine_pro_type_timelapse_video" | "dream_machine_pro_type_continuous_video" | "dream_machine_pro_type_detections_video" | "dream_machine_pro_resolution_hd_video" | "dream_machine_pro_resolution_4k_video" | "dream_machine_pro_resolution_free_space" | "dream_machine_pro_recording_capacity" | "sm_g980f_battery_level" | "sm_g980f_battery_state" | "sm_g980f_charger_type" | "sm_g980f_battery_health" | "sm_g980f_battery_temperature" | "sm_g980f_detected_activity" | "sm_g980f_sleep_confidence" | "sm_g980f_sleep_segment" | "sm_g980f_ringer_mode" | "sm_g980f_audio_mode" | "sm_g980f_volume_level_dtmf" | "sm_g980f_bluetooth_connection" | "sm_g980f_ble_transmitter" | "sm_g980f_do_not_disturb_sensor" | "sm_g980f_last_reboot" | "sm_g980f_light_sensor" | "sm_g980f_wifi_connection" | "sm_g980f_wifi_bssid" | "sm_g980f_wifi_ip_address" | "sm_g980f_wifi_link_speed" | "sm_g980f_wifi_frequency" | "sm_g980f_wifi_signal_strength" | "sm_g980f_public_ip_address" | "sm_g980f_network_type" | "sm_g980f_next_alarm" | "sm_g980f_last_notification" | "sm_g980f_last_removed_notification" | "sm_g980f_active_notification_count" | "sm_g980f_media_session" | "sm_g980f_sim_1" | "sm_g980f_sim_2" | "sm_g980f_pressure_sensor" | "sm_g980f_proximity_sensor" | "sm_g980f_steps_sensor" | "sm_g980f_current_time_zone" | "sm_g980f_battery_power" | "sm_g980f_beacon_monitor" | "sm_g980f_accent_color" | "s22_battery_level" | "s22_battery_state" | "s22_charger_type" | "s22_battery_health" | "s22_battery_temperature" | "s22_current_version" | "s22_app_rx_gb" | "s22_app_tx_gb" | "s22_app_memory" | "s22_app_standby_bucket" | "s22_app_importance" | "s22_ringer_mode" | "s22_audio_mode" | "s22_volume_level_alarm" | "s22_volume_level_call" | "s22_volume_level_music" | "s22_volume_level_ringer" | "s22_volume_level_notification" | "s22_volume_level_system" | "s22_volume_level_dtmf" | "s22_volume_level_accessibility" | "s22_bluetooth_connection" | "s22_ble_transmitter" | "s22_do_not_disturb_sensor" | "s22_last_reboot" | "s22_last_update_trigger" | "s22_wifi_connection" | "s22_wifi_bssid" | "s22_wifi_ip_address" | "s22_wifi_link_speed" | "s22_wifi_frequency" | "s22_wifi_signal_strength" | "s22_public_ip_address" | "s22_network_type" | "s22_next_alarm" | "s22_phone_state" | "s22_sim_1" | "s22_sim_2" | "s22_pressure_sensor" | "s22_proximity_sensor" | "s22_steps_sensor" | "s22_internal_storage" | "s22_external_storage" | "s22_current_time_zone" | "s22_total_rx_gb" | "s22_total_tx_gb" | "s22_mobile_rx_gb" | "s22_mobile_tx_gb" | "s22_battery_power" | "tims_iphone_storage" | "tims_iphone_battery_level" | "tims_iphone_battery_state" | "tims_iphone_sim_2" | "tims_iphone_last_update_trigger" | "tims_iphone_ssid" | "tims_iphone_connection_type" | "tims_iphone_sim_1" | "tims_iphone_geocoded_location" | "tims_iphone_bssid" | "tims_iphone_activity" | "tims_iphone_distance" | "tims_iphone_floors_ascended" | "tims_iphone_average_active_pace" | "tims_iphone_floors_descended" | "tims_iphone_steps" | "tims_macbook_pro_internal_battery_level" | "tims_macbook_pro_internal_battery_state" | "tims_macbook_pro_storage" | "tims_macbook_pro_ssid" | "tims_macbook_pro_bssid" | "tims_macbook_pro_connection_type" | "tims_macbook_pro_active_camera" | "tims_macbook_pro_active_audio_input" | "tims_macbook_pro_active_audio_output" | "tims_macbook_pro_displays" | "tims_macbook_pro_primary_display_name" | "tims_macbook_pro_primary_display_id" | "tims_macbook_pro_frontmost_app" | "tims_macbook_pro_last_update_trigger" | "office_desk_button_click" | "office_desk_button_power_outage_count" | "office_desk_button_device_temperature" | "office_desk_button_action" | "office_desk_button_battery" | "garage_electric_door_sensor_open_battery" | "coffee_machine_button_power_outage_count" | "coffee_machine_button_device_temperature" | "coffee_machine_button_action" | "coffee_machine_button_battery" | "bedside_button_action" | "bedside_button_battery" | "bedside_lamp_energy" | "bedside_lamp_power" | "fridge_door_sensor_power_outage_count" | "fridge_door_sensor_device_temperature" | "fridge_door_sensor_battery" | "stairs_motion_sensor_battery" | "bedroom_secondary_lamp_energy" | "bedroom_secondary_lamp_power" | "living_room_remote_action_duration" | "living_room_remote_action" | "living_room_remote_battery" | "0xa4c1385c18410b5b_humidity" | "0xa4c1385c18410b5b_temperature" | "0xa4c1385c18410b5b_battery" | "christmas_tree_led_outlet_energy" | "christmas_tree_led_outlet_power" | "washing_machine_plug_energy" | "washing_machine_plug_power" | "bedroom_button_gaby_action" | "bedroom_button_gaby_battery" | "bedroom_button_tim_action" | "bedroom_button_tim_battery" | "bathroom_door_battery" | "tripod_button_power_outage_count" | "tripod_button_action" | "tripod_button_battery" | "siren_power_type" | "siren_humidity" | "siren_temperature" | "garage_electric_door_sensor_closed_power_outage_count" | "garage_electric_door_sensor_closed_device_temperature" | "garage_electric_door_sensor_closed_battery" | "bedroom_window_bed_power_outage_count" | "bedroom_window_bed_device_temperature" | "bedroom_window_bed_battery" | "desk_outlet_energy" | "desk_outlet_power" | "living_room_table_button_power_outage_count" | "living_room_table_button_action" | "living_room_table_button_battery" | "living_room_table_sensor_humidity" | "living_room_table_sensor_temperature" | "living_room_table_sensor_battery" | "entrance_door_power_outage_count" | "entrance_door_device_temperature" | "entrance_door_battery" | "toilet_door_battery" | "garden_door_power_outage_count" | "garden_door_device_temperature" | "garden_door_battery" | "garage_door_power_outage_count" | "garage_door_device_temperature" | "garage_door_battery" | "bedroom_humidifier_switch_energy" | "bedroom_humidifier_switch_power" | "garage_remote_action_duration" | "garage_remote_action" | "garage_remote_battery" | "garage_electric_door_sensor_open_power_outage_count" | "garage_electric_door_sensor_open_device_temperature" | "nibe_133481_40067" | "nibe_133481_40014" | "nibe_133481_40013" | "nibe_133481_40004" | "nibe_133481_40083" | "nibe_133481_40081" | "nibe_133481_40079" | "nibe_133481_43005" | "nibe_133481_43161" | "nibe_133481_47276" | "nibe_133481_43009" | "nibe_133481_40071" | "nibe_133481_40152" | "nibe_133481_40033" | "nibe_133481_44256" | "nibe_133481_44270" | "nibe_133481_40045" | "nibe_133481_44266" | "nibe_133481_10033" | "nibe_133481_47613" | "nibe_133481_43091" | "nibe_133481_47214" | "nibe_133481_40121" | "nibe_133481_44899" | "nibe_133481_44896" | "nibe_133481_44897" | "nibe_133481_44908" | "nibe_133481_10069" | "nibe_133481_47411" | "nibe_133481_47410" | "nibe_133481_47409" | "nibe_133481_47408" | "nibe_133481_47407" | "nibe_133481_48366" | "nibe_133481_47412" | "nibe_133481_48745" | "nibe_133481_0" | "nibe_133481_44703" | "nibe_133481_44396" | "nibe_133481_44362" | "nibe_133481_10014" | "nibe_133481_44069" | "nibe_133481_44702" | "nibe_133481_44058" | "nibe_133481_44363" | "nibe_133481_44059" | "nibe_133481_44060" | "nibe_133481_44055" | "nibe_133481_44699" | "nibe_133481_44071" | "nibe_133481_44073" | "nibe_133481_40737" | "nibe_133481_44701" | "nibe_133481_40782" | "nibe_133481_44014" | "last_activity" | "connection_status" | "has_alarmed" | "software_version" | "wvgzzze2zmp011645_climatisation_state" | "wvgzzze2zmp011645_remaining_climatisation_time" | "wvgzzze2zmp011645_target_temperature_c" | "wvgzzze2zmp011645_target_temperature_f" | "wvgzzze2zmp011645_unit_in_car" | "wvgzzze2zmp011645_charging_state" | "wvgzzze2zmp011645_remaining_charging_time" | "wvgzzze2zmp011645_charging_mode" | "wvgzzze2zmp011645_charge_power" | "wvgzzze2zmp011645_charge_rate" | "wvgzzze2zmp011645_charging_settings" | "wvgzzze2zmp011645_charge_type" | "wvgzzze2zmp011645_max_charge_current_ac" | "wvgzzze2zmp011645_target_state_of_charge" | "wvgzzze2zmp011645_state_of_charge" | "wvgzzze2zmp011645_range_in_kilometers" | "wvgzzze2zmp011645_range_in_miles" | "hacs" | "hygea" | "hygea_be" | "d1df7d67_b4318c17" | "bedroom_ir_blaster_temperature" | "bedroom_ir_blaster_humidity" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "status" | "pv_power_a" | "pv_power_b" | "pv_current_a" | "pv_current_b" | "grid_power" | "total_yield" | "daily_yield" | "pv_gen_meter" | "map_segments" | "zone_presets" | "goto_locations" | "wi_fi_configuration" | "error_description" | "main_brush" | "right_brush" | "main_filter" | "sensor_cleaning" | "my_wall_panel_battery_level" | "my_wall_panel_light" | "living_room_cluster_size" | "living_room_cluster_leader" | "bedroom_cluster_size" | "bedroom_cluster_leader" | "tims_ipone_room_presence" | "tim_s_watch_room_presence" | "tim_s_ipone_room_presence" | "tim_s_ipone_room_presence_2" | "tim_s_phone_room_presence" | "gaby_s_phone_room_presence" | "garage_cluster_size" | "garage_cluster_leader" | "garage_car_power" | "garage_car_energy" | "canon_ts5300_series_black" | "canon_ts5300_series_color" | "canon_ts5300_series" | "nibe_133481_44061" | "nibe_133481_44700" | "living_room_ir_blaster_temperature_2" | "living_room_ir_blaster_humidity_2" | "tim_s_id_4_odometer_in_kilometers" | "tim_s_id_4_odometer_in_miles" | "secondary_room_ir_blaster_temperature" | "secondary_room_ir_blaster_humidity" | "office_ir_blaster_humidity" | "office_ir_blaster_temperature" | "01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance" | "747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance" | "sb0c958382bb2fbd7c_4623_estimated_distance" | "e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance" | "tim_s_id_4_health_inspection" | "sn_3004169620_current_total" | "sn_3004169620_inverter_power_limit" | "accma99c32488a978558_fb1f_estimated_distance" | "garage_position_2" | "garage_state_2" | "g4_bullet_storage_used" | "g4_bullet_disk_write_rate"
export type SensorEntities = Record<SensorIDs, Sensor>

export const sensor: Sensor<SensorIDs> = {

['energy_production_today']: {
  entity_id: "sensor.energy_production_today",
get entity() { return {state: shadowState["sensor.energy_production_today"].state, attributes: shadowState["sensor.energy_production_today"].attributes} as SensorProperties}
},

['energy_production_tomorrow']: {
  entity_id: "sensor.energy_production_tomorrow",
get entity() { return {state: shadowState["sensor.energy_production_tomorrow"].state, attributes: shadowState["sensor.energy_production_tomorrow"].attributes} as SensorProperties}
},

['power_highest_peak_time_today']: {
  entity_id: "sensor.power_highest_peak_time_today",
get entity() { return {state: shadowState["sensor.power_highest_peak_time_today"].state, attributes: shadowState["sensor.power_highest_peak_time_today"].attributes} as SensorProperties}
},

['power_highest_peak_time_tomorrow']: {
  entity_id: "sensor.power_highest_peak_time_tomorrow",
get entity() { return {state: shadowState["sensor.power_highest_peak_time_tomorrow"].state, attributes: shadowState["sensor.power_highest_peak_time_tomorrow"].attributes} as SensorProperties}
},

['power_production_now']: {
  entity_id: "sensor.power_production_now",
get entity() { return {state: shadowState["sensor.power_production_now"].state, attributes: shadowState["sensor.power_production_now"].attributes} as SensorProperties}
},

['energy_current_hour']: {
  entity_id: "sensor.energy_current_hour",
get entity() { return {state: shadowState["sensor.energy_current_hour"].state, attributes: shadowState["sensor.energy_current_hour"].attributes} as SensorProperties}
},

['energy_next_hour']: {
  entity_id: "sensor.energy_next_hour",
get entity() { return {state: shadowState["sensor.energy_next_hour"].state, attributes: shadowState["sensor.energy_next_hour"].attributes} as SensorProperties}
},

['plex_celty_3_0']: {
  entity_id: "sensor.plex_celty_3_0",
get entity() { return {state: shadowState["sensor.plex_celty_3_0"].state, attributes: shadowState["sensor.plex_celty_3_0"].attributes} as SensorProperties}
},

['garage_state']: {
  entity_id: "sensor.garage_state",
get entity() { return {state: shadowState["sensor.garage_state"].state, attributes: shadowState["sensor.garage_state"].attributes} as SensorProperties}
},

['garage_position']: {
  entity_id: "sensor.garage_position",
get entity() { return {state: shadowState["sensor.garage_position"].state, attributes: shadowState["sensor.garage_position"].attributes} as SensorProperties}
},

['wallbox_portal_depot_price']: {
  entity_id: "sensor.wallbox_portal_depot_price",
get entity() { return {state: shadowState["sensor.wallbox_portal_depot_price"].state, attributes: shadowState["sensor.wallbox_portal_depot_price"].attributes} as SensorProperties}
},

['wallbox_portal_charging_power']: {
  entity_id: "sensor.wallbox_portal_charging_power",
get entity() { return {state: shadowState["sensor.wallbox_portal_charging_power"].state, attributes: shadowState["sensor.wallbox_portal_charging_power"].attributes} as SensorProperties}
},

['wallbox_portal_max_available_power']: {
  entity_id: "sensor.wallbox_portal_max_available_power",
get entity() { return {state: shadowState["sensor.wallbox_portal_max_available_power"].state, attributes: shadowState["sensor.wallbox_portal_max_available_power"].attributes} as SensorProperties}
},

['wallbox_portal_charging_speed']: {
  entity_id: "sensor.wallbox_portal_charging_speed",
get entity() { return {state: shadowState["sensor.wallbox_portal_charging_speed"].state, attributes: shadowState["sensor.wallbox_portal_charging_speed"].attributes} as SensorProperties}
},

['wallbox_portal_added_range']: {
  entity_id: "sensor.wallbox_portal_added_range",
get entity() { return {state: shadowState["sensor.wallbox_portal_added_range"].state, attributes: shadowState["sensor.wallbox_portal_added_range"].attributes} as SensorProperties}
},

['wallbox_portal_added_energy']: {
  entity_id: "sensor.wallbox_portal_added_energy",
get entity() { return {state: shadowState["sensor.wallbox_portal_added_energy"].state, attributes: shadowState["sensor.wallbox_portal_added_energy"].attributes} as SensorProperties}
},

['wallbox_portal_discharged_energy']: {
  entity_id: "sensor.wallbox_portal_discharged_energy",
get entity() { return {state: shadowState["sensor.wallbox_portal_discharged_energy"].state, attributes: shadowState["sensor.wallbox_portal_discharged_energy"].attributes} as SensorProperties}
},

['wallbox_portal_cost']: {
  entity_id: "sensor.wallbox_portal_cost",
get entity() { return {state: shadowState["sensor.wallbox_portal_cost"].state, attributes: shadowState["sensor.wallbox_portal_cost"].attributes} as SensorProperties}
},

['wallbox_portal_current_mode']: {
  entity_id: "sensor.wallbox_portal_current_mode",
get entity() { return {state: shadowState["sensor.wallbox_portal_current_mode"].state, attributes: shadowState["sensor.wallbox_portal_current_mode"].attributes} as SensorProperties}
},

['wallbox_portal_state_of_charge']: {
  entity_id: "sensor.wallbox_portal_state_of_charge",
get entity() { return {state: shadowState["sensor.wallbox_portal_state_of_charge"].state, attributes: shadowState["sensor.wallbox_portal_state_of_charge"].attributes} as SensorProperties}
},

['wallbox_portal_max_charging_current']: {
  entity_id: "sensor.wallbox_portal_max_charging_current",
get entity() { return {state: shadowState["sensor.wallbox_portal_max_charging_current"].state, attributes: shadowState["sensor.wallbox_portal_max_charging_current"].attributes} as SensorProperties}
},

['wallbox_portal_status_description']: {
  entity_id: "sensor.wallbox_portal_status_description",
get entity() { return {state: shadowState["sensor.wallbox_portal_status_description"].state, attributes: shadowState["sensor.wallbox_portal_status_description"].attributes} as SensorProperties}
},

['kitchen_spot_1_power']: {
  entity_id: "sensor.kitchen_spot_1_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_1_power"].state, attributes: shadowState["sensor.kitchen_spot_1_power"].attributes} as SensorProperties}
},

['dining_room_spot_2_power']: {
  entity_id: "sensor.dining_room_spot_2_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_2_power"].state, attributes: shadowState["sensor.dining_room_spot_2_power"].attributes} as SensorProperties}
},

['dining_room_spot_1_power']: {
  entity_id: "sensor.dining_room_spot_1_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_1_power"].state, attributes: shadowState["sensor.dining_room_spot_1_power"].attributes} as SensorProperties}
},

['living_room_spot_3_power']: {
  entity_id: "sensor.living_room_spot_3_power",
get entity() { return {state: shadowState["sensor.living_room_spot_3_power"].state, attributes: shadowState["sensor.living_room_spot_3_power"].attributes} as SensorProperties}
},

['dining_room_spot_3_power']: {
  entity_id: "sensor.dining_room_spot_3_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_3_power"].state, attributes: shadowState["sensor.dining_room_spot_3_power"].attributes} as SensorProperties}
},

['hall_entrance_power']: {
  entity_id: "sensor.hall_entrance_power",
get entity() { return {state: shadowState["sensor.hall_entrance_power"].state, attributes: shadowState["sensor.hall_entrance_power"].attributes} as SensorProperties}
},

['kitchen_spot_2_power']: {
  entity_id: "sensor.kitchen_spot_2_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_2_power"].state, attributes: shadowState["sensor.kitchen_spot_2_power"].attributes} as SensorProperties}
},

['kitchen_spot_3_power']: {
  entity_id: "sensor.kitchen_spot_3_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_3_power"].state, attributes: shadowState["sensor.kitchen_spot_3_power"].attributes} as SensorProperties}
},

['hall_stairs_power']: {
  entity_id: "sensor.hall_stairs_power",
get entity() { return {state: shadowState["sensor.hall_stairs_power"].state, attributes: shadowState["sensor.hall_stairs_power"].attributes} as SensorProperties}
},

['bathroom_spot_2_power']: {
  entity_id: "sensor.bathroom_spot_2_power",
get entity() { return {state: shadowState["sensor.bathroom_spot_2_power"].state, attributes: shadowState["sensor.bathroom_spot_2_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_3_power']: {
  entity_id: "sensor.hall_upstairs_spot_3_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_3_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_3_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_1_power']: {
  entity_id: "sensor.hall_upstairs_spot_1_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_1_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_1_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_2_power']: {
  entity_id: "sensor.hall_upstairs_spot_2_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_2_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_2_power"].attributes} as SensorProperties}
},

['bathroom_spot_1_power']: {
  entity_id: "sensor.bathroom_spot_1_power",
get entity() { return {state: shadowState["sensor.bathroom_spot_1_power"].state, attributes: shadowState["sensor.bathroom_spot_1_power"].attributes} as SensorProperties}
},

['toilet_power']: {
  entity_id: "sensor.toilet_power",
get entity() { return {state: shadowState["sensor.toilet_power"].state, attributes: shadowState["sensor.toilet_power"].attributes} as SensorProperties}
},

['garage_fridge_power']: {
  entity_id: "sensor.garage_fridge_power",
get entity() { return {state: shadowState["sensor.garage_fridge_power"].state, attributes: shadowState["sensor.garage_fridge_power"].attributes} as SensorProperties}
},

['0x14b457fffefafbcf_power']: {
  entity_id: "sensor.0x14b457fffefafbcf_power",
get entity() { return {state: shadowState["sensor.0x14b457fffefafbcf_power"].state, attributes: shadowState["sensor.0x14b457fffefafbcf_power"].attributes} as SensorProperties}
},

['0x0017880109bde997_power']: {
  entity_id: "sensor.0x0017880109bde997_power",
get entity() { return {state: shadowState["sensor.0x0017880109bde997_power"].state, attributes: shadowState["sensor.0x0017880109bde997_power"].attributes} as SensorProperties}
},

['0x001788010b21a974_power']: {
  entity_id: "sensor.0x001788010b21a974_power",
get entity() { return {state: shadowState["sensor.0x001788010b21a974_power"].state, attributes: shadowState["sensor.0x001788010b21a974_power"].attributes} as SensorProperties}
},

['kitchen_spot_1_energy']: {
  entity_id: "sensor.kitchen_spot_1_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_1_energy"].state, attributes: shadowState["sensor.kitchen_spot_1_energy"].attributes} as SensorProperties}
},

['dining_room_spot_2_energy']: {
  entity_id: "sensor.dining_room_spot_2_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_2_energy"].state, attributes: shadowState["sensor.dining_room_spot_2_energy"].attributes} as SensorProperties}
},

['dining_room_spot_1_energy']: {
  entity_id: "sensor.dining_room_spot_1_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_1_energy"].state, attributes: shadowState["sensor.dining_room_spot_1_energy"].attributes} as SensorProperties}
},

['living_room_spot_3_energy']: {
  entity_id: "sensor.living_room_spot_3_energy",
get entity() { return {state: shadowState["sensor.living_room_spot_3_energy"].state, attributes: shadowState["sensor.living_room_spot_3_energy"].attributes} as SensorProperties}
},

['dining_room_spot_3_energy']: {
  entity_id: "sensor.dining_room_spot_3_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_3_energy"].state, attributes: shadowState["sensor.dining_room_spot_3_energy"].attributes} as SensorProperties}
},

['hall_entrance_energy']: {
  entity_id: "sensor.hall_entrance_energy",
get entity() { return {state: shadowState["sensor.hall_entrance_energy"].state, attributes: shadowState["sensor.hall_entrance_energy"].attributes} as SensorProperties}
},

['kitchen_spot_2_energy']: {
  entity_id: "sensor.kitchen_spot_2_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_2_energy"].state, attributes: shadowState["sensor.kitchen_spot_2_energy"].attributes} as SensorProperties}
},

['kitchen_spot_3_energy']: {
  entity_id: "sensor.kitchen_spot_3_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_3_energy"].state, attributes: shadowState["sensor.kitchen_spot_3_energy"].attributes} as SensorProperties}
},

['hall_stairs_energy']: {
  entity_id: "sensor.hall_stairs_energy",
get entity() { return {state: shadowState["sensor.hall_stairs_energy"].state, attributes: shadowState["sensor.hall_stairs_energy"].attributes} as SensorProperties}
},

['bathroom_spot_2_energy']: {
  entity_id: "sensor.bathroom_spot_2_energy",
get entity() { return {state: shadowState["sensor.bathroom_spot_2_energy"].state, attributes: shadowState["sensor.bathroom_spot_2_energy"].attributes} as SensorProperties}
},

['hall_upstairs_spot_3_energy']: {
  entity_id: "sensor.hall_upstairs_spot_3_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_3_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_3_energy"].attributes} as SensorProperties}
},

['hall_upstairs_spot_1_energy']: {
  entity_id: "sensor.hall_upstairs_spot_1_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_1_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_1_energy"].attributes} as SensorProperties}
},

['hall_upstairs_spot_2_energy']: {
  entity_id: "sensor.hall_upstairs_spot_2_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_2_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_2_energy"].attributes} as SensorProperties}
},

['bathroom_spot_1_energy']: {
  entity_id: "sensor.bathroom_spot_1_energy",
get entity() { return {state: shadowState["sensor.bathroom_spot_1_energy"].state, attributes: shadowState["sensor.bathroom_spot_1_energy"].attributes} as SensorProperties}
},

['toilet_energy']: {
  entity_id: "sensor.toilet_energy",
get entity() { return {state: shadowState["sensor.toilet_energy"].state, attributes: shadowState["sensor.toilet_energy"].attributes} as SensorProperties}
},

['garage_fridge_energy']: {
  entity_id: "sensor.garage_fridge_energy",
get entity() { return {state: shadowState["sensor.garage_fridge_energy"].state, attributes: shadowState["sensor.garage_fridge_energy"].attributes} as SensorProperties}
},

['0x14b457fffefafbcf_energy']: {
  entity_id: "sensor.0x14b457fffefafbcf_energy",
get entity() { return {state: shadowState["sensor.0x14b457fffefafbcf_energy"].state, attributes: shadowState["sensor.0x14b457fffefafbcf_energy"].attributes} as SensorProperties}
},

['0x0017880109bde997_energy']: {
  entity_id: "sensor.0x0017880109bde997_energy",
get entity() { return {state: shadowState["sensor.0x0017880109bde997_energy"].state, attributes: shadowState["sensor.0x0017880109bde997_energy"].attributes} as SensorProperties}
},

['0x001788010b21a974_energy']: {
  entity_id: "sensor.0x001788010b21a974_energy",
get entity() { return {state: shadowState["sensor.0x001788010b21a974_energy"].state, attributes: shadowState["sensor.0x001788010b21a974_energy"].attributes} as SensorProperties}
},

['unifi_dream_machine_external_ip']: {
  entity_id: "sensor.unifi_dream_machine_external_ip",
get entity() { return {state: shadowState["sensor.unifi_dream_machine_external_ip"].state, attributes: shadowState["sensor.unifi_dream_machine_external_ip"].attributes} as SensorProperties}
},

['unifi_dream_machine_kib_s_received']: {
  entity_id: "sensor.unifi_dream_machine_kib_s_received",
get entity() { return {state: shadowState["sensor.unifi_dream_machine_kib_s_received"].state, attributes: shadowState["sensor.unifi_dream_machine_kib_s_received"].attributes} as SensorProperties}
},

['unifi_dream_machine_kib_s_sent']: {
  entity_id: "sensor.unifi_dream_machine_kib_s_sent",
get entity() { return {state: shadowState["sensor.unifi_dream_machine_kib_s_sent"].state, attributes: shadowState["sensor.unifi_dream_machine_kib_s_sent"].attributes} as SensorProperties}
},

['g4_doorbell_storage_used']: {
  entity_id: "sensor.g4_doorbell_storage_used",
get entity() { return {state: shadowState["sensor.g4_doorbell_storage_used"].state, attributes: shadowState["sensor.g4_doorbell_storage_used"].attributes} as SensorProperties}
},

['g4_doorbell_disk_write_rate']: {
  entity_id: "sensor.g4_doorbell_disk_write_rate",
get entity() { return {state: shadowState["sensor.g4_doorbell_disk_write_rate"].state, attributes: shadowState["sensor.g4_doorbell_disk_write_rate"].attributes} as SensorProperties}
},

['g4_doorbell_voltage']: {
  entity_id: "sensor.g4_doorbell_voltage",
get entity() { return {state: shadowState["sensor.g4_doorbell_voltage"].state, attributes: shadowState["sensor.g4_doorbell_voltage"].attributes} as SensorProperties}
},

['g4_doorbell_detected_object']: {
  entity_id: "sensor.g4_doorbell_detected_object",
get entity() { return {state: shadowState["sensor.g4_doorbell_detected_object"].state, attributes: shadowState["sensor.g4_doorbell_detected_object"].attributes} as SensorProperties}
},

['dream_machine_pro_uptime']: {
  entity_id: "sensor.dream_machine_pro_uptime",
get entity() { return {state: shadowState["sensor.dream_machine_pro_uptime"].state, attributes: shadowState["sensor.dream_machine_pro_uptime"].attributes} as SensorProperties}
},

['dream_machine_pro_storage_utilization']: {
  entity_id: "sensor.dream_machine_pro_storage_utilization",
get entity() { return {state: shadowState["sensor.dream_machine_pro_storage_utilization"].state, attributes: shadowState["sensor.dream_machine_pro_storage_utilization"].attributes} as SensorProperties}
},

['dream_machine_pro_type_timelapse_video']: {
  entity_id: "sensor.dream_machine_pro_type_timelapse_video",
get entity() { return {state: shadowState["sensor.dream_machine_pro_type_timelapse_video"].state, attributes: shadowState["sensor.dream_machine_pro_type_timelapse_video"].attributes} as SensorProperties}
},

['dream_machine_pro_type_continuous_video']: {
  entity_id: "sensor.dream_machine_pro_type_continuous_video",
get entity() { return {state: shadowState["sensor.dream_machine_pro_type_continuous_video"].state, attributes: shadowState["sensor.dream_machine_pro_type_continuous_video"].attributes} as SensorProperties}
},

['dream_machine_pro_type_detections_video']: {
  entity_id: "sensor.dream_machine_pro_type_detections_video",
get entity() { return {state: shadowState["sensor.dream_machine_pro_type_detections_video"].state, attributes: shadowState["sensor.dream_machine_pro_type_detections_video"].attributes} as SensorProperties}
},

['dream_machine_pro_resolution_hd_video']: {
  entity_id: "sensor.dream_machine_pro_resolution_hd_video",
get entity() { return {state: shadowState["sensor.dream_machine_pro_resolution_hd_video"].state, attributes: shadowState["sensor.dream_machine_pro_resolution_hd_video"].attributes} as SensorProperties}
},

['dream_machine_pro_resolution_4k_video']: {
  entity_id: "sensor.dream_machine_pro_resolution_4k_video",
get entity() { return {state: shadowState["sensor.dream_machine_pro_resolution_4k_video"].state, attributes: shadowState["sensor.dream_machine_pro_resolution_4k_video"].attributes} as SensorProperties}
},

['dream_machine_pro_resolution_free_space']: {
  entity_id: "sensor.dream_machine_pro_resolution_free_space",
get entity() { return {state: shadowState["sensor.dream_machine_pro_resolution_free_space"].state, attributes: shadowState["sensor.dream_machine_pro_resolution_free_space"].attributes} as SensorProperties}
},

['dream_machine_pro_recording_capacity']: {
  entity_id: "sensor.dream_machine_pro_recording_capacity",
get entity() { return {state: shadowState["sensor.dream_machine_pro_recording_capacity"].state, attributes: shadowState["sensor.dream_machine_pro_recording_capacity"].attributes} as SensorProperties}
},

['sm_g980f_battery_level']: {
  entity_id: "sensor.sm_g980f_battery_level",
get entity() { return {state: shadowState["sensor.sm_g980f_battery_level"].state, attributes: shadowState["sensor.sm_g980f_battery_level"].attributes} as SensorProperties}
},

['sm_g980f_battery_state']: {
  entity_id: "sensor.sm_g980f_battery_state",
get entity() { return {state: shadowState["sensor.sm_g980f_battery_state"].state, attributes: shadowState["sensor.sm_g980f_battery_state"].attributes} as SensorProperties}
},

['sm_g980f_charger_type']: {
  entity_id: "sensor.sm_g980f_charger_type",
get entity() { return {state: shadowState["sensor.sm_g980f_charger_type"].state, attributes: shadowState["sensor.sm_g980f_charger_type"].attributes} as SensorProperties}
},

['sm_g980f_battery_health']: {
  entity_id: "sensor.sm_g980f_battery_health",
get entity() { return {state: shadowState["sensor.sm_g980f_battery_health"].state, attributes: shadowState["sensor.sm_g980f_battery_health"].attributes} as SensorProperties}
},

['sm_g980f_battery_temperature']: {
  entity_id: "sensor.sm_g980f_battery_temperature",
get entity() { return {state: shadowState["sensor.sm_g980f_battery_temperature"].state, attributes: shadowState["sensor.sm_g980f_battery_temperature"].attributes} as SensorProperties}
},

['sm_g980f_detected_activity']: {
  entity_id: "sensor.sm_g980f_detected_activity",
get entity() { return {state: shadowState["sensor.sm_g980f_detected_activity"].state, attributes: shadowState["sensor.sm_g980f_detected_activity"].attributes} as SensorProperties}
},

['sm_g980f_sleep_confidence']: {
  entity_id: "sensor.sm_g980f_sleep_confidence",
get entity() { return {state: shadowState["sensor.sm_g980f_sleep_confidence"].state, attributes: shadowState["sensor.sm_g980f_sleep_confidence"].attributes} as SensorProperties}
},

['sm_g980f_sleep_segment']: {
  entity_id: "sensor.sm_g980f_sleep_segment",
get entity() { return {state: shadowState["sensor.sm_g980f_sleep_segment"].state, attributes: shadowState["sensor.sm_g980f_sleep_segment"].attributes} as SensorProperties}
},

['sm_g980f_ringer_mode']: {
  entity_id: "sensor.sm_g980f_ringer_mode",
get entity() { return {state: shadowState["sensor.sm_g980f_ringer_mode"].state, attributes: shadowState["sensor.sm_g980f_ringer_mode"].attributes} as SensorProperties}
},

['sm_g980f_audio_mode']: {
  entity_id: "sensor.sm_g980f_audio_mode",
get entity() { return {state: shadowState["sensor.sm_g980f_audio_mode"].state, attributes: shadowState["sensor.sm_g980f_audio_mode"].attributes} as SensorProperties}
},

['sm_g980f_volume_level_dtmf']: {
  entity_id: "sensor.sm_g980f_volume_level_dtmf",
get entity() { return {state: shadowState["sensor.sm_g980f_volume_level_dtmf"].state, attributes: shadowState["sensor.sm_g980f_volume_level_dtmf"].attributes} as SensorProperties}
},

['sm_g980f_bluetooth_connection']: {
  entity_id: "sensor.sm_g980f_bluetooth_connection",
get entity() { return {state: shadowState["sensor.sm_g980f_bluetooth_connection"].state, attributes: shadowState["sensor.sm_g980f_bluetooth_connection"].attributes} as SensorProperties}
},

['sm_g980f_ble_transmitter']: {
  entity_id: "sensor.sm_g980f_ble_transmitter",
get entity() { return {state: shadowState["sensor.sm_g980f_ble_transmitter"].state, attributes: shadowState["sensor.sm_g980f_ble_transmitter"].attributes} as SensorProperties}
},

['sm_g980f_do_not_disturb_sensor']: {
  entity_id: "sensor.sm_g980f_do_not_disturb_sensor",
get entity() { return {state: shadowState["sensor.sm_g980f_do_not_disturb_sensor"].state, attributes: shadowState["sensor.sm_g980f_do_not_disturb_sensor"].attributes} as SensorProperties}
},

['sm_g980f_last_reboot']: {
  entity_id: "sensor.sm_g980f_last_reboot",
get entity() { return {state: shadowState["sensor.sm_g980f_last_reboot"].state, attributes: shadowState["sensor.sm_g980f_last_reboot"].attributes} as SensorProperties}
},

['sm_g980f_light_sensor']: {
  entity_id: "sensor.sm_g980f_light_sensor",
get entity() { return {state: shadowState["sensor.sm_g980f_light_sensor"].state, attributes: shadowState["sensor.sm_g980f_light_sensor"].attributes} as SensorProperties}
},

['sm_g980f_wifi_connection']: {
  entity_id: "sensor.sm_g980f_wifi_connection",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_connection"].state, attributes: shadowState["sensor.sm_g980f_wifi_connection"].attributes} as SensorProperties}
},

['sm_g980f_wifi_bssid']: {
  entity_id: "sensor.sm_g980f_wifi_bssid",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_bssid"].state, attributes: shadowState["sensor.sm_g980f_wifi_bssid"].attributes} as SensorProperties}
},

['sm_g980f_wifi_ip_address']: {
  entity_id: "sensor.sm_g980f_wifi_ip_address",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_ip_address"].state, attributes: shadowState["sensor.sm_g980f_wifi_ip_address"].attributes} as SensorProperties}
},

['sm_g980f_wifi_link_speed']: {
  entity_id: "sensor.sm_g980f_wifi_link_speed",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_link_speed"].state, attributes: shadowState["sensor.sm_g980f_wifi_link_speed"].attributes} as SensorProperties}
},

['sm_g980f_wifi_frequency']: {
  entity_id: "sensor.sm_g980f_wifi_frequency",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_frequency"].state, attributes: shadowState["sensor.sm_g980f_wifi_frequency"].attributes} as SensorProperties}
},

['sm_g980f_wifi_signal_strength']: {
  entity_id: "sensor.sm_g980f_wifi_signal_strength",
get entity() { return {state: shadowState["sensor.sm_g980f_wifi_signal_strength"].state, attributes: shadowState["sensor.sm_g980f_wifi_signal_strength"].attributes} as SensorProperties}
},

['sm_g980f_public_ip_address']: {
  entity_id: "sensor.sm_g980f_public_ip_address",
get entity() { return {state: shadowState["sensor.sm_g980f_public_ip_address"].state, attributes: shadowState["sensor.sm_g980f_public_ip_address"].attributes} as SensorProperties}
},

['sm_g980f_network_type']: {
  entity_id: "sensor.sm_g980f_network_type",
get entity() { return {state: shadowState["sensor.sm_g980f_network_type"].state, attributes: shadowState["sensor.sm_g980f_network_type"].attributes} as SensorProperties}
},

['sm_g980f_next_alarm']: {
  entity_id: "sensor.sm_g980f_next_alarm",
get entity() { return {state: shadowState["sensor.sm_g980f_next_alarm"].state, attributes: shadowState["sensor.sm_g980f_next_alarm"].attributes} as SensorProperties}
},

['sm_g980f_last_notification']: {
  entity_id: "sensor.sm_g980f_last_notification",
get entity() { return {state: shadowState["sensor.sm_g980f_last_notification"].state, attributes: shadowState["sensor.sm_g980f_last_notification"].attributes} as SensorProperties}
},

['sm_g980f_last_removed_notification']: {
  entity_id: "sensor.sm_g980f_last_removed_notification",
get entity() { return {state: shadowState["sensor.sm_g980f_last_removed_notification"].state, attributes: shadowState["sensor.sm_g980f_last_removed_notification"].attributes} as SensorProperties}
},

['sm_g980f_active_notification_count']: {
  entity_id: "sensor.sm_g980f_active_notification_count",
get entity() { return {state: shadowState["sensor.sm_g980f_active_notification_count"].state, attributes: shadowState["sensor.sm_g980f_active_notification_count"].attributes} as SensorProperties}
},

['sm_g980f_media_session']: {
  entity_id: "sensor.sm_g980f_media_session",
get entity() { return {state: shadowState["sensor.sm_g980f_media_session"].state, attributes: shadowState["sensor.sm_g980f_media_session"].attributes} as SensorProperties}
},

['sm_g980f_sim_1']: {
  entity_id: "sensor.sm_g980f_sim_1",
get entity() { return {state: shadowState["sensor.sm_g980f_sim_1"].state, attributes: shadowState["sensor.sm_g980f_sim_1"].attributes} as SensorProperties}
},

['sm_g980f_sim_2']: {
  entity_id: "sensor.sm_g980f_sim_2",
get entity() { return {state: shadowState["sensor.sm_g980f_sim_2"].state, attributes: shadowState["sensor.sm_g980f_sim_2"].attributes} as SensorProperties}
},

['sm_g980f_pressure_sensor']: {
  entity_id: "sensor.sm_g980f_pressure_sensor",
get entity() { return {state: shadowState["sensor.sm_g980f_pressure_sensor"].state, attributes: shadowState["sensor.sm_g980f_pressure_sensor"].attributes} as SensorProperties}
},

['sm_g980f_proximity_sensor']: {
  entity_id: "sensor.sm_g980f_proximity_sensor",
get entity() { return {state: shadowState["sensor.sm_g980f_proximity_sensor"].state, attributes: shadowState["sensor.sm_g980f_proximity_sensor"].attributes} as SensorProperties}
},

['sm_g980f_steps_sensor']: {
  entity_id: "sensor.sm_g980f_steps_sensor",
get entity() { return {state: shadowState["sensor.sm_g980f_steps_sensor"].state, attributes: shadowState["sensor.sm_g980f_steps_sensor"].attributes} as SensorProperties}
},

['sm_g980f_current_time_zone']: {
  entity_id: "sensor.sm_g980f_current_time_zone",
get entity() { return {state: shadowState["sensor.sm_g980f_current_time_zone"].state, attributes: shadowState["sensor.sm_g980f_current_time_zone"].attributes} as SensorProperties}
},

['sm_g980f_battery_power']: {
  entity_id: "sensor.sm_g980f_battery_power",
get entity() { return {state: shadowState["sensor.sm_g980f_battery_power"].state, attributes: shadowState["sensor.sm_g980f_battery_power"].attributes} as SensorProperties}
},

['sm_g980f_beacon_monitor']: {
  entity_id: "sensor.sm_g980f_beacon_monitor",
get entity() { return {state: shadowState["sensor.sm_g980f_beacon_monitor"].state, attributes: shadowState["sensor.sm_g980f_beacon_monitor"].attributes} as SensorProperties}
},

['sm_g980f_accent_color']: {
  entity_id: "sensor.sm_g980f_accent_color",
get entity() { return {state: shadowState["sensor.sm_g980f_accent_color"].state, attributes: shadowState["sensor.sm_g980f_accent_color"].attributes} as SensorProperties}
},

['s22_battery_level']: {
  entity_id: "sensor.s22_battery_level",
get entity() { return {state: shadowState["sensor.s22_battery_level"].state, attributes: shadowState["sensor.s22_battery_level"].attributes} as SensorProperties}
},

['s22_battery_state']: {
  entity_id: "sensor.s22_battery_state",
get entity() { return {state: shadowState["sensor.s22_battery_state"].state, attributes: shadowState["sensor.s22_battery_state"].attributes} as SensorProperties}
},

['s22_charger_type']: {
  entity_id: "sensor.s22_charger_type",
get entity() { return {state: shadowState["sensor.s22_charger_type"].state, attributes: shadowState["sensor.s22_charger_type"].attributes} as SensorProperties}
},

['s22_battery_health']: {
  entity_id: "sensor.s22_battery_health",
get entity() { return {state: shadowState["sensor.s22_battery_health"].state, attributes: shadowState["sensor.s22_battery_health"].attributes} as SensorProperties}
},

['s22_battery_temperature']: {
  entity_id: "sensor.s22_battery_temperature",
get entity() { return {state: shadowState["sensor.s22_battery_temperature"].state, attributes: shadowState["sensor.s22_battery_temperature"].attributes} as SensorProperties}
},

['s22_current_version']: {
  entity_id: "sensor.s22_current_version",
get entity() { return {state: shadowState["sensor.s22_current_version"].state, attributes: shadowState["sensor.s22_current_version"].attributes} as SensorProperties}
},

['s22_app_rx_gb']: {
  entity_id: "sensor.s22_app_rx_gb",
get entity() { return {state: shadowState["sensor.s22_app_rx_gb"].state, attributes: shadowState["sensor.s22_app_rx_gb"].attributes} as SensorProperties}
},

['s22_app_tx_gb']: {
  entity_id: "sensor.s22_app_tx_gb",
get entity() { return {state: shadowState["sensor.s22_app_tx_gb"].state, attributes: shadowState["sensor.s22_app_tx_gb"].attributes} as SensorProperties}
},

['s22_app_memory']: {
  entity_id: "sensor.s22_app_memory",
get entity() { return {state: shadowState["sensor.s22_app_memory"].state, attributes: shadowState["sensor.s22_app_memory"].attributes} as SensorProperties}
},

['s22_app_standby_bucket']: {
  entity_id: "sensor.s22_app_standby_bucket",
get entity() { return {state: shadowState["sensor.s22_app_standby_bucket"].state, attributes: shadowState["sensor.s22_app_standby_bucket"].attributes} as SensorProperties}
},

['s22_app_importance']: {
  entity_id: "sensor.s22_app_importance",
get entity() { return {state: shadowState["sensor.s22_app_importance"].state, attributes: shadowState["sensor.s22_app_importance"].attributes} as SensorProperties}
},

['s22_ringer_mode']: {
  entity_id: "sensor.s22_ringer_mode",
get entity() { return {state: shadowState["sensor.s22_ringer_mode"].state, attributes: shadowState["sensor.s22_ringer_mode"].attributes} as SensorProperties}
},

['s22_audio_mode']: {
  entity_id: "sensor.s22_audio_mode",
get entity() { return {state: shadowState["sensor.s22_audio_mode"].state, attributes: shadowState["sensor.s22_audio_mode"].attributes} as SensorProperties}
},

['s22_volume_level_alarm']: {
  entity_id: "sensor.s22_volume_level_alarm",
get entity() { return {state: shadowState["sensor.s22_volume_level_alarm"].state, attributes: shadowState["sensor.s22_volume_level_alarm"].attributes} as SensorProperties}
},

['s22_volume_level_call']: {
  entity_id: "sensor.s22_volume_level_call",
get entity() { return {state: shadowState["sensor.s22_volume_level_call"].state, attributes: shadowState["sensor.s22_volume_level_call"].attributes} as SensorProperties}
},

['s22_volume_level_music']: {
  entity_id: "sensor.s22_volume_level_music",
get entity() { return {state: shadowState["sensor.s22_volume_level_music"].state, attributes: shadowState["sensor.s22_volume_level_music"].attributes} as SensorProperties}
},

['s22_volume_level_ringer']: {
  entity_id: "sensor.s22_volume_level_ringer",
get entity() { return {state: shadowState["sensor.s22_volume_level_ringer"].state, attributes: shadowState["sensor.s22_volume_level_ringer"].attributes} as SensorProperties}
},

['s22_volume_level_notification']: {
  entity_id: "sensor.s22_volume_level_notification",
get entity() { return {state: shadowState["sensor.s22_volume_level_notification"].state, attributes: shadowState["sensor.s22_volume_level_notification"].attributes} as SensorProperties}
},

['s22_volume_level_system']: {
  entity_id: "sensor.s22_volume_level_system",
get entity() { return {state: shadowState["sensor.s22_volume_level_system"].state, attributes: shadowState["sensor.s22_volume_level_system"].attributes} as SensorProperties}
},

['s22_volume_level_dtmf']: {
  entity_id: "sensor.s22_volume_level_dtmf",
get entity() { return {state: shadowState["sensor.s22_volume_level_dtmf"].state, attributes: shadowState["sensor.s22_volume_level_dtmf"].attributes} as SensorProperties}
},

['s22_volume_level_accessibility']: {
  entity_id: "sensor.s22_volume_level_accessibility",
get entity() { return {state: shadowState["sensor.s22_volume_level_accessibility"].state, attributes: shadowState["sensor.s22_volume_level_accessibility"].attributes} as SensorProperties}
},

['s22_bluetooth_connection']: {
  entity_id: "sensor.s22_bluetooth_connection",
get entity() { return {state: shadowState["sensor.s22_bluetooth_connection"].state, attributes: shadowState["sensor.s22_bluetooth_connection"].attributes} as SensorProperties}
},

['s22_ble_transmitter']: {
  entity_id: "sensor.s22_ble_transmitter",
get entity() { return {state: shadowState["sensor.s22_ble_transmitter"].state, attributes: shadowState["sensor.s22_ble_transmitter"].attributes} as SensorProperties}
},

['s22_do_not_disturb_sensor']: {
  entity_id: "sensor.s22_do_not_disturb_sensor",
get entity() { return {state: shadowState["sensor.s22_do_not_disturb_sensor"].state, attributes: shadowState["sensor.s22_do_not_disturb_sensor"].attributes} as SensorProperties}
},

['s22_last_reboot']: {
  entity_id: "sensor.s22_last_reboot",
get entity() { return {state: shadowState["sensor.s22_last_reboot"].state, attributes: shadowState["sensor.s22_last_reboot"].attributes} as SensorProperties}
},

['s22_last_update_trigger']: {
  entity_id: "sensor.s22_last_update_trigger",
get entity() { return {state: shadowState["sensor.s22_last_update_trigger"].state, attributes: shadowState["sensor.s22_last_update_trigger"].attributes} as SensorProperties}
},

['s22_wifi_connection']: {
  entity_id: "sensor.s22_wifi_connection",
get entity() { return {state: shadowState["sensor.s22_wifi_connection"].state, attributes: shadowState["sensor.s22_wifi_connection"].attributes} as SensorProperties}
},

['s22_wifi_bssid']: {
  entity_id: "sensor.s22_wifi_bssid",
get entity() { return {state: shadowState["sensor.s22_wifi_bssid"].state, attributes: shadowState["sensor.s22_wifi_bssid"].attributes} as SensorProperties}
},

['s22_wifi_ip_address']: {
  entity_id: "sensor.s22_wifi_ip_address",
get entity() { return {state: shadowState["sensor.s22_wifi_ip_address"].state, attributes: shadowState["sensor.s22_wifi_ip_address"].attributes} as SensorProperties}
},

['s22_wifi_link_speed']: {
  entity_id: "sensor.s22_wifi_link_speed",
get entity() { return {state: shadowState["sensor.s22_wifi_link_speed"].state, attributes: shadowState["sensor.s22_wifi_link_speed"].attributes} as SensorProperties}
},

['s22_wifi_frequency']: {
  entity_id: "sensor.s22_wifi_frequency",
get entity() { return {state: shadowState["sensor.s22_wifi_frequency"].state, attributes: shadowState["sensor.s22_wifi_frequency"].attributes} as SensorProperties}
},

['s22_wifi_signal_strength']: {
  entity_id: "sensor.s22_wifi_signal_strength",
get entity() { return {state: shadowState["sensor.s22_wifi_signal_strength"].state, attributes: shadowState["sensor.s22_wifi_signal_strength"].attributes} as SensorProperties}
},

['s22_public_ip_address']: {
  entity_id: "sensor.s22_public_ip_address",
get entity() { return {state: shadowState["sensor.s22_public_ip_address"].state, attributes: shadowState["sensor.s22_public_ip_address"].attributes} as SensorProperties}
},

['s22_network_type']: {
  entity_id: "sensor.s22_network_type",
get entity() { return {state: shadowState["sensor.s22_network_type"].state, attributes: shadowState["sensor.s22_network_type"].attributes} as SensorProperties}
},

['s22_next_alarm']: {
  entity_id: "sensor.s22_next_alarm",
get entity() { return {state: shadowState["sensor.s22_next_alarm"].state, attributes: shadowState["sensor.s22_next_alarm"].attributes} as SensorProperties}
},

['s22_phone_state']: {
  entity_id: "sensor.s22_phone_state",
get entity() { return {state: shadowState["sensor.s22_phone_state"].state, attributes: shadowState["sensor.s22_phone_state"].attributes} as SensorProperties}
},

['s22_sim_1']: {
  entity_id: "sensor.s22_sim_1",
get entity() { return {state: shadowState["sensor.s22_sim_1"].state, attributes: shadowState["sensor.s22_sim_1"].attributes} as SensorProperties}
},

['s22_sim_2']: {
  entity_id: "sensor.s22_sim_2",
get entity() { return {state: shadowState["sensor.s22_sim_2"].state, attributes: shadowState["sensor.s22_sim_2"].attributes} as SensorProperties}
},

['s22_pressure_sensor']: {
  entity_id: "sensor.s22_pressure_sensor",
get entity() { return {state: shadowState["sensor.s22_pressure_sensor"].state, attributes: shadowState["sensor.s22_pressure_sensor"].attributes} as SensorProperties}
},

['s22_proximity_sensor']: {
  entity_id: "sensor.s22_proximity_sensor",
get entity() { return {state: shadowState["sensor.s22_proximity_sensor"].state, attributes: shadowState["sensor.s22_proximity_sensor"].attributes} as SensorProperties}
},

['s22_steps_sensor']: {
  entity_id: "sensor.s22_steps_sensor",
get entity() { return {state: shadowState["sensor.s22_steps_sensor"].state, attributes: shadowState["sensor.s22_steps_sensor"].attributes} as SensorProperties}
},

['s22_internal_storage']: {
  entity_id: "sensor.s22_internal_storage",
get entity() { return {state: shadowState["sensor.s22_internal_storage"].state, attributes: shadowState["sensor.s22_internal_storage"].attributes} as SensorProperties}
},

['s22_external_storage']: {
  entity_id: "sensor.s22_external_storage",
get entity() { return {state: shadowState["sensor.s22_external_storage"].state, attributes: shadowState["sensor.s22_external_storage"].attributes} as SensorProperties}
},

['s22_current_time_zone']: {
  entity_id: "sensor.s22_current_time_zone",
get entity() { return {state: shadowState["sensor.s22_current_time_zone"].state, attributes: shadowState["sensor.s22_current_time_zone"].attributes} as SensorProperties}
},

['s22_total_rx_gb']: {
  entity_id: "sensor.s22_total_rx_gb",
get entity() { return {state: shadowState["sensor.s22_total_rx_gb"].state, attributes: shadowState["sensor.s22_total_rx_gb"].attributes} as SensorProperties}
},

['s22_total_tx_gb']: {
  entity_id: "sensor.s22_total_tx_gb",
get entity() { return {state: shadowState["sensor.s22_total_tx_gb"].state, attributes: shadowState["sensor.s22_total_tx_gb"].attributes} as SensorProperties}
},

['s22_mobile_rx_gb']: {
  entity_id: "sensor.s22_mobile_rx_gb",
get entity() { return {state: shadowState["sensor.s22_mobile_rx_gb"].state, attributes: shadowState["sensor.s22_mobile_rx_gb"].attributes} as SensorProperties}
},

['s22_mobile_tx_gb']: {
  entity_id: "sensor.s22_mobile_tx_gb",
get entity() { return {state: shadowState["sensor.s22_mobile_tx_gb"].state, attributes: shadowState["sensor.s22_mobile_tx_gb"].attributes} as SensorProperties}
},

['s22_battery_power']: {
  entity_id: "sensor.s22_battery_power",
get entity() { return {state: shadowState["sensor.s22_battery_power"].state, attributes: shadowState["sensor.s22_battery_power"].attributes} as SensorProperties}
},

['tims_iphone_storage']: {
  entity_id: "sensor.tims_iphone_storage",
get entity() { return {state: shadowState["sensor.tims_iphone_storage"].state, attributes: shadowState["sensor.tims_iphone_storage"].attributes} as SensorProperties}
},

['tims_iphone_battery_level']: {
  entity_id: "sensor.tims_iphone_battery_level",
get entity() { return {state: shadowState["sensor.tims_iphone_battery_level"].state, attributes: shadowState["sensor.tims_iphone_battery_level"].attributes} as SensorProperties}
},

['tims_iphone_battery_state']: {
  entity_id: "sensor.tims_iphone_battery_state",
get entity() { return {state: shadowState["sensor.tims_iphone_battery_state"].state, attributes: shadowState["sensor.tims_iphone_battery_state"].attributes} as SensorProperties}
},

['tims_iphone_sim_2']: {
  entity_id: "sensor.tims_iphone_sim_2",
get entity() { return {state: shadowState["sensor.tims_iphone_sim_2"].state, attributes: shadowState["sensor.tims_iphone_sim_2"].attributes} as SensorProperties}
},

['tims_iphone_last_update_trigger']: {
  entity_id: "sensor.tims_iphone_last_update_trigger",
get entity() { return {state: shadowState["sensor.tims_iphone_last_update_trigger"].state, attributes: shadowState["sensor.tims_iphone_last_update_trigger"].attributes} as SensorProperties}
},

['tims_iphone_ssid']: {
  entity_id: "sensor.tims_iphone_ssid",
get entity() { return {state: shadowState["sensor.tims_iphone_ssid"].state, attributes: shadowState["sensor.tims_iphone_ssid"].attributes} as SensorProperties}
},

['tims_iphone_connection_type']: {
  entity_id: "sensor.tims_iphone_connection_type",
get entity() { return {state: shadowState["sensor.tims_iphone_connection_type"].state, attributes: shadowState["sensor.tims_iphone_connection_type"].attributes} as SensorProperties}
},

['tims_iphone_sim_1']: {
  entity_id: "sensor.tims_iphone_sim_1",
get entity() { return {state: shadowState["sensor.tims_iphone_sim_1"].state, attributes: shadowState["sensor.tims_iphone_sim_1"].attributes} as SensorProperties}
},

['tims_iphone_geocoded_location']: {
  entity_id: "sensor.tims_iphone_geocoded_location",
get entity() { return {state: shadowState["sensor.tims_iphone_geocoded_location"].state, attributes: shadowState["sensor.tims_iphone_geocoded_location"].attributes} as SensorProperties}
},

['tims_iphone_bssid']: {
  entity_id: "sensor.tims_iphone_bssid",
get entity() { return {state: shadowState["sensor.tims_iphone_bssid"].state, attributes: shadowState["sensor.tims_iphone_bssid"].attributes} as SensorProperties}
},

['tims_iphone_activity']: {
  entity_id: "sensor.tims_iphone_activity",
get entity() { return {state: shadowState["sensor.tims_iphone_activity"].state, attributes: shadowState["sensor.tims_iphone_activity"].attributes} as SensorProperties}
},

['tims_iphone_distance']: {
  entity_id: "sensor.tims_iphone_distance",
get entity() { return {state: shadowState["sensor.tims_iphone_distance"].state, attributes: shadowState["sensor.tims_iphone_distance"].attributes} as SensorProperties}
},

['tims_iphone_floors_ascended']: {
  entity_id: "sensor.tims_iphone_floors_ascended",
get entity() { return {state: shadowState["sensor.tims_iphone_floors_ascended"].state, attributes: shadowState["sensor.tims_iphone_floors_ascended"].attributes} as SensorProperties}
},

['tims_iphone_average_active_pace']: {
  entity_id: "sensor.tims_iphone_average_active_pace",
get entity() { return {state: shadowState["sensor.tims_iphone_average_active_pace"].state, attributes: shadowState["sensor.tims_iphone_average_active_pace"].attributes} as SensorProperties}
},

['tims_iphone_floors_descended']: {
  entity_id: "sensor.tims_iphone_floors_descended",
get entity() { return {state: shadowState["sensor.tims_iphone_floors_descended"].state, attributes: shadowState["sensor.tims_iphone_floors_descended"].attributes} as SensorProperties}
},

['tims_iphone_steps']: {
  entity_id: "sensor.tims_iphone_steps",
get entity() { return {state: shadowState["sensor.tims_iphone_steps"].state, attributes: shadowState["sensor.tims_iphone_steps"].attributes} as SensorProperties}
},

['tims_macbook_pro_internal_battery_level']: {
  entity_id: "sensor.tims_macbook_pro_internal_battery_level",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_internal_battery_level"].state, attributes: shadowState["sensor.tims_macbook_pro_internal_battery_level"].attributes} as SensorProperties}
},

['tims_macbook_pro_internal_battery_state']: {
  entity_id: "sensor.tims_macbook_pro_internal_battery_state",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_internal_battery_state"].state, attributes: shadowState["sensor.tims_macbook_pro_internal_battery_state"].attributes} as SensorProperties}
},

['tims_macbook_pro_storage']: {
  entity_id: "sensor.tims_macbook_pro_storage",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_storage"].state, attributes: shadowState["sensor.tims_macbook_pro_storage"].attributes} as SensorProperties}
},

['tims_macbook_pro_ssid']: {
  entity_id: "sensor.tims_macbook_pro_ssid",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_ssid"].state, attributes: shadowState["sensor.tims_macbook_pro_ssid"].attributes} as SensorProperties}
},

['tims_macbook_pro_bssid']: {
  entity_id: "sensor.tims_macbook_pro_bssid",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_bssid"].state, attributes: shadowState["sensor.tims_macbook_pro_bssid"].attributes} as SensorProperties}
},

['tims_macbook_pro_connection_type']: {
  entity_id: "sensor.tims_macbook_pro_connection_type",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_connection_type"].state, attributes: shadowState["sensor.tims_macbook_pro_connection_type"].attributes} as SensorProperties}
},

['tims_macbook_pro_active_camera']: {
  entity_id: "sensor.tims_macbook_pro_active_camera",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_active_camera"].state, attributes: shadowState["sensor.tims_macbook_pro_active_camera"].attributes} as SensorProperties}
},

['tims_macbook_pro_active_audio_input']: {
  entity_id: "sensor.tims_macbook_pro_active_audio_input",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_active_audio_input"].state, attributes: shadowState["sensor.tims_macbook_pro_active_audio_input"].attributes} as SensorProperties}
},

['tims_macbook_pro_active_audio_output']: {
  entity_id: "sensor.tims_macbook_pro_active_audio_output",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_active_audio_output"].state, attributes: shadowState["sensor.tims_macbook_pro_active_audio_output"].attributes} as SensorProperties}
},

['tims_macbook_pro_displays']: {
  entity_id: "sensor.tims_macbook_pro_displays",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_displays"].state, attributes: shadowState["sensor.tims_macbook_pro_displays"].attributes} as SensorProperties}
},

['tims_macbook_pro_primary_display_name']: {
  entity_id: "sensor.tims_macbook_pro_primary_display_name",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_primary_display_name"].state, attributes: shadowState["sensor.tims_macbook_pro_primary_display_name"].attributes} as SensorProperties}
},

['tims_macbook_pro_primary_display_id']: {
  entity_id: "sensor.tims_macbook_pro_primary_display_id",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_primary_display_id"].state, attributes: shadowState["sensor.tims_macbook_pro_primary_display_id"].attributes} as SensorProperties}
},

['tims_macbook_pro_frontmost_app']: {
  entity_id: "sensor.tims_macbook_pro_frontmost_app",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_frontmost_app"].state, attributes: shadowState["sensor.tims_macbook_pro_frontmost_app"].attributes} as SensorProperties}
},

['tims_macbook_pro_last_update_trigger']: {
  entity_id: "sensor.tims_macbook_pro_last_update_trigger",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_last_update_trigger"].state, attributes: shadowState["sensor.tims_macbook_pro_last_update_trigger"].attributes} as SensorProperties}
},

['office_desk_button_click']: {
  entity_id: "sensor.office_desk_button_click",
get entity() { return {state: shadowState["sensor.office_desk_button_click"].state, attributes: shadowState["sensor.office_desk_button_click"].attributes} as SensorProperties}
},

['office_desk_button_power_outage_count']: {
  entity_id: "sensor.office_desk_button_power_outage_count",
get entity() { return {state: shadowState["sensor.office_desk_button_power_outage_count"].state, attributes: shadowState["sensor.office_desk_button_power_outage_count"].attributes} as SensorProperties}
},

['office_desk_button_device_temperature']: {
  entity_id: "sensor.office_desk_button_device_temperature",
get entity() { return {state: shadowState["sensor.office_desk_button_device_temperature"].state, attributes: shadowState["sensor.office_desk_button_device_temperature"].attributes} as SensorProperties}
},

['office_desk_button_action']: {
  entity_id: "sensor.office_desk_button_action",
get entity() { return {state: shadowState["sensor.office_desk_button_action"].state, attributes: shadowState["sensor.office_desk_button_action"].attributes} as SensorProperties}
},

['office_desk_button_battery']: {
  entity_id: "sensor.office_desk_button_battery",
get entity() { return {state: shadowState["sensor.office_desk_button_battery"].state, attributes: shadowState["sensor.office_desk_button_battery"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_battery']: {
  entity_id: "sensor.garage_electric_door_sensor_open_battery",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_battery"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_battery"].attributes} as SensorProperties}
},

['coffee_machine_button_power_outage_count']: {
  entity_id: "sensor.coffee_machine_button_power_outage_count",
get entity() { return {state: shadowState["sensor.coffee_machine_button_power_outage_count"].state, attributes: shadowState["sensor.coffee_machine_button_power_outage_count"].attributes} as SensorProperties}
},

['coffee_machine_button_device_temperature']: {
  entity_id: "sensor.coffee_machine_button_device_temperature",
get entity() { return {state: shadowState["sensor.coffee_machine_button_device_temperature"].state, attributes: shadowState["sensor.coffee_machine_button_device_temperature"].attributes} as SensorProperties}
},

['coffee_machine_button_action']: {
  entity_id: "sensor.coffee_machine_button_action",
get entity() { return {state: shadowState["sensor.coffee_machine_button_action"].state, attributes: shadowState["sensor.coffee_machine_button_action"].attributes} as SensorProperties}
},

['coffee_machine_button_battery']: {
  entity_id: "sensor.coffee_machine_button_battery",
get entity() { return {state: shadowState["sensor.coffee_machine_button_battery"].state, attributes: shadowState["sensor.coffee_machine_button_battery"].attributes} as SensorProperties}
},

['bedside_button_action']: {
  entity_id: "sensor.bedside_button_action",
get entity() { return {state: shadowState["sensor.bedside_button_action"].state, attributes: shadowState["sensor.bedside_button_action"].attributes} as SensorProperties}
},

['bedside_button_battery']: {
  entity_id: "sensor.bedside_button_battery",
get entity() { return {state: shadowState["sensor.bedside_button_battery"].state, attributes: shadowState["sensor.bedside_button_battery"].attributes} as SensorProperties}
},

['bedside_lamp_energy']: {
  entity_id: "sensor.bedside_lamp_energy",
get entity() { return {state: shadowState["sensor.bedside_lamp_energy"].state, attributes: shadowState["sensor.bedside_lamp_energy"].attributes} as SensorProperties}
},

['bedside_lamp_power']: {
  entity_id: "sensor.bedside_lamp_power",
get entity() { return {state: shadowState["sensor.bedside_lamp_power"].state, attributes: shadowState["sensor.bedside_lamp_power"].attributes} as SensorProperties}
},

['fridge_door_sensor_power_outage_count']: {
  entity_id: "sensor.fridge_door_sensor_power_outage_count",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_power_outage_count"].state, attributes: shadowState["sensor.fridge_door_sensor_power_outage_count"].attributes} as SensorProperties}
},

['fridge_door_sensor_device_temperature']: {
  entity_id: "sensor.fridge_door_sensor_device_temperature",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_device_temperature"].state, attributes: shadowState["sensor.fridge_door_sensor_device_temperature"].attributes} as SensorProperties}
},

['fridge_door_sensor_battery']: {
  entity_id: "sensor.fridge_door_sensor_battery",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_battery"].state, attributes: shadowState["sensor.fridge_door_sensor_battery"].attributes} as SensorProperties}
},

['stairs_motion_sensor_battery']: {
  entity_id: "sensor.stairs_motion_sensor_battery",
get entity() { return {state: shadowState["sensor.stairs_motion_sensor_battery"].state, attributes: shadowState["sensor.stairs_motion_sensor_battery"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_energy']: {
  entity_id: "sensor.bedroom_secondary_lamp_energy",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_energy"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_energy"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_power']: {
  entity_id: "sensor.bedroom_secondary_lamp_power",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_power"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_power"].attributes} as SensorProperties}
},

['living_room_remote_action_duration']: {
  entity_id: "sensor.living_room_remote_action_duration",
get entity() { return {state: shadowState["sensor.living_room_remote_action_duration"].state, attributes: shadowState["sensor.living_room_remote_action_duration"].attributes} as SensorProperties}
},

['living_room_remote_action']: {
  entity_id: "sensor.living_room_remote_action",
get entity() { return {state: shadowState["sensor.living_room_remote_action"].state, attributes: shadowState["sensor.living_room_remote_action"].attributes} as SensorProperties}
},

['living_room_remote_battery']: {
  entity_id: "sensor.living_room_remote_battery",
get entity() { return {state: shadowState["sensor.living_room_remote_battery"].state, attributes: shadowState["sensor.living_room_remote_battery"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_humidity']: {
  entity_id: "sensor.0xa4c1385c18410b5b_humidity",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_humidity"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_humidity"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_temperature']: {
  entity_id: "sensor.0xa4c1385c18410b5b_temperature",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_temperature"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_temperature"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_battery']: {
  entity_id: "sensor.0xa4c1385c18410b5b_battery",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_battery"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_battery"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_energy']: {
  entity_id: "sensor.christmas_tree_led_outlet_energy",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_energy"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_energy"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_power']: {
  entity_id: "sensor.christmas_tree_led_outlet_power",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_power"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_power"].attributes} as SensorProperties}
},

['washing_machine_plug_energy']: {
  entity_id: "sensor.washing_machine_plug_energy",
get entity() { return {state: shadowState["sensor.washing_machine_plug_energy"].state, attributes: shadowState["sensor.washing_machine_plug_energy"].attributes} as SensorProperties}
},

['washing_machine_plug_power']: {
  entity_id: "sensor.washing_machine_plug_power",
get entity() { return {state: shadowState["sensor.washing_machine_plug_power"].state, attributes: shadowState["sensor.washing_machine_plug_power"].attributes} as SensorProperties}
},

['bedroom_button_gaby_action']: {
  entity_id: "sensor.bedroom_button_gaby_action",
get entity() { return {state: shadowState["sensor.bedroom_button_gaby_action"].state, attributes: shadowState["sensor.bedroom_button_gaby_action"].attributes} as SensorProperties}
},

['bedroom_button_gaby_battery']: {
  entity_id: "sensor.bedroom_button_gaby_battery",
get entity() { return {state: shadowState["sensor.bedroom_button_gaby_battery"].state, attributes: shadowState["sensor.bedroom_button_gaby_battery"].attributes} as SensorProperties}
},

['bedroom_button_tim_action']: {
  entity_id: "sensor.bedroom_button_tim_action",
get entity() { return {state: shadowState["sensor.bedroom_button_tim_action"].state, attributes: shadowState["sensor.bedroom_button_tim_action"].attributes} as SensorProperties}
},

['bedroom_button_tim_battery']: {
  entity_id: "sensor.bedroom_button_tim_battery",
get entity() { return {state: shadowState["sensor.bedroom_button_tim_battery"].state, attributes: shadowState["sensor.bedroom_button_tim_battery"].attributes} as SensorProperties}
},

['bathroom_door_battery']: {
  entity_id: "sensor.bathroom_door_battery",
get entity() { return {state: shadowState["sensor.bathroom_door_battery"].state, attributes: shadowState["sensor.bathroom_door_battery"].attributes} as SensorProperties}
},

['tripod_button_power_outage_count']: {
  entity_id: "sensor.tripod_button_power_outage_count",
get entity() { return {state: shadowState["sensor.tripod_button_power_outage_count"].state, attributes: shadowState["sensor.tripod_button_power_outage_count"].attributes} as SensorProperties}
},

['tripod_button_action']: {
  entity_id: "sensor.tripod_button_action",
get entity() { return {state: shadowState["sensor.tripod_button_action"].state, attributes: shadowState["sensor.tripod_button_action"].attributes} as SensorProperties}
},

['tripod_button_battery']: {
  entity_id: "sensor.tripod_button_battery",
get entity() { return {state: shadowState["sensor.tripod_button_battery"].state, attributes: shadowState["sensor.tripod_button_battery"].attributes} as SensorProperties}
},

['siren_power_type']: {
  entity_id: "sensor.siren_power_type",
get entity() { return {state: shadowState["sensor.siren_power_type"].state, attributes: shadowState["sensor.siren_power_type"].attributes} as SensorProperties}
},

['siren_humidity']: {
  entity_id: "sensor.siren_humidity",
get entity() { return {state: shadowState["sensor.siren_humidity"].state, attributes: shadowState["sensor.siren_humidity"].attributes} as SensorProperties}
},

['siren_temperature']: {
  entity_id: "sensor.siren_temperature",
get entity() { return {state: shadowState["sensor.siren_temperature"].state, attributes: shadowState["sensor.siren_temperature"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_power_outage_count']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_power_outage_count"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_power_outage_count"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_device_temperature']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_device_temperature",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_device_temperature"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_device_temperature"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_battery']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_battery",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_battery"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_battery"].attributes} as SensorProperties}
},

['bedroom_window_bed_power_outage_count']: {
  entity_id: "sensor.bedroom_window_bed_power_outage_count",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_power_outage_count"].state, attributes: shadowState["sensor.bedroom_window_bed_power_outage_count"].attributes} as SensorProperties}
},

['bedroom_window_bed_device_temperature']: {
  entity_id: "sensor.bedroom_window_bed_device_temperature",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_device_temperature"].state, attributes: shadowState["sensor.bedroom_window_bed_device_temperature"].attributes} as SensorProperties}
},

['bedroom_window_bed_battery']: {
  entity_id: "sensor.bedroom_window_bed_battery",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_battery"].state, attributes: shadowState["sensor.bedroom_window_bed_battery"].attributes} as SensorProperties}
},

['desk_outlet_energy']: {
  entity_id: "sensor.desk_outlet_energy",
get entity() { return {state: shadowState["sensor.desk_outlet_energy"].state, attributes: shadowState["sensor.desk_outlet_energy"].attributes} as SensorProperties}
},

['desk_outlet_power']: {
  entity_id: "sensor.desk_outlet_power",
get entity() { return {state: shadowState["sensor.desk_outlet_power"].state, attributes: shadowState["sensor.desk_outlet_power"].attributes} as SensorProperties}
},

['living_room_table_button_power_outage_count']: {
  entity_id: "sensor.living_room_table_button_power_outage_count",
get entity() { return {state: shadowState["sensor.living_room_table_button_power_outage_count"].state, attributes: shadowState["sensor.living_room_table_button_power_outage_count"].attributes} as SensorProperties}
},

['living_room_table_button_action']: {
  entity_id: "sensor.living_room_table_button_action",
get entity() { return {state: shadowState["sensor.living_room_table_button_action"].state, attributes: shadowState["sensor.living_room_table_button_action"].attributes} as SensorProperties}
},

['living_room_table_button_battery']: {
  entity_id: "sensor.living_room_table_button_battery",
get entity() { return {state: shadowState["sensor.living_room_table_button_battery"].state, attributes: shadowState["sensor.living_room_table_button_battery"].attributes} as SensorProperties}
},

['living_room_table_sensor_humidity']: {
  entity_id: "sensor.living_room_table_sensor_humidity",
get entity() { return {state: shadowState["sensor.living_room_table_sensor_humidity"].state, attributes: shadowState["sensor.living_room_table_sensor_humidity"].attributes} as SensorProperties}
},

['living_room_table_sensor_temperature']: {
  entity_id: "sensor.living_room_table_sensor_temperature",
get entity() { return {state: shadowState["sensor.living_room_table_sensor_temperature"].state, attributes: shadowState["sensor.living_room_table_sensor_temperature"].attributes} as SensorProperties}
},

['living_room_table_sensor_battery']: {
  entity_id: "sensor.living_room_table_sensor_battery",
get entity() { return {state: shadowState["sensor.living_room_table_sensor_battery"].state, attributes: shadowState["sensor.living_room_table_sensor_battery"].attributes} as SensorProperties}
},

['entrance_door_power_outage_count']: {
  entity_id: "sensor.entrance_door_power_outage_count",
get entity() { return {state: shadowState["sensor.entrance_door_power_outage_count"].state, attributes: shadowState["sensor.entrance_door_power_outage_count"].attributes} as SensorProperties}
},

['entrance_door_device_temperature']: {
  entity_id: "sensor.entrance_door_device_temperature",
get entity() { return {state: shadowState["sensor.entrance_door_device_temperature"].state, attributes: shadowState["sensor.entrance_door_device_temperature"].attributes} as SensorProperties}
},

['entrance_door_battery']: {
  entity_id: "sensor.entrance_door_battery",
get entity() { return {state: shadowState["sensor.entrance_door_battery"].state, attributes: shadowState["sensor.entrance_door_battery"].attributes} as SensorProperties}
},

['toilet_door_battery']: {
  entity_id: "sensor.toilet_door_battery",
get entity() { return {state: shadowState["sensor.toilet_door_battery"].state, attributes: shadowState["sensor.toilet_door_battery"].attributes} as SensorProperties}
},

['garden_door_power_outage_count']: {
  entity_id: "sensor.garden_door_power_outage_count",
get entity() { return {state: shadowState["sensor.garden_door_power_outage_count"].state, attributes: shadowState["sensor.garden_door_power_outage_count"].attributes} as SensorProperties}
},

['garden_door_device_temperature']: {
  entity_id: "sensor.garden_door_device_temperature",
get entity() { return {state: shadowState["sensor.garden_door_device_temperature"].state, attributes: shadowState["sensor.garden_door_device_temperature"].attributes} as SensorProperties}
},

['garden_door_battery']: {
  entity_id: "sensor.garden_door_battery",
get entity() { return {state: shadowState["sensor.garden_door_battery"].state, attributes: shadowState["sensor.garden_door_battery"].attributes} as SensorProperties}
},

['garage_door_power_outage_count']: {
  entity_id: "sensor.garage_door_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_door_power_outage_count"].state, attributes: shadowState["sensor.garage_door_power_outage_count"].attributes} as SensorProperties}
},

['garage_door_device_temperature']: {
  entity_id: "sensor.garage_door_device_temperature",
get entity() { return {state: shadowState["sensor.garage_door_device_temperature"].state, attributes: shadowState["sensor.garage_door_device_temperature"].attributes} as SensorProperties}
},

['garage_door_battery']: {
  entity_id: "sensor.garage_door_battery",
get entity() { return {state: shadowState["sensor.garage_door_battery"].state, attributes: shadowState["sensor.garage_door_battery"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_energy']: {
  entity_id: "sensor.bedroom_humidifier_switch_energy",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_energy"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_energy"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_power']: {
  entity_id: "sensor.bedroom_humidifier_switch_power",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_power"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_power"].attributes} as SensorProperties}
},

['garage_remote_action_duration']: {
  entity_id: "sensor.garage_remote_action_duration",
get entity() { return {state: shadowState["sensor.garage_remote_action_duration"].state, attributes: shadowState["sensor.garage_remote_action_duration"].attributes} as SensorProperties}
},

['garage_remote_action']: {
  entity_id: "sensor.garage_remote_action",
get entity() { return {state: shadowState["sensor.garage_remote_action"].state, attributes: shadowState["sensor.garage_remote_action"].attributes} as SensorProperties}
},

['garage_remote_battery']: {
  entity_id: "sensor.garage_remote_battery",
get entity() { return {state: shadowState["sensor.garage_remote_battery"].state, attributes: shadowState["sensor.garage_remote_battery"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_power_outage_count']: {
  entity_id: "sensor.garage_electric_door_sensor_open_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_power_outage_count"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_power_outage_count"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_device_temperature']: {
  entity_id: "sensor.garage_electric_door_sensor_open_device_temperature",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_device_temperature"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_device_temperature"].attributes} as SensorProperties}
},

['nibe_133481_40067']: {
  entity_id: "sensor.nibe_133481_40067",
get entity() { return {state: shadowState["sensor.nibe_133481_40067"].state, attributes: shadowState["sensor.nibe_133481_40067"].attributes} as SensorProperties}
},

['nibe_133481_40014']: {
  entity_id: "sensor.nibe_133481_40014",
get entity() { return {state: shadowState["sensor.nibe_133481_40014"].state, attributes: shadowState["sensor.nibe_133481_40014"].attributes} as SensorProperties}
},

['nibe_133481_40013']: {
  entity_id: "sensor.nibe_133481_40013",
get entity() { return {state: shadowState["sensor.nibe_133481_40013"].state, attributes: shadowState["sensor.nibe_133481_40013"].attributes} as SensorProperties}
},

['nibe_133481_40004']: {
  entity_id: "sensor.nibe_133481_40004",
get entity() { return {state: shadowState["sensor.nibe_133481_40004"].state, attributes: shadowState["sensor.nibe_133481_40004"].attributes} as SensorProperties}
},

['nibe_133481_40083']: {
  entity_id: "sensor.nibe_133481_40083",
get entity() { return {state: shadowState["sensor.nibe_133481_40083"].state, attributes: shadowState["sensor.nibe_133481_40083"].attributes} as SensorProperties}
},

['nibe_133481_40081']: {
  entity_id: "sensor.nibe_133481_40081",
get entity() { return {state: shadowState["sensor.nibe_133481_40081"].state, attributes: shadowState["sensor.nibe_133481_40081"].attributes} as SensorProperties}
},

['nibe_133481_40079']: {
  entity_id: "sensor.nibe_133481_40079",
get entity() { return {state: shadowState["sensor.nibe_133481_40079"].state, attributes: shadowState["sensor.nibe_133481_40079"].attributes} as SensorProperties}
},

['nibe_133481_43005']: {
  entity_id: "sensor.nibe_133481_43005",
get entity() { return {state: shadowState["sensor.nibe_133481_43005"].state, attributes: shadowState["sensor.nibe_133481_43005"].attributes} as SensorProperties}
},

['nibe_133481_43161']: {
  entity_id: "sensor.nibe_133481_43161",
get entity() { return {state: shadowState["sensor.nibe_133481_43161"].state, attributes: shadowState["sensor.nibe_133481_43161"].attributes} as SensorProperties}
},

['nibe_133481_47276']: {
  entity_id: "sensor.nibe_133481_47276",
get entity() { return {state: shadowState["sensor.nibe_133481_47276"].state, attributes: shadowState["sensor.nibe_133481_47276"].attributes} as SensorProperties}
},

['nibe_133481_43009']: {
  entity_id: "sensor.nibe_133481_43009",
get entity() { return {state: shadowState["sensor.nibe_133481_43009"].state, attributes: shadowState["sensor.nibe_133481_43009"].attributes} as SensorProperties}
},

['nibe_133481_40071']: {
  entity_id: "sensor.nibe_133481_40071",
get entity() { return {state: shadowState["sensor.nibe_133481_40071"].state, attributes: shadowState["sensor.nibe_133481_40071"].attributes} as SensorProperties}
},

['nibe_133481_40152']: {
  entity_id: "sensor.nibe_133481_40152",
get entity() { return {state: shadowState["sensor.nibe_133481_40152"].state, attributes: shadowState["sensor.nibe_133481_40152"].attributes} as SensorProperties}
},

['nibe_133481_40033']: {
  entity_id: "sensor.nibe_133481_40033",
get entity() { return {state: shadowState["sensor.nibe_133481_40033"].state, attributes: shadowState["sensor.nibe_133481_40033"].attributes} as SensorProperties}
},

['nibe_133481_44256']: {
  entity_id: "sensor.nibe_133481_44256",
get entity() { return {state: shadowState["sensor.nibe_133481_44256"].state, attributes: shadowState["sensor.nibe_133481_44256"].attributes} as SensorProperties}
},

['nibe_133481_44270']: {
  entity_id: "sensor.nibe_133481_44270",
get entity() { return {state: shadowState["sensor.nibe_133481_44270"].state, attributes: shadowState["sensor.nibe_133481_44270"].attributes} as SensorProperties}
},

['nibe_133481_40045']: {
  entity_id: "sensor.nibe_133481_40045",
get entity() { return {state: shadowState["sensor.nibe_133481_40045"].state, attributes: shadowState["sensor.nibe_133481_40045"].attributes} as SensorProperties}
},

['nibe_133481_44266']: {
  entity_id: "sensor.nibe_133481_44266",
get entity() { return {state: shadowState["sensor.nibe_133481_44266"].state, attributes: shadowState["sensor.nibe_133481_44266"].attributes} as SensorProperties}
},

['nibe_133481_10033']: {
  entity_id: "sensor.nibe_133481_10033",
get entity() { return {state: shadowState["sensor.nibe_133481_10033"].state, attributes: shadowState["sensor.nibe_133481_10033"].attributes} as SensorProperties}
},

['nibe_133481_47613']: {
  entity_id: "sensor.nibe_133481_47613",
get entity() { return {state: shadowState["sensor.nibe_133481_47613"].state, attributes: shadowState["sensor.nibe_133481_47613"].attributes} as SensorProperties}
},

['nibe_133481_43091']: {
  entity_id: "sensor.nibe_133481_43091",
get entity() { return {state: shadowState["sensor.nibe_133481_43091"].state, attributes: shadowState["sensor.nibe_133481_43091"].attributes} as SensorProperties}
},

['nibe_133481_47214']: {
  entity_id: "sensor.nibe_133481_47214",
get entity() { return {state: shadowState["sensor.nibe_133481_47214"].state, attributes: shadowState["sensor.nibe_133481_47214"].attributes} as SensorProperties}
},

['nibe_133481_40121']: {
  entity_id: "sensor.nibe_133481_40121",
get entity() { return {state: shadowState["sensor.nibe_133481_40121"].state, attributes: shadowState["sensor.nibe_133481_40121"].attributes} as SensorProperties}
},

['nibe_133481_44899']: {
  entity_id: "sensor.nibe_133481_44899",
get entity() { return {state: shadowState["sensor.nibe_133481_44899"].state, attributes: shadowState["sensor.nibe_133481_44899"].attributes} as SensorProperties}
},

['nibe_133481_44896']: {
  entity_id: "sensor.nibe_133481_44896",
get entity() { return {state: shadowState["sensor.nibe_133481_44896"].state, attributes: shadowState["sensor.nibe_133481_44896"].attributes} as SensorProperties}
},

['nibe_133481_44897']: {
  entity_id: "sensor.nibe_133481_44897",
get entity() { return {state: shadowState["sensor.nibe_133481_44897"].state, attributes: shadowState["sensor.nibe_133481_44897"].attributes} as SensorProperties}
},

['nibe_133481_44908']: {
  entity_id: "sensor.nibe_133481_44908",
get entity() { return {state: shadowState["sensor.nibe_133481_44908"].state, attributes: shadowState["sensor.nibe_133481_44908"].attributes} as SensorProperties}
},

['nibe_133481_10069']: {
  entity_id: "sensor.nibe_133481_10069",
get entity() { return {state: shadowState["sensor.nibe_133481_10069"].state, attributes: shadowState["sensor.nibe_133481_10069"].attributes} as SensorProperties}
},

['nibe_133481_47411']: {
  entity_id: "sensor.nibe_133481_47411",
get entity() { return {state: shadowState["sensor.nibe_133481_47411"].state, attributes: shadowState["sensor.nibe_133481_47411"].attributes} as SensorProperties}
},

['nibe_133481_47410']: {
  entity_id: "sensor.nibe_133481_47410",
get entity() { return {state: shadowState["sensor.nibe_133481_47410"].state, attributes: shadowState["sensor.nibe_133481_47410"].attributes} as SensorProperties}
},

['nibe_133481_47409']: {
  entity_id: "sensor.nibe_133481_47409",
get entity() { return {state: shadowState["sensor.nibe_133481_47409"].state, attributes: shadowState["sensor.nibe_133481_47409"].attributes} as SensorProperties}
},

['nibe_133481_47408']: {
  entity_id: "sensor.nibe_133481_47408",
get entity() { return {state: shadowState["sensor.nibe_133481_47408"].state, attributes: shadowState["sensor.nibe_133481_47408"].attributes} as SensorProperties}
},

['nibe_133481_47407']: {
  entity_id: "sensor.nibe_133481_47407",
get entity() { return {state: shadowState["sensor.nibe_133481_47407"].state, attributes: shadowState["sensor.nibe_133481_47407"].attributes} as SensorProperties}
},

['nibe_133481_48366']: {
  entity_id: "sensor.nibe_133481_48366",
get entity() { return {state: shadowState["sensor.nibe_133481_48366"].state, attributes: shadowState["sensor.nibe_133481_48366"].attributes} as SensorProperties}
},

['nibe_133481_47412']: {
  entity_id: "sensor.nibe_133481_47412",
get entity() { return {state: shadowState["sensor.nibe_133481_47412"].state, attributes: shadowState["sensor.nibe_133481_47412"].attributes} as SensorProperties}
},

['nibe_133481_48745']: {
  entity_id: "sensor.nibe_133481_48745",
get entity() { return {state: shadowState["sensor.nibe_133481_48745"].state, attributes: shadowState["sensor.nibe_133481_48745"].attributes} as SensorProperties}
},

['nibe_133481_0']: {
  entity_id: "sensor.nibe_133481_0",
get entity() { return {state: shadowState["sensor.nibe_133481_0"].state, attributes: shadowState["sensor.nibe_133481_0"].attributes} as SensorProperties}
},

['nibe_133481_44703']: {
  entity_id: "sensor.nibe_133481_44703",
get entity() { return {state: shadowState["sensor.nibe_133481_44703"].state, attributes: shadowState["sensor.nibe_133481_44703"].attributes} as SensorProperties}
},

['nibe_133481_44396']: {
  entity_id: "sensor.nibe_133481_44396",
get entity() { return {state: shadowState["sensor.nibe_133481_44396"].state, attributes: shadowState["sensor.nibe_133481_44396"].attributes} as SensorProperties}
},

['nibe_133481_44362']: {
  entity_id: "sensor.nibe_133481_44362",
get entity() { return {state: shadowState["sensor.nibe_133481_44362"].state, attributes: shadowState["sensor.nibe_133481_44362"].attributes} as SensorProperties}
},

['nibe_133481_10014']: {
  entity_id: "sensor.nibe_133481_10014",
get entity() { return {state: shadowState["sensor.nibe_133481_10014"].state, attributes: shadowState["sensor.nibe_133481_10014"].attributes} as SensorProperties}
},

['nibe_133481_44069']: {
  entity_id: "sensor.nibe_133481_44069",
get entity() { return {state: shadowState["sensor.nibe_133481_44069"].state, attributes: shadowState["sensor.nibe_133481_44069"].attributes} as SensorProperties}
},

['nibe_133481_44702']: {
  entity_id: "sensor.nibe_133481_44702",
get entity() { return {state: shadowState["sensor.nibe_133481_44702"].state, attributes: shadowState["sensor.nibe_133481_44702"].attributes} as SensorProperties}
},

['nibe_133481_44058']: {
  entity_id: "sensor.nibe_133481_44058",
get entity() { return {state: shadowState["sensor.nibe_133481_44058"].state, attributes: shadowState["sensor.nibe_133481_44058"].attributes} as SensorProperties}
},

['nibe_133481_44363']: {
  entity_id: "sensor.nibe_133481_44363",
get entity() { return {state: shadowState["sensor.nibe_133481_44363"].state, attributes: shadowState["sensor.nibe_133481_44363"].attributes} as SensorProperties}
},

['nibe_133481_44059']: {
  entity_id: "sensor.nibe_133481_44059",
get entity() { return {state: shadowState["sensor.nibe_133481_44059"].state, attributes: shadowState["sensor.nibe_133481_44059"].attributes} as SensorProperties}
},

['nibe_133481_44060']: {
  entity_id: "sensor.nibe_133481_44060",
get entity() { return {state: shadowState["sensor.nibe_133481_44060"].state, attributes: shadowState["sensor.nibe_133481_44060"].attributes} as SensorProperties}
},

['nibe_133481_44055']: {
  entity_id: "sensor.nibe_133481_44055",
get entity() { return {state: shadowState["sensor.nibe_133481_44055"].state, attributes: shadowState["sensor.nibe_133481_44055"].attributes} as SensorProperties}
},

['nibe_133481_44699']: {
  entity_id: "sensor.nibe_133481_44699",
get entity() { return {state: shadowState["sensor.nibe_133481_44699"].state, attributes: shadowState["sensor.nibe_133481_44699"].attributes} as SensorProperties}
},

['nibe_133481_44071']: {
  entity_id: "sensor.nibe_133481_44071",
get entity() { return {state: shadowState["sensor.nibe_133481_44071"].state, attributes: shadowState["sensor.nibe_133481_44071"].attributes} as SensorProperties}
},

['nibe_133481_44073']: {
  entity_id: "sensor.nibe_133481_44073",
get entity() { return {state: shadowState["sensor.nibe_133481_44073"].state, attributes: shadowState["sensor.nibe_133481_44073"].attributes} as SensorProperties}
},

['nibe_133481_40737']: {
  entity_id: "sensor.nibe_133481_40737",
get entity() { return {state: shadowState["sensor.nibe_133481_40737"].state, attributes: shadowState["sensor.nibe_133481_40737"].attributes} as SensorProperties}
},

['nibe_133481_44701']: {
  entity_id: "sensor.nibe_133481_44701",
get entity() { return {state: shadowState["sensor.nibe_133481_44701"].state, attributes: shadowState["sensor.nibe_133481_44701"].attributes} as SensorProperties}
},

['nibe_133481_40782']: {
  entity_id: "sensor.nibe_133481_40782",
get entity() { return {state: shadowState["sensor.nibe_133481_40782"].state, attributes: shadowState["sensor.nibe_133481_40782"].attributes} as SensorProperties}
},

['nibe_133481_44014']: {
  entity_id: "sensor.nibe_133481_44014",
get entity() { return {state: shadowState["sensor.nibe_133481_44014"].state, attributes: shadowState["sensor.nibe_133481_44014"].attributes} as SensorProperties}
},

['last_activity']: {
  entity_id: "sensor.last_activity",
get entity() { return {state: shadowState["sensor.last_activity"].state, attributes: shadowState["sensor.last_activity"].attributes} as SensorProperties}
},

['connection_status']: {
  entity_id: "sensor.connection_status",
get entity() { return {state: shadowState["sensor.connection_status"].state, attributes: shadowState["sensor.connection_status"].attributes} as SensorProperties}
},

['has_alarmed']: {
  entity_id: "sensor.has_alarmed",
get entity() { return {state: shadowState["sensor.has_alarmed"].state, attributes: shadowState["sensor.has_alarmed"].attributes} as SensorProperties}
},

['software_version']: {
  entity_id: "sensor.software_version",
get entity() { return {state: shadowState["sensor.software_version"].state, attributes: shadowState["sensor.software_version"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_climatisation_state']: {
  entity_id: "sensor.wvgzzze2zmp011645_climatisation_state",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_climatisation_state"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_climatisation_state"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_remaining_climatisation_time']: {
  entity_id: "sensor.wvgzzze2zmp011645_remaining_climatisation_time",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_remaining_climatisation_time"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_remaining_climatisation_time"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_target_temperature_c']: {
  entity_id: "sensor.wvgzzze2zmp011645_target_temperature_c",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_target_temperature_c"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_target_temperature_c"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_target_temperature_f']: {
  entity_id: "sensor.wvgzzze2zmp011645_target_temperature_f",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_target_temperature_f"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_target_temperature_f"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_unit_in_car']: {
  entity_id: "sensor.wvgzzze2zmp011645_unit_in_car",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_unit_in_car"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_unit_in_car"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charging_state']: {
  entity_id: "sensor.wvgzzze2zmp011645_charging_state",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charging_state"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charging_state"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_remaining_charging_time']: {
  entity_id: "sensor.wvgzzze2zmp011645_remaining_charging_time",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_remaining_charging_time"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_remaining_charging_time"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charging_mode']: {
  entity_id: "sensor.wvgzzze2zmp011645_charging_mode",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charging_mode"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charging_mode"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charge_power']: {
  entity_id: "sensor.wvgzzze2zmp011645_charge_power",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charge_power"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charge_power"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charge_rate']: {
  entity_id: "sensor.wvgzzze2zmp011645_charge_rate",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charge_rate"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charge_rate"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charging_settings']: {
  entity_id: "sensor.wvgzzze2zmp011645_charging_settings",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charging_settings"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charging_settings"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_charge_type']: {
  entity_id: "sensor.wvgzzze2zmp011645_charge_type",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_charge_type"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_charge_type"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_max_charge_current_ac']: {
  entity_id: "sensor.wvgzzze2zmp011645_max_charge_current_ac",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_max_charge_current_ac"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_max_charge_current_ac"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_target_state_of_charge']: {
  entity_id: "sensor.wvgzzze2zmp011645_target_state_of_charge",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_target_state_of_charge"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_target_state_of_charge"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_state_of_charge']: {
  entity_id: "sensor.wvgzzze2zmp011645_state_of_charge",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_state_of_charge"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_state_of_charge"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_range_in_kilometers']: {
  entity_id: "sensor.wvgzzze2zmp011645_range_in_kilometers",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_range_in_kilometers"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_range_in_kilometers"].attributes} as SensorProperties}
},

['wvgzzze2zmp011645_range_in_miles']: {
  entity_id: "sensor.wvgzzze2zmp011645_range_in_miles",
get entity() { return {state: shadowState["sensor.wvgzzze2zmp011645_range_in_miles"].state, attributes: shadowState["sensor.wvgzzze2zmp011645_range_in_miles"].attributes} as SensorProperties}
},

['hacs']: {
  entity_id: "sensor.hacs",
get entity() { return {state: shadowState["sensor.hacs"].state, attributes: shadowState["sensor.hacs"].attributes} as SensorProperties}
},

['hygea']: {
  entity_id: "sensor.hygea",
get entity() { return {state: shadowState["sensor.hygea"].state, attributes: shadowState["sensor.hygea"].attributes} as SensorProperties}
},

['hygea_be']: {
  entity_id: "sensor.hygea_be",
get entity() { return {state: shadowState["sensor.hygea_be"].state, attributes: shadowState["sensor.hygea_be"].attributes} as SensorProperties}
},

['d1df7d67_b4318c17']: {
  entity_id: "sensor.d1df7d67_b4318c17",
get entity() { return {state: shadowState["sensor.d1df7d67_b4318c17"].state, attributes: shadowState["sensor.d1df7d67_b4318c17"].attributes} as SensorProperties}
},

['bedroom_ir_blaster_temperature']: {
  entity_id: "sensor.bedroom_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.bedroom_ir_blaster_temperature"].state, attributes: shadowState["sensor.bedroom_ir_blaster_temperature"].attributes} as SensorProperties}
},

['bedroom_ir_blaster_humidity']: {
  entity_id: "sensor.bedroom_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.bedroom_ir_blaster_humidity"].state, attributes: shadowState["sensor.bedroom_ir_blaster_humidity"].attributes} as SensorProperties}
},

['ebbff7dd_e82b404f']: {
  entity_id: "sensor.ebbff7dd_e82b404f",
get entity() { return {state: shadowState["sensor.ebbff7dd_e82b404f"].state, attributes: shadowState["sensor.ebbff7dd_e82b404f"].attributes} as SensorProperties}
},

['aadf3129_ecd1ece2']: {
  entity_id: "sensor.aadf3129_ecd1ece2",
get entity() { return {state: shadowState["sensor.aadf3129_ecd1ece2"].state, attributes: shadowState["sensor.aadf3129_ecd1ece2"].attributes} as SensorProperties}
},

['status']: {
  entity_id: "sensor.status",
get entity() { return {state: shadowState["sensor.status"].state, attributes: shadowState["sensor.status"].attributes} as SensorProperties}
},

['pv_power_a']: {
  entity_id: "sensor.pv_power_a",
get entity() { return {state: shadowState["sensor.pv_power_a"].state, attributes: shadowState["sensor.pv_power_a"].attributes} as SensorProperties}
},

['pv_power_b']: {
  entity_id: "sensor.pv_power_b",
get entity() { return {state: shadowState["sensor.pv_power_b"].state, attributes: shadowState["sensor.pv_power_b"].attributes} as SensorProperties}
},

['pv_current_a']: {
  entity_id: "sensor.pv_current_a",
get entity() { return {state: shadowState["sensor.pv_current_a"].state, attributes: shadowState["sensor.pv_current_a"].attributes} as SensorProperties}
},

['pv_current_b']: {
  entity_id: "sensor.pv_current_b",
get entity() { return {state: shadowState["sensor.pv_current_b"].state, attributes: shadowState["sensor.pv_current_b"].attributes} as SensorProperties}
},

['grid_power']: {
  entity_id: "sensor.grid_power",
get entity() { return {state: shadowState["sensor.grid_power"].state, attributes: shadowState["sensor.grid_power"].attributes} as SensorProperties}
},

['total_yield']: {
  entity_id: "sensor.total_yield",
get entity() { return {state: shadowState["sensor.total_yield"].state, attributes: shadowState["sensor.total_yield"].attributes} as SensorProperties}
},

['daily_yield']: {
  entity_id: "sensor.daily_yield",
get entity() { return {state: shadowState["sensor.daily_yield"].state, attributes: shadowState["sensor.daily_yield"].attributes} as SensorProperties}
},

['pv_gen_meter']: {
  entity_id: "sensor.pv_gen_meter",
get entity() { return {state: shadowState["sensor.pv_gen_meter"].state, attributes: shadowState["sensor.pv_gen_meter"].attributes} as SensorProperties}
},

['map_segments']: {
  entity_id: "sensor.map_segments",
get entity() { return {state: shadowState["sensor.map_segments"].state, attributes: shadowState["sensor.map_segments"].attributes} as SensorProperties}
},

['zone_presets']: {
  entity_id: "sensor.zone_presets",
get entity() { return {state: shadowState["sensor.zone_presets"].state, attributes: shadowState["sensor.zone_presets"].attributes} as SensorProperties}
},

['goto_locations']: {
  entity_id: "sensor.goto_locations",
get entity() { return {state: shadowState["sensor.goto_locations"].state, attributes: shadowState["sensor.goto_locations"].attributes} as SensorProperties}
},

['wi_fi_configuration']: {
  entity_id: "sensor.wi_fi_configuration",
get entity() { return {state: shadowState["sensor.wi_fi_configuration"].state, attributes: shadowState["sensor.wi_fi_configuration"].attributes} as SensorProperties}
},

['error_description']: {
  entity_id: "sensor.error_description",
get entity() { return {state: shadowState["sensor.error_description"].state, attributes: shadowState["sensor.error_description"].attributes} as SensorProperties}
},

['main_brush']: {
  entity_id: "sensor.main_brush",
get entity() { return {state: shadowState["sensor.main_brush"].state, attributes: shadowState["sensor.main_brush"].attributes} as SensorProperties}
},

['right_brush']: {
  entity_id: "sensor.right_brush",
get entity() { return {state: shadowState["sensor.right_brush"].state, attributes: shadowState["sensor.right_brush"].attributes} as SensorProperties}
},

['main_filter']: {
  entity_id: "sensor.main_filter",
get entity() { return {state: shadowState["sensor.main_filter"].state, attributes: shadowState["sensor.main_filter"].attributes} as SensorProperties}
},

['sensor_cleaning']: {
  entity_id: "sensor.sensor_cleaning",
get entity() { return {state: shadowState["sensor.sensor_cleaning"].state, attributes: shadowState["sensor.sensor_cleaning"].attributes} as SensorProperties}
},

['my_wall_panel_battery_level']: {
  entity_id: "sensor.my_wall_panel_battery_level",
get entity() { return {state: shadowState["sensor.my_wall_panel_battery_level"].state, attributes: shadowState["sensor.my_wall_panel_battery_level"].attributes} as SensorProperties}
},

['my_wall_panel_light']: {
  entity_id: "sensor.my_wall_panel_light",
get entity() { return {state: shadowState["sensor.my_wall_panel_light"].state, attributes: shadowState["sensor.my_wall_panel_light"].attributes} as SensorProperties}
},

['living_room_cluster_size']: {
  entity_id: "sensor.living_room_cluster_size",
get entity() { return {state: shadowState["sensor.living_room_cluster_size"].state, attributes: shadowState["sensor.living_room_cluster_size"].attributes} as SensorProperties}
},

['living_room_cluster_leader']: {
  entity_id: "sensor.living_room_cluster_leader",
get entity() { return {state: shadowState["sensor.living_room_cluster_leader"].state, attributes: shadowState["sensor.living_room_cluster_leader"].attributes} as SensorProperties}
},

['bedroom_cluster_size']: {
  entity_id: "sensor.bedroom_cluster_size",
get entity() { return {state: shadowState["sensor.bedroom_cluster_size"].state, attributes: shadowState["sensor.bedroom_cluster_size"].attributes} as SensorProperties}
},

['bedroom_cluster_leader']: {
  entity_id: "sensor.bedroom_cluster_leader",
get entity() { return {state: shadowState["sensor.bedroom_cluster_leader"].state, attributes: shadowState["sensor.bedroom_cluster_leader"].attributes} as SensorProperties}
},

['tims_ipone_room_presence']: {
  entity_id: "sensor.tims_ipone_room_presence",
get entity() { return {state: shadowState["sensor.tims_ipone_room_presence"].state, attributes: shadowState["sensor.tims_ipone_room_presence"].attributes} as SensorProperties}
},

['tim_s_watch_room_presence']: {
  entity_id: "sensor.tim_s_watch_room_presence",
get entity() { return {state: shadowState["sensor.tim_s_watch_room_presence"].state, attributes: shadowState["sensor.tim_s_watch_room_presence"].attributes} as SensorProperties}
},

['tim_s_ipone_room_presence']: {
  entity_id: "sensor.tim_s_ipone_room_presence",
get entity() { return {state: shadowState["sensor.tim_s_ipone_room_presence"].state, attributes: shadowState["sensor.tim_s_ipone_room_presence"].attributes} as SensorProperties}
},

['tim_s_ipone_room_presence_2']: {
  entity_id: "sensor.tim_s_ipone_room_presence_2",
get entity() { return {state: shadowState["sensor.tim_s_ipone_room_presence_2"].state, attributes: shadowState["sensor.tim_s_ipone_room_presence_2"].attributes} as SensorProperties}
},

['tim_s_phone_room_presence']: {
  entity_id: "sensor.tim_s_phone_room_presence",
get entity() { return {state: shadowState["sensor.tim_s_phone_room_presence"].state, attributes: shadowState["sensor.tim_s_phone_room_presence"].attributes} as SensorProperties}
},

['gaby_s_phone_room_presence']: {
  entity_id: "sensor.gaby_s_phone_room_presence",
get entity() { return {state: shadowState["sensor.gaby_s_phone_room_presence"].state, attributes: shadowState["sensor.gaby_s_phone_room_presence"].attributes} as SensorProperties}
},

['garage_cluster_size']: {
  entity_id: "sensor.garage_cluster_size",
get entity() { return {state: shadowState["sensor.garage_cluster_size"].state, attributes: shadowState["sensor.garage_cluster_size"].attributes} as SensorProperties}
},

['garage_cluster_leader']: {
  entity_id: "sensor.garage_cluster_leader",
get entity() { return {state: shadowState["sensor.garage_cluster_leader"].state, attributes: shadowState["sensor.garage_cluster_leader"].attributes} as SensorProperties}
},

['garage_car_power']: {
  entity_id: "sensor.garage_car_power",
get entity() { return {state: shadowState["sensor.garage_car_power"].state, attributes: shadowState["sensor.garage_car_power"].attributes} as SensorProperties}
},

['garage_car_energy']: {
  entity_id: "sensor.garage_car_energy",
get entity() { return {state: shadowState["sensor.garage_car_energy"].state, attributes: shadowState["sensor.garage_car_energy"].attributes} as SensorProperties}
},

['canon_ts5300_series_black']: {
  entity_id: "sensor.canon_ts5300_series_black",
get entity() { return {state: shadowState["sensor.canon_ts5300_series_black"].state, attributes: shadowState["sensor.canon_ts5300_series_black"].attributes} as SensorProperties}
},

['canon_ts5300_series_color']: {
  entity_id: "sensor.canon_ts5300_series_color",
get entity() { return {state: shadowState["sensor.canon_ts5300_series_color"].state, attributes: shadowState["sensor.canon_ts5300_series_color"].attributes} as SensorProperties}
},

['canon_ts5300_series']: {
  entity_id: "sensor.canon_ts5300_series",
get entity() { return {state: shadowState["sensor.canon_ts5300_series"].state, attributes: shadowState["sensor.canon_ts5300_series"].attributes} as SensorProperties}
},

['nibe_133481_44061']: {
  entity_id: "sensor.nibe_133481_44061",
get entity() { return {state: shadowState["sensor.nibe_133481_44061"].state, attributes: shadowState["sensor.nibe_133481_44061"].attributes} as SensorProperties}
},

['nibe_133481_44700']: {
  entity_id: "sensor.nibe_133481_44700",
get entity() { return {state: shadowState["sensor.nibe_133481_44700"].state, attributes: shadowState["sensor.nibe_133481_44700"].attributes} as SensorProperties}
},

['living_room_ir_blaster_temperature_2']: {
  entity_id: "sensor.living_room_ir_blaster_temperature_2",
get entity() { return {state: shadowState["sensor.living_room_ir_blaster_temperature_2"].state, attributes: shadowState["sensor.living_room_ir_blaster_temperature_2"].attributes} as SensorProperties}
},

['living_room_ir_blaster_humidity_2']: {
  entity_id: "sensor.living_room_ir_blaster_humidity_2",
get entity() { return {state: shadowState["sensor.living_room_ir_blaster_humidity_2"].state, attributes: shadowState["sensor.living_room_ir_blaster_humidity_2"].attributes} as SensorProperties}
},

['tim_s_id_4_odometer_in_kilometers']: {
  entity_id: "sensor.tim_s_id_4_odometer_in_kilometers",
get entity() { return {state: shadowState["sensor.tim_s_id_4_odometer_in_kilometers"].state, attributes: shadowState["sensor.tim_s_id_4_odometer_in_kilometers"].attributes} as SensorProperties}
},

['tim_s_id_4_odometer_in_miles']: {
  entity_id: "sensor.tim_s_id_4_odometer_in_miles",
get entity() { return {state: shadowState["sensor.tim_s_id_4_odometer_in_miles"].state, attributes: shadowState["sensor.tim_s_id_4_odometer_in_miles"].attributes} as SensorProperties}
},

['secondary_room_ir_blaster_temperature']: {
  entity_id: "sensor.secondary_room_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.secondary_room_ir_blaster_temperature"].state, attributes: shadowState["sensor.secondary_room_ir_blaster_temperature"].attributes} as SensorProperties}
},

['secondary_room_ir_blaster_humidity']: {
  entity_id: "sensor.secondary_room_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.secondary_room_ir_blaster_humidity"].state, attributes: shadowState["sensor.secondary_room_ir_blaster_humidity"].attributes} as SensorProperties}
},

['office_ir_blaster_humidity']: {
  entity_id: "sensor.office_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.office_ir_blaster_humidity"].state, attributes: shadowState["sensor.office_ir_blaster_humidity"].attributes} as SensorProperties}
},

['office_ir_blaster_temperature']: {
  entity_id: "sensor.office_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.office_ir_blaster_temperature"].state, attributes: shadowState["sensor.office_ir_blaster_temperature"].attributes} as SensorProperties}
},

['01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance']: {
  entity_id: "sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance",
get entity() { return {state: shadowState["sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance"].state, attributes: shadowState["sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance"].attributes} as SensorProperties}
},

['747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_estimated_distance']: {
  entity_id: "sensor.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_estimated_distance",
get entity() { return {state: shadowState["sensor.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_estimated_distance"].state, attributes: shadowState["sensor.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance"].attributes} as SensorProperties}
},

['sb0c958382bb2fbd7c_4623_estimated_distance']: {
  entity_id: "sensor.sb0c958382bb2fbd7c_4623_estimated_distance",
get entity() { return {state: shadowState["sensor.sb0c958382bb2fbd7c_4623_estimated_distance"].state, attributes: shadowState["sensor.sb0c958382bb2fbd7c_4623_estimated_distance"].attributes} as SensorProperties}
},

['e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance']: {
  entity_id: "sensor.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance",
get entity() { return {state: shadowState["sensor.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance"].state, attributes: shadowState["sensor.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance"].attributes} as SensorProperties}
},

['tim_s_id_4_health_inspection']: {
  entity_id: "sensor.tim_s_id_4_health_inspection",
get entity() { return {state: shadowState["sensor.tim_s_id_4_health_inspection"].state, attributes: shadowState["sensor.tim_s_id_4_health_inspection"].attributes} as SensorProperties}
},

['sn_3004169620_current_total']: {
  entity_id: "sensor.sn_3004169620_current_total",
get entity() { return {state: shadowState["sensor.sn_3004169620_current_total"].state, attributes: shadowState["sensor.sn_3004169620_current_total"].attributes} as SensorProperties}
},

['sn_3004169620_inverter_power_limit']: {
  entity_id: "sensor.sn_3004169620_inverter_power_limit",
get entity() { return {state: shadowState["sensor.sn_3004169620_inverter_power_limit"].state, attributes: shadowState["sensor.sn_3004169620_inverter_power_limit"].attributes} as SensorProperties}
},

['accma99c32488a978558_fb1f_estimated_distance']: {
  entity_id: "sensor.accma99c32488a978558_fb1f_estimated_distance",
get entity() { return {state: shadowState["sensor.accma99c32488a978558_fb1f_estimated_distance"].state, attributes: shadowState["sensor.accma99c32488a978558_fb1f_estimated_distance"].attributes} as SensorProperties}
},

['garage_position_2']: {
  entity_id: "sensor.garage_position_2",
get entity() { return {state: shadowState["sensor.garage_position_2"].state, attributes: shadowState["sensor.garage_position_2"].attributes} as SensorProperties}
},

['garage_state_2']: {
  entity_id: "sensor.garage_state_2",
get entity() { return {state: shadowState["sensor.garage_state_2"].state, attributes: shadowState["sensor.garage_state_2"].attributes} as SensorProperties}
},

['g4_bullet_storage_used']: {
  entity_id: "sensor.g4_bullet_storage_used",
get entity() { return {state: shadowState["sensor.g4_bullet_storage_used"].state, attributes: shadowState["sensor.g4_bullet_storage_used"].attributes} as SensorProperties}
},

['g4_bullet_disk_write_rate']: {
  entity_id: "sensor.g4_bullet_disk_write_rate",
get entity() { return {state: shadowState["sensor.g4_bullet_disk_write_rate"].state, attributes: shadowState["sensor.g4_bullet_disk_write_rate"].attributes} as SensorProperties}
},

}