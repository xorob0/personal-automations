import {shadowState, Sensor, SensorProperties} from "@herja/core"
export type SensorIDs = "sun_next_dawn" | "sun_next_dusk" | "sun_next_midnight" | "sun_next_noon" | "sun_next_rising" | "sun_next_setting" | "charger_energy_meter_start" | "charger_energy_reactive_import_interval" | "charger_power_factor" | "charger_current_offered" | "charger_energy_active_export_register" | "charger_power_active_import" | "charger_power_reactive_import" | "charger_power_reactive_export" | "charger_power_offered" | "charger_power_active_export" | "charger_energy_active_export_interval" | "charger_transaction_id" | "charger_energy_reactive_export_interval" | "charger_energy_session" | "charger_energy_reactive_import_register" | "charger_rpm" | "charger_current_export" | "charger_soc" | "charger_voltage" | "charger_frequency" | "charger_energy_reactive_export_register" | "charger_temperature" | "charger_energy_active_import_interval" | "charger_time_session" | "charger_energy_active_import_register" | "charger_current_import" | "charger_status" | "charger_status_connector" | "charger_heartbeat" | "charger_latency_ping" | "charger_latency_pong" | "charger_error_code" | "charger_error_code_connector" | "charger_stop_reason" | "charger_status_firmware" | "charger_reconnects" | "charger_id_tag" | "charger_id" | "charger_model" | "charger_vendor" | "charger_serial" | "charger_version_firmware" | "charger_features" | "charger_connectors" | "charger_timestamp_data_response" | "charger_timestamp_data_transfer" | "charger_timestamp_config_response" | "canon_ts5300_series_black" | "canon_ts5300_series_color" | "canon_ts5300_series" | "plex_celty_3_0" | "unifi_dream_machine_kib_s_received" | "unifi_dream_machine_kib_s_sent" | "g4_bullet_storage_used" | "g4_bullet_disk_write_rate" | "g4_doorbell_storage_used" | "g4_doorbell_disk_write_rate" | "g4_doorbell_voltage" | "g4_instant_storage_used" | "g4_instant_disk_write_rate" | "dream_machine_pro_uptime" | "dream_machine_pro_storage_utilization" | "dream_machine_pro_type_timelapse_video" | "dream_machine_pro_type_continuous_video" | "dream_machine_pro_type_detections_video" | "dream_machine_pro_resolution_hd_video" | "dream_machine_pro_resolution_4k_video" | "dream_machine_pro_resolution_free_space" | "dream_machine_pro_recording_capacity" | "nibe_133481_40067" | "nibe_133481_40014" | "nibe_133481_40013" | "nibe_133481_40004" | "nibe_133481_40083" | "nibe_133481_40081" | "nibe_133481_40079" | "nibe_133481_43005" | "nibe_133481_43161" | "nibe_133481_47276" | "nibe_133481_43009" | "nibe_133481_40071" | "nibe_133481_40152" | "nibe_133481_40033" | "nibe_133481_44256" | "nibe_133481_44270" | "nibe_133481_40045" | "nibe_133481_44266" | "nibe_133481_10033" | "nibe_133481_47613" | "nibe_133481_43091" | "nibe_133481_47214" | "nibe_133481_40121" | "nibe_133481_44899" | "nibe_133481_44896" | "nibe_133481_44897" | "nibe_133481_44908" | "nibe_133481_10069" | "nibe_133481_47411" | "nibe_133481_47410" | "nibe_133481_47409" | "nibe_133481_47408" | "nibe_133481_47407" | "nibe_133481_48366" | "nibe_133481_47412" | "nibe_133481_48745" | "nibe_133481_0" | "office_ir_blaster_temperature_2" | "office_ir_blaster_humidity_2" | "bedroom_ir_blaster_temperature" | "bedroom_ir_blaster_humidity" | "secondary_room_ir_blaster_temperature" | "secondary_room_ir_blaster_humidity" | "energy_production_today" | "energy_production_today_remaining" | "energy_production_tomorrow" | "power_highest_peak_time_today" | "power_highest_peak_time_tomorrow" | "power_production_now" | "energy_current_hour" | "energy_next_hour" | "sm_g980f_battery_level" | "sm_g980f_battery_state" | "sm_g980f_charger_type" | "sm_g980f_battery_health" | "sm_g980f_battery_temperature" | "sm_g980f_detected_activity" | "sm_g980f_sleep_confidence" | "sm_g980f_sleep_segment" | "sm_g980f_ringer_mode" | "sm_g980f_audio_mode" | "sm_g980f_volume_level_dtmf" | "sm_g980f_bluetooth_connection" | "sm_g980f_ble_transmitter" | "sm_g980f_do_not_disturb_sensor" | "sm_g980f_last_reboot" | "sm_g980f_light_sensor" | "sm_g980f_wifi_connection" | "sm_g980f_wifi_bssid" | "sm_g980f_wifi_ip_address" | "sm_g980f_wifi_link_speed" | "sm_g980f_wifi_frequency" | "sm_g980f_wifi_signal_strength" | "sm_g980f_public_ip_address" | "sm_g980f_network_type" | "sm_g980f_next_alarm" | "sm_g980f_last_notification" | "sm_g980f_last_removed_notification" | "sm_g980f_active_notification_count" | "sm_g980f_media_session" | "sm_g980f_sim_1" | "sm_g980f_sim_2" | "sm_g980f_pressure_sensor" | "sm_g980f_proximity_sensor" | "sm_g980f_steps_sensor" | "sm_g980f_current_time_zone" | "sm_g980f_battery_power" | "sm_g980f_accent_color" | "tims_macbook_pro_internal_battery_level" | "tims_macbook_pro_internal_battery_state" | "tims_macbook_pro_storage" | "tims_macbook_pro_ssid" | "tims_macbook_pro_bssid" | "tims_macbook_pro_connection_type" | "tims_macbook_pro_active_camera" | "tims_macbook_pro_active_audio_input" | "tims_macbook_pro_active_audio_output" | "tims_macbook_pro_displays" | "tims_macbook_pro_primary_display_name" | "tims_macbook_pro_primary_display_id" | "tims_macbook_pro_frontmost_app" | "tims_macbook_pro_last_update_trigger" | "tims_macbook_pro_geocoded_location" | "tims_iphone_activity" | "tims_iphone_floors_ascended" | "tims_iphone_distance" | "tims_iphone_floors_descended" | "tims_iphone_steps" | "tims_iphone_average_active_pace" | "tims_iphone_battery_level" | "tims_iphone_battery_state" | "tims_iphone_storage" | "tims_iphone_ssid" | "tims_iphone_bssid" | "tims_iphone_connection_type" | "tims_iphone_sim_2" | "tims_iphone_sim_1" | "tims_iphone_last_update_trigger" | "tims_iphone_geocoded_location" | "iphone_floors_ascended" | "iphone_average_active_pace" | "iphone_floors_descended" | "iphone_battery_level" | "iphone_steps" | "iphone_storage" | "iphone_distance" | "iphone_battery_state" | "iphone_ssid" | "iphone_geocoded_location" | "iphone_sim_1" | "iphone_bssid" | "iphone_connection_type" | "iphone_activity" | "iphone_sim_2" | "iphone_last_update_trigger" | "office_desk_button_battery" | "office_desk_button_action" | "office_desk_button_device_temperature" | "office_desk_button_power_outage_count" | "office_desk_button_click" | "nibe_133481_44703" | "nibe_133481_44396" | "nibe_133481_44362" | "nibe_133481_10014" | "nibe_133481_44069" | "nibe_133481_44702" | "nibe_133481_44058" | "nibe_133481_44363" | "nibe_133481_44059" | "nibe_133481_44060" | "nibe_133481_44055" | "nibe_133481_44699" | "nibe_133481_44071" | "nibe_133481_44073" | "nibe_133481_40737" | "nibe_133481_44701" | "nibe_133481_40782" | "nibe_133481_44014" | "last_activity" | "connection_status" | "has_alarmed" | "software_version" | "iphone_battery_level_2" | "iphone_sim_2_2" | "iphone_sim_1_2" | "iphone_geocoded_location_2" | "iphone_last_update_trigger_2" | "iphone_battery_state_2" | "iphone_storage_2" | "iphone_bssid_2" | "iphone_connection_type_2" | "iphone_ssid_2" | "iphone_activity_2" | "iphone_distance_2" | "iphone_floors_ascended_2" | "iphone_floors_descended_2" | "iphone_steps_2" | "iphone_average_active_pace_2" | "christmas_tree_led_outlet_power" | "christmas_tree_led_outlet_energy" | "0xa4c1385c18410b5b_battery" | "0xa4c1385c18410b5b_temperature" | "0xa4c1385c18410b5b_humidity" | "garage_remote_battery" | "garage_remote_action" | "garage_remote_action_duration" | "bedroom_secondary_lamp_power" | "bedroom_secondary_lamp_energy" | "tim_apple_watch_living_room_rssi" | "tim_apple_watch_office_rssi" | "fanspeed" | "fantimer" | "lastid" | "sn_3004169620_current_total" | "sn_3004169620_daily_yield" | "sn_3004169620_grid_power" | "sn_3004169620_inverter_power_limit" | "sn_3004169620_pv_current_a" | "sn_3004169620_pv_current_b" | "sn_3004169620_pv_gen_meter" | "sn_3004169620_pv_power_a" | "sn_3004169620_pv_power_b" | "sn_3004169620_status" | "sn_3004169620_total_yield" | "stairs_motion_sensor_battery" | "fridge_door_sensor_battery" | "fridge_door_sensor_device_temperature" | "fridge_door_sensor_power_outage_count" | "bedside_lamp_power" | "bedside_lamp_energy" | "bedside_button_battery" | "bedside_button_action" | "hall_motion_sensor_temperature" | "hall_motion_sensor_battery" | "hall_motion_sensor_illuminance_lux" | "garage_electric_door_sensor_open_battery" | "garage_electric_door_sensor_open_device_temperature" | "garage_electric_door_sensor_open_power_outage_count" | "bedroom_humidifier_switch_power" | "bedroom_humidifier_switch_energy" | "garage_door_battery" | "garage_door_device_temperature" | "garage_door_power_outage_count" | "garden_door_battery" | "garden_door_device_temperature" | "garden_door_power_outage_count" | "toilet_door_battery" | "entrance_door_battery" | "entrance_door_device_temperature" | "entrance_door_power_outage_count" | "living_room_table_button_battery" | "living_room_table_button_action" | "living_room_table_button_power_outage_count" | "bedroom_window_bed_battery" | "bedroom_window_bed_device_temperature" | "bedroom_window_bed_power_outage_count" | "garage_electric_door_sensor_closed_battery" | "garage_electric_door_sensor_closed_device_temperature" | "garage_electric_door_sensor_closed_power_outage_count" | "siren_temperature" | "siren_humidity" | "siren_power_type" | "tripod_button_battery" | "tripod_button_action" | "tripod_button_power_outage_count" | "bathroom_door_battery" | "bedroom_button_tim_battery" | "bedroom_button_tim_action" | "bedroom_button_gaby_battery" | "bedroom_button_gaby_action" | "living_room_humidifier_switch_power" | "living_room_humidifier_switch_energy" | "coffee_machine_outlet_power" | "coffee_machine_outlet_energy" | "dishwasher_outlet_power" | "dishwasher_outlet_energy" | "washing_machine_outlet_power" | "washing_machine_outlet_energy" | "3dprinter_power" | "3dprinter_energy" | "coffee_machine_button_battery" | "coffee_machine_button_action" | "living_room_remote_battery" | "living_room_remote_action" | "valetudo_downstair_vacuum_map_segments" | "valetudo_downstair_vacuum_main_brush" | "valetudo_downstair_vacuum_right_brush" | "valetudo_downstair_vacuum_main_filter" | "valetudo_downstair_vacuum_sensor_cleaning" | "valetudo_downstair_vacuum_current_statistics_time" | "valetudo_downstair_vacuum_current_statistics_area" | "valetudo_downstair_vacuum_wi_fi_configuration" | "valetudo_downstair_vacuum_error" | "hacs" | "hygea" | "hygea_be" | "d1df7d67_b4318c17" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "my_wall_panel_battery_level" | "my_wall_panel_light" | "living_room_cluster_size" | "living_room_cluster_leader" | "bedroom_cluster_size" | "bedroom_cluster_leader" | "tims_ipone_room_presence" | "tim_s_watch_room_presence" | "tim_s_ipone_room_presence" | "tim_s_ipone_room_presence_2" | "tim_s_phone_room_presence" | "gaby_s_phone_room_presence" | "garage_cluster_size" | "garage_cluster_leader" | "garage_car_power" | "garage_car_energy" | "desk_outlet_power" | "desk_outlet_energy" | "nibe_133481_44061" | "nibe_133481_44700" | "01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9_estimated_distance" | "sb0c958382bb2fbd7c_4623_estimated_distance" | "e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0_estimated_distance" | "accma99c32488a978558_fb1f_estimated_distance" | "hall_entrance_power" | "hall_entrance_energy" | "bathroom_spot_2_power" | "bathroom_spot_2_energy" | "bathroom_spot_1_power" | "bathroom_spot_1_energy" | "toilet_power" | "toilet_energy" | "garage_fridge_power" | "garage_fridge_energy" | "0x14b457fffefafbcf_power" | "0x14b457fffefafbcf_energy" | "0x0017880109bde997_power" | "0x0017880109bde997_energy" | "0x001788010b21a974_power" | "0x001788010b21a974_energy" | "garage_position_2" | "garage_state_2" | "g4_doorbell_detected_object" | "g4_bullet_detected_object" | "bedroom_bed_light_power" | "bedroom_bed_light_energy" | "rx" | "tx" | "rx_2" | "tx_2" | "aida_rx" | "aida_tx" | "tims_mbp_rx" | "tims_mbp_tx" | "g4_doorbell_rx" | "g4_doorbell_tx" | "broadlink_remote_b8_f4_bf_rx" | "broadlink_remote_b8_f4_bf_tx" | "uvc_g4_bullet_rx" | "uvc_g4_bullet_tx" | "wb457613_rx" | "wb457613_tx" | "kapy_rx" | "kapy_tx" | "broadlink_wifi_device_23_cb_47_rx" | "broadlink_wifi_device_23_cb_47_tx" | "rx_3" | "tx_3" | "rx_4" | "tx_4" | "lt_621jtg3_rx" | "lt_621jtg3_tx" | "rx_5" | "tx_5" | "rx_6" | "tx_6" | "broadlink_remote_72_4c_9b_rx" | "broadlink_remote_72_4c_9b_tx" | "gs1200_8_rx" | "gs1200_8_tx" | "rx_7" | "tx_7" | "rx_8" | "tx_8" | "sma3004169620_rx" | "sma3004169620_tx" | "rx_9" | "tx_9" | "air_de_gaby_rx" | "air_de_gaby_tx" | "android_5ef1b103dc61d633_rx" | "android_5ef1b103dc61d633_tx" | "rx_10" | "tx_10" | "lt_621jtg3_rx_2" | "lt_621jtg3_tx_2" | "broadlink_remote_0c_81_90_rx" | "broadlink_remote_0c_81_90_tx" | "galaxywatch3_6bc3_rx" | "galaxywatch3_6bc3_tx" | "rx_11" | "tx_11" | "uptime" | "uptime_2" | "aida_uptime" | "tims_mbp_uptime" | "g4_doorbell_uptime_2" | "broadlink_remote_b8_f4_bf_uptime" | "uvc_g4_bullet_uptime" | "wb457613_uptime" | "kapy_uptime" | "broadlink_wifi_device_23_cb_47_uptime" | "uptime_3" | "uptime_4" | "lt_621jtg3_uptime" | "uptime_5" | "uptime_6" | "broadlink_remote_72_4c_9b_uptime" | "gs1200_8_uptime" | "uptime_7" | "uptime_8" | "sma3004169620_uptime" | "uptime_9" | "air_de_gaby_uptime" | "android_5ef1b103dc61d633_uptime" | "uptime_10" | "lt_621jtg3_uptime_2" | "broadlink_remote_0c_81_90_uptime" | "galaxywatch3_6bc3_uptime" | "uptime_11" | "galaxy_s22_rx" | "galaxy_s22_tx" | "galaxy_s22_uptime" | "rx_12" | "tx_12" | "uptime_12" | "living_room_esp32_rx" | "living_room_esp32_tx" | "living_room_esp32_uptime" | "rx_13" | "tx_13" | "uptime_13" | "rx_14" | "tx_14" | "uptime_14" | "rx_15" | "tx_15" | "uptime_15" | "hello" | "rx_16" | "tx_16" | "uptime_16" | "galaxy_j5_2016_rx" | "galaxy_j5_2016_tx" | "galaxy_j5_2016_uptime" | "rx_17" | "tx_17" | "uptime_17" | "rx_18" | "tx_18" | "uptime_18" | "rx_19" | "tx_19" | "uptime_19" | "rx_20" | "tx_20" | "uptime_20" | "rx_21" | "tx_21" | "uptime_21" | "rx_22" | "tx_22" | "uptime_22" | "rx_23" | "tx_23" | "uptime_23" | "office_esp32_rx" | "office_esp32_tx" | "office_esp32_uptime" | "nextcloud_system_version" | "nextcloud_system_theme" | "nextcloud_system_memcache_local" | "nextcloud_system_memcache_distributed" | "nextcloud_system_memcache_locking" | "nextcloud_system_freespace" | "nextcloud_system_cpuload" | "nextcloud_system_mem_total" | "nextcloud_system_mem_free" | "nextcloud_system_swap_total" | "nextcloud_system_swap_free" | "nextcloud_system_apps_num_installed" | "nextcloud_system_apps_num_updates_available" | "nextcloud_storage_num_users" | "nextcloud_storage_num_files" | "nextcloud_storage_num_storages" | "nextcloud_storage_num_storages_local" | "nextcloud_storage_num_storages_home" | "nextcloud_storage_num_storages_other" | "nextcloud_shares_num_shares" | "nextcloud_shares_num_shares_user" | "nextcloud_shares_num_shares_groups" | "nextcloud_shares_num_shares_link" | "nextcloud_shares_num_shares_mail" | "nextcloud_shares_num_shares_room" | "nextcloud_shares_num_shares_link_no_password" | "nextcloud_shares_num_fed_shares_sent" | "nextcloud_shares_num_fed_shares_received" | "nextcloud_server_webserver" | "nextcloud_server_php_version" | "nextcloud_server_php_memory_limit" | "nextcloud_server_php_max_execution_time" | "nextcloud_server_php_upload_max_filesize" | "nextcloud_database_type" | "nextcloud_database_version" | "nextcloud_activeusers_last5minutes" | "nextcloud_activeusers_last1hour" | "nextcloud_activeusers_last24hours" | "gabys_phone_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2_estimated_distance" | "nextcloud_system_apps_app_updates_calendar" | "nextcloud_system_apps_app_updates_contacts" | "74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c_estimated_distance" | "rx_24" | "tx_24" | "uptime_24" | "rx_25" | "tx_25" | "uptime_25" | "rx_26" | "tx_26" | "uptime_26" | "rx_27" | "tx_27" | "uptime_27" | "rx_28" | "tx_28" | "uptime_28" | "rx_29" | "tx_29" | "uptime_29" | "apple_tv_rx" | "apple_tv_tx" | "apple_tv_uptime" | "living_room_rx" | "living_room_tx" | "living_room_uptime" | "rx_30" | "tx_30" | "uptime_30" | "saacbe39bdc4e468cc_297d_estimated_distance" | "antonios_mbp_rx" | "antonios_mbp_tx" | "antonios_mbp_uptime" | "rx_31" | "tx_31" | "uptime_31" | "rx_32" | "tx_32" | "uptime_32" | "rx_33" | "tx_33" | "uptime_33" | "hall_stairs_power" | "hall_stairs_energy" | "living_room_ir_blaster_temperature" | "living_room_ir_blaster_humidity" | "rx_34" | "tx_34" | "kitchen_spot_1_power" | "kitchen_spot_1_energy" | "dining_room_spot_2_power" | "dining_room_spot_2_energy" | "dining_room_spot_1_power" | "dining_room_spot_1_energy" | "living_room_spot_3_power" | "living_room_spot_3_energy" | "living_room_light_power" | "living_room_light_energy" | "dining_room_spot_3_power" | "dining_room_spot_3_energy" | "kitchen_spot_2_power" | "kitchen_spot_2_energy" | "kitchen_spot_3_power" | "kitchen_spot_3_energy" | "rx_35" | "tx_35" | "rx_36" | "tx_36" | "hall_upstairs_spot_3_power" | "hall_upstairs_spot_3_energy" | "hall_upstairs_spot_1_power" | "hall_upstairs_spot_1_energy" | "hall_upstairs_spot_2_power" | "hall_upstairs_spot_2_energy" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933_estimated_distance" | "rx_37" | "tx_37" | "rx_38" | "tx_38" | "garage_esp32_rx" | "garage_esp32_tx" | "rx_39" | "tx_39" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169_estimated_distance" | "pink_rx" | "pink_tx" | "rx_40" | "tx_40" | "living_room_spot_2_power" | "living_room_spot_2_energy" | "living_room_spot_1_power" | "living_room_spot_1_energy" | "rx_41" | "tx_41" | "rx_42" | "tx_42" | "rx_43" | "tx_43" | "office_pi_rx" | "office_pi_tx" | "g4_instant_rx" | "g4_instant_tx" | "rx_44" | "tx_44" | "rx_45" | "tx_45" | "rx_46" | "tx_46" | "rx_47" | "tx_47" | "map_segments" | "zone_presets" | "goto_locations" | "wi_fi_configuration" | "error_description" | "main_brush" | "right_brush" | "main_filter" | "sensor_cleaning" | "3dprinter_device_power" | "3dprinter_device_energy" | "washing_machine_outlet_device_power" | "washing_machine_outlet_device_energy" | "dishwasher_outlet_device_power" | "dishwasher_outlet_device_energy" | "coffee_machine_outlet_device_power" | "coffee_machine_outlet_device_energy" | "rx_48" | "tx_48" | "bedroom_secondary_lamp_device_power" | "bedroom_secondary_lamp_device_energy" | "living_room_humidifier_switch_device_power" | "living_room_humidifier_switch_device_energy" | "christmas_tree_led_outlet_device_power" | "christmas_tree_led_outlet_device_energy" | "bedroom_humidifier_switch_device_power" | "bedroom_humidifier_switch_device_energy" | "desk_outlet_device_power" | "desk_outlet_device_energy" | "bedside_lamp_device_power" | "bedside_lamp_device_energy" | "tim_s_id_4_climatisation_state" | "tim_s_id_4_remaining_climatisation_time" | "tim_s_id_4_target_temperature" | "tim_s_id_4_unit_in_car" | "tim_s_id_4_charging_state" | "tim_s_id_4_remaining_charging_time" | "tim_s_id_4_charging_mode" | "tim_s_id_4_charge_power" | "tim_s_id_4_charge_rate" | "tim_s_id_4_charging_settings" | "tim_s_id_4_charge_type" | "tim_s_id_4_max_charge_current_ac" | "tim_s_id_4_target_state_of_charge" | "tim_s_id_4_state_of_charge" | "tim_s_id_4_range" | "tim_s_id_4_health_inspection" | "tim_s_id_4_odometer" | "tim_s_id_4_door_lock_status" | "tim_s_id_4_bonnet_lock_status" | "tim_s_id_4_trunk_lock_status" | "tim_s_id_4_door_rear_right_lock_status" | "tim_s_id_4_door_rear_left_lock_status" | "tim_s_id_4_door_front_left_lock_status" | "tim_s_id_4_door_front_right_lock_status" | "tim_s_id_4_bonnet_open_status" | "tim_s_id_4_trunk_open_status" | "tim_s_id_4_door_rear_right_open_status" | "tim_s_id_4_door_rear_left_open_status" | "tim_s_id_4_door_front_left_open_status" | "tim_s_id_4_door_front_right_open_status" | "tim_s_id_4_sunroof_open_status" | "tim_s_id_4_sunroof_cover_status" | "tim_s_id_4_window_rear_right_open_status" | "tim_s_id_4_window_rear_left_open_status" | "tim_s_id_4_window_front_left_open_status" | "tim_s_id_4_window_front_right_open_status" | "tim_s_id_4_overall_status" | "tim_s_id_4_auto_unlock_plug_when_charged" | "tim_s_id_4_auto_unlock_plug_when_charged_ac" | "tim_s_id_4_plug_connection_state" | "tim_s_id_4_plug_lock_state" | "rx_49" | "tx_49" | "74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208_estimated_distance" | "rx_50" | "tx_50" | "user_pc_rx" | "user_pc_tx" | "rx_51" | "tx_51" | "rx_52" | "tx_52" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2_estimated_distance" | "rx_53" | "tx_53" | "oneplus_9_rx" | "oneplus_9_tx" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e_estimated_distance" | "rx_54" | "tx_54" | "android_1688bb625b0c2c6_rx" | "android_1688bb625b0c2c6_tx" | "74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb_estimated_distance" | "rx_55" | "tx_55" | "pc_linuxshop_376156_rx" | "pc_linuxshop_376156_tx" | "galaxy_a71_rx" | "galaxy_a71_tx" | "rx_56" | "tx_56" | "rx_57" | "tx_57" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28_estimated_distance" | "rx_58" | "tx_58" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca_estimated_distance" | "rx_59" | "tx_59" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b_estimated_distance" | "rx_60" | "tx_60" | "rx_61" | "tx_61" | "rx_62" | "tx_62" | "rx_63" | "tx_63" | "rx_64" | "tx_64" | "all_standby_power" | "all_standby_energy" | "rx_65" | "tx_65" | "rx_66" | "tx_66" | "74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca_estimated_distance" | "android_00907aa9525f_rx" | "android_00907aa9525f_tx" | "74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355_estimated_distance" | "rx_67" | "tx_67" | "rx_68" | "tx_68" | "rx_69" | "tx_69" | "094f5242_4954_09ff_0f00_35414a575755_0_0_78ca_estimated_distance" | "094f5242_4954_09ff_0f00_35414a575755_0_0_affd_estimated_distance" | "rx_70" | "tx_70" | "74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18_estimated_distance" | "094f5242_4954_09ff_0f00_35414a575755_0_0_a673_estimated_distance" | "rx_71" | "tx_71" | "rx_72" | "tx_72" | "094f5242_4954_09ff_0f00_35414a575755_0_0_0228_estimated_distance" | "rx_73" | "tx_73" | "sena_motorcycles_db89_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance_2" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af_estimated_distance" | "rx_74" | "tx_74" | "74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e_estimated_distance" | "rx_75" | "tx_75" | "fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040_estimated_distance" | "rx_76" | "tx_76" | "rx_77" | "tx_77" | "rx_78" | "tx_78" | "74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b_estimated_distance" | "iphone_rx" | "iphone_tx" | "rx_79" | "tx_79" | "rx_80" | "tx_80" | "rx_81" | "tx_81" | "rx_82" | "tx_82" | "rx_83" | "tx_83" | "rx_84" | "tx_84" | "rx_85" | "tx_85" | "rx_86" | "tx_86" | "rx_87" | "tx_87" | "rx_88" | "tx_88" | "74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca_estimated_distance" | "094f5242_4954_09ff_0f00_35414a575755_0_0_610c_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854_estimated_distance" | "a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea_estimated_distance" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65_estimated_distance" | "4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df_estimated_distance" | "400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210_estimated_distance" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e_estimated_distance" | "74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604_estimated_distance" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702_estimated_distance" | "office_switch_battery" | "office_switch_action" | "bathroom_main_switch_battery" | "bathroom_main_switch_action" | "bathroom_leak_sensor_battery" | "bathroom_leak_sensor_device_temperature" | "bathroom_leak_sensor_power_outage_count"
export type SensorEntities = Record<SensorIDs, Sensor>

export const sensor: Sensor<SensorIDs> = {

['sun_next_dawn']: {
  entity_id: "sensor.sun_next_dawn",
get entity() { return {state: shadowState["sensor.sun_next_dawn"].state, attributes: shadowState["sensor.sun_next_dawn"].attributes} as SensorProperties}
},

['sun_next_dusk']: {
  entity_id: "sensor.sun_next_dusk",
get entity() { return {state: shadowState["sensor.sun_next_dusk"].state, attributes: shadowState["sensor.sun_next_dusk"].attributes} as SensorProperties}
},

['sun_next_midnight']: {
  entity_id: "sensor.sun_next_midnight",
get entity() { return {state: shadowState["sensor.sun_next_midnight"].state, attributes: shadowState["sensor.sun_next_midnight"].attributes} as SensorProperties}
},

['sun_next_noon']: {
  entity_id: "sensor.sun_next_noon",
get entity() { return {state: shadowState["sensor.sun_next_noon"].state, attributes: shadowState["sensor.sun_next_noon"].attributes} as SensorProperties}
},

['sun_next_rising']: {
  entity_id: "sensor.sun_next_rising",
get entity() { return {state: shadowState["sensor.sun_next_rising"].state, attributes: shadowState["sensor.sun_next_rising"].attributes} as SensorProperties}
},

['sun_next_setting']: {
  entity_id: "sensor.sun_next_setting",
get entity() { return {state: shadowState["sensor.sun_next_setting"].state, attributes: shadowState["sensor.sun_next_setting"].attributes} as SensorProperties}
},

['charger_energy_meter_start']: {
  entity_id: "sensor.charger_energy_meter_start",
get entity() { return {state: shadowState["sensor.charger_energy_meter_start"].state, attributes: shadowState["sensor.charger_energy_meter_start"].attributes} as SensorProperties}
},

['charger_energy_reactive_import_interval']: {
  entity_id: "sensor.charger_energy_reactive_import_interval",
get entity() { return {state: shadowState["sensor.charger_energy_reactive_import_interval"].state, attributes: shadowState["sensor.charger_energy_reactive_import_interval"].attributes} as SensorProperties}
},

['charger_power_factor']: {
  entity_id: "sensor.charger_power_factor",
get entity() { return {state: shadowState["sensor.charger_power_factor"].state, attributes: shadowState["sensor.charger_power_factor"].attributes} as SensorProperties}
},

['charger_current_offered']: {
  entity_id: "sensor.charger_current_offered",
get entity() { return {state: shadowState["sensor.charger_current_offered"].state, attributes: shadowState["sensor.charger_current_offered"].attributes} as SensorProperties}
},

['charger_energy_active_export_register']: {
  entity_id: "sensor.charger_energy_active_export_register",
get entity() { return {state: shadowState["sensor.charger_energy_active_export_register"].state, attributes: shadowState["sensor.charger_energy_active_export_register"].attributes} as SensorProperties}
},

['charger_power_active_import']: {
  entity_id: "sensor.charger_power_active_import",
get entity() { return {state: shadowState["sensor.charger_power_active_import"].state, attributes: shadowState["sensor.charger_power_active_import"].attributes} as SensorProperties}
},

['charger_power_reactive_import']: {
  entity_id: "sensor.charger_power_reactive_import",
get entity() { return {state: shadowState["sensor.charger_power_reactive_import"].state, attributes: shadowState["sensor.charger_power_reactive_import"].attributes} as SensorProperties}
},

['charger_power_reactive_export']: {
  entity_id: "sensor.charger_power_reactive_export",
get entity() { return {state: shadowState["sensor.charger_power_reactive_export"].state, attributes: shadowState["sensor.charger_power_reactive_export"].attributes} as SensorProperties}
},

['charger_power_offered']: {
  entity_id: "sensor.charger_power_offered",
get entity() { return {state: shadowState["sensor.charger_power_offered"].state, attributes: shadowState["sensor.charger_power_offered"].attributes} as SensorProperties}
},

['charger_power_active_export']: {
  entity_id: "sensor.charger_power_active_export",
get entity() { return {state: shadowState["sensor.charger_power_active_export"].state, attributes: shadowState["sensor.charger_power_active_export"].attributes} as SensorProperties}
},

['charger_energy_active_export_interval']: {
  entity_id: "sensor.charger_energy_active_export_interval",
get entity() { return {state: shadowState["sensor.charger_energy_active_export_interval"].state, attributes: shadowState["sensor.charger_energy_active_export_interval"].attributes} as SensorProperties}
},

['charger_transaction_id']: {
  entity_id: "sensor.charger_transaction_id",
get entity() { return {state: shadowState["sensor.charger_transaction_id"].state, attributes: shadowState["sensor.charger_transaction_id"].attributes} as SensorProperties}
},

['charger_energy_reactive_export_interval']: {
  entity_id: "sensor.charger_energy_reactive_export_interval",
get entity() { return {state: shadowState["sensor.charger_energy_reactive_export_interval"].state, attributes: shadowState["sensor.charger_energy_reactive_export_interval"].attributes} as SensorProperties}
},

['charger_energy_session']: {
  entity_id: "sensor.charger_energy_session",
get entity() { return {state: shadowState["sensor.charger_energy_session"].state, attributes: shadowState["sensor.charger_energy_session"].attributes} as SensorProperties}
},

['charger_energy_reactive_import_register']: {
  entity_id: "sensor.charger_energy_reactive_import_register",
get entity() { return {state: shadowState["sensor.charger_energy_reactive_import_register"].state, attributes: shadowState["sensor.charger_energy_reactive_import_register"].attributes} as SensorProperties}
},

['charger_rpm']: {
  entity_id: "sensor.charger_rpm",
get entity() { return {state: shadowState["sensor.charger_rpm"].state, attributes: shadowState["sensor.charger_rpm"].attributes} as SensorProperties}
},

['charger_current_export']: {
  entity_id: "sensor.charger_current_export",
get entity() { return {state: shadowState["sensor.charger_current_export"].state, attributes: shadowState["sensor.charger_current_export"].attributes} as SensorProperties}
},

['charger_soc']: {
  entity_id: "sensor.charger_soc",
get entity() { return {state: shadowState["sensor.charger_soc"].state, attributes: shadowState["sensor.charger_soc"].attributes} as SensorProperties}
},

['charger_voltage']: {
  entity_id: "sensor.charger_voltage",
get entity() { return {state: shadowState["sensor.charger_voltage"].state, attributes: shadowState["sensor.charger_voltage"].attributes} as SensorProperties}
},

['charger_frequency']: {
  entity_id: "sensor.charger_frequency",
get entity() { return {state: shadowState["sensor.charger_frequency"].state, attributes: shadowState["sensor.charger_frequency"].attributes} as SensorProperties}
},

['charger_energy_reactive_export_register']: {
  entity_id: "sensor.charger_energy_reactive_export_register",
get entity() { return {state: shadowState["sensor.charger_energy_reactive_export_register"].state, attributes: shadowState["sensor.charger_energy_reactive_export_register"].attributes} as SensorProperties}
},

['charger_temperature']: {
  entity_id: "sensor.charger_temperature",
get entity() { return {state: shadowState["sensor.charger_temperature"].state, attributes: shadowState["sensor.charger_temperature"].attributes} as SensorProperties}
},

['charger_energy_active_import_interval']: {
  entity_id: "sensor.charger_energy_active_import_interval",
get entity() { return {state: shadowState["sensor.charger_energy_active_import_interval"].state, attributes: shadowState["sensor.charger_energy_active_import_interval"].attributes} as SensorProperties}
},

['charger_time_session']: {
  entity_id: "sensor.charger_time_session",
get entity() { return {state: shadowState["sensor.charger_time_session"].state, attributes: shadowState["sensor.charger_time_session"].attributes} as SensorProperties}
},

['charger_energy_active_import_register']: {
  entity_id: "sensor.charger_energy_active_import_register",
get entity() { return {state: shadowState["sensor.charger_energy_active_import_register"].state, attributes: shadowState["sensor.charger_energy_active_import_register"].attributes} as SensorProperties}
},

['charger_current_import']: {
  entity_id: "sensor.charger_current_import",
get entity() { return {state: shadowState["sensor.charger_current_import"].state, attributes: shadowState["sensor.charger_current_import"].attributes} as SensorProperties}
},

['charger_status']: {
  entity_id: "sensor.charger_status",
get entity() { return {state: shadowState["sensor.charger_status"].state, attributes: shadowState["sensor.charger_status"].attributes} as SensorProperties}
},

['charger_status_connector']: {
  entity_id: "sensor.charger_status_connector",
get entity() { return {state: shadowState["sensor.charger_status_connector"].state, attributes: shadowState["sensor.charger_status_connector"].attributes} as SensorProperties}
},

['charger_heartbeat']: {
  entity_id: "sensor.charger_heartbeat",
get entity() { return {state: shadowState["sensor.charger_heartbeat"].state, attributes: shadowState["sensor.charger_heartbeat"].attributes} as SensorProperties}
},

['charger_latency_ping']: {
  entity_id: "sensor.charger_latency_ping",
get entity() { return {state: shadowState["sensor.charger_latency_ping"].state, attributes: shadowState["sensor.charger_latency_ping"].attributes} as SensorProperties}
},

['charger_latency_pong']: {
  entity_id: "sensor.charger_latency_pong",
get entity() { return {state: shadowState["sensor.charger_latency_pong"].state, attributes: shadowState["sensor.charger_latency_pong"].attributes} as SensorProperties}
},

['charger_error_code']: {
  entity_id: "sensor.charger_error_code",
get entity() { return {state: shadowState["sensor.charger_error_code"].state, attributes: shadowState["sensor.charger_error_code"].attributes} as SensorProperties}
},

['charger_error_code_connector']: {
  entity_id: "sensor.charger_error_code_connector",
get entity() { return {state: shadowState["sensor.charger_error_code_connector"].state, attributes: shadowState["sensor.charger_error_code_connector"].attributes} as SensorProperties}
},

['charger_stop_reason']: {
  entity_id: "sensor.charger_stop_reason",
get entity() { return {state: shadowState["sensor.charger_stop_reason"].state, attributes: shadowState["sensor.charger_stop_reason"].attributes} as SensorProperties}
},

['charger_status_firmware']: {
  entity_id: "sensor.charger_status_firmware",
get entity() { return {state: shadowState["sensor.charger_status_firmware"].state, attributes: shadowState["sensor.charger_status_firmware"].attributes} as SensorProperties}
},

['charger_reconnects']: {
  entity_id: "sensor.charger_reconnects",
get entity() { return {state: shadowState["sensor.charger_reconnects"].state, attributes: shadowState["sensor.charger_reconnects"].attributes} as SensorProperties}
},

['charger_id_tag']: {
  entity_id: "sensor.charger_id_tag",
get entity() { return {state: shadowState["sensor.charger_id_tag"].state, attributes: shadowState["sensor.charger_id_tag"].attributes} as SensorProperties}
},

['charger_id']: {
  entity_id: "sensor.charger_id",
get entity() { return {state: shadowState["sensor.charger_id"].state, attributes: shadowState["sensor.charger_id"].attributes} as SensorProperties}
},

['charger_model']: {
  entity_id: "sensor.charger_model",
get entity() { return {state: shadowState["sensor.charger_model"].state, attributes: shadowState["sensor.charger_model"].attributes} as SensorProperties}
},

['charger_vendor']: {
  entity_id: "sensor.charger_vendor",
get entity() { return {state: shadowState["sensor.charger_vendor"].state, attributes: shadowState["sensor.charger_vendor"].attributes} as SensorProperties}
},

['charger_serial']: {
  entity_id: "sensor.charger_serial",
get entity() { return {state: shadowState["sensor.charger_serial"].state, attributes: shadowState["sensor.charger_serial"].attributes} as SensorProperties}
},

['charger_version_firmware']: {
  entity_id: "sensor.charger_version_firmware",
get entity() { return {state: shadowState["sensor.charger_version_firmware"].state, attributes: shadowState["sensor.charger_version_firmware"].attributes} as SensorProperties}
},

['charger_features']: {
  entity_id: "sensor.charger_features",
get entity() { return {state: shadowState["sensor.charger_features"].state, attributes: shadowState["sensor.charger_features"].attributes} as SensorProperties}
},

['charger_connectors']: {
  entity_id: "sensor.charger_connectors",
get entity() { return {state: shadowState["sensor.charger_connectors"].state, attributes: shadowState["sensor.charger_connectors"].attributes} as SensorProperties}
},

['charger_timestamp_data_response']: {
  entity_id: "sensor.charger_timestamp_data_response",
get entity() { return {state: shadowState["sensor.charger_timestamp_data_response"].state, attributes: shadowState["sensor.charger_timestamp_data_response"].attributes} as SensorProperties}
},

['charger_timestamp_data_transfer']: {
  entity_id: "sensor.charger_timestamp_data_transfer",
get entity() { return {state: shadowState["sensor.charger_timestamp_data_transfer"].state, attributes: shadowState["sensor.charger_timestamp_data_transfer"].attributes} as SensorProperties}
},

['charger_timestamp_config_response']: {
  entity_id: "sensor.charger_timestamp_config_response",
get entity() { return {state: shadowState["sensor.charger_timestamp_config_response"].state, attributes: shadowState["sensor.charger_timestamp_config_response"].attributes} as SensorProperties}
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

['plex_celty_3_0']: {
  entity_id: "sensor.plex_celty_3_0",
get entity() { return {state: shadowState["sensor.plex_celty_3_0"].state, attributes: shadowState["sensor.plex_celty_3_0"].attributes} as SensorProperties}
},

['unifi_dream_machine_kib_s_received']: {
  entity_id: "sensor.unifi_dream_machine_kib_s_received",
get entity() { return {state: shadowState["sensor.unifi_dream_machine_kib_s_received"].state, attributes: shadowState["sensor.unifi_dream_machine_kib_s_received"].attributes} as SensorProperties}
},

['unifi_dream_machine_kib_s_sent']: {
  entity_id: "sensor.unifi_dream_machine_kib_s_sent",
get entity() { return {state: shadowState["sensor.unifi_dream_machine_kib_s_sent"].state, attributes: shadowState["sensor.unifi_dream_machine_kib_s_sent"].attributes} as SensorProperties}
},

['g4_bullet_storage_used']: {
  entity_id: "sensor.g4_bullet_storage_used",
get entity() { return {state: shadowState["sensor.g4_bullet_storage_used"].state, attributes: shadowState["sensor.g4_bullet_storage_used"].attributes} as SensorProperties}
},

['g4_bullet_disk_write_rate']: {
  entity_id: "sensor.g4_bullet_disk_write_rate",
get entity() { return {state: shadowState["sensor.g4_bullet_disk_write_rate"].state, attributes: shadowState["sensor.g4_bullet_disk_write_rate"].attributes} as SensorProperties}
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

['g4_instant_storage_used']: {
  entity_id: "sensor.g4_instant_storage_used",
get entity() { return {state: shadowState["sensor.g4_instant_storage_used"].state, attributes: shadowState["sensor.g4_instant_storage_used"].attributes} as SensorProperties}
},

['g4_instant_disk_write_rate']: {
  entity_id: "sensor.g4_instant_disk_write_rate",
get entity() { return {state: shadowState["sensor.g4_instant_disk_write_rate"].state, attributes: shadowState["sensor.g4_instant_disk_write_rate"].attributes} as SensorProperties}
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

['office_ir_blaster_temperature_2']: {
  entity_id: "sensor.office_ir_blaster_temperature_2",
get entity() { return {state: shadowState["sensor.office_ir_blaster_temperature_2"].state, attributes: shadowState["sensor.office_ir_blaster_temperature_2"].attributes} as SensorProperties}
},

['office_ir_blaster_humidity_2']: {
  entity_id: "sensor.office_ir_blaster_humidity_2",
get entity() { return {state: shadowState["sensor.office_ir_blaster_humidity_2"].state, attributes: shadowState["sensor.office_ir_blaster_humidity_2"].attributes} as SensorProperties}
},

['bedroom_ir_blaster_temperature']: {
  entity_id: "sensor.bedroom_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.bedroom_ir_blaster_temperature"].state, attributes: shadowState["sensor.bedroom_ir_blaster_temperature"].attributes} as SensorProperties}
},

['bedroom_ir_blaster_humidity']: {
  entity_id: "sensor.bedroom_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.bedroom_ir_blaster_humidity"].state, attributes: shadowState["sensor.bedroom_ir_blaster_humidity"].attributes} as SensorProperties}
},

['secondary_room_ir_blaster_temperature']: {
  entity_id: "sensor.secondary_room_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.secondary_room_ir_blaster_temperature"].state, attributes: shadowState["sensor.secondary_room_ir_blaster_temperature"].attributes} as SensorProperties}
},

['secondary_room_ir_blaster_humidity']: {
  entity_id: "sensor.secondary_room_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.secondary_room_ir_blaster_humidity"].state, attributes: shadowState["sensor.secondary_room_ir_blaster_humidity"].attributes} as SensorProperties}
},

['energy_production_today']: {
  entity_id: "sensor.energy_production_today",
get entity() { return {state: shadowState["sensor.energy_production_today"].state, attributes: shadowState["sensor.energy_production_today"].attributes} as SensorProperties}
},

['energy_production_today_remaining']: {
  entity_id: "sensor.energy_production_today_remaining",
get entity() { return {state: shadowState["sensor.energy_production_today_remaining"].state, attributes: shadowState["sensor.energy_production_today_remaining"].attributes} as SensorProperties}
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

['sm_g980f_accent_color']: {
  entity_id: "sensor.sm_g980f_accent_color",
get entity() { return {state: shadowState["sensor.sm_g980f_accent_color"].state, attributes: shadowState["sensor.sm_g980f_accent_color"].attributes} as SensorProperties}
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

['tims_macbook_pro_geocoded_location']: {
  entity_id: "sensor.tims_macbook_pro_geocoded_location",
get entity() { return {state: shadowState["sensor.tims_macbook_pro_geocoded_location"].state, attributes: shadowState["sensor.tims_macbook_pro_geocoded_location"].attributes} as SensorProperties}
},

['tims_iphone_activity']: {
  entity_id: "sensor.tims_iphone_activity",
get entity() { return {state: shadowState["sensor.tims_iphone_activity"].state, attributes: shadowState["sensor.tims_iphone_activity"].attributes} as SensorProperties}
},

['tims_iphone_floors_ascended']: {
  entity_id: "sensor.tims_iphone_floors_ascended",
get entity() { return {state: shadowState["sensor.tims_iphone_floors_ascended"].state, attributes: shadowState["sensor.tims_iphone_floors_ascended"].attributes} as SensorProperties}
},

['tims_iphone_distance']: {
  entity_id: "sensor.tims_iphone_distance",
get entity() { return {state: shadowState["sensor.tims_iphone_distance"].state, attributes: shadowState["sensor.tims_iphone_distance"].attributes} as SensorProperties}
},

['tims_iphone_floors_descended']: {
  entity_id: "sensor.tims_iphone_floors_descended",
get entity() { return {state: shadowState["sensor.tims_iphone_floors_descended"].state, attributes: shadowState["sensor.tims_iphone_floors_descended"].attributes} as SensorProperties}
},

['tims_iphone_steps']: {
  entity_id: "sensor.tims_iphone_steps",
get entity() { return {state: shadowState["sensor.tims_iphone_steps"].state, attributes: shadowState["sensor.tims_iphone_steps"].attributes} as SensorProperties}
},

['tims_iphone_average_active_pace']: {
  entity_id: "sensor.tims_iphone_average_active_pace",
get entity() { return {state: shadowState["sensor.tims_iphone_average_active_pace"].state, attributes: shadowState["sensor.tims_iphone_average_active_pace"].attributes} as SensorProperties}
},

['tims_iphone_battery_level']: {
  entity_id: "sensor.tims_iphone_battery_level",
get entity() { return {state: shadowState["sensor.tims_iphone_battery_level"].state, attributes: shadowState["sensor.tims_iphone_battery_level"].attributes} as SensorProperties}
},

['tims_iphone_battery_state']: {
  entity_id: "sensor.tims_iphone_battery_state",
get entity() { return {state: shadowState["sensor.tims_iphone_battery_state"].state, attributes: shadowState["sensor.tims_iphone_battery_state"].attributes} as SensorProperties}
},

['tims_iphone_storage']: {
  entity_id: "sensor.tims_iphone_storage",
get entity() { return {state: shadowState["sensor.tims_iphone_storage"].state, attributes: shadowState["sensor.tims_iphone_storage"].attributes} as SensorProperties}
},

['tims_iphone_ssid']: {
  entity_id: "sensor.tims_iphone_ssid",
get entity() { return {state: shadowState["sensor.tims_iphone_ssid"].state, attributes: shadowState["sensor.tims_iphone_ssid"].attributes} as SensorProperties}
},

['tims_iphone_bssid']: {
  entity_id: "sensor.tims_iphone_bssid",
get entity() { return {state: shadowState["sensor.tims_iphone_bssid"].state, attributes: shadowState["sensor.tims_iphone_bssid"].attributes} as SensorProperties}
},

['tims_iphone_connection_type']: {
  entity_id: "sensor.tims_iphone_connection_type",
get entity() { return {state: shadowState["sensor.tims_iphone_connection_type"].state, attributes: shadowState["sensor.tims_iphone_connection_type"].attributes} as SensorProperties}
},

['tims_iphone_sim_2']: {
  entity_id: "sensor.tims_iphone_sim_2",
get entity() { return {state: shadowState["sensor.tims_iphone_sim_2"].state, attributes: shadowState["sensor.tims_iphone_sim_2"].attributes} as SensorProperties}
},

['tims_iphone_sim_1']: {
  entity_id: "sensor.tims_iphone_sim_1",
get entity() { return {state: shadowState["sensor.tims_iphone_sim_1"].state, attributes: shadowState["sensor.tims_iphone_sim_1"].attributes} as SensorProperties}
},

['tims_iphone_last_update_trigger']: {
  entity_id: "sensor.tims_iphone_last_update_trigger",
get entity() { return {state: shadowState["sensor.tims_iphone_last_update_trigger"].state, attributes: shadowState["sensor.tims_iphone_last_update_trigger"].attributes} as SensorProperties}
},

['tims_iphone_geocoded_location']: {
  entity_id: "sensor.tims_iphone_geocoded_location",
get entity() { return {state: shadowState["sensor.tims_iphone_geocoded_location"].state, attributes: shadowState["sensor.tims_iphone_geocoded_location"].attributes} as SensorProperties}
},

['iphone_floors_ascended']: {
  entity_id: "sensor.iphone_floors_ascended",
get entity() { return {state: shadowState["sensor.iphone_floors_ascended"].state, attributes: shadowState["sensor.iphone_floors_ascended"].attributes} as SensorProperties}
},

['iphone_average_active_pace']: {
  entity_id: "sensor.iphone_average_active_pace",
get entity() { return {state: shadowState["sensor.iphone_average_active_pace"].state, attributes: shadowState["sensor.iphone_average_active_pace"].attributes} as SensorProperties}
},

['iphone_floors_descended']: {
  entity_id: "sensor.iphone_floors_descended",
get entity() { return {state: shadowState["sensor.iphone_floors_descended"].state, attributes: shadowState["sensor.iphone_floors_descended"].attributes} as SensorProperties}
},

['iphone_battery_level']: {
  entity_id: "sensor.iphone_battery_level",
get entity() { return {state: shadowState["sensor.iphone_battery_level"].state, attributes: shadowState["sensor.iphone_battery_level"].attributes} as SensorProperties}
},

['iphone_steps']: {
  entity_id: "sensor.iphone_steps",
get entity() { return {state: shadowState["sensor.iphone_steps"].state, attributes: shadowState["sensor.iphone_steps"].attributes} as SensorProperties}
},

['iphone_storage']: {
  entity_id: "sensor.iphone_storage",
get entity() { return {state: shadowState["sensor.iphone_storage"].state, attributes: shadowState["sensor.iphone_storage"].attributes} as SensorProperties}
},

['iphone_distance']: {
  entity_id: "sensor.iphone_distance",
get entity() { return {state: shadowState["sensor.iphone_distance"].state, attributes: shadowState["sensor.iphone_distance"].attributes} as SensorProperties}
},

['iphone_battery_state']: {
  entity_id: "sensor.iphone_battery_state",
get entity() { return {state: shadowState["sensor.iphone_battery_state"].state, attributes: shadowState["sensor.iphone_battery_state"].attributes} as SensorProperties}
},

['iphone_ssid']: {
  entity_id: "sensor.iphone_ssid",
get entity() { return {state: shadowState["sensor.iphone_ssid"].state, attributes: shadowState["sensor.iphone_ssid"].attributes} as SensorProperties}
},

['iphone_geocoded_location']: {
  entity_id: "sensor.iphone_geocoded_location",
get entity() { return {state: shadowState["sensor.iphone_geocoded_location"].state, attributes: shadowState["sensor.iphone_geocoded_location"].attributes} as SensorProperties}
},

['iphone_sim_1']: {
  entity_id: "sensor.iphone_sim_1",
get entity() { return {state: shadowState["sensor.iphone_sim_1"].state, attributes: shadowState["sensor.iphone_sim_1"].attributes} as SensorProperties}
},

['iphone_bssid']: {
  entity_id: "sensor.iphone_bssid",
get entity() { return {state: shadowState["sensor.iphone_bssid"].state, attributes: shadowState["sensor.iphone_bssid"].attributes} as SensorProperties}
},

['iphone_connection_type']: {
  entity_id: "sensor.iphone_connection_type",
get entity() { return {state: shadowState["sensor.iphone_connection_type"].state, attributes: shadowState["sensor.iphone_connection_type"].attributes} as SensorProperties}
},

['iphone_activity']: {
  entity_id: "sensor.iphone_activity",
get entity() { return {state: shadowState["sensor.iphone_activity"].state, attributes: shadowState["sensor.iphone_activity"].attributes} as SensorProperties}
},

['iphone_sim_2']: {
  entity_id: "sensor.iphone_sim_2",
get entity() { return {state: shadowState["sensor.iphone_sim_2"].state, attributes: shadowState["sensor.iphone_sim_2"].attributes} as SensorProperties}
},

['iphone_last_update_trigger']: {
  entity_id: "sensor.iphone_last_update_trigger",
get entity() { return {state: shadowState["sensor.iphone_last_update_trigger"].state, attributes: shadowState["sensor.iphone_last_update_trigger"].attributes} as SensorProperties}
},

['office_desk_button_battery']: {
  entity_id: "sensor.office_desk_button_battery",
get entity() { return {state: shadowState["sensor.office_desk_button_battery"].state, attributes: shadowState["sensor.office_desk_button_battery"].attributes} as SensorProperties}
},

['office_desk_button_action']: {
  entity_id: "sensor.office_desk_button_action",
get entity() { return {state: shadowState["sensor.office_desk_button_action"].state, attributes: shadowState["sensor.office_desk_button_action"].attributes} as SensorProperties}
},

['office_desk_button_device_temperature']: {
  entity_id: "sensor.office_desk_button_device_temperature",
get entity() { return {state: shadowState["sensor.office_desk_button_device_temperature"].state, attributes: shadowState["sensor.office_desk_button_device_temperature"].attributes} as SensorProperties}
},

['office_desk_button_power_outage_count']: {
  entity_id: "sensor.office_desk_button_power_outage_count",
get entity() { return {state: shadowState["sensor.office_desk_button_power_outage_count"].state, attributes: shadowState["sensor.office_desk_button_power_outage_count"].attributes} as SensorProperties}
},

['office_desk_button_click']: {
  entity_id: "sensor.office_desk_button_click",
get entity() { return {state: shadowState["sensor.office_desk_button_click"].state, attributes: shadowState["sensor.office_desk_button_click"].attributes} as SensorProperties}
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

['iphone_battery_level_2']: {
  entity_id: "sensor.iphone_battery_level_2",
get entity() { return {state: shadowState["sensor.iphone_battery_level_2"].state, attributes: shadowState["sensor.iphone_battery_level_2"].attributes} as SensorProperties}
},

['iphone_sim_2_2']: {
  entity_id: "sensor.iphone_sim_2_2",
get entity() { return {state: shadowState["sensor.iphone_sim_2_2"].state, attributes: shadowState["sensor.iphone_sim_2_2"].attributes} as SensorProperties}
},

['iphone_sim_1_2']: {
  entity_id: "sensor.iphone_sim_1_2",
get entity() { return {state: shadowState["sensor.iphone_sim_1_2"].state, attributes: shadowState["sensor.iphone_sim_1_2"].attributes} as SensorProperties}
},

['iphone_geocoded_location_2']: {
  entity_id: "sensor.iphone_geocoded_location_2",
get entity() { return {state: shadowState["sensor.iphone_geocoded_location_2"].state, attributes: shadowState["sensor.iphone_geocoded_location_2"].attributes} as SensorProperties}
},

['iphone_last_update_trigger_2']: {
  entity_id: "sensor.iphone_last_update_trigger_2",
get entity() { return {state: shadowState["sensor.iphone_last_update_trigger_2"].state, attributes: shadowState["sensor.iphone_last_update_trigger_2"].attributes} as SensorProperties}
},

['iphone_battery_state_2']: {
  entity_id: "sensor.iphone_battery_state_2",
get entity() { return {state: shadowState["sensor.iphone_battery_state_2"].state, attributes: shadowState["sensor.iphone_battery_state_2"].attributes} as SensorProperties}
},

['iphone_storage_2']: {
  entity_id: "sensor.iphone_storage_2",
get entity() { return {state: shadowState["sensor.iphone_storage_2"].state, attributes: shadowState["sensor.iphone_storage_2"].attributes} as SensorProperties}
},

['iphone_bssid_2']: {
  entity_id: "sensor.iphone_bssid_2",
get entity() { return {state: shadowState["sensor.iphone_bssid_2"].state, attributes: shadowState["sensor.iphone_bssid_2"].attributes} as SensorProperties}
},

['iphone_connection_type_2']: {
  entity_id: "sensor.iphone_connection_type_2",
get entity() { return {state: shadowState["sensor.iphone_connection_type_2"].state, attributes: shadowState["sensor.iphone_connection_type_2"].attributes} as SensorProperties}
},

['iphone_ssid_2']: {
  entity_id: "sensor.iphone_ssid_2",
get entity() { return {state: shadowState["sensor.iphone_ssid_2"].state, attributes: shadowState["sensor.iphone_ssid_2"].attributes} as SensorProperties}
},

['iphone_activity_2']: {
  entity_id: "sensor.iphone_activity_2",
get entity() { return {state: shadowState["sensor.iphone_activity_2"].state, attributes: shadowState["sensor.iphone_activity_2"].attributes} as SensorProperties}
},

['iphone_distance_2']: {
  entity_id: "sensor.iphone_distance_2",
get entity() { return {state: shadowState["sensor.iphone_distance_2"].state, attributes: shadowState["sensor.iphone_distance_2"].attributes} as SensorProperties}
},

['iphone_floors_ascended_2']: {
  entity_id: "sensor.iphone_floors_ascended_2",
get entity() { return {state: shadowState["sensor.iphone_floors_ascended_2"].state, attributes: shadowState["sensor.iphone_floors_ascended_2"].attributes} as SensorProperties}
},

['iphone_floors_descended_2']: {
  entity_id: "sensor.iphone_floors_descended_2",
get entity() { return {state: shadowState["sensor.iphone_floors_descended_2"].state, attributes: shadowState["sensor.iphone_floors_descended_2"].attributes} as SensorProperties}
},

['iphone_steps_2']: {
  entity_id: "sensor.iphone_steps_2",
get entity() { return {state: shadowState["sensor.iphone_steps_2"].state, attributes: shadowState["sensor.iphone_steps_2"].attributes} as SensorProperties}
},

['iphone_average_active_pace_2']: {
  entity_id: "sensor.iphone_average_active_pace_2",
get entity() { return {state: shadowState["sensor.iphone_average_active_pace_2"].state, attributes: shadowState["sensor.iphone_average_active_pace_2"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_power']: {
  entity_id: "sensor.christmas_tree_led_outlet_power",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_power"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_power"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_energy']: {
  entity_id: "sensor.christmas_tree_led_outlet_energy",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_energy"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_energy"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_battery']: {
  entity_id: "sensor.0xa4c1385c18410b5b_battery",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_battery"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_battery"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_temperature']: {
  entity_id: "sensor.0xa4c1385c18410b5b_temperature",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_temperature"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_temperature"].attributes} as SensorProperties}
},

['0xa4c1385c18410b5b_humidity']: {
  entity_id: "sensor.0xa4c1385c18410b5b_humidity",
get entity() { return {state: shadowState["sensor.0xa4c1385c18410b5b_humidity"].state, attributes: shadowState["sensor.0xa4c1385c18410b5b_humidity"].attributes} as SensorProperties}
},

['garage_remote_battery']: {
  entity_id: "sensor.garage_remote_battery",
get entity() { return {state: shadowState["sensor.garage_remote_battery"].state, attributes: shadowState["sensor.garage_remote_battery"].attributes} as SensorProperties}
},

['garage_remote_action']: {
  entity_id: "sensor.garage_remote_action",
get entity() { return {state: shadowState["sensor.garage_remote_action"].state, attributes: shadowState["sensor.garage_remote_action"].attributes} as SensorProperties}
},

['garage_remote_action_duration']: {
  entity_id: "sensor.garage_remote_action_duration",
get entity() { return {state: shadowState["sensor.garage_remote_action_duration"].state, attributes: shadowState["sensor.garage_remote_action_duration"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_power']: {
  entity_id: "sensor.bedroom_secondary_lamp_power",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_power"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_power"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_energy']: {
  entity_id: "sensor.bedroom_secondary_lamp_energy",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_energy"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_energy"].attributes} as SensorProperties}
},

['tim_apple_watch_living_room_rssi']: {
  entity_id: "sensor.tim_apple_watch_living_room_rssi",
get entity() { return {state: shadowState["sensor.tim_apple_watch_living_room_rssi"].state, attributes: shadowState["sensor.tim_apple_watch_living_room_rssi"].attributes} as SensorProperties}
},

['tim_apple_watch_office_rssi']: {
  entity_id: "sensor.tim_apple_watch_office_rssi",
get entity() { return {state: shadowState["sensor.tim_apple_watch_office_rssi"].state, attributes: shadowState["sensor.tim_apple_watch_office_rssi"].attributes} as SensorProperties}
},

['fanspeed']: {
  entity_id: "sensor.fanspeed",
get entity() { return {state: shadowState["sensor.fanspeed"].state, attributes: shadowState["sensor.fanspeed"].attributes} as SensorProperties}
},

['fantimer']: {
  entity_id: "sensor.fantimer",
get entity() { return {state: shadowState["sensor.fantimer"].state, attributes: shadowState["sensor.fantimer"].attributes} as SensorProperties}
},

['lastid']: {
  entity_id: "sensor.lastid",
get entity() { return {state: shadowState["sensor.lastid"].state, attributes: shadowState["sensor.lastid"].attributes} as SensorProperties}
},

['sn_3004169620_current_total']: {
  entity_id: "sensor.sn_3004169620_current_total",
get entity() { return {state: shadowState["sensor.sn_3004169620_current_total"].state, attributes: shadowState["sensor.sn_3004169620_current_total"].attributes} as SensorProperties}
},

['sn_3004169620_daily_yield']: {
  entity_id: "sensor.sn_3004169620_daily_yield",
get entity() { return {state: shadowState["sensor.sn_3004169620_daily_yield"].state, attributes: shadowState["sensor.sn_3004169620_daily_yield"].attributes} as SensorProperties}
},

['sn_3004169620_grid_power']: {
  entity_id: "sensor.sn_3004169620_grid_power",
get entity() { return {state: shadowState["sensor.sn_3004169620_grid_power"].state, attributes: shadowState["sensor.sn_3004169620_grid_power"].attributes} as SensorProperties}
},

['sn_3004169620_inverter_power_limit']: {
  entity_id: "sensor.sn_3004169620_inverter_power_limit",
get entity() { return {state: shadowState["sensor.sn_3004169620_inverter_power_limit"].state, attributes: shadowState["sensor.sn_3004169620_inverter_power_limit"].attributes} as SensorProperties}
},

['sn_3004169620_pv_current_a']: {
  entity_id: "sensor.sn_3004169620_pv_current_a",
get entity() { return {state: shadowState["sensor.sn_3004169620_pv_current_a"].state, attributes: shadowState["sensor.sn_3004169620_pv_current_a"].attributes} as SensorProperties}
},

['sn_3004169620_pv_current_b']: {
  entity_id: "sensor.sn_3004169620_pv_current_b",
get entity() { return {state: shadowState["sensor.sn_3004169620_pv_current_b"].state, attributes: shadowState["sensor.sn_3004169620_pv_current_b"].attributes} as SensorProperties}
},

['sn_3004169620_pv_gen_meter']: {
  entity_id: "sensor.sn_3004169620_pv_gen_meter",
get entity() { return {state: shadowState["sensor.sn_3004169620_pv_gen_meter"].state, attributes: shadowState["sensor.sn_3004169620_pv_gen_meter"].attributes} as SensorProperties}
},

['sn_3004169620_pv_power_a']: {
  entity_id: "sensor.sn_3004169620_pv_power_a",
get entity() { return {state: shadowState["sensor.sn_3004169620_pv_power_a"].state, attributes: shadowState["sensor.sn_3004169620_pv_power_a"].attributes} as SensorProperties}
},

['sn_3004169620_pv_power_b']: {
  entity_id: "sensor.sn_3004169620_pv_power_b",
get entity() { return {state: shadowState["sensor.sn_3004169620_pv_power_b"].state, attributes: shadowState["sensor.sn_3004169620_pv_power_b"].attributes} as SensorProperties}
},

['sn_3004169620_status']: {
  entity_id: "sensor.sn_3004169620_status",
get entity() { return {state: shadowState["sensor.sn_3004169620_status"].state, attributes: shadowState["sensor.sn_3004169620_status"].attributes} as SensorProperties}
},

['sn_3004169620_total_yield']: {
  entity_id: "sensor.sn_3004169620_total_yield",
get entity() { return {state: shadowState["sensor.sn_3004169620_total_yield"].state, attributes: shadowState["sensor.sn_3004169620_total_yield"].attributes} as SensorProperties}
},

['stairs_motion_sensor_battery']: {
  entity_id: "sensor.stairs_motion_sensor_battery",
get entity() { return {state: shadowState["sensor.stairs_motion_sensor_battery"].state, attributes: shadowState["sensor.stairs_motion_sensor_battery"].attributes} as SensorProperties}
},

['fridge_door_sensor_battery']: {
  entity_id: "sensor.fridge_door_sensor_battery",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_battery"].state, attributes: shadowState["sensor.fridge_door_sensor_battery"].attributes} as SensorProperties}
},

['fridge_door_sensor_device_temperature']: {
  entity_id: "sensor.fridge_door_sensor_device_temperature",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_device_temperature"].state, attributes: shadowState["sensor.fridge_door_sensor_device_temperature"].attributes} as SensorProperties}
},

['fridge_door_sensor_power_outage_count']: {
  entity_id: "sensor.fridge_door_sensor_power_outage_count",
get entity() { return {state: shadowState["sensor.fridge_door_sensor_power_outage_count"].state, attributes: shadowState["sensor.fridge_door_sensor_power_outage_count"].attributes} as SensorProperties}
},

['bedside_lamp_power']: {
  entity_id: "sensor.bedside_lamp_power",
get entity() { return {state: shadowState["sensor.bedside_lamp_power"].state, attributes: shadowState["sensor.bedside_lamp_power"].attributes} as SensorProperties}
},

['bedside_lamp_energy']: {
  entity_id: "sensor.bedside_lamp_energy",
get entity() { return {state: shadowState["sensor.bedside_lamp_energy"].state, attributes: shadowState["sensor.bedside_lamp_energy"].attributes} as SensorProperties}
},

['bedside_button_battery']: {
  entity_id: "sensor.bedside_button_battery",
get entity() { return {state: shadowState["sensor.bedside_button_battery"].state, attributes: shadowState["sensor.bedside_button_battery"].attributes} as SensorProperties}
},

['bedside_button_action']: {
  entity_id: "sensor.bedside_button_action",
get entity() { return {state: shadowState["sensor.bedside_button_action"].state, attributes: shadowState["sensor.bedside_button_action"].attributes} as SensorProperties}
},

['hall_motion_sensor_temperature']: {
  entity_id: "sensor.hall_motion_sensor_temperature",
get entity() { return {state: shadowState["sensor.hall_motion_sensor_temperature"].state, attributes: shadowState["sensor.hall_motion_sensor_temperature"].attributes} as SensorProperties}
},

['hall_motion_sensor_battery']: {
  entity_id: "sensor.hall_motion_sensor_battery",
get entity() { return {state: shadowState["sensor.hall_motion_sensor_battery"].state, attributes: shadowState["sensor.hall_motion_sensor_battery"].attributes} as SensorProperties}
},

['hall_motion_sensor_illuminance_lux']: {
  entity_id: "sensor.hall_motion_sensor_illuminance_lux",
get entity() { return {state: shadowState["sensor.hall_motion_sensor_illuminance_lux"].state, attributes: shadowState["sensor.hall_motion_sensor_illuminance_lux"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_battery']: {
  entity_id: "sensor.garage_electric_door_sensor_open_battery",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_battery"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_battery"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_device_temperature']: {
  entity_id: "sensor.garage_electric_door_sensor_open_device_temperature",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_device_temperature"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_device_temperature"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_open_power_outage_count']: {
  entity_id: "sensor.garage_electric_door_sensor_open_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_open_power_outage_count"].state, attributes: shadowState["sensor.garage_electric_door_sensor_open_power_outage_count"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_power']: {
  entity_id: "sensor.bedroom_humidifier_switch_power",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_power"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_power"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_energy']: {
  entity_id: "sensor.bedroom_humidifier_switch_energy",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_energy"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_energy"].attributes} as SensorProperties}
},

['garage_door_battery']: {
  entity_id: "sensor.garage_door_battery",
get entity() { return {state: shadowState["sensor.garage_door_battery"].state, attributes: shadowState["sensor.garage_door_battery"].attributes} as SensorProperties}
},

['garage_door_device_temperature']: {
  entity_id: "sensor.garage_door_device_temperature",
get entity() { return {state: shadowState["sensor.garage_door_device_temperature"].state, attributes: shadowState["sensor.garage_door_device_temperature"].attributes} as SensorProperties}
},

['garage_door_power_outage_count']: {
  entity_id: "sensor.garage_door_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_door_power_outage_count"].state, attributes: shadowState["sensor.garage_door_power_outage_count"].attributes} as SensorProperties}
},

['garden_door_battery']: {
  entity_id: "sensor.garden_door_battery",
get entity() { return {state: shadowState["sensor.garden_door_battery"].state, attributes: shadowState["sensor.garden_door_battery"].attributes} as SensorProperties}
},

['garden_door_device_temperature']: {
  entity_id: "sensor.garden_door_device_temperature",
get entity() { return {state: shadowState["sensor.garden_door_device_temperature"].state, attributes: shadowState["sensor.garden_door_device_temperature"].attributes} as SensorProperties}
},

['garden_door_power_outage_count']: {
  entity_id: "sensor.garden_door_power_outage_count",
get entity() { return {state: shadowState["sensor.garden_door_power_outage_count"].state, attributes: shadowState["sensor.garden_door_power_outage_count"].attributes} as SensorProperties}
},

['toilet_door_battery']: {
  entity_id: "sensor.toilet_door_battery",
get entity() { return {state: shadowState["sensor.toilet_door_battery"].state, attributes: shadowState["sensor.toilet_door_battery"].attributes} as SensorProperties}
},

['entrance_door_battery']: {
  entity_id: "sensor.entrance_door_battery",
get entity() { return {state: shadowState["sensor.entrance_door_battery"].state, attributes: shadowState["sensor.entrance_door_battery"].attributes} as SensorProperties}
},

['entrance_door_device_temperature']: {
  entity_id: "sensor.entrance_door_device_temperature",
get entity() { return {state: shadowState["sensor.entrance_door_device_temperature"].state, attributes: shadowState["sensor.entrance_door_device_temperature"].attributes} as SensorProperties}
},

['entrance_door_power_outage_count']: {
  entity_id: "sensor.entrance_door_power_outage_count",
get entity() { return {state: shadowState["sensor.entrance_door_power_outage_count"].state, attributes: shadowState["sensor.entrance_door_power_outage_count"].attributes} as SensorProperties}
},

['living_room_table_button_battery']: {
  entity_id: "sensor.living_room_table_button_battery",
get entity() { return {state: shadowState["sensor.living_room_table_button_battery"].state, attributes: shadowState["sensor.living_room_table_button_battery"].attributes} as SensorProperties}
},

['living_room_table_button_action']: {
  entity_id: "sensor.living_room_table_button_action",
get entity() { return {state: shadowState["sensor.living_room_table_button_action"].state, attributes: shadowState["sensor.living_room_table_button_action"].attributes} as SensorProperties}
},

['living_room_table_button_power_outage_count']: {
  entity_id: "sensor.living_room_table_button_power_outage_count",
get entity() { return {state: shadowState["sensor.living_room_table_button_power_outage_count"].state, attributes: shadowState["sensor.living_room_table_button_power_outage_count"].attributes} as SensorProperties}
},

['bedroom_window_bed_battery']: {
  entity_id: "sensor.bedroom_window_bed_battery",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_battery"].state, attributes: shadowState["sensor.bedroom_window_bed_battery"].attributes} as SensorProperties}
},

['bedroom_window_bed_device_temperature']: {
  entity_id: "sensor.bedroom_window_bed_device_temperature",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_device_temperature"].state, attributes: shadowState["sensor.bedroom_window_bed_device_temperature"].attributes} as SensorProperties}
},

['bedroom_window_bed_power_outage_count']: {
  entity_id: "sensor.bedroom_window_bed_power_outage_count",
get entity() { return {state: shadowState["sensor.bedroom_window_bed_power_outage_count"].state, attributes: shadowState["sensor.bedroom_window_bed_power_outage_count"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_battery']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_battery",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_battery"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_battery"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_device_temperature']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_device_temperature",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_device_temperature"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_device_temperature"].attributes} as SensorProperties}
},

['garage_electric_door_sensor_closed_power_outage_count']: {
  entity_id: "sensor.garage_electric_door_sensor_closed_power_outage_count",
get entity() { return {state: shadowState["sensor.garage_electric_door_sensor_closed_power_outage_count"].state, attributes: shadowState["sensor.garage_electric_door_sensor_closed_power_outage_count"].attributes} as SensorProperties}
},

['siren_temperature']: {
  entity_id: "sensor.siren_temperature",
get entity() { return {state: shadowState["sensor.siren_temperature"].state, attributes: shadowState["sensor.siren_temperature"].attributes} as SensorProperties}
},

['siren_humidity']: {
  entity_id: "sensor.siren_humidity",
get entity() { return {state: shadowState["sensor.siren_humidity"].state, attributes: shadowState["sensor.siren_humidity"].attributes} as SensorProperties}
},

['siren_power_type']: {
  entity_id: "sensor.siren_power_type",
get entity() { return {state: shadowState["sensor.siren_power_type"].state, attributes: shadowState["sensor.siren_power_type"].attributes} as SensorProperties}
},

['tripod_button_battery']: {
  entity_id: "sensor.tripod_button_battery",
get entity() { return {state: shadowState["sensor.tripod_button_battery"].state, attributes: shadowState["sensor.tripod_button_battery"].attributes} as SensorProperties}
},

['tripod_button_action']: {
  entity_id: "sensor.tripod_button_action",
get entity() { return {state: shadowState["sensor.tripod_button_action"].state, attributes: shadowState["sensor.tripod_button_action"].attributes} as SensorProperties}
},

['tripod_button_power_outage_count']: {
  entity_id: "sensor.tripod_button_power_outage_count",
get entity() { return {state: shadowState["sensor.tripod_button_power_outage_count"].state, attributes: shadowState["sensor.tripod_button_power_outage_count"].attributes} as SensorProperties}
},

['bathroom_door_battery']: {
  entity_id: "sensor.bathroom_door_battery",
get entity() { return {state: shadowState["sensor.bathroom_door_battery"].state, attributes: shadowState["sensor.bathroom_door_battery"].attributes} as SensorProperties}
},

['bedroom_button_tim_battery']: {
  entity_id: "sensor.bedroom_button_tim_battery",
get entity() { return {state: shadowState["sensor.bedroom_button_tim_battery"].state, attributes: shadowState["sensor.bedroom_button_tim_battery"].attributes} as SensorProperties}
},

['bedroom_button_tim_action']: {
  entity_id: "sensor.bedroom_button_tim_action",
get entity() { return {state: shadowState["sensor.bedroom_button_tim_action"].state, attributes: shadowState["sensor.bedroom_button_tim_action"].attributes} as SensorProperties}
},

['bedroom_button_gaby_battery']: {
  entity_id: "sensor.bedroom_button_gaby_battery",
get entity() { return {state: shadowState["sensor.bedroom_button_gaby_battery"].state, attributes: shadowState["sensor.bedroom_button_gaby_battery"].attributes} as SensorProperties}
},

['bedroom_button_gaby_action']: {
  entity_id: "sensor.bedroom_button_gaby_action",
get entity() { return {state: shadowState["sensor.bedroom_button_gaby_action"].state, attributes: shadowState["sensor.bedroom_button_gaby_action"].attributes} as SensorProperties}
},

['living_room_humidifier_switch_power']: {
  entity_id: "sensor.living_room_humidifier_switch_power",
get entity() { return {state: shadowState["sensor.living_room_humidifier_switch_power"].state, attributes: shadowState["sensor.living_room_humidifier_switch_power"].attributes} as SensorProperties}
},

['living_room_humidifier_switch_energy']: {
  entity_id: "sensor.living_room_humidifier_switch_energy",
get entity() { return {state: shadowState["sensor.living_room_humidifier_switch_energy"].state, attributes: shadowState["sensor.living_room_humidifier_switch_energy"].attributes} as SensorProperties}
},

['coffee_machine_outlet_power']: {
  entity_id: "sensor.coffee_machine_outlet_power",
get entity() { return {state: shadowState["sensor.coffee_machine_outlet_power"].state, attributes: shadowState["sensor.coffee_machine_outlet_power"].attributes} as SensorProperties}
},

['coffee_machine_outlet_energy']: {
  entity_id: "sensor.coffee_machine_outlet_energy",
get entity() { return {state: shadowState["sensor.coffee_machine_outlet_energy"].state, attributes: shadowState["sensor.coffee_machine_outlet_energy"].attributes} as SensorProperties}
},

['dishwasher_outlet_power']: {
  entity_id: "sensor.dishwasher_outlet_power",
get entity() { return {state: shadowState["sensor.dishwasher_outlet_power"].state, attributes: shadowState["sensor.dishwasher_outlet_power"].attributes} as SensorProperties}
},

['dishwasher_outlet_energy']: {
  entity_id: "sensor.dishwasher_outlet_energy",
get entity() { return {state: shadowState["sensor.dishwasher_outlet_energy"].state, attributes: shadowState["sensor.dishwasher_outlet_energy"].attributes} as SensorProperties}
},

['washing_machine_outlet_power']: {
  entity_id: "sensor.washing_machine_outlet_power",
get entity() { return {state: shadowState["sensor.washing_machine_outlet_power"].state, attributes: shadowState["sensor.washing_machine_outlet_power"].attributes} as SensorProperties}
},

['washing_machine_outlet_energy']: {
  entity_id: "sensor.washing_machine_outlet_energy",
get entity() { return {state: shadowState["sensor.washing_machine_outlet_energy"].state, attributes: shadowState["sensor.washing_machine_outlet_energy"].attributes} as SensorProperties}
},

['3dprinter_power']: {
  entity_id: "sensor.3dprinter_power",
get entity() { return {state: shadowState["sensor.3dprinter_power"].state, attributes: shadowState["sensor.3dprinter_power"].attributes} as SensorProperties}
},

['3dprinter_energy']: {
  entity_id: "sensor.3dprinter_energy",
get entity() { return {state: shadowState["sensor.3dprinter_energy"].state, attributes: shadowState["sensor.3dprinter_energy"].attributes} as SensorProperties}
},

['coffee_machine_button_battery']: {
  entity_id: "sensor.coffee_machine_button_battery",
get entity() { return {state: shadowState["sensor.coffee_machine_button_battery"].state, attributes: shadowState["sensor.coffee_machine_button_battery"].attributes} as SensorProperties}
},

['coffee_machine_button_action']: {
  entity_id: "sensor.coffee_machine_button_action",
get entity() { return {state: shadowState["sensor.coffee_machine_button_action"].state, attributes: shadowState["sensor.coffee_machine_button_action"].attributes} as SensorProperties}
},

['living_room_remote_battery']: {
  entity_id: "sensor.living_room_remote_battery",
get entity() { return {state: shadowState["sensor.living_room_remote_battery"].state, attributes: shadowState["sensor.living_room_remote_battery"].attributes} as SensorProperties}
},

['living_room_remote_action']: {
  entity_id: "sensor.living_room_remote_action",
get entity() { return {state: shadowState["sensor.living_room_remote_action"].state, attributes: shadowState["sensor.living_room_remote_action"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_map_segments']: {
  entity_id: "sensor.valetudo_downstair_vacuum_map_segments",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_map_segments"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_map_segments"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_main_brush']: {
  entity_id: "sensor.valetudo_downstair_vacuum_main_brush",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_main_brush"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_main_brush"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_right_brush']: {
  entity_id: "sensor.valetudo_downstair_vacuum_right_brush",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_right_brush"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_right_brush"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_main_filter']: {
  entity_id: "sensor.valetudo_downstair_vacuum_main_filter",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_main_filter"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_main_filter"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_sensor_cleaning']: {
  entity_id: "sensor.valetudo_downstair_vacuum_sensor_cleaning",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_sensor_cleaning"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_sensor_cleaning"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_current_statistics_time']: {
  entity_id: "sensor.valetudo_downstair_vacuum_current_statistics_time",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_current_statistics_time"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_current_statistics_time"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_current_statistics_area']: {
  entity_id: "sensor.valetudo_downstair_vacuum_current_statistics_area",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_current_statistics_area"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_current_statistics_area"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_wi_fi_configuration']: {
  entity_id: "sensor.valetudo_downstair_vacuum_wi_fi_configuration",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_wi_fi_configuration"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_wi_fi_configuration"].attributes} as SensorProperties}
},

['valetudo_downstair_vacuum_error']: {
  entity_id: "sensor.valetudo_downstair_vacuum_error",
get entity() { return {state: shadowState["sensor.valetudo_downstair_vacuum_error"].state, attributes: shadowState["sensor.valetudo_downstair_vacuum_error"].attributes} as SensorProperties}
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

['ebbff7dd_e82b404f']: {
  entity_id: "sensor.ebbff7dd_e82b404f",
get entity() { return {state: shadowState["sensor.ebbff7dd_e82b404f"].state, attributes: shadowState["sensor.ebbff7dd_e82b404f"].attributes} as SensorProperties}
},

['aadf3129_ecd1ece2']: {
  entity_id: "sensor.aadf3129_ecd1ece2",
get entity() { return {state: shadowState["sensor.aadf3129_ecd1ece2"].state, attributes: shadowState["sensor.aadf3129_ecd1ece2"].attributes} as SensorProperties}
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

['desk_outlet_power']: {
  entity_id: "sensor.desk_outlet_power",
get entity() { return {state: shadowState["sensor.desk_outlet_power"].state, attributes: shadowState["sensor.desk_outlet_power"].attributes} as SensorProperties}
},

['desk_outlet_energy']: {
  entity_id: "sensor.desk_outlet_energy",
get entity() { return {state: shadowState["sensor.desk_outlet_energy"].state, attributes: shadowState["sensor.desk_outlet_energy"].attributes} as SensorProperties}
},

['nibe_133481_44061']: {
  entity_id: "sensor.nibe_133481_44061",
get entity() { return {state: shadowState["sensor.nibe_133481_44061"].state, attributes: shadowState["sensor.nibe_133481_44061"].attributes} as SensorProperties}
},

['nibe_133481_44700']: {
  entity_id: "sensor.nibe_133481_44700",
get entity() { return {state: shadowState["sensor.nibe_133481_44700"].state, attributes: shadowState["sensor.nibe_133481_44700"].attributes} as SensorProperties}
},

['01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance']: {
  entity_id: "sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance",
get entity() { return {state: shadowState["sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance"].state, attributes: shadowState["sensor.01073d14_3789_4814_82fe_330131debcf9_100_1_estimated_distance"].attributes} as SensorProperties}
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

['accma99c32488a978558_fb1f_estimated_distance']: {
  entity_id: "sensor.accma99c32488a978558_fb1f_estimated_distance",
get entity() { return {state: shadowState["sensor.accma99c32488a978558_fb1f_estimated_distance"].state, attributes: shadowState["sensor.accma99c32488a978558_fb1f_estimated_distance"].attributes} as SensorProperties}
},

['hall_entrance_power']: {
  entity_id: "sensor.hall_entrance_power",
get entity() { return {state: shadowState["sensor.hall_entrance_power"].state, attributes: shadowState["sensor.hall_entrance_power"].attributes} as SensorProperties}
},

['hall_entrance_energy']: {
  entity_id: "sensor.hall_entrance_energy",
get entity() { return {state: shadowState["sensor.hall_entrance_energy"].state, attributes: shadowState["sensor.hall_entrance_energy"].attributes} as SensorProperties}
},

['bathroom_spot_2_power']: {
  entity_id: "sensor.bathroom_spot_2_power",
get entity() { return {state: shadowState["sensor.bathroom_spot_2_power"].state, attributes: shadowState["sensor.bathroom_spot_2_power"].attributes} as SensorProperties}
},

['bathroom_spot_2_energy']: {
  entity_id: "sensor.bathroom_spot_2_energy",
get entity() { return {state: shadowState["sensor.bathroom_spot_2_energy"].state, attributes: shadowState["sensor.bathroom_spot_2_energy"].attributes} as SensorProperties}
},

['bathroom_spot_1_power']: {
  entity_id: "sensor.bathroom_spot_1_power",
get entity() { return {state: shadowState["sensor.bathroom_spot_1_power"].state, attributes: shadowState["sensor.bathroom_spot_1_power"].attributes} as SensorProperties}
},

['bathroom_spot_1_energy']: {
  entity_id: "sensor.bathroom_spot_1_energy",
get entity() { return {state: shadowState["sensor.bathroom_spot_1_energy"].state, attributes: shadowState["sensor.bathroom_spot_1_energy"].attributes} as SensorProperties}
},

['toilet_power']: {
  entity_id: "sensor.toilet_power",
get entity() { return {state: shadowState["sensor.toilet_power"].state, attributes: shadowState["sensor.toilet_power"].attributes} as SensorProperties}
},

['toilet_energy']: {
  entity_id: "sensor.toilet_energy",
get entity() { return {state: shadowState["sensor.toilet_energy"].state, attributes: shadowState["sensor.toilet_energy"].attributes} as SensorProperties}
},

['garage_fridge_power']: {
  entity_id: "sensor.garage_fridge_power",
get entity() { return {state: shadowState["sensor.garage_fridge_power"].state, attributes: shadowState["sensor.garage_fridge_power"].attributes} as SensorProperties}
},

['garage_fridge_energy']: {
  entity_id: "sensor.garage_fridge_energy",
get entity() { return {state: shadowState["sensor.garage_fridge_energy"].state, attributes: shadowState["sensor.garage_fridge_energy"].attributes} as SensorProperties}
},

['0x14b457fffefafbcf_power']: {
  entity_id: "sensor.0x14b457fffefafbcf_power",
get entity() { return {state: shadowState["sensor.0x14b457fffefafbcf_power"].state, attributes: shadowState["sensor.0x14b457fffefafbcf_power"].attributes} as SensorProperties}
},

['0x14b457fffefafbcf_energy']: {
  entity_id: "sensor.0x14b457fffefafbcf_energy",
get entity() { return {state: shadowState["sensor.0x14b457fffefafbcf_energy"].state, attributes: shadowState["sensor.0x14b457fffefafbcf_energy"].attributes} as SensorProperties}
},

['0x0017880109bde997_power']: {
  entity_id: "sensor.0x0017880109bde997_power",
get entity() { return {state: shadowState["sensor.0x0017880109bde997_power"].state, attributes: shadowState["sensor.0x0017880109bde997_power"].attributes} as SensorProperties}
},

['0x0017880109bde997_energy']: {
  entity_id: "sensor.0x0017880109bde997_energy",
get entity() { return {state: shadowState["sensor.0x0017880109bde997_energy"].state, attributes: shadowState["sensor.0x0017880109bde997_energy"].attributes} as SensorProperties}
},

['0x001788010b21a974_power']: {
  entity_id: "sensor.0x001788010b21a974_power",
get entity() { return {state: shadowState["sensor.0x001788010b21a974_power"].state, attributes: shadowState["sensor.0x001788010b21a974_power"].attributes} as SensorProperties}
},

['0x001788010b21a974_energy']: {
  entity_id: "sensor.0x001788010b21a974_energy",
get entity() { return {state: shadowState["sensor.0x001788010b21a974_energy"].state, attributes: shadowState["sensor.0x001788010b21a974_energy"].attributes} as SensorProperties}
},

['garage_position_2']: {
  entity_id: "sensor.garage_position_2",
get entity() { return {state: shadowState["sensor.garage_position_2"].state, attributes: shadowState["sensor.garage_position_2"].attributes} as SensorProperties}
},

['garage_state_2']: {
  entity_id: "sensor.garage_state_2",
get entity() { return {state: shadowState["sensor.garage_state_2"].state, attributes: shadowState["sensor.garage_state_2"].attributes} as SensorProperties}
},

['g4_doorbell_detected_object']: {
  entity_id: "sensor.g4_doorbell_detected_object",
get entity() { return {state: shadowState["sensor.g4_doorbell_detected_object"].state, attributes: shadowState["sensor.g4_doorbell_detected_object"].attributes} as SensorProperties}
},

['g4_bullet_detected_object']: {
  entity_id: "sensor.g4_bullet_detected_object",
get entity() { return {state: shadowState["sensor.g4_bullet_detected_object"].state, attributes: shadowState["sensor.g4_bullet_detected_object"].attributes} as SensorProperties}
},

['bedroom_bed_light_power']: {
  entity_id: "sensor.bedroom_bed_light_power",
get entity() { return {state: shadowState["sensor.bedroom_bed_light_power"].state, attributes: shadowState["sensor.bedroom_bed_light_power"].attributes} as SensorProperties}
},

['bedroom_bed_light_energy']: {
  entity_id: "sensor.bedroom_bed_light_energy",
get entity() { return {state: shadowState["sensor.bedroom_bed_light_energy"].state, attributes: shadowState["sensor.bedroom_bed_light_energy"].attributes} as SensorProperties}
},

['rx']: {
  entity_id: "sensor.rx",
get entity() { return {state: shadowState["sensor.rx"].state, attributes: shadowState["sensor.rx"].attributes} as SensorProperties}
},

['tx']: {
  entity_id: "sensor.tx",
get entity() { return {state: shadowState["sensor.tx"].state, attributes: shadowState["sensor.tx"].attributes} as SensorProperties}
},

['rx_2']: {
  entity_id: "sensor.rx_2",
get entity() { return {state: shadowState["sensor.rx_2"].state, attributes: shadowState["sensor.rx_2"].attributes} as SensorProperties}
},

['tx_2']: {
  entity_id: "sensor.tx_2",
get entity() { return {state: shadowState["sensor.tx_2"].state, attributes: shadowState["sensor.tx_2"].attributes} as SensorProperties}
},

['aida_rx']: {
  entity_id: "sensor.aida_rx",
get entity() { return {state: shadowState["sensor.aida_rx"].state, attributes: shadowState["sensor.aida_rx"].attributes} as SensorProperties}
},

['aida_tx']: {
  entity_id: "sensor.aida_tx",
get entity() { return {state: shadowState["sensor.aida_tx"].state, attributes: shadowState["sensor.aida_tx"].attributes} as SensorProperties}
},

['tims_mbp_rx']: {
  entity_id: "sensor.tims_mbp_rx",
get entity() { return {state: shadowState["sensor.tims_mbp_rx"].state, attributes: shadowState["sensor.tims_mbp_rx"].attributes} as SensorProperties}
},

['tims_mbp_tx']: {
  entity_id: "sensor.tims_mbp_tx",
get entity() { return {state: shadowState["sensor.tims_mbp_tx"].state, attributes: shadowState["sensor.tims_mbp_tx"].attributes} as SensorProperties}
},

['g4_doorbell_rx']: {
  entity_id: "sensor.g4_doorbell_rx",
get entity() { return {state: shadowState["sensor.g4_doorbell_rx"].state, attributes: shadowState["sensor.g4_doorbell_rx"].attributes} as SensorProperties}
},

['g4_doorbell_tx']: {
  entity_id: "sensor.g4_doorbell_tx",
get entity() { return {state: shadowState["sensor.g4_doorbell_tx"].state, attributes: shadowState["sensor.g4_doorbell_tx"].attributes} as SensorProperties}
},

['broadlink_remote_b8_f4_bf_rx']: {
  entity_id: "sensor.broadlink_remote_b8_f4_bf_rx",
get entity() { return {state: shadowState["sensor.broadlink_remote_b8_f4_bf_rx"].state, attributes: shadowState["sensor.broadlink_remote_b8_f4_bf_rx"].attributes} as SensorProperties}
},

['broadlink_remote_b8_f4_bf_tx']: {
  entity_id: "sensor.broadlink_remote_b8_f4_bf_tx",
get entity() { return {state: shadowState["sensor.broadlink_remote_b8_f4_bf_tx"].state, attributes: shadowState["sensor.broadlink_remote_b8_f4_bf_tx"].attributes} as SensorProperties}
},

['uvc_g4_bullet_rx']: {
  entity_id: "sensor.uvc_g4_bullet_rx",
get entity() { return {state: shadowState["sensor.uvc_g4_bullet_rx"].state, attributes: shadowState["sensor.uvc_g4_bullet_rx"].attributes} as SensorProperties}
},

['uvc_g4_bullet_tx']: {
  entity_id: "sensor.uvc_g4_bullet_tx",
get entity() { return {state: shadowState["sensor.uvc_g4_bullet_tx"].state, attributes: shadowState["sensor.uvc_g4_bullet_tx"].attributes} as SensorProperties}
},

['wb457613_rx']: {
  entity_id: "sensor.wb457613_rx",
get entity() { return {state: shadowState["sensor.wb457613_rx"].state, attributes: shadowState["sensor.wb457613_rx"].attributes} as SensorProperties}
},

['wb457613_tx']: {
  entity_id: "sensor.wb457613_tx",
get entity() { return {state: shadowState["sensor.wb457613_tx"].state, attributes: shadowState["sensor.wb457613_tx"].attributes} as SensorProperties}
},

['kapy_rx']: {
  entity_id: "sensor.kapy_rx",
get entity() { return {state: shadowState["sensor.kapy_rx"].state, attributes: shadowState["sensor.kapy_rx"].attributes} as SensorProperties}
},

['kapy_tx']: {
  entity_id: "sensor.kapy_tx",
get entity() { return {state: shadowState["sensor.kapy_tx"].state, attributes: shadowState["sensor.kapy_tx"].attributes} as SensorProperties}
},

['broadlink_wifi_device_23_cb_47_rx']: {
  entity_id: "sensor.broadlink_wifi_device_23_cb_47_rx",
get entity() { return {state: shadowState["sensor.broadlink_wifi_device_23_cb_47_rx"].state, attributes: shadowState["sensor.broadlink_wifi_device_23_cb_47_rx"].attributes} as SensorProperties}
},

['broadlink_wifi_device_23_cb_47_tx']: {
  entity_id: "sensor.broadlink_wifi_device_23_cb_47_tx",
get entity() { return {state: shadowState["sensor.broadlink_wifi_device_23_cb_47_tx"].state, attributes: shadowState["sensor.broadlink_wifi_device_23_cb_47_tx"].attributes} as SensorProperties}
},

['rx_3']: {
  entity_id: "sensor.rx_3",
get entity() { return {state: shadowState["sensor.rx_3"].state, attributes: shadowState["sensor.rx_3"].attributes} as SensorProperties}
},

['tx_3']: {
  entity_id: "sensor.tx_3",
get entity() { return {state: shadowState["sensor.tx_3"].state, attributes: shadowState["sensor.tx_3"].attributes} as SensorProperties}
},

['rx_4']: {
  entity_id: "sensor.rx_4",
get entity() { return {state: shadowState["sensor.rx_4"].state, attributes: shadowState["sensor.rx_4"].attributes} as SensorProperties}
},

['tx_4']: {
  entity_id: "sensor.tx_4",
get entity() { return {state: shadowState["sensor.tx_4"].state, attributes: shadowState["sensor.tx_4"].attributes} as SensorProperties}
},

['lt_621jtg3_rx']: {
  entity_id: "sensor.lt_621jtg3_rx",
get entity() { return {state: shadowState["sensor.lt_621jtg3_rx"].state, attributes: shadowState["sensor.lt_621jtg3_rx"].attributes} as SensorProperties}
},

['lt_621jtg3_tx']: {
  entity_id: "sensor.lt_621jtg3_tx",
get entity() { return {state: shadowState["sensor.lt_621jtg3_tx"].state, attributes: shadowState["sensor.lt_621jtg3_tx"].attributes} as SensorProperties}
},

['rx_5']: {
  entity_id: "sensor.rx_5",
get entity() { return {state: shadowState["sensor.rx_5"].state, attributes: shadowState["sensor.rx_5"].attributes} as SensorProperties}
},

['tx_5']: {
  entity_id: "sensor.tx_5",
get entity() { return {state: shadowState["sensor.tx_5"].state, attributes: shadowState["sensor.tx_5"].attributes} as SensorProperties}
},

['rx_6']: {
  entity_id: "sensor.rx_6",
get entity() { return {state: shadowState["sensor.rx_6"].state, attributes: shadowState["sensor.rx_6"].attributes} as SensorProperties}
},

['tx_6']: {
  entity_id: "sensor.tx_6",
get entity() { return {state: shadowState["sensor.tx_6"].state, attributes: shadowState["sensor.tx_6"].attributes} as SensorProperties}
},

['broadlink_remote_72_4c_9b_rx']: {
  entity_id: "sensor.broadlink_remote_72_4c_9b_rx",
get entity() { return {state: shadowState["sensor.broadlink_remote_72_4c_9b_rx"].state, attributes: shadowState["sensor.broadlink_remote_72_4c_9b_rx"].attributes} as SensorProperties}
},

['broadlink_remote_72_4c_9b_tx']: {
  entity_id: "sensor.broadlink_remote_72_4c_9b_tx",
get entity() { return {state: shadowState["sensor.broadlink_remote_72_4c_9b_tx"].state, attributes: shadowState["sensor.broadlink_remote_72_4c_9b_tx"].attributes} as SensorProperties}
},

['gs1200_8_rx']: {
  entity_id: "sensor.gs1200_8_rx",
get entity() { return {state: shadowState["sensor.gs1200_8_rx"].state, attributes: shadowState["sensor.gs1200_8_rx"].attributes} as SensorProperties}
},

['gs1200_8_tx']: {
  entity_id: "sensor.gs1200_8_tx",
get entity() { return {state: shadowState["sensor.gs1200_8_tx"].state, attributes: shadowState["sensor.gs1200_8_tx"].attributes} as SensorProperties}
},

['rx_7']: {
  entity_id: "sensor.rx_7",
get entity() { return {state: shadowState["sensor.rx_7"].state, attributes: shadowState["sensor.rx_7"].attributes} as SensorProperties}
},

['tx_7']: {
  entity_id: "sensor.tx_7",
get entity() { return {state: shadowState["sensor.tx_7"].state, attributes: shadowState["sensor.tx_7"].attributes} as SensorProperties}
},

['rx_8']: {
  entity_id: "sensor.rx_8",
get entity() { return {state: shadowState["sensor.rx_8"].state, attributes: shadowState["sensor.rx_8"].attributes} as SensorProperties}
},

['tx_8']: {
  entity_id: "sensor.tx_8",
get entity() { return {state: shadowState["sensor.tx_8"].state, attributes: shadowState["sensor.tx_8"].attributes} as SensorProperties}
},

['sma3004169620_rx']: {
  entity_id: "sensor.sma3004169620_rx",
get entity() { return {state: shadowState["sensor.sma3004169620_rx"].state, attributes: shadowState["sensor.sma3004169620_rx"].attributes} as SensorProperties}
},

['sma3004169620_tx']: {
  entity_id: "sensor.sma3004169620_tx",
get entity() { return {state: shadowState["sensor.sma3004169620_tx"].state, attributes: shadowState["sensor.sma3004169620_tx"].attributes} as SensorProperties}
},

['rx_9']: {
  entity_id: "sensor.rx_9",
get entity() { return {state: shadowState["sensor.rx_9"].state, attributes: shadowState["sensor.rx_9"].attributes} as SensorProperties}
},

['tx_9']: {
  entity_id: "sensor.tx_9",
get entity() { return {state: shadowState["sensor.tx_9"].state, attributes: shadowState["sensor.tx_9"].attributes} as SensorProperties}
},

['air_de_gaby_rx']: {
  entity_id: "sensor.air_de_gaby_rx",
get entity() { return {state: shadowState["sensor.air_de_gaby_rx"].state, attributes: shadowState["sensor.air_de_gaby_rx"].attributes} as SensorProperties}
},

['air_de_gaby_tx']: {
  entity_id: "sensor.air_de_gaby_tx",
get entity() { return {state: shadowState["sensor.air_de_gaby_tx"].state, attributes: shadowState["sensor.air_de_gaby_tx"].attributes} as SensorProperties}
},

['android_5ef1b103dc61d633_rx']: {
  entity_id: "sensor.android_5ef1b103dc61d633_rx",
get entity() { return {state: shadowState["sensor.android_5ef1b103dc61d633_rx"].state, attributes: shadowState["sensor.android_5ef1b103dc61d633_rx"].attributes} as SensorProperties}
},

['android_5ef1b103dc61d633_tx']: {
  entity_id: "sensor.android_5ef1b103dc61d633_tx",
get entity() { return {state: shadowState["sensor.android_5ef1b103dc61d633_tx"].state, attributes: shadowState["sensor.android_5ef1b103dc61d633_tx"].attributes} as SensorProperties}
},

['rx_10']: {
  entity_id: "sensor.rx_10",
get entity() { return {state: shadowState["sensor.rx_10"].state, attributes: shadowState["sensor.rx_10"].attributes} as SensorProperties}
},

['tx_10']: {
  entity_id: "sensor.tx_10",
get entity() { return {state: shadowState["sensor.tx_10"].state, attributes: shadowState["sensor.tx_10"].attributes} as SensorProperties}
},

['lt_621jtg3_rx_2']: {
  entity_id: "sensor.lt_621jtg3_rx_2",
get entity() { return {state: shadowState["sensor.lt_621jtg3_rx_2"].state, attributes: shadowState["sensor.lt_621jtg3_rx_2"].attributes} as SensorProperties}
},

['lt_621jtg3_tx_2']: {
  entity_id: "sensor.lt_621jtg3_tx_2",
get entity() { return {state: shadowState["sensor.lt_621jtg3_tx_2"].state, attributes: shadowState["sensor.lt_621jtg3_tx_2"].attributes} as SensorProperties}
},

['broadlink_remote_0c_81_90_rx']: {
  entity_id: "sensor.broadlink_remote_0c_81_90_rx",
get entity() { return {state: shadowState["sensor.broadlink_remote_0c_81_90_rx"].state, attributes: shadowState["sensor.broadlink_remote_0c_81_90_rx"].attributes} as SensorProperties}
},

['broadlink_remote_0c_81_90_tx']: {
  entity_id: "sensor.broadlink_remote_0c_81_90_tx",
get entity() { return {state: shadowState["sensor.broadlink_remote_0c_81_90_tx"].state, attributes: shadowState["sensor.broadlink_remote_0c_81_90_tx"].attributes} as SensorProperties}
},

['galaxywatch3_6bc3_rx']: {
  entity_id: "sensor.galaxywatch3_6bc3_rx",
get entity() { return {state: shadowState["sensor.galaxywatch3_6bc3_rx"].state, attributes: shadowState["sensor.galaxywatch3_6bc3_rx"].attributes} as SensorProperties}
},

['galaxywatch3_6bc3_tx']: {
  entity_id: "sensor.galaxywatch3_6bc3_tx",
get entity() { return {state: shadowState["sensor.galaxywatch3_6bc3_tx"].state, attributes: shadowState["sensor.galaxywatch3_6bc3_tx"].attributes} as SensorProperties}
},

['rx_11']: {
  entity_id: "sensor.rx_11",
get entity() { return {state: shadowState["sensor.rx_11"].state, attributes: shadowState["sensor.rx_11"].attributes} as SensorProperties}
},

['tx_11']: {
  entity_id: "sensor.tx_11",
get entity() { return {state: shadowState["sensor.tx_11"].state, attributes: shadowState["sensor.tx_11"].attributes} as SensorProperties}
},

['uptime']: {
  entity_id: "sensor.uptime",
get entity() { return {state: shadowState["sensor.uptime"].state, attributes: shadowState["sensor.uptime"].attributes} as SensorProperties}
},

['uptime_2']: {
  entity_id: "sensor.uptime_2",
get entity() { return {state: shadowState["sensor.uptime_2"].state, attributes: shadowState["sensor.uptime_2"].attributes} as SensorProperties}
},

['aida_uptime']: {
  entity_id: "sensor.aida_uptime",
get entity() { return {state: shadowState["sensor.aida_uptime"].state, attributes: shadowState["sensor.aida_uptime"].attributes} as SensorProperties}
},

['tims_mbp_uptime']: {
  entity_id: "sensor.tims_mbp_uptime",
get entity() { return {state: shadowState["sensor.tims_mbp_uptime"].state, attributes: shadowState["sensor.tims_mbp_uptime"].attributes} as SensorProperties}
},

['g4_doorbell_uptime_2']: {
  entity_id: "sensor.g4_doorbell_uptime_2",
get entity() { return {state: shadowState["sensor.g4_doorbell_uptime_2"].state, attributes: shadowState["sensor.g4_doorbell_uptime_2"].attributes} as SensorProperties}
},

['broadlink_remote_b8_f4_bf_uptime']: {
  entity_id: "sensor.broadlink_remote_b8_f4_bf_uptime",
get entity() { return {state: shadowState["sensor.broadlink_remote_b8_f4_bf_uptime"].state, attributes: shadowState["sensor.broadlink_remote_b8_f4_bf_uptime"].attributes} as SensorProperties}
},

['uvc_g4_bullet_uptime']: {
  entity_id: "sensor.uvc_g4_bullet_uptime",
get entity() { return {state: shadowState["sensor.uvc_g4_bullet_uptime"].state, attributes: shadowState["sensor.uvc_g4_bullet_uptime"].attributes} as SensorProperties}
},

['wb457613_uptime']: {
  entity_id: "sensor.wb457613_uptime",
get entity() { return {state: shadowState["sensor.wb457613_uptime"].state, attributes: shadowState["sensor.wb457613_uptime"].attributes} as SensorProperties}
},

['kapy_uptime']: {
  entity_id: "sensor.kapy_uptime",
get entity() { return {state: shadowState["sensor.kapy_uptime"].state, attributes: shadowState["sensor.kapy_uptime"].attributes} as SensorProperties}
},

['broadlink_wifi_device_23_cb_47_uptime']: {
  entity_id: "sensor.broadlink_wifi_device_23_cb_47_uptime",
get entity() { return {state: shadowState["sensor.broadlink_wifi_device_23_cb_47_uptime"].state, attributes: shadowState["sensor.broadlink_wifi_device_23_cb_47_uptime"].attributes} as SensorProperties}
},

['uptime_3']: {
  entity_id: "sensor.uptime_3",
get entity() { return {state: shadowState["sensor.uptime_3"].state, attributes: shadowState["sensor.uptime_3"].attributes} as SensorProperties}
},

['uptime_4']: {
  entity_id: "sensor.uptime_4",
get entity() { return {state: shadowState["sensor.uptime_4"].state, attributes: shadowState["sensor.uptime_4"].attributes} as SensorProperties}
},

['lt_621jtg3_uptime']: {
  entity_id: "sensor.lt_621jtg3_uptime",
get entity() { return {state: shadowState["sensor.lt_621jtg3_uptime"].state, attributes: shadowState["sensor.lt_621jtg3_uptime"].attributes} as SensorProperties}
},

['uptime_5']: {
  entity_id: "sensor.uptime_5",
get entity() { return {state: shadowState["sensor.uptime_5"].state, attributes: shadowState["sensor.uptime_5"].attributes} as SensorProperties}
},

['uptime_6']: {
  entity_id: "sensor.uptime_6",
get entity() { return {state: shadowState["sensor.uptime_6"].state, attributes: shadowState["sensor.uptime_6"].attributes} as SensorProperties}
},

['broadlink_remote_72_4c_9b_uptime']: {
  entity_id: "sensor.broadlink_remote_72_4c_9b_uptime",
get entity() { return {state: shadowState["sensor.broadlink_remote_72_4c_9b_uptime"].state, attributes: shadowState["sensor.broadlink_remote_72_4c_9b_uptime"].attributes} as SensorProperties}
},

['gs1200_8_uptime']: {
  entity_id: "sensor.gs1200_8_uptime",
get entity() { return {state: shadowState["sensor.gs1200_8_uptime"].state, attributes: shadowState["sensor.gs1200_8_uptime"].attributes} as SensorProperties}
},

['uptime_7']: {
  entity_id: "sensor.uptime_7",
get entity() { return {state: shadowState["sensor.uptime_7"].state, attributes: shadowState["sensor.uptime_7"].attributes} as SensorProperties}
},

['uptime_8']: {
  entity_id: "sensor.uptime_8",
get entity() { return {state: shadowState["sensor.uptime_8"].state, attributes: shadowState["sensor.uptime_8"].attributes} as SensorProperties}
},

['sma3004169620_uptime']: {
  entity_id: "sensor.sma3004169620_uptime",
get entity() { return {state: shadowState["sensor.sma3004169620_uptime"].state, attributes: shadowState["sensor.sma3004169620_uptime"].attributes} as SensorProperties}
},

['uptime_9']: {
  entity_id: "sensor.uptime_9",
get entity() { return {state: shadowState["sensor.uptime_9"].state, attributes: shadowState["sensor.uptime_9"].attributes} as SensorProperties}
},

['air_de_gaby_uptime']: {
  entity_id: "sensor.air_de_gaby_uptime",
get entity() { return {state: shadowState["sensor.air_de_gaby_uptime"].state, attributes: shadowState["sensor.air_de_gaby_uptime"].attributes} as SensorProperties}
},

['android_5ef1b103dc61d633_uptime']: {
  entity_id: "sensor.android_5ef1b103dc61d633_uptime",
get entity() { return {state: shadowState["sensor.android_5ef1b103dc61d633_uptime"].state, attributes: shadowState["sensor.android_5ef1b103dc61d633_uptime"].attributes} as SensorProperties}
},

['uptime_10']: {
  entity_id: "sensor.uptime_10",
get entity() { return {state: shadowState["sensor.uptime_10"].state, attributes: shadowState["sensor.uptime_10"].attributes} as SensorProperties}
},

['lt_621jtg3_uptime_2']: {
  entity_id: "sensor.lt_621jtg3_uptime_2",
get entity() { return {state: shadowState["sensor.lt_621jtg3_uptime_2"].state, attributes: shadowState["sensor.lt_621jtg3_uptime_2"].attributes} as SensorProperties}
},

['broadlink_remote_0c_81_90_uptime']: {
  entity_id: "sensor.broadlink_remote_0c_81_90_uptime",
get entity() { return {state: shadowState["sensor.broadlink_remote_0c_81_90_uptime"].state, attributes: shadowState["sensor.broadlink_remote_0c_81_90_uptime"].attributes} as SensorProperties}
},

['galaxywatch3_6bc3_uptime']: {
  entity_id: "sensor.galaxywatch3_6bc3_uptime",
get entity() { return {state: shadowState["sensor.galaxywatch3_6bc3_uptime"].state, attributes: shadowState["sensor.galaxywatch3_6bc3_uptime"].attributes} as SensorProperties}
},

['uptime_11']: {
  entity_id: "sensor.uptime_11",
get entity() { return {state: shadowState["sensor.uptime_11"].state, attributes: shadowState["sensor.uptime_11"].attributes} as SensorProperties}
},

['galaxy_s22_rx']: {
  entity_id: "sensor.galaxy_s22_rx",
get entity() { return {state: shadowState["sensor.galaxy_s22_rx"].state, attributes: shadowState["sensor.galaxy_s22_rx"].attributes} as SensorProperties}
},

['galaxy_s22_tx']: {
  entity_id: "sensor.galaxy_s22_tx",
get entity() { return {state: shadowState["sensor.galaxy_s22_tx"].state, attributes: shadowState["sensor.galaxy_s22_tx"].attributes} as SensorProperties}
},

['galaxy_s22_uptime']: {
  entity_id: "sensor.galaxy_s22_uptime",
get entity() { return {state: shadowState["sensor.galaxy_s22_uptime"].state, attributes: shadowState["sensor.galaxy_s22_uptime"].attributes} as SensorProperties}
},

['rx_12']: {
  entity_id: "sensor.rx_12",
get entity() { return {state: shadowState["sensor.rx_12"].state, attributes: shadowState["sensor.rx_12"].attributes} as SensorProperties}
},

['tx_12']: {
  entity_id: "sensor.tx_12",
get entity() { return {state: shadowState["sensor.tx_12"].state, attributes: shadowState["sensor.tx_12"].attributes} as SensorProperties}
},

['uptime_12']: {
  entity_id: "sensor.uptime_12",
get entity() { return {state: shadowState["sensor.uptime_12"].state, attributes: shadowState["sensor.uptime_12"].attributes} as SensorProperties}
},

['living_room_esp32_rx']: {
  entity_id: "sensor.living_room_esp32_rx",
get entity() { return {state: shadowState["sensor.living_room_esp32_rx"].state, attributes: shadowState["sensor.living_room_esp32_rx"].attributes} as SensorProperties}
},

['living_room_esp32_tx']: {
  entity_id: "sensor.living_room_esp32_tx",
get entity() { return {state: shadowState["sensor.living_room_esp32_tx"].state, attributes: shadowState["sensor.living_room_esp32_tx"].attributes} as SensorProperties}
},

['living_room_esp32_uptime']: {
  entity_id: "sensor.living_room_esp32_uptime",
get entity() { return {state: shadowState["sensor.living_room_esp32_uptime"].state, attributes: shadowState["sensor.living_room_esp32_uptime"].attributes} as SensorProperties}
},

['rx_13']: {
  entity_id: "sensor.rx_13",
get entity() { return {state: shadowState["sensor.rx_13"].state, attributes: shadowState["sensor.rx_13"].attributes} as SensorProperties}
},

['tx_13']: {
  entity_id: "sensor.tx_13",
get entity() { return {state: shadowState["sensor.tx_13"].state, attributes: shadowState["sensor.tx_13"].attributes} as SensorProperties}
},

['uptime_13']: {
  entity_id: "sensor.uptime_13",
get entity() { return {state: shadowState["sensor.uptime_13"].state, attributes: shadowState["sensor.uptime_13"].attributes} as SensorProperties}
},

['rx_14']: {
  entity_id: "sensor.rx_14",
get entity() { return {state: shadowState["sensor.rx_14"].state, attributes: shadowState["sensor.rx_14"].attributes} as SensorProperties}
},

['tx_14']: {
  entity_id: "sensor.tx_14",
get entity() { return {state: shadowState["sensor.tx_14"].state, attributes: shadowState["sensor.tx_14"].attributes} as SensorProperties}
},

['uptime_14']: {
  entity_id: "sensor.uptime_14",
get entity() { return {state: shadowState["sensor.uptime_14"].state, attributes: shadowState["sensor.uptime_14"].attributes} as SensorProperties}
},

['rx_15']: {
  entity_id: "sensor.rx_15",
get entity() { return {state: shadowState["sensor.rx_15"].state, attributes: shadowState["sensor.rx_15"].attributes} as SensorProperties}
},

['tx_15']: {
  entity_id: "sensor.tx_15",
get entity() { return {state: shadowState["sensor.tx_15"].state, attributes: shadowState["sensor.tx_15"].attributes} as SensorProperties}
},

['uptime_15']: {
  entity_id: "sensor.uptime_15",
get entity() { return {state: shadowState["sensor.uptime_15"].state, attributes: shadowState["sensor.uptime_15"].attributes} as SensorProperties}
},

['hello']: {
  entity_id: "sensor.hello",
get entity() { return {state: shadowState["sensor.hello"].state, attributes: shadowState["sensor.hello"].attributes} as SensorProperties}
},

['rx_16']: {
  entity_id: "sensor.rx_16",
get entity() { return {state: shadowState["sensor.rx_16"].state, attributes: shadowState["sensor.rx_16"].attributes} as SensorProperties}
},

['tx_16']: {
  entity_id: "sensor.tx_16",
get entity() { return {state: shadowState["sensor.tx_16"].state, attributes: shadowState["sensor.tx_16"].attributes} as SensorProperties}
},

['uptime_16']: {
  entity_id: "sensor.uptime_16",
get entity() { return {state: shadowState["sensor.uptime_16"].state, attributes: shadowState["sensor.uptime_16"].attributes} as SensorProperties}
},

['galaxy_j5_2016_rx']: {
  entity_id: "sensor.galaxy_j5_2016_rx",
get entity() { return {state: shadowState["sensor.galaxy_j5_2016_rx"].state, attributes: shadowState["sensor.galaxy_j5_2016_rx"].attributes} as SensorProperties}
},

['galaxy_j5_2016_tx']: {
  entity_id: "sensor.galaxy_j5_2016_tx",
get entity() { return {state: shadowState["sensor.galaxy_j5_2016_tx"].state, attributes: shadowState["sensor.galaxy_j5_2016_tx"].attributes} as SensorProperties}
},

['galaxy_j5_2016_uptime']: {
  entity_id: "sensor.galaxy_j5_2016_uptime",
get entity() { return {state: shadowState["sensor.galaxy_j5_2016_uptime"].state, attributes: shadowState["sensor.galaxy_j5_2016_uptime"].attributes} as SensorProperties}
},

['rx_17']: {
  entity_id: "sensor.rx_17",
get entity() { return {state: shadowState["sensor.rx_17"].state, attributes: shadowState["sensor.rx_17"].attributes} as SensorProperties}
},

['tx_17']: {
  entity_id: "sensor.tx_17",
get entity() { return {state: shadowState["sensor.tx_17"].state, attributes: shadowState["sensor.tx_17"].attributes} as SensorProperties}
},

['uptime_17']: {
  entity_id: "sensor.uptime_17",
get entity() { return {state: shadowState["sensor.uptime_17"].state, attributes: shadowState["sensor.uptime_17"].attributes} as SensorProperties}
},

['rx_18']: {
  entity_id: "sensor.rx_18",
get entity() { return {state: shadowState["sensor.rx_18"].state, attributes: shadowState["sensor.rx_18"].attributes} as SensorProperties}
},

['tx_18']: {
  entity_id: "sensor.tx_18",
get entity() { return {state: shadowState["sensor.tx_18"].state, attributes: shadowState["sensor.tx_18"].attributes} as SensorProperties}
},

['uptime_18']: {
  entity_id: "sensor.uptime_18",
get entity() { return {state: shadowState["sensor.uptime_18"].state, attributes: shadowState["sensor.uptime_18"].attributes} as SensorProperties}
},

['rx_19']: {
  entity_id: "sensor.rx_19",
get entity() { return {state: shadowState["sensor.rx_19"].state, attributes: shadowState["sensor.rx_19"].attributes} as SensorProperties}
},

['tx_19']: {
  entity_id: "sensor.tx_19",
get entity() { return {state: shadowState["sensor.tx_19"].state, attributes: shadowState["sensor.tx_19"].attributes} as SensorProperties}
},

['uptime_19']: {
  entity_id: "sensor.uptime_19",
get entity() { return {state: shadowState["sensor.uptime_19"].state, attributes: shadowState["sensor.uptime_19"].attributes} as SensorProperties}
},

['rx_20']: {
  entity_id: "sensor.rx_20",
get entity() { return {state: shadowState["sensor.rx_20"].state, attributes: shadowState["sensor.rx_20"].attributes} as SensorProperties}
},

['tx_20']: {
  entity_id: "sensor.tx_20",
get entity() { return {state: shadowState["sensor.tx_20"].state, attributes: shadowState["sensor.tx_20"].attributes} as SensorProperties}
},

['uptime_20']: {
  entity_id: "sensor.uptime_20",
get entity() { return {state: shadowState["sensor.uptime_20"].state, attributes: shadowState["sensor.uptime_20"].attributes} as SensorProperties}
},

['rx_21']: {
  entity_id: "sensor.rx_21",
get entity() { return {state: shadowState["sensor.rx_21"].state, attributes: shadowState["sensor.rx_21"].attributes} as SensorProperties}
},

['tx_21']: {
  entity_id: "sensor.tx_21",
get entity() { return {state: shadowState["sensor.tx_21"].state, attributes: shadowState["sensor.tx_21"].attributes} as SensorProperties}
},

['uptime_21']: {
  entity_id: "sensor.uptime_21",
get entity() { return {state: shadowState["sensor.uptime_21"].state, attributes: shadowState["sensor.uptime_21"].attributes} as SensorProperties}
},

['rx_22']: {
  entity_id: "sensor.rx_22",
get entity() { return {state: shadowState["sensor.rx_22"].state, attributes: shadowState["sensor.rx_22"].attributes} as SensorProperties}
},

['tx_22']: {
  entity_id: "sensor.tx_22",
get entity() { return {state: shadowState["sensor.tx_22"].state, attributes: shadowState["sensor.tx_22"].attributes} as SensorProperties}
},

['uptime_22']: {
  entity_id: "sensor.uptime_22",
get entity() { return {state: shadowState["sensor.uptime_22"].state, attributes: shadowState["sensor.uptime_22"].attributes} as SensorProperties}
},

['rx_23']: {
  entity_id: "sensor.rx_23",
get entity() { return {state: shadowState["sensor.rx_23"].state, attributes: shadowState["sensor.rx_23"].attributes} as SensorProperties}
},

['tx_23']: {
  entity_id: "sensor.tx_23",
get entity() { return {state: shadowState["sensor.tx_23"].state, attributes: shadowState["sensor.tx_23"].attributes} as SensorProperties}
},

['uptime_23']: {
  entity_id: "sensor.uptime_23",
get entity() { return {state: shadowState["sensor.uptime_23"].state, attributes: shadowState["sensor.uptime_23"].attributes} as SensorProperties}
},

['office_esp32_rx']: {
  entity_id: "sensor.office_esp32_rx",
get entity() { return {state: shadowState["sensor.office_esp32_rx"].state, attributes: shadowState["sensor.office_esp32_rx"].attributes} as SensorProperties}
},

['office_esp32_tx']: {
  entity_id: "sensor.office_esp32_tx",
get entity() { return {state: shadowState["sensor.office_esp32_tx"].state, attributes: shadowState["sensor.office_esp32_tx"].attributes} as SensorProperties}
},

['office_esp32_uptime']: {
  entity_id: "sensor.office_esp32_uptime",
get entity() { return {state: shadowState["sensor.office_esp32_uptime"].state, attributes: shadowState["sensor.office_esp32_uptime"].attributes} as SensorProperties}
},

['nextcloud_system_version']: {
  entity_id: "sensor.nextcloud_system_version",
get entity() { return {state: shadowState["sensor.nextcloud_system_version"].state, attributes: shadowState["sensor.nextcloud_system_version"].attributes} as SensorProperties}
},

['nextcloud_system_theme']: {
  entity_id: "sensor.nextcloud_system_theme",
get entity() { return {state: shadowState["sensor.nextcloud_system_theme"].state, attributes: shadowState["sensor.nextcloud_system_theme"].attributes} as SensorProperties}
},

['nextcloud_system_memcache_local']: {
  entity_id: "sensor.nextcloud_system_memcache_local",
get entity() { return {state: shadowState["sensor.nextcloud_system_memcache_local"].state, attributes: shadowState["sensor.nextcloud_system_memcache_local"].attributes} as SensorProperties}
},

['nextcloud_system_memcache_distributed']: {
  entity_id: "sensor.nextcloud_system_memcache_distributed",
get entity() { return {state: shadowState["sensor.nextcloud_system_memcache_distributed"].state, attributes: shadowState["sensor.nextcloud_system_memcache_distributed"].attributes} as SensorProperties}
},

['nextcloud_system_memcache_locking']: {
  entity_id: "sensor.nextcloud_system_memcache_locking",
get entity() { return {state: shadowState["sensor.nextcloud_system_memcache_locking"].state, attributes: shadowState["sensor.nextcloud_system_memcache_locking"].attributes} as SensorProperties}
},

['nextcloud_system_freespace']: {
  entity_id: "sensor.nextcloud_system_freespace",
get entity() { return {state: shadowState["sensor.nextcloud_system_freespace"].state, attributes: shadowState["sensor.nextcloud_system_freespace"].attributes} as SensorProperties}
},

['nextcloud_system_cpuload']: {
  entity_id: "sensor.nextcloud_system_cpuload",
get entity() { return {state: shadowState["sensor.nextcloud_system_cpuload"].state, attributes: shadowState["sensor.nextcloud_system_cpuload"].attributes} as SensorProperties}
},

['nextcloud_system_mem_total']: {
  entity_id: "sensor.nextcloud_system_mem_total",
get entity() { return {state: shadowState["sensor.nextcloud_system_mem_total"].state, attributes: shadowState["sensor.nextcloud_system_mem_total"].attributes} as SensorProperties}
},

['nextcloud_system_mem_free']: {
  entity_id: "sensor.nextcloud_system_mem_free",
get entity() { return {state: shadowState["sensor.nextcloud_system_mem_free"].state, attributes: shadowState["sensor.nextcloud_system_mem_free"].attributes} as SensorProperties}
},

['nextcloud_system_swap_total']: {
  entity_id: "sensor.nextcloud_system_swap_total",
get entity() { return {state: shadowState["sensor.nextcloud_system_swap_total"].state, attributes: shadowState["sensor.nextcloud_system_swap_total"].attributes} as SensorProperties}
},

['nextcloud_system_swap_free']: {
  entity_id: "sensor.nextcloud_system_swap_free",
get entity() { return {state: shadowState["sensor.nextcloud_system_swap_free"].state, attributes: shadowState["sensor.nextcloud_system_swap_free"].attributes} as SensorProperties}
},

['nextcloud_system_apps_num_installed']: {
  entity_id: "sensor.nextcloud_system_apps_num_installed",
get entity() { return {state: shadowState["sensor.nextcloud_system_apps_num_installed"].state, attributes: shadowState["sensor.nextcloud_system_apps_num_installed"].attributes} as SensorProperties}
},

['nextcloud_system_apps_num_updates_available']: {
  entity_id: "sensor.nextcloud_system_apps_num_updates_available",
get entity() { return {state: shadowState["sensor.nextcloud_system_apps_num_updates_available"].state, attributes: shadowState["sensor.nextcloud_system_apps_num_updates_available"].attributes} as SensorProperties}
},

['nextcloud_storage_num_users']: {
  entity_id: "sensor.nextcloud_storage_num_users",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_users"].state, attributes: shadowState["sensor.nextcloud_storage_num_users"].attributes} as SensorProperties}
},

['nextcloud_storage_num_files']: {
  entity_id: "sensor.nextcloud_storage_num_files",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_files"].state, attributes: shadowState["sensor.nextcloud_storage_num_files"].attributes} as SensorProperties}
},

['nextcloud_storage_num_storages']: {
  entity_id: "sensor.nextcloud_storage_num_storages",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_storages"].state, attributes: shadowState["sensor.nextcloud_storage_num_storages"].attributes} as SensorProperties}
},

['nextcloud_storage_num_storages_local']: {
  entity_id: "sensor.nextcloud_storage_num_storages_local",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_storages_local"].state, attributes: shadowState["sensor.nextcloud_storage_num_storages_local"].attributes} as SensorProperties}
},

['nextcloud_storage_num_storages_home']: {
  entity_id: "sensor.nextcloud_storage_num_storages_home",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_storages_home"].state, attributes: shadowState["sensor.nextcloud_storage_num_storages_home"].attributes} as SensorProperties}
},

['nextcloud_storage_num_storages_other']: {
  entity_id: "sensor.nextcloud_storage_num_storages_other",
get entity() { return {state: shadowState["sensor.nextcloud_storage_num_storages_other"].state, attributes: shadowState["sensor.nextcloud_storage_num_storages_other"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares']: {
  entity_id: "sensor.nextcloud_shares_num_shares",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_user']: {
  entity_id: "sensor.nextcloud_shares_num_shares_user",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_user"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_user"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_groups']: {
  entity_id: "sensor.nextcloud_shares_num_shares_groups",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_groups"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_groups"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_link']: {
  entity_id: "sensor.nextcloud_shares_num_shares_link",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_link"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_link"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_mail']: {
  entity_id: "sensor.nextcloud_shares_num_shares_mail",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_mail"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_mail"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_room']: {
  entity_id: "sensor.nextcloud_shares_num_shares_room",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_room"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_room"].attributes} as SensorProperties}
},

['nextcloud_shares_num_shares_link_no_password']: {
  entity_id: "sensor.nextcloud_shares_num_shares_link_no_password",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_shares_link_no_password"].state, attributes: shadowState["sensor.nextcloud_shares_num_shares_link_no_password"].attributes} as SensorProperties}
},

['nextcloud_shares_num_fed_shares_sent']: {
  entity_id: "sensor.nextcloud_shares_num_fed_shares_sent",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_fed_shares_sent"].state, attributes: shadowState["sensor.nextcloud_shares_num_fed_shares_sent"].attributes} as SensorProperties}
},

['nextcloud_shares_num_fed_shares_received']: {
  entity_id: "sensor.nextcloud_shares_num_fed_shares_received",
get entity() { return {state: shadowState["sensor.nextcloud_shares_num_fed_shares_received"].state, attributes: shadowState["sensor.nextcloud_shares_num_fed_shares_received"].attributes} as SensorProperties}
},

['nextcloud_server_webserver']: {
  entity_id: "sensor.nextcloud_server_webserver",
get entity() { return {state: shadowState["sensor.nextcloud_server_webserver"].state, attributes: shadowState["sensor.nextcloud_server_webserver"].attributes} as SensorProperties}
},

['nextcloud_server_php_version']: {
  entity_id: "sensor.nextcloud_server_php_version",
get entity() { return {state: shadowState["sensor.nextcloud_server_php_version"].state, attributes: shadowState["sensor.nextcloud_server_php_version"].attributes} as SensorProperties}
},

['nextcloud_server_php_memory_limit']: {
  entity_id: "sensor.nextcloud_server_php_memory_limit",
get entity() { return {state: shadowState["sensor.nextcloud_server_php_memory_limit"].state, attributes: shadowState["sensor.nextcloud_server_php_memory_limit"].attributes} as SensorProperties}
},

['nextcloud_server_php_max_execution_time']: {
  entity_id: "sensor.nextcloud_server_php_max_execution_time",
get entity() { return {state: shadowState["sensor.nextcloud_server_php_max_execution_time"].state, attributes: shadowState["sensor.nextcloud_server_php_max_execution_time"].attributes} as SensorProperties}
},

['nextcloud_server_php_upload_max_filesize']: {
  entity_id: "sensor.nextcloud_server_php_upload_max_filesize",
get entity() { return {state: shadowState["sensor.nextcloud_server_php_upload_max_filesize"].state, attributes: shadowState["sensor.nextcloud_server_php_upload_max_filesize"].attributes} as SensorProperties}
},

['nextcloud_database_type']: {
  entity_id: "sensor.nextcloud_database_type",
get entity() { return {state: shadowState["sensor.nextcloud_database_type"].state, attributes: shadowState["sensor.nextcloud_database_type"].attributes} as SensorProperties}
},

['nextcloud_database_version']: {
  entity_id: "sensor.nextcloud_database_version",
get entity() { return {state: shadowState["sensor.nextcloud_database_version"].state, attributes: shadowState["sensor.nextcloud_database_version"].attributes} as SensorProperties}
},

['nextcloud_activeusers_last5minutes']: {
  entity_id: "sensor.nextcloud_activeusers_last5minutes",
get entity() { return {state: shadowState["sensor.nextcloud_activeusers_last5minutes"].state, attributes: shadowState["sensor.nextcloud_activeusers_last5minutes"].attributes} as SensorProperties}
},

['nextcloud_activeusers_last1hour']: {
  entity_id: "sensor.nextcloud_activeusers_last1hour",
get entity() { return {state: shadowState["sensor.nextcloud_activeusers_last1hour"].state, attributes: shadowState["sensor.nextcloud_activeusers_last1hour"].attributes} as SensorProperties}
},

['nextcloud_activeusers_last24hours']: {
  entity_id: "sensor.nextcloud_activeusers_last24hours",
get entity() { return {state: shadowState["sensor.nextcloud_activeusers_last24hours"].state, attributes: shadowState["sensor.nextcloud_activeusers_last24hours"].attributes} as SensorProperties}
},

['gabys_phone_estimated_distance']: {
  entity_id: "sensor.gabys_phone_estimated_distance",
get entity() { return {state: shadowState["sensor.gabys_phone_estimated_distance"].state, attributes: shadowState["sensor.gabys_phone_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2_estimated_distance"].attributes} as SensorProperties}
},

['nextcloud_system_apps_app_updates_calendar']: {
  entity_id: "sensor.nextcloud_system_apps_app_updates_calendar",
get entity() { return {state: shadowState["sensor.nextcloud_system_apps_app_updates_calendar"].state, attributes: shadowState["sensor.nextcloud_system_apps_app_updates_calendar"].attributes} as SensorProperties}
},

['nextcloud_system_apps_app_updates_contacts']: {
  entity_id: "sensor.nextcloud_system_apps_app_updates_contacts",
get entity() { return {state: shadowState["sensor.nextcloud_system_apps_app_updates_contacts"].state, attributes: shadowState["sensor.nextcloud_system_apps_app_updates_contacts"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c_estimated_distance"].attributes} as SensorProperties}
},

['rx_24']: {
  entity_id: "sensor.rx_24",
get entity() { return {state: shadowState["sensor.rx_24"].state, attributes: shadowState["sensor.rx_24"].attributes} as SensorProperties}
},

['tx_24']: {
  entity_id: "sensor.tx_24",
get entity() { return {state: shadowState["sensor.tx_24"].state, attributes: shadowState["sensor.tx_24"].attributes} as SensorProperties}
},

['uptime_24']: {
  entity_id: "sensor.uptime_24",
get entity() { return {state: shadowState["sensor.uptime_24"].state, attributes: shadowState["sensor.uptime_24"].attributes} as SensorProperties}
},

['rx_25']: {
  entity_id: "sensor.rx_25",
get entity() { return {state: shadowState["sensor.rx_25"].state, attributes: shadowState["sensor.rx_25"].attributes} as SensorProperties}
},

['tx_25']: {
  entity_id: "sensor.tx_25",
get entity() { return {state: shadowState["sensor.tx_25"].state, attributes: shadowState["sensor.tx_25"].attributes} as SensorProperties}
},

['uptime_25']: {
  entity_id: "sensor.uptime_25",
get entity() { return {state: shadowState["sensor.uptime_25"].state, attributes: shadowState["sensor.uptime_25"].attributes} as SensorProperties}
},

['rx_26']: {
  entity_id: "sensor.rx_26",
get entity() { return {state: shadowState["sensor.rx_26"].state, attributes: shadowState["sensor.rx_26"].attributes} as SensorProperties}
},

['tx_26']: {
  entity_id: "sensor.tx_26",
get entity() { return {state: shadowState["sensor.tx_26"].state, attributes: shadowState["sensor.tx_26"].attributes} as SensorProperties}
},

['uptime_26']: {
  entity_id: "sensor.uptime_26",
get entity() { return {state: shadowState["sensor.uptime_26"].state, attributes: shadowState["sensor.uptime_26"].attributes} as SensorProperties}
},

['rx_27']: {
  entity_id: "sensor.rx_27",
get entity() { return {state: shadowState["sensor.rx_27"].state, attributes: shadowState["sensor.rx_27"].attributes} as SensorProperties}
},

['tx_27']: {
  entity_id: "sensor.tx_27",
get entity() { return {state: shadowState["sensor.tx_27"].state, attributes: shadowState["sensor.tx_27"].attributes} as SensorProperties}
},

['uptime_27']: {
  entity_id: "sensor.uptime_27",
get entity() { return {state: shadowState["sensor.uptime_27"].state, attributes: shadowState["sensor.uptime_27"].attributes} as SensorProperties}
},

['rx_28']: {
  entity_id: "sensor.rx_28",
get entity() { return {state: shadowState["sensor.rx_28"].state, attributes: shadowState["sensor.rx_28"].attributes} as SensorProperties}
},

['tx_28']: {
  entity_id: "sensor.tx_28",
get entity() { return {state: shadowState["sensor.tx_28"].state, attributes: shadowState["sensor.tx_28"].attributes} as SensorProperties}
},

['uptime_28']: {
  entity_id: "sensor.uptime_28",
get entity() { return {state: shadowState["sensor.uptime_28"].state, attributes: shadowState["sensor.uptime_28"].attributes} as SensorProperties}
},

['rx_29']: {
  entity_id: "sensor.rx_29",
get entity() { return {state: shadowState["sensor.rx_29"].state, attributes: shadowState["sensor.rx_29"].attributes} as SensorProperties}
},

['tx_29']: {
  entity_id: "sensor.tx_29",
get entity() { return {state: shadowState["sensor.tx_29"].state, attributes: shadowState["sensor.tx_29"].attributes} as SensorProperties}
},

['uptime_29']: {
  entity_id: "sensor.uptime_29",
get entity() { return {state: shadowState["sensor.uptime_29"].state, attributes: shadowState["sensor.uptime_29"].attributes} as SensorProperties}
},

['apple_tv_rx']: {
  entity_id: "sensor.apple_tv_rx",
get entity() { return {state: shadowState["sensor.apple_tv_rx"].state, attributes: shadowState["sensor.apple_tv_rx"].attributes} as SensorProperties}
},

['apple_tv_tx']: {
  entity_id: "sensor.apple_tv_tx",
get entity() { return {state: shadowState["sensor.apple_tv_tx"].state, attributes: shadowState["sensor.apple_tv_tx"].attributes} as SensorProperties}
},

['apple_tv_uptime']: {
  entity_id: "sensor.apple_tv_uptime",
get entity() { return {state: shadowState["sensor.apple_tv_uptime"].state, attributes: shadowState["sensor.apple_tv_uptime"].attributes} as SensorProperties}
},

['living_room_rx']: {
  entity_id: "sensor.living_room_rx",
get entity() { return {state: shadowState["sensor.living_room_rx"].state, attributes: shadowState["sensor.living_room_rx"].attributes} as SensorProperties}
},

['living_room_tx']: {
  entity_id: "sensor.living_room_tx",
get entity() { return {state: shadowState["sensor.living_room_tx"].state, attributes: shadowState["sensor.living_room_tx"].attributes} as SensorProperties}
},

['living_room_uptime']: {
  entity_id: "sensor.living_room_uptime",
get entity() { return {state: shadowState["sensor.living_room_uptime"].state, attributes: shadowState["sensor.living_room_uptime"].attributes} as SensorProperties}
},

['rx_30']: {
  entity_id: "sensor.rx_30",
get entity() { return {state: shadowState["sensor.rx_30"].state, attributes: shadowState["sensor.rx_30"].attributes} as SensorProperties}
},

['tx_30']: {
  entity_id: "sensor.tx_30",
get entity() { return {state: shadowState["sensor.tx_30"].state, attributes: shadowState["sensor.tx_30"].attributes} as SensorProperties}
},

['uptime_30']: {
  entity_id: "sensor.uptime_30",
get entity() { return {state: shadowState["sensor.uptime_30"].state, attributes: shadowState["sensor.uptime_30"].attributes} as SensorProperties}
},

['saacbe39bdc4e468cc_297d_estimated_distance']: {
  entity_id: "sensor.saacbe39bdc4e468cc_297d_estimated_distance",
get entity() { return {state: shadowState["sensor.saacbe39bdc4e468cc_297d_estimated_distance"].state, attributes: shadowState["sensor.saacbe39bdc4e468cc_297d_estimated_distance"].attributes} as SensorProperties}
},

['antonios_mbp_rx']: {
  entity_id: "sensor.antonios_mbp_rx",
get entity() { return {state: shadowState["sensor.antonios_mbp_rx"].state, attributes: shadowState["sensor.antonios_mbp_rx"].attributes} as SensorProperties}
},

['antonios_mbp_tx']: {
  entity_id: "sensor.antonios_mbp_tx",
get entity() { return {state: shadowState["sensor.antonios_mbp_tx"].state, attributes: shadowState["sensor.antonios_mbp_tx"].attributes} as SensorProperties}
},

['antonios_mbp_uptime']: {
  entity_id: "sensor.antonios_mbp_uptime",
get entity() { return {state: shadowState["sensor.antonios_mbp_uptime"].state, attributes: shadowState["sensor.antonios_mbp_uptime"].attributes} as SensorProperties}
},

['rx_31']: {
  entity_id: "sensor.rx_31",
get entity() { return {state: shadowState["sensor.rx_31"].state, attributes: shadowState["sensor.rx_31"].attributes} as SensorProperties}
},

['tx_31']: {
  entity_id: "sensor.tx_31",
get entity() { return {state: shadowState["sensor.tx_31"].state, attributes: shadowState["sensor.tx_31"].attributes} as SensorProperties}
},

['uptime_31']: {
  entity_id: "sensor.uptime_31",
get entity() { return {state: shadowState["sensor.uptime_31"].state, attributes: shadowState["sensor.uptime_31"].attributes} as SensorProperties}
},

['rx_32']: {
  entity_id: "sensor.rx_32",
get entity() { return {state: shadowState["sensor.rx_32"].state, attributes: shadowState["sensor.rx_32"].attributes} as SensorProperties}
},

['tx_32']: {
  entity_id: "sensor.tx_32",
get entity() { return {state: shadowState["sensor.tx_32"].state, attributes: shadowState["sensor.tx_32"].attributes} as SensorProperties}
},

['uptime_32']: {
  entity_id: "sensor.uptime_32",
get entity() { return {state: shadowState["sensor.uptime_32"].state, attributes: shadowState["sensor.uptime_32"].attributes} as SensorProperties}
},

['rx_33']: {
  entity_id: "sensor.rx_33",
get entity() { return {state: shadowState["sensor.rx_33"].state, attributes: shadowState["sensor.rx_33"].attributes} as SensorProperties}
},

['tx_33']: {
  entity_id: "sensor.tx_33",
get entity() { return {state: shadowState["sensor.tx_33"].state, attributes: shadowState["sensor.tx_33"].attributes} as SensorProperties}
},

['uptime_33']: {
  entity_id: "sensor.uptime_33",
get entity() { return {state: shadowState["sensor.uptime_33"].state, attributes: shadowState["sensor.uptime_33"].attributes} as SensorProperties}
},

['hall_stairs_power']: {
  entity_id: "sensor.hall_stairs_power",
get entity() { return {state: shadowState["sensor.hall_stairs_power"].state, attributes: shadowState["sensor.hall_stairs_power"].attributes} as SensorProperties}
},

['hall_stairs_energy']: {
  entity_id: "sensor.hall_stairs_energy",
get entity() { return {state: shadowState["sensor.hall_stairs_energy"].state, attributes: shadowState["sensor.hall_stairs_energy"].attributes} as SensorProperties}
},

['living_room_ir_blaster_temperature']: {
  entity_id: "sensor.living_room_ir_blaster_temperature",
get entity() { return {state: shadowState["sensor.living_room_ir_blaster_temperature"].state, attributes: shadowState["sensor.living_room_ir_blaster_temperature"].attributes} as SensorProperties}
},

['living_room_ir_blaster_humidity']: {
  entity_id: "sensor.living_room_ir_blaster_humidity",
get entity() { return {state: shadowState["sensor.living_room_ir_blaster_humidity"].state, attributes: shadowState["sensor.living_room_ir_blaster_humidity"].attributes} as SensorProperties}
},

['rx_34']: {
  entity_id: "sensor.rx_34",
get entity() { return {state: shadowState["sensor.rx_34"].state, attributes: shadowState["sensor.rx_34"].attributes} as SensorProperties}
},

['tx_34']: {
  entity_id: "sensor.tx_34",
get entity() { return {state: shadowState["sensor.tx_34"].state, attributes: shadowState["sensor.tx_34"].attributes} as SensorProperties}
},

['kitchen_spot_1_power']: {
  entity_id: "sensor.kitchen_spot_1_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_1_power"].state, attributes: shadowState["sensor.kitchen_spot_1_power"].attributes} as SensorProperties}
},

['kitchen_spot_1_energy']: {
  entity_id: "sensor.kitchen_spot_1_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_1_energy"].state, attributes: shadowState["sensor.kitchen_spot_1_energy"].attributes} as SensorProperties}
},

['dining_room_spot_2_power']: {
  entity_id: "sensor.dining_room_spot_2_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_2_power"].state, attributes: shadowState["sensor.dining_room_spot_2_power"].attributes} as SensorProperties}
},

['dining_room_spot_2_energy']: {
  entity_id: "sensor.dining_room_spot_2_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_2_energy"].state, attributes: shadowState["sensor.dining_room_spot_2_energy"].attributes} as SensorProperties}
},

['dining_room_spot_1_power']: {
  entity_id: "sensor.dining_room_spot_1_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_1_power"].state, attributes: shadowState["sensor.dining_room_spot_1_power"].attributes} as SensorProperties}
},

['dining_room_spot_1_energy']: {
  entity_id: "sensor.dining_room_spot_1_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_1_energy"].state, attributes: shadowState["sensor.dining_room_spot_1_energy"].attributes} as SensorProperties}
},

['living_room_spot_3_power']: {
  entity_id: "sensor.living_room_spot_3_power",
get entity() { return {state: shadowState["sensor.living_room_spot_3_power"].state, attributes: shadowState["sensor.living_room_spot_3_power"].attributes} as SensorProperties}
},

['living_room_spot_3_energy']: {
  entity_id: "sensor.living_room_spot_3_energy",
get entity() { return {state: shadowState["sensor.living_room_spot_3_energy"].state, attributes: shadowState["sensor.living_room_spot_3_energy"].attributes} as SensorProperties}
},

['living_room_light_power']: {
  entity_id: "sensor.living_room_light_power",
get entity() { return {state: shadowState["sensor.living_room_light_power"].state, attributes: shadowState["sensor.living_room_light_power"].attributes} as SensorProperties}
},

['living_room_light_energy']: {
  entity_id: "sensor.living_room_light_energy",
get entity() { return {state: shadowState["sensor.living_room_light_energy"].state, attributes: shadowState["sensor.living_room_light_energy"].attributes} as SensorProperties}
},

['dining_room_spot_3_power']: {
  entity_id: "sensor.dining_room_spot_3_power",
get entity() { return {state: shadowState["sensor.dining_room_spot_3_power"].state, attributes: shadowState["sensor.dining_room_spot_3_power"].attributes} as SensorProperties}
},

['dining_room_spot_3_energy']: {
  entity_id: "sensor.dining_room_spot_3_energy",
get entity() { return {state: shadowState["sensor.dining_room_spot_3_energy"].state, attributes: shadowState["sensor.dining_room_spot_3_energy"].attributes} as SensorProperties}
},

['kitchen_spot_2_power']: {
  entity_id: "sensor.kitchen_spot_2_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_2_power"].state, attributes: shadowState["sensor.kitchen_spot_2_power"].attributes} as SensorProperties}
},

['kitchen_spot_2_energy']: {
  entity_id: "sensor.kitchen_spot_2_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_2_energy"].state, attributes: shadowState["sensor.kitchen_spot_2_energy"].attributes} as SensorProperties}
},

['kitchen_spot_3_power']: {
  entity_id: "sensor.kitchen_spot_3_power",
get entity() { return {state: shadowState["sensor.kitchen_spot_3_power"].state, attributes: shadowState["sensor.kitchen_spot_3_power"].attributes} as SensorProperties}
},

['kitchen_spot_3_energy']: {
  entity_id: "sensor.kitchen_spot_3_energy",
get entity() { return {state: shadowState["sensor.kitchen_spot_3_energy"].state, attributes: shadowState["sensor.kitchen_spot_3_energy"].attributes} as SensorProperties}
},

['rx_35']: {
  entity_id: "sensor.rx_35",
get entity() { return {state: shadowState["sensor.rx_35"].state, attributes: shadowState["sensor.rx_35"].attributes} as SensorProperties}
},

['tx_35']: {
  entity_id: "sensor.tx_35",
get entity() { return {state: shadowState["sensor.tx_35"].state, attributes: shadowState["sensor.tx_35"].attributes} as SensorProperties}
},

['rx_36']: {
  entity_id: "sensor.rx_36",
get entity() { return {state: shadowState["sensor.rx_36"].state, attributes: shadowState["sensor.rx_36"].attributes} as SensorProperties}
},

['tx_36']: {
  entity_id: "sensor.tx_36",
get entity() { return {state: shadowState["sensor.tx_36"].state, attributes: shadowState["sensor.tx_36"].attributes} as SensorProperties}
},

['hall_upstairs_spot_3_power']: {
  entity_id: "sensor.hall_upstairs_spot_3_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_3_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_3_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_3_energy']: {
  entity_id: "sensor.hall_upstairs_spot_3_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_3_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_3_energy"].attributes} as SensorProperties}
},

['hall_upstairs_spot_1_power']: {
  entity_id: "sensor.hall_upstairs_spot_1_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_1_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_1_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_1_energy']: {
  entity_id: "sensor.hall_upstairs_spot_1_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_1_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_1_energy"].attributes} as SensorProperties}
},

['hall_upstairs_spot_2_power']: {
  entity_id: "sensor.hall_upstairs_spot_2_power",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_2_power"].state, attributes: shadowState["sensor.hall_upstairs_spot_2_power"].attributes} as SensorProperties}
},

['hall_upstairs_spot_2_energy']: {
  entity_id: "sensor.hall_upstairs_spot_2_energy",
get entity() { return {state: shadowState["sensor.hall_upstairs_spot_2_energy"].state, attributes: shadowState["sensor.hall_upstairs_spot_2_energy"].attributes} as SensorProperties}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933_estimated_distance']: {
  entity_id: "sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933_estimated_distance",
get entity() { return {state: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933_estimated_distance"].state, attributes: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933_estimated_distance"].attributes} as SensorProperties}
},

['rx_37']: {
  entity_id: "sensor.rx_37",
get entity() { return {state: shadowState["sensor.rx_37"].state, attributes: shadowState["sensor.rx_37"].attributes} as SensorProperties}
},

['tx_37']: {
  entity_id: "sensor.tx_37",
get entity() { return {state: shadowState["sensor.tx_37"].state, attributes: shadowState["sensor.tx_37"].attributes} as SensorProperties}
},

['rx_38']: {
  entity_id: "sensor.rx_38",
get entity() { return {state: shadowState["sensor.rx_38"].state, attributes: shadowState["sensor.rx_38"].attributes} as SensorProperties}
},

['tx_38']: {
  entity_id: "sensor.tx_38",
get entity() { return {state: shadowState["sensor.tx_38"].state, attributes: shadowState["sensor.tx_38"].attributes} as SensorProperties}
},

['garage_esp32_rx']: {
  entity_id: "sensor.garage_esp32_rx",
get entity() { return {state: shadowState["sensor.garage_esp32_rx"].state, attributes: shadowState["sensor.garage_esp32_rx"].attributes} as SensorProperties}
},

['garage_esp32_tx']: {
  entity_id: "sensor.garage_esp32_tx",
get entity() { return {state: shadowState["sensor.garage_esp32_tx"].state, attributes: shadowState["sensor.garage_esp32_tx"].attributes} as SensorProperties}
},

['rx_39']: {
  entity_id: "sensor.rx_39",
get entity() { return {state: shadowState["sensor.rx_39"].state, attributes: shadowState["sensor.rx_39"].attributes} as SensorProperties}
},

['tx_39']: {
  entity_id: "sensor.tx_39",
get entity() { return {state: shadowState["sensor.tx_39"].state, attributes: shadowState["sensor.tx_39"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169_estimated_distance"].attributes} as SensorProperties}
},

['pink_rx']: {
  entity_id: "sensor.pink_rx",
get entity() { return {state: shadowState["sensor.pink_rx"].state, attributes: shadowState["sensor.pink_rx"].attributes} as SensorProperties}
},

['pink_tx']: {
  entity_id: "sensor.pink_tx",
get entity() { return {state: shadowState["sensor.pink_tx"].state, attributes: shadowState["sensor.pink_tx"].attributes} as SensorProperties}
},

['rx_40']: {
  entity_id: "sensor.rx_40",
get entity() { return {state: shadowState["sensor.rx_40"].state, attributes: shadowState["sensor.rx_40"].attributes} as SensorProperties}
},

['tx_40']: {
  entity_id: "sensor.tx_40",
get entity() { return {state: shadowState["sensor.tx_40"].state, attributes: shadowState["sensor.tx_40"].attributes} as SensorProperties}
},

['living_room_spot_2_power']: {
  entity_id: "sensor.living_room_spot_2_power",
get entity() { return {state: shadowState["sensor.living_room_spot_2_power"].state, attributes: shadowState["sensor.living_room_spot_2_power"].attributes} as SensorProperties}
},

['living_room_spot_2_energy']: {
  entity_id: "sensor.living_room_spot_2_energy",
get entity() { return {state: shadowState["sensor.living_room_spot_2_energy"].state, attributes: shadowState["sensor.living_room_spot_2_energy"].attributes} as SensorProperties}
},

['living_room_spot_1_power']: {
  entity_id: "sensor.living_room_spot_1_power",
get entity() { return {state: shadowState["sensor.living_room_spot_1_power"].state, attributes: shadowState["sensor.living_room_spot_1_power"].attributes} as SensorProperties}
},

['living_room_spot_1_energy']: {
  entity_id: "sensor.living_room_spot_1_energy",
get entity() { return {state: shadowState["sensor.living_room_spot_1_energy"].state, attributes: shadowState["sensor.living_room_spot_1_energy"].attributes} as SensorProperties}
},

['rx_41']: {
  entity_id: "sensor.rx_41",
get entity() { return {state: shadowState["sensor.rx_41"].state, attributes: shadowState["sensor.rx_41"].attributes} as SensorProperties}
},

['tx_41']: {
  entity_id: "sensor.tx_41",
get entity() { return {state: shadowState["sensor.tx_41"].state, attributes: shadowState["sensor.tx_41"].attributes} as SensorProperties}
},

['rx_42']: {
  entity_id: "sensor.rx_42",
get entity() { return {state: shadowState["sensor.rx_42"].state, attributes: shadowState["sensor.rx_42"].attributes} as SensorProperties}
},

['tx_42']: {
  entity_id: "sensor.tx_42",
get entity() { return {state: shadowState["sensor.tx_42"].state, attributes: shadowState["sensor.tx_42"].attributes} as SensorProperties}
},

['rx_43']: {
  entity_id: "sensor.rx_43",
get entity() { return {state: shadowState["sensor.rx_43"].state, attributes: shadowState["sensor.rx_43"].attributes} as SensorProperties}
},

['tx_43']: {
  entity_id: "sensor.tx_43",
get entity() { return {state: shadowState["sensor.tx_43"].state, attributes: shadowState["sensor.tx_43"].attributes} as SensorProperties}
},

['office_pi_rx']: {
  entity_id: "sensor.office_pi_rx",
get entity() { return {state: shadowState["sensor.office_pi_rx"].state, attributes: shadowState["sensor.office_pi_rx"].attributes} as SensorProperties}
},

['office_pi_tx']: {
  entity_id: "sensor.office_pi_tx",
get entity() { return {state: shadowState["sensor.office_pi_tx"].state, attributes: shadowState["sensor.office_pi_tx"].attributes} as SensorProperties}
},

['g4_instant_rx']: {
  entity_id: "sensor.g4_instant_rx",
get entity() { return {state: shadowState["sensor.g4_instant_rx"].state, attributes: shadowState["sensor.g4_instant_rx"].attributes} as SensorProperties}
},

['g4_instant_tx']: {
  entity_id: "sensor.g4_instant_tx",
get entity() { return {state: shadowState["sensor.g4_instant_tx"].state, attributes: shadowState["sensor.g4_instant_tx"].attributes} as SensorProperties}
},

['rx_44']: {
  entity_id: "sensor.rx_44",
get entity() { return {state: shadowState["sensor.rx_44"].state, attributes: shadowState["sensor.rx_44"].attributes} as SensorProperties}
},

['tx_44']: {
  entity_id: "sensor.tx_44",
get entity() { return {state: shadowState["sensor.tx_44"].state, attributes: shadowState["sensor.tx_44"].attributes} as SensorProperties}
},

['rx_45']: {
  entity_id: "sensor.rx_45",
get entity() { return {state: shadowState["sensor.rx_45"].state, attributes: shadowState["sensor.rx_45"].attributes} as SensorProperties}
},

['tx_45']: {
  entity_id: "sensor.tx_45",
get entity() { return {state: shadowState["sensor.tx_45"].state, attributes: shadowState["sensor.tx_45"].attributes} as SensorProperties}
},

['rx_46']: {
  entity_id: "sensor.rx_46",
get entity() { return {state: shadowState["sensor.rx_46"].state, attributes: shadowState["sensor.rx_46"].attributes} as SensorProperties}
},

['tx_46']: {
  entity_id: "sensor.tx_46",
get entity() { return {state: shadowState["sensor.tx_46"].state, attributes: shadowState["sensor.tx_46"].attributes} as SensorProperties}
},

['rx_47']: {
  entity_id: "sensor.rx_47",
get entity() { return {state: shadowState["sensor.rx_47"].state, attributes: shadowState["sensor.rx_47"].attributes} as SensorProperties}
},

['tx_47']: {
  entity_id: "sensor.tx_47",
get entity() { return {state: shadowState["sensor.tx_47"].state, attributes: shadowState["sensor.tx_47"].attributes} as SensorProperties}
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

['3dprinter_device_power']: {
  entity_id: "sensor.3dprinter_device_power",
get entity() { return {state: shadowState["sensor.3dprinter_device_power"].state, attributes: shadowState["sensor.3dprinter_device_power"].attributes} as SensorProperties}
},

['3dprinter_device_energy']: {
  entity_id: "sensor.3dprinter_device_energy",
get entity() { return {state: shadowState["sensor.3dprinter_device_energy"].state, attributes: shadowState["sensor.3dprinter_device_energy"].attributes} as SensorProperties}
},

['washing_machine_outlet_device_power']: {
  entity_id: "sensor.washing_machine_outlet_device_power",
get entity() { return {state: shadowState["sensor.washing_machine_outlet_device_power"].state, attributes: shadowState["sensor.washing_machine_outlet_device_power"].attributes} as SensorProperties}
},

['washing_machine_outlet_device_energy']: {
  entity_id: "sensor.washing_machine_outlet_device_energy",
get entity() { return {state: shadowState["sensor.washing_machine_outlet_device_energy"].state, attributes: shadowState["sensor.washing_machine_outlet_device_energy"].attributes} as SensorProperties}
},

['dishwasher_outlet_device_power']: {
  entity_id: "sensor.dishwasher_outlet_device_power",
get entity() { return {state: shadowState["sensor.dishwasher_outlet_device_power"].state, attributes: shadowState["sensor.dishwasher_outlet_device_power"].attributes} as SensorProperties}
},

['dishwasher_outlet_device_energy']: {
  entity_id: "sensor.dishwasher_outlet_device_energy",
get entity() { return {state: shadowState["sensor.dishwasher_outlet_device_energy"].state, attributes: shadowState["sensor.dishwasher_outlet_device_energy"].attributes} as SensorProperties}
},

['coffee_machine_outlet_device_power']: {
  entity_id: "sensor.coffee_machine_outlet_device_power",
get entity() { return {state: shadowState["sensor.coffee_machine_outlet_device_power"].state, attributes: shadowState["sensor.coffee_machine_outlet_device_power"].attributes} as SensorProperties}
},

['coffee_machine_outlet_device_energy']: {
  entity_id: "sensor.coffee_machine_outlet_device_energy",
get entity() { return {state: shadowState["sensor.coffee_machine_outlet_device_energy"].state, attributes: shadowState["sensor.coffee_machine_outlet_device_energy"].attributes} as SensorProperties}
},

['rx_48']: {
  entity_id: "sensor.rx_48",
get entity() { return {state: shadowState["sensor.rx_48"].state, attributes: shadowState["sensor.rx_48"].attributes} as SensorProperties}
},

['tx_48']: {
  entity_id: "sensor.tx_48",
get entity() { return {state: shadowState["sensor.tx_48"].state, attributes: shadowState["sensor.tx_48"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_device_power']: {
  entity_id: "sensor.bedroom_secondary_lamp_device_power",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_device_power"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_device_power"].attributes} as SensorProperties}
},

['bedroom_secondary_lamp_device_energy']: {
  entity_id: "sensor.bedroom_secondary_lamp_device_energy",
get entity() { return {state: shadowState["sensor.bedroom_secondary_lamp_device_energy"].state, attributes: shadowState["sensor.bedroom_secondary_lamp_device_energy"].attributes} as SensorProperties}
},

['living_room_humidifier_switch_device_power']: {
  entity_id: "sensor.living_room_humidifier_switch_device_power",
get entity() { return {state: shadowState["sensor.living_room_humidifier_switch_device_power"].state, attributes: shadowState["sensor.living_room_humidifier_switch_device_power"].attributes} as SensorProperties}
},

['living_room_humidifier_switch_device_energy']: {
  entity_id: "sensor.living_room_humidifier_switch_device_energy",
get entity() { return {state: shadowState["sensor.living_room_humidifier_switch_device_energy"].state, attributes: shadowState["sensor.living_room_humidifier_switch_device_energy"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_device_power']: {
  entity_id: "sensor.christmas_tree_led_outlet_device_power",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_device_power"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_device_power"].attributes} as SensorProperties}
},

['christmas_tree_led_outlet_device_energy']: {
  entity_id: "sensor.christmas_tree_led_outlet_device_energy",
get entity() { return {state: shadowState["sensor.christmas_tree_led_outlet_device_energy"].state, attributes: shadowState["sensor.christmas_tree_led_outlet_device_energy"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_device_power']: {
  entity_id: "sensor.bedroom_humidifier_switch_device_power",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_device_power"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_device_power"].attributes} as SensorProperties}
},

['bedroom_humidifier_switch_device_energy']: {
  entity_id: "sensor.bedroom_humidifier_switch_device_energy",
get entity() { return {state: shadowState["sensor.bedroom_humidifier_switch_device_energy"].state, attributes: shadowState["sensor.bedroom_humidifier_switch_device_energy"].attributes} as SensorProperties}
},

['desk_outlet_device_power']: {
  entity_id: "sensor.desk_outlet_device_power",
get entity() { return {state: shadowState["sensor.desk_outlet_device_power"].state, attributes: shadowState["sensor.desk_outlet_device_power"].attributes} as SensorProperties}
},

['desk_outlet_device_energy']: {
  entity_id: "sensor.desk_outlet_device_energy",
get entity() { return {state: shadowState["sensor.desk_outlet_device_energy"].state, attributes: shadowState["sensor.desk_outlet_device_energy"].attributes} as SensorProperties}
},

['bedside_lamp_device_power']: {
  entity_id: "sensor.bedside_lamp_device_power",
get entity() { return {state: shadowState["sensor.bedside_lamp_device_power"].state, attributes: shadowState["sensor.bedside_lamp_device_power"].attributes} as SensorProperties}
},

['bedside_lamp_device_energy']: {
  entity_id: "sensor.bedside_lamp_device_energy",
get entity() { return {state: shadowState["sensor.bedside_lamp_device_energy"].state, attributes: shadowState["sensor.bedside_lamp_device_energy"].attributes} as SensorProperties}
},

['tim_s_id_4_climatisation_state']: {
  entity_id: "sensor.tim_s_id_4_climatisation_state",
get entity() { return {state: shadowState["sensor.tim_s_id_4_climatisation_state"].state, attributes: shadowState["sensor.tim_s_id_4_climatisation_state"].attributes} as SensorProperties}
},

['tim_s_id_4_remaining_climatisation_time']: {
  entity_id: "sensor.tim_s_id_4_remaining_climatisation_time",
get entity() { return {state: shadowState["sensor.tim_s_id_4_remaining_climatisation_time"].state, attributes: shadowState["sensor.tim_s_id_4_remaining_climatisation_time"].attributes} as SensorProperties}
},

['tim_s_id_4_target_temperature']: {
  entity_id: "sensor.tim_s_id_4_target_temperature",
get entity() { return {state: shadowState["sensor.tim_s_id_4_target_temperature"].state, attributes: shadowState["sensor.tim_s_id_4_target_temperature"].attributes} as SensorProperties}
},

['tim_s_id_4_unit_in_car']: {
  entity_id: "sensor.tim_s_id_4_unit_in_car",
get entity() { return {state: shadowState["sensor.tim_s_id_4_unit_in_car"].state, attributes: shadowState["sensor.tim_s_id_4_unit_in_car"].attributes} as SensorProperties}
},

['tim_s_id_4_charging_state']: {
  entity_id: "sensor.tim_s_id_4_charging_state",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charging_state"].state, attributes: shadowState["sensor.tim_s_id_4_charging_state"].attributes} as SensorProperties}
},

['tim_s_id_4_remaining_charging_time']: {
  entity_id: "sensor.tim_s_id_4_remaining_charging_time",
get entity() { return {state: shadowState["sensor.tim_s_id_4_remaining_charging_time"].state, attributes: shadowState["sensor.tim_s_id_4_remaining_charging_time"].attributes} as SensorProperties}
},

['tim_s_id_4_charging_mode']: {
  entity_id: "sensor.tim_s_id_4_charging_mode",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charging_mode"].state, attributes: shadowState["sensor.tim_s_id_4_charging_mode"].attributes} as SensorProperties}
},

['tim_s_id_4_charge_power']: {
  entity_id: "sensor.tim_s_id_4_charge_power",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charge_power"].state, attributes: shadowState["sensor.tim_s_id_4_charge_power"].attributes} as SensorProperties}
},

['tim_s_id_4_charge_rate']: {
  entity_id: "sensor.tim_s_id_4_charge_rate",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charge_rate"].state, attributes: shadowState["sensor.tim_s_id_4_charge_rate"].attributes} as SensorProperties}
},

['tim_s_id_4_charging_settings']: {
  entity_id: "sensor.tim_s_id_4_charging_settings",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charging_settings"].state, attributes: shadowState["sensor.tim_s_id_4_charging_settings"].attributes} as SensorProperties}
},

['tim_s_id_4_charge_type']: {
  entity_id: "sensor.tim_s_id_4_charge_type",
get entity() { return {state: shadowState["sensor.tim_s_id_4_charge_type"].state, attributes: shadowState["sensor.tim_s_id_4_charge_type"].attributes} as SensorProperties}
},

['tim_s_id_4_max_charge_current_ac']: {
  entity_id: "sensor.tim_s_id_4_max_charge_current_ac",
get entity() { return {state: shadowState["sensor.tim_s_id_4_max_charge_current_ac"].state, attributes: shadowState["sensor.tim_s_id_4_max_charge_current_ac"].attributes} as SensorProperties}
},

['tim_s_id_4_target_state_of_charge']: {
  entity_id: "sensor.tim_s_id_4_target_state_of_charge",
get entity() { return {state: shadowState["sensor.tim_s_id_4_target_state_of_charge"].state, attributes: shadowState["sensor.tim_s_id_4_target_state_of_charge"].attributes} as SensorProperties}
},

['tim_s_id_4_state_of_charge']: {
  entity_id: "sensor.tim_s_id_4_state_of_charge",
get entity() { return {state: shadowState["sensor.tim_s_id_4_state_of_charge"].state, attributes: shadowState["sensor.tim_s_id_4_state_of_charge"].attributes} as SensorProperties}
},

['tim_s_id_4_range']: {
  entity_id: "sensor.tim_s_id_4_range",
get entity() { return {state: shadowState["sensor.tim_s_id_4_range"].state, attributes: shadowState["sensor.tim_s_id_4_range"].attributes} as SensorProperties}
},

['tim_s_id_4_health_inspection']: {
  entity_id: "sensor.tim_s_id_4_health_inspection",
get entity() { return {state: shadowState["sensor.tim_s_id_4_health_inspection"].state, attributes: shadowState["sensor.tim_s_id_4_health_inspection"].attributes} as SensorProperties}
},

['tim_s_id_4_odometer']: {
  entity_id: "sensor.tim_s_id_4_odometer",
get entity() { return {state: shadowState["sensor.tim_s_id_4_odometer"].state, attributes: shadowState["sensor.tim_s_id_4_odometer"].attributes} as SensorProperties}
},

['tim_s_id_4_door_lock_status']: {
  entity_id: "sensor.tim_s_id_4_door_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_bonnet_lock_status']: {
  entity_id: "sensor.tim_s_id_4_bonnet_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_bonnet_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_bonnet_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_trunk_lock_status']: {
  entity_id: "sensor.tim_s_id_4_trunk_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_trunk_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_trunk_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_rear_right_lock_status']: {
  entity_id: "sensor.tim_s_id_4_door_rear_right_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_rear_right_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_rear_right_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_rear_left_lock_status']: {
  entity_id: "sensor.tim_s_id_4_door_rear_left_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_rear_left_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_rear_left_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_front_left_lock_status']: {
  entity_id: "sensor.tim_s_id_4_door_front_left_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_front_left_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_front_left_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_front_right_lock_status']: {
  entity_id: "sensor.tim_s_id_4_door_front_right_lock_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_front_right_lock_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_front_right_lock_status"].attributes} as SensorProperties}
},

['tim_s_id_4_bonnet_open_status']: {
  entity_id: "sensor.tim_s_id_4_bonnet_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_bonnet_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_bonnet_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_trunk_open_status']: {
  entity_id: "sensor.tim_s_id_4_trunk_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_trunk_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_trunk_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_rear_right_open_status']: {
  entity_id: "sensor.tim_s_id_4_door_rear_right_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_rear_right_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_rear_right_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_rear_left_open_status']: {
  entity_id: "sensor.tim_s_id_4_door_rear_left_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_rear_left_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_rear_left_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_front_left_open_status']: {
  entity_id: "sensor.tim_s_id_4_door_front_left_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_front_left_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_front_left_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_door_front_right_open_status']: {
  entity_id: "sensor.tim_s_id_4_door_front_right_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_door_front_right_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_door_front_right_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_sunroof_open_status']: {
  entity_id: "sensor.tim_s_id_4_sunroof_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_sunroof_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_sunroof_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_sunroof_cover_status']: {
  entity_id: "sensor.tim_s_id_4_sunroof_cover_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_sunroof_cover_status"].state, attributes: shadowState["sensor.tim_s_id_4_sunroof_cover_status"].attributes} as SensorProperties}
},

['tim_s_id_4_window_rear_right_open_status']: {
  entity_id: "sensor.tim_s_id_4_window_rear_right_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_window_rear_right_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_window_rear_right_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_window_rear_left_open_status']: {
  entity_id: "sensor.tim_s_id_4_window_rear_left_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_window_rear_left_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_window_rear_left_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_window_front_left_open_status']: {
  entity_id: "sensor.tim_s_id_4_window_front_left_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_window_front_left_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_window_front_left_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_window_front_right_open_status']: {
  entity_id: "sensor.tim_s_id_4_window_front_right_open_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_window_front_right_open_status"].state, attributes: shadowState["sensor.tim_s_id_4_window_front_right_open_status"].attributes} as SensorProperties}
},

['tim_s_id_4_overall_status']: {
  entity_id: "sensor.tim_s_id_4_overall_status",
get entity() { return {state: shadowState["sensor.tim_s_id_4_overall_status"].state, attributes: shadowState["sensor.tim_s_id_4_overall_status"].attributes} as SensorProperties}
},

['tim_s_id_4_auto_unlock_plug_when_charged']: {
  entity_id: "sensor.tim_s_id_4_auto_unlock_plug_when_charged",
get entity() { return {state: shadowState["sensor.tim_s_id_4_auto_unlock_plug_when_charged"].state, attributes: shadowState["sensor.tim_s_id_4_auto_unlock_plug_when_charged"].attributes} as SensorProperties}
},

['tim_s_id_4_auto_unlock_plug_when_charged_ac']: {
  entity_id: "sensor.tim_s_id_4_auto_unlock_plug_when_charged_ac",
get entity() { return {state: shadowState["sensor.tim_s_id_4_auto_unlock_plug_when_charged_ac"].state, attributes: shadowState["sensor.tim_s_id_4_auto_unlock_plug_when_charged_ac"].attributes} as SensorProperties}
},

['tim_s_id_4_plug_connection_state']: {
  entity_id: "sensor.tim_s_id_4_plug_connection_state",
get entity() { return {state: shadowState["sensor.tim_s_id_4_plug_connection_state"].state, attributes: shadowState["sensor.tim_s_id_4_plug_connection_state"].attributes} as SensorProperties}
},

['tim_s_id_4_plug_lock_state']: {
  entity_id: "sensor.tim_s_id_4_plug_lock_state",
get entity() { return {state: shadowState["sensor.tim_s_id_4_plug_lock_state"].state, attributes: shadowState["sensor.tim_s_id_4_plug_lock_state"].attributes} as SensorProperties}
},

['rx_49']: {
  entity_id: "sensor.rx_49",
get entity() { return {state: shadowState["sensor.rx_49"].state, attributes: shadowState["sensor.rx_49"].attributes} as SensorProperties}
},

['tx_49']: {
  entity_id: "sensor.tx_49",
get entity() { return {state: shadowState["sensor.tx_49"].state, attributes: shadowState["sensor.tx_49"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208_estimated_distance"].attributes} as SensorProperties}
},

['rx_50']: {
  entity_id: "sensor.rx_50",
get entity() { return {state: shadowState["sensor.rx_50"].state, attributes: shadowState["sensor.rx_50"].attributes} as SensorProperties}
},

['tx_50']: {
  entity_id: "sensor.tx_50",
get entity() { return {state: shadowState["sensor.tx_50"].state, attributes: shadowState["sensor.tx_50"].attributes} as SensorProperties}
},

['user_pc_rx']: {
  entity_id: "sensor.user_pc_rx",
get entity() { return {state: shadowState["sensor.user_pc_rx"].state, attributes: shadowState["sensor.user_pc_rx"].attributes} as SensorProperties}
},

['user_pc_tx']: {
  entity_id: "sensor.user_pc_tx",
get entity() { return {state: shadowState["sensor.user_pc_tx"].state, attributes: shadowState["sensor.user_pc_tx"].attributes} as SensorProperties}
},

['rx_51']: {
  entity_id: "sensor.rx_51",
get entity() { return {state: shadowState["sensor.rx_51"].state, attributes: shadowState["sensor.rx_51"].attributes} as SensorProperties}
},

['tx_51']: {
  entity_id: "sensor.tx_51",
get entity() { return {state: shadowState["sensor.tx_51"].state, attributes: shadowState["sensor.tx_51"].attributes} as SensorProperties}
},

['rx_52']: {
  entity_id: "sensor.rx_52",
get entity() { return {state: shadowState["sensor.rx_52"].state, attributes: shadowState["sensor.rx_52"].attributes} as SensorProperties}
},

['tx_52']: {
  entity_id: "sensor.tx_52",
get entity() { return {state: shadowState["sensor.tx_52"].state, attributes: shadowState["sensor.tx_52"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2_estimated_distance"].attributes} as SensorProperties}
},

['rx_53']: {
  entity_id: "sensor.rx_53",
get entity() { return {state: shadowState["sensor.rx_53"].state, attributes: shadowState["sensor.rx_53"].attributes} as SensorProperties}
},

['tx_53']: {
  entity_id: "sensor.tx_53",
get entity() { return {state: shadowState["sensor.tx_53"].state, attributes: shadowState["sensor.tx_53"].attributes} as SensorProperties}
},

['oneplus_9_rx']: {
  entity_id: "sensor.oneplus_9_rx",
get entity() { return {state: shadowState["sensor.oneplus_9_rx"].state, attributes: shadowState["sensor.oneplus_9_rx"].attributes} as SensorProperties}
},

['oneplus_9_tx']: {
  entity_id: "sensor.oneplus_9_tx",
get entity() { return {state: shadowState["sensor.oneplus_9_tx"].state, attributes: shadowState["sensor.oneplus_9_tx"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e_estimated_distance"].attributes} as SensorProperties}
},

['rx_54']: {
  entity_id: "sensor.rx_54",
get entity() { return {state: shadowState["sensor.rx_54"].state, attributes: shadowState["sensor.rx_54"].attributes} as SensorProperties}
},

['tx_54']: {
  entity_id: "sensor.tx_54",
get entity() { return {state: shadowState["sensor.tx_54"].state, attributes: shadowState["sensor.tx_54"].attributes} as SensorProperties}
},

['android_1688bb625b0c2c6_rx']: {
  entity_id: "sensor.android_1688bb625b0c2c6_rx",
get entity() { return {state: shadowState["sensor.android_1688bb625b0c2c6_rx"].state, attributes: shadowState["sensor.android_1688bb625b0c2c6_rx"].attributes} as SensorProperties}
},

['android_1688bb625b0c2c6_tx']: {
  entity_id: "sensor.android_1688bb625b0c2c6_tx",
get entity() { return {state: shadowState["sensor.android_1688bb625b0c2c6_tx"].state, attributes: shadowState["sensor.android_1688bb625b0c2c6_tx"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb_estimated_distance"].attributes} as SensorProperties}
},

['rx_55']: {
  entity_id: "sensor.rx_55",
get entity() { return {state: shadowState["sensor.rx_55"].state, attributes: shadowState["sensor.rx_55"].attributes} as SensorProperties}
},

['tx_55']: {
  entity_id: "sensor.tx_55",
get entity() { return {state: shadowState["sensor.tx_55"].state, attributes: shadowState["sensor.tx_55"].attributes} as SensorProperties}
},

['pc_linuxshop_376156_rx']: {
  entity_id: "sensor.pc_linuxshop_376156_rx",
get entity() { return {state: shadowState["sensor.pc_linuxshop_376156_rx"].state, attributes: shadowState["sensor.pc_linuxshop_376156_rx"].attributes} as SensorProperties}
},

['pc_linuxshop_376156_tx']: {
  entity_id: "sensor.pc_linuxshop_376156_tx",
get entity() { return {state: shadowState["sensor.pc_linuxshop_376156_tx"].state, attributes: shadowState["sensor.pc_linuxshop_376156_tx"].attributes} as SensorProperties}
},

['galaxy_a71_rx']: {
  entity_id: "sensor.galaxy_a71_rx",
get entity() { return {state: shadowState["sensor.galaxy_a71_rx"].state, attributes: shadowState["sensor.galaxy_a71_rx"].attributes} as SensorProperties}
},

['galaxy_a71_tx']: {
  entity_id: "sensor.galaxy_a71_tx",
get entity() { return {state: shadowState["sensor.galaxy_a71_tx"].state, attributes: shadowState["sensor.galaxy_a71_tx"].attributes} as SensorProperties}
},

['rx_56']: {
  entity_id: "sensor.rx_56",
get entity() { return {state: shadowState["sensor.rx_56"].state, attributes: shadowState["sensor.rx_56"].attributes} as SensorProperties}
},

['tx_56']: {
  entity_id: "sensor.tx_56",
get entity() { return {state: shadowState["sensor.tx_56"].state, attributes: shadowState["sensor.tx_56"].attributes} as SensorProperties}
},

['rx_57']: {
  entity_id: "sensor.rx_57",
get entity() { return {state: shadowState["sensor.rx_57"].state, attributes: shadowState["sensor.rx_57"].attributes} as SensorProperties}
},

['tx_57']: {
  entity_id: "sensor.tx_57",
get entity() { return {state: shadowState["sensor.tx_57"].state, attributes: shadowState["sensor.tx_57"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28_estimated_distance"].attributes} as SensorProperties}
},

['rx_58']: {
  entity_id: "sensor.rx_58",
get entity() { return {state: shadowState["sensor.rx_58"].state, attributes: shadowState["sensor.rx_58"].attributes} as SensorProperties}
},

['tx_58']: {
  entity_id: "sensor.tx_58",
get entity() { return {state: shadowState["sensor.tx_58"].state, attributes: shadowState["sensor.tx_58"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca_estimated_distance"].attributes} as SensorProperties}
},

['rx_59']: {
  entity_id: "sensor.rx_59",
get entity() { return {state: shadowState["sensor.rx_59"].state, attributes: shadowState["sensor.rx_59"].attributes} as SensorProperties}
},

['tx_59']: {
  entity_id: "sensor.tx_59",
get entity() { return {state: shadowState["sensor.tx_59"].state, attributes: shadowState["sensor.tx_59"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b_estimated_distance"].attributes} as SensorProperties}
},

['rx_60']: {
  entity_id: "sensor.rx_60",
get entity() { return {state: shadowState["sensor.rx_60"].state, attributes: shadowState["sensor.rx_60"].attributes} as SensorProperties}
},

['tx_60']: {
  entity_id: "sensor.tx_60",
get entity() { return {state: shadowState["sensor.tx_60"].state, attributes: shadowState["sensor.tx_60"].attributes} as SensorProperties}
},

['rx_61']: {
  entity_id: "sensor.rx_61",
get entity() { return {state: shadowState["sensor.rx_61"].state, attributes: shadowState["sensor.rx_61"].attributes} as SensorProperties}
},

['tx_61']: {
  entity_id: "sensor.tx_61",
get entity() { return {state: shadowState["sensor.tx_61"].state, attributes: shadowState["sensor.tx_61"].attributes} as SensorProperties}
},

['rx_62']: {
  entity_id: "sensor.rx_62",
get entity() { return {state: shadowState["sensor.rx_62"].state, attributes: shadowState["sensor.rx_62"].attributes} as SensorProperties}
},

['tx_62']: {
  entity_id: "sensor.tx_62",
get entity() { return {state: shadowState["sensor.tx_62"].state, attributes: shadowState["sensor.tx_62"].attributes} as SensorProperties}
},

['rx_63']: {
  entity_id: "sensor.rx_63",
get entity() { return {state: shadowState["sensor.rx_63"].state, attributes: shadowState["sensor.rx_63"].attributes} as SensorProperties}
},

['tx_63']: {
  entity_id: "sensor.tx_63",
get entity() { return {state: shadowState["sensor.tx_63"].state, attributes: shadowState["sensor.tx_63"].attributes} as SensorProperties}
},

['rx_64']: {
  entity_id: "sensor.rx_64",
get entity() { return {state: shadowState["sensor.rx_64"].state, attributes: shadowState["sensor.rx_64"].attributes} as SensorProperties}
},

['tx_64']: {
  entity_id: "sensor.tx_64",
get entity() { return {state: shadowState["sensor.tx_64"].state, attributes: shadowState["sensor.tx_64"].attributes} as SensorProperties}
},

['all_standby_power']: {
  entity_id: "sensor.all_standby_power",
get entity() { return {state: shadowState["sensor.all_standby_power"].state, attributes: shadowState["sensor.all_standby_power"].attributes} as SensorProperties}
},

['all_standby_energy']: {
  entity_id: "sensor.all_standby_energy",
get entity() { return {state: shadowState["sensor.all_standby_energy"].state, attributes: shadowState["sensor.all_standby_energy"].attributes} as SensorProperties}
},

['rx_65']: {
  entity_id: "sensor.rx_65",
get entity() { return {state: shadowState["sensor.rx_65"].state, attributes: shadowState["sensor.rx_65"].attributes} as SensorProperties}
},

['tx_65']: {
  entity_id: "sensor.tx_65",
get entity() { return {state: shadowState["sensor.tx_65"].state, attributes: shadowState["sensor.tx_65"].attributes} as SensorProperties}
},

['rx_66']: {
  entity_id: "sensor.rx_66",
get entity() { return {state: shadowState["sensor.rx_66"].state, attributes: shadowState["sensor.rx_66"].attributes} as SensorProperties}
},

['tx_66']: {
  entity_id: "sensor.tx_66",
get entity() { return {state: shadowState["sensor.tx_66"].state, attributes: shadowState["sensor.tx_66"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca_estimated_distance"].attributes} as SensorProperties}
},

['android_00907aa9525f_rx']: {
  entity_id: "sensor.android_00907aa9525f_rx",
get entity() { return {state: shadowState["sensor.android_00907aa9525f_rx"].state, attributes: shadowState["sensor.android_00907aa9525f_rx"].attributes} as SensorProperties}
},

['android_00907aa9525f_tx']: {
  entity_id: "sensor.android_00907aa9525f_tx",
get entity() { return {state: shadowState["sensor.android_00907aa9525f_tx"].state, attributes: shadowState["sensor.android_00907aa9525f_tx"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355_estimated_distance"].attributes} as SensorProperties}
},

['rx_67']: {
  entity_id: "sensor.rx_67",
get entity() { return {state: shadowState["sensor.rx_67"].state, attributes: shadowState["sensor.rx_67"].attributes} as SensorProperties}
},

['tx_67']: {
  entity_id: "sensor.tx_67",
get entity() { return {state: shadowState["sensor.tx_67"].state, attributes: shadowState["sensor.tx_67"].attributes} as SensorProperties}
},

['rx_68']: {
  entity_id: "sensor.rx_68",
get entity() { return {state: shadowState["sensor.rx_68"].state, attributes: shadowState["sensor.rx_68"].attributes} as SensorProperties}
},

['tx_68']: {
  entity_id: "sensor.tx_68",
get entity() { return {state: shadowState["sensor.tx_68"].state, attributes: shadowState["sensor.tx_68"].attributes} as SensorProperties}
},

['rx_69']: {
  entity_id: "sensor.rx_69",
get entity() { return {state: shadowState["sensor.rx_69"].state, attributes: shadowState["sensor.rx_69"].attributes} as SensorProperties}
},

['tx_69']: {
  entity_id: "sensor.tx_69",
get entity() { return {state: shadowState["sensor.tx_69"].state, attributes: shadowState["sensor.tx_69"].attributes} as SensorProperties}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_78ca_estimated_distance']: {
  entity_id: "sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca_estimated_distance",
get entity() { return {state: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca_estimated_distance"].state, attributes: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca_estimated_distance"].attributes} as SensorProperties}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_affd_estimated_distance']: {
  entity_id: "sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_affd_estimated_distance",
get entity() { return {state: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_affd_estimated_distance"].state, attributes: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_affd_estimated_distance"].attributes} as SensorProperties}
},

['rx_70']: {
  entity_id: "sensor.rx_70",
get entity() { return {state: shadowState["sensor.rx_70"].state, attributes: shadowState["sensor.rx_70"].attributes} as SensorProperties}
},

['tx_70']: {
  entity_id: "sensor.tx_70",
get entity() { return {state: shadowState["sensor.tx_70"].state, attributes: shadowState["sensor.tx_70"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18_estimated_distance"].attributes} as SensorProperties}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_a673_estimated_distance']: {
  entity_id: "sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_a673_estimated_distance",
get entity() { return {state: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_a673_estimated_distance"].state, attributes: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_a673_estimated_distance"].attributes} as SensorProperties}
},

['rx_71']: {
  entity_id: "sensor.rx_71",
get entity() { return {state: shadowState["sensor.rx_71"].state, attributes: shadowState["sensor.rx_71"].attributes} as SensorProperties}
},

['tx_71']: {
  entity_id: "sensor.tx_71",
get entity() { return {state: shadowState["sensor.tx_71"].state, attributes: shadowState["sensor.tx_71"].attributes} as SensorProperties}
},

['rx_72']: {
  entity_id: "sensor.rx_72",
get entity() { return {state: shadowState["sensor.rx_72"].state, attributes: shadowState["sensor.rx_72"].attributes} as SensorProperties}
},

['tx_72']: {
  entity_id: "sensor.tx_72",
get entity() { return {state: shadowState["sensor.tx_72"].state, attributes: shadowState["sensor.tx_72"].attributes} as SensorProperties}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_0228_estimated_distance']: {
  entity_id: "sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_0228_estimated_distance",
get entity() { return {state: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_0228_estimated_distance"].state, attributes: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_0228_estimated_distance"].attributes} as SensorProperties}
},

['rx_73']: {
  entity_id: "sensor.rx_73",
get entity() { return {state: shadowState["sensor.rx_73"].state, attributes: shadowState["sensor.rx_73"].attributes} as SensorProperties}
},

['tx_73']: {
  entity_id: "sensor.tx_73",
get entity() { return {state: shadowState["sensor.tx_73"].state, attributes: shadowState["sensor.tx_73"].attributes} as SensorProperties}
},

['sena_motorcycles_db89_estimated_distance']: {
  entity_id: "sensor.sena_motorcycles_db89_estimated_distance",
get entity() { return {state: shadowState["sensor.sena_motorcycles_db89_estimated_distance"].state, attributes: shadowState["sensor.sena_motorcycles_db89_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance_2']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance_2",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance_2"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_estimated_distance_2"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af_estimated_distance"].attributes} as SensorProperties}
},

['rx_74']: {
  entity_id: "sensor.rx_74",
get entity() { return {state: shadowState["sensor.rx_74"].state, attributes: shadowState["sensor.rx_74"].attributes} as SensorProperties}
},

['tx_74']: {
  entity_id: "sensor.tx_74",
get entity() { return {state: shadowState["sensor.tx_74"].state, attributes: shadowState["sensor.tx_74"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e_estimated_distance"].attributes} as SensorProperties}
},

['rx_75']: {
  entity_id: "sensor.rx_75",
get entity() { return {state: shadowState["sensor.rx_75"].state, attributes: shadowState["sensor.rx_75"].attributes} as SensorProperties}
},

['tx_75']: {
  entity_id: "sensor.tx_75",
get entity() { return {state: shadowState["sensor.tx_75"].state, attributes: shadowState["sensor.tx_75"].attributes} as SensorProperties}
},

['fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040_estimated_distance']: {
  entity_id: "sensor.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040_estimated_distance",
get entity() { return {state: shadowState["sensor.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040_estimated_distance"].state, attributes: shadowState["sensor.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040_estimated_distance"].attributes} as SensorProperties}
},

['rx_76']: {
  entity_id: "sensor.rx_76",
get entity() { return {state: shadowState["sensor.rx_76"].state, attributes: shadowState["sensor.rx_76"].attributes} as SensorProperties}
},

['tx_76']: {
  entity_id: "sensor.tx_76",
get entity() { return {state: shadowState["sensor.tx_76"].state, attributes: shadowState["sensor.tx_76"].attributes} as SensorProperties}
},

['rx_77']: {
  entity_id: "sensor.rx_77",
get entity() { return {state: shadowState["sensor.rx_77"].state, attributes: shadowState["sensor.rx_77"].attributes} as SensorProperties}
},

['tx_77']: {
  entity_id: "sensor.tx_77",
get entity() { return {state: shadowState["sensor.tx_77"].state, attributes: shadowState["sensor.tx_77"].attributes} as SensorProperties}
},

['rx_78']: {
  entity_id: "sensor.rx_78",
get entity() { return {state: shadowState["sensor.rx_78"].state, attributes: shadowState["sensor.rx_78"].attributes} as SensorProperties}
},

['tx_78']: {
  entity_id: "sensor.tx_78",
get entity() { return {state: shadowState["sensor.tx_78"].state, attributes: shadowState["sensor.tx_78"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b_estimated_distance"].attributes} as SensorProperties}
},

['iphone_rx']: {
  entity_id: "sensor.iphone_rx",
get entity() { return {state: shadowState["sensor.iphone_rx"].state, attributes: shadowState["sensor.iphone_rx"].attributes} as SensorProperties}
},

['iphone_tx']: {
  entity_id: "sensor.iphone_tx",
get entity() { return {state: shadowState["sensor.iphone_tx"].state, attributes: shadowState["sensor.iphone_tx"].attributes} as SensorProperties}
},

['rx_79']: {
  entity_id: "sensor.rx_79",
get entity() { return {state: shadowState["sensor.rx_79"].state, attributes: shadowState["sensor.rx_79"].attributes} as SensorProperties}
},

['tx_79']: {
  entity_id: "sensor.tx_79",
get entity() { return {state: shadowState["sensor.tx_79"].state, attributes: shadowState["sensor.tx_79"].attributes} as SensorProperties}
},

['rx_80']: {
  entity_id: "sensor.rx_80",
get entity() { return {state: shadowState["sensor.rx_80"].state, attributes: shadowState["sensor.rx_80"].attributes} as SensorProperties}
},

['tx_80']: {
  entity_id: "sensor.tx_80",
get entity() { return {state: shadowState["sensor.tx_80"].state, attributes: shadowState["sensor.tx_80"].attributes} as SensorProperties}
},

['rx_81']: {
  entity_id: "sensor.rx_81",
get entity() { return {state: shadowState["sensor.rx_81"].state, attributes: shadowState["sensor.rx_81"].attributes} as SensorProperties}
},

['tx_81']: {
  entity_id: "sensor.tx_81",
get entity() { return {state: shadowState["sensor.tx_81"].state, attributes: shadowState["sensor.tx_81"].attributes} as SensorProperties}
},

['rx_82']: {
  entity_id: "sensor.rx_82",
get entity() { return {state: shadowState["sensor.rx_82"].state, attributes: shadowState["sensor.rx_82"].attributes} as SensorProperties}
},

['tx_82']: {
  entity_id: "sensor.tx_82",
get entity() { return {state: shadowState["sensor.tx_82"].state, attributes: shadowState["sensor.tx_82"].attributes} as SensorProperties}
},

['rx_83']: {
  entity_id: "sensor.rx_83",
get entity() { return {state: shadowState["sensor.rx_83"].state, attributes: shadowState["sensor.rx_83"].attributes} as SensorProperties}
},

['tx_83']: {
  entity_id: "sensor.tx_83",
get entity() { return {state: shadowState["sensor.tx_83"].state, attributes: shadowState["sensor.tx_83"].attributes} as SensorProperties}
},

['rx_84']: {
  entity_id: "sensor.rx_84",
get entity() { return {state: shadowState["sensor.rx_84"].state, attributes: shadowState["sensor.rx_84"].attributes} as SensorProperties}
},

['tx_84']: {
  entity_id: "sensor.tx_84",
get entity() { return {state: shadowState["sensor.tx_84"].state, attributes: shadowState["sensor.tx_84"].attributes} as SensorProperties}
},

['rx_85']: {
  entity_id: "sensor.rx_85",
get entity() { return {state: shadowState["sensor.rx_85"].state, attributes: shadowState["sensor.rx_85"].attributes} as SensorProperties}
},

['tx_85']: {
  entity_id: "sensor.tx_85",
get entity() { return {state: shadowState["sensor.tx_85"].state, attributes: shadowState["sensor.tx_85"].attributes} as SensorProperties}
},

['rx_86']: {
  entity_id: "sensor.rx_86",
get entity() { return {state: shadowState["sensor.rx_86"].state, attributes: shadowState["sensor.rx_86"].attributes} as SensorProperties}
},

['tx_86']: {
  entity_id: "sensor.tx_86",
get entity() { return {state: shadowState["sensor.tx_86"].state, attributes: shadowState["sensor.tx_86"].attributes} as SensorProperties}
},

['rx_87']: {
  entity_id: "sensor.rx_87",
get entity() { return {state: shadowState["sensor.rx_87"].state, attributes: shadowState["sensor.rx_87"].attributes} as SensorProperties}
},

['tx_87']: {
  entity_id: "sensor.tx_87",
get entity() { return {state: shadowState["sensor.tx_87"].state, attributes: shadowState["sensor.tx_87"].attributes} as SensorProperties}
},

['rx_88']: {
  entity_id: "sensor.rx_88",
get entity() { return {state: shadowState["sensor.rx_88"].state, attributes: shadowState["sensor.rx_88"].attributes} as SensorProperties}
},

['tx_88']: {
  entity_id: "sensor.tx_88",
get entity() { return {state: shadowState["sensor.tx_88"].state, attributes: shadowState["sensor.tx_88"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca_estimated_distance"].attributes} as SensorProperties}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_610c_estimated_distance']: {
  entity_id: "sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_610c_estimated_distance",
get entity() { return {state: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_610c_estimated_distance"].state, attributes: shadowState["sensor.094f5242_4954_09ff_0f00_35414a575755_0_0_610c_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854_estimated_distance"].attributes} as SensorProperties}
},

['a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e_estimated_distance']: {
  entity_id: "sensor.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e_estimated_distance",
get entity() { return {state: shadowState["sensor.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e_estimated_distance"].state, attributes: shadowState["sensor.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea_estimated_distance"].attributes} as SensorProperties}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65_estimated_distance']: {
  entity_id: "sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65_estimated_distance",
get entity() { return {state: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65_estimated_distance"].state, attributes: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65_estimated_distance"].attributes} as SensorProperties}
},

['4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4_estimated_distance']: {
  entity_id: "sensor.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4_estimated_distance",
get entity() { return {state: shadowState["sensor.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4_estimated_distance"].state, attributes: shadowState["sensor.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df_estimated_distance"].attributes} as SensorProperties}
},

['400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2_estimated_distance']: {
  entity_id: "sensor.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2_estimated_distance",
get entity() { return {state: shadowState["sensor.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2_estimated_distance"].state, attributes: shadowState["sensor.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210_estimated_distance"].attributes} as SensorProperties}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444_estimated_distance']: {
  entity_id: "sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444_estimated_distance",
get entity() { return {state: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444_estimated_distance"].state, attributes: shadowState["sensor.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e_estimated_distance"].attributes} as SensorProperties}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604_estimated_distance']: {
  entity_id: "sensor.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604_estimated_distance",
get entity() { return {state: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604_estimated_distance"].state, attributes: shadowState["sensor.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604_estimated_distance"].attributes} as SensorProperties}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702_estimated_distance']: {
  entity_id: "sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702_estimated_distance",
get entity() { return {state: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702_estimated_distance"].state, attributes: shadowState["sensor.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702_estimated_distance"].attributes} as SensorProperties}
},

['office_switch_battery']: {
  entity_id: "sensor.office_switch_battery",
get entity() { return {state: shadowState["sensor.office_switch_battery"].state, attributes: shadowState["sensor.office_switch_battery"].attributes} as SensorProperties}
},

['office_switch_action']: {
  entity_id: "sensor.office_switch_action",
get entity() { return {state: shadowState["sensor.office_switch_action"].state, attributes: shadowState["sensor.office_switch_action"].attributes} as SensorProperties}
},

['bathroom_main_switch_battery']: {
  entity_id: "sensor.bathroom_main_switch_battery",
get entity() { return {state: shadowState["sensor.bathroom_main_switch_battery"].state, attributes: shadowState["sensor.bathroom_main_switch_battery"].attributes} as SensorProperties}
},

['bathroom_main_switch_action']: {
  entity_id: "sensor.bathroom_main_switch_action",
get entity() { return {state: shadowState["sensor.bathroom_main_switch_action"].state, attributes: shadowState["sensor.bathroom_main_switch_action"].attributes} as SensorProperties}
},

['bathroom_leak_sensor_battery']: {
  entity_id: "sensor.bathroom_leak_sensor_battery",
get entity() { return {state: shadowState["sensor.bathroom_leak_sensor_battery"].state, attributes: shadowState["sensor.bathroom_leak_sensor_battery"].attributes} as SensorProperties}
},

['bathroom_leak_sensor_device_temperature']: {
  entity_id: "sensor.bathroom_leak_sensor_device_temperature",
get entity() { return {state: shadowState["sensor.bathroom_leak_sensor_device_temperature"].state, attributes: shadowState["sensor.bathroom_leak_sensor_device_temperature"].attributes} as SensorProperties}
},

['bathroom_leak_sensor_power_outage_count']: {
  entity_id: "sensor.bathroom_leak_sensor_power_outage_count",
get entity() { return {state: shadowState["sensor.bathroom_leak_sensor_power_outage_count"].state, attributes: shadowState["sensor.bathroom_leak_sensor_power_outage_count"].attributes} as SensorProperties}
},

}
