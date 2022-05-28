import { shadowState, Sensor} from "@herja/core"
        export type SensorIDs = "time_to_mirahi" | "local_ip" | "plex_celty_3_0" | "energy_production_today" | "energy_production_tomorrow" | "power_highest_peak_time_today" | "power_highest_peak_time_tomorrow" | "power_production_now" | "energy_current_hour" | "energy_next_hour" | "living_room_ir_blaster_temperature" | "living_room_ir_blaster_humidity" | "bedroom_ir_blaster_temperature" | "bedroom_ir_blaster_humidity" | "current_ozone_level" | "current_uv_index" | "current_uv_level" | "max_uv_index" | "skin_type_1_safe_exposure_time" | "skin_type_2_safe_exposure_time" | "skin_type_3_safe_exposure_time" | "skin_type_4_safe_exposure_time" | "skin_type_5_safe_exposure_time" | "skin_type_6_safe_exposure_time" | "garage_state" | "map_segments" | "zone_presets" | "goto_locations" | "wi_fi_configuration" | "error_description" | "main_brush" | "right_brush" | "garage_position" | "status" | "pv_power_a" | "pv_power_b" | "pv_current_a" | "pv_current_b" | "grid_power" | "total_yield" | "daily_yield" | "pv_gen_meter" | "main_filter" | "sensor_cleaning" | "hacs" | "tims_ipone_steps" | "tims_ipone_activity" | "tims_ipone_distance" | "tims_ipone_floors_ascended" | "tims_ipone_average_active_pace" | "tims_ipone_floors_descended" | "tims_ipone_battery_level" | "tims_ipone_battery_state" | "tims_ipone_sim_1" | "tims_ipone_connection_type" | "tims_ipone_ssid" | "tims_ipone_storage" | "tims_ipone_bssid" | "tims_ipone_sim_2" | "tims_ipone_geocoded_location" | "tims_ipone_last_update_trigger" | "sm_g980f_battery_level" | "sm_g980f_battery_state" | "sm_g980f_charger_type" | "sm_g980f_battery_health" | "sm_g980f_battery_temperature" | "mirahi_c02d96kqmd6t_internal_battery_level" | "mirahi_c02d96kqmd6t_internal_battery_state" | "mirahi_c02d96kqmd6t_storage" | "mirahi_c02d96kqmd6t_ssid" | "mirahi_c02d96kqmd6t_bssid" | "mirahi_c02d96kqmd6t_connection_type" | "mirahi_c02d96kqmd6t_active_camera" | "mirahi_c02d96kqmd6t_active_audio_input" | "mirahi_c02d96kqmd6t_active_audio_output" | "mirahi_c02d96kqmd6t_displays" | "mirahi_c02d96kqmd6t_primary_display_id" | "mirahi_c02d96kqmd6t_primary_display_name" | "mirahi_c02d96kqmd6t_last_update_trigger" | "mirahi_c02d96kqmd6t_frontmost_app" | "macbook_geocoded_location" | "living_room_light_power" | "bedroom_bed_light_power" | "hall_entrance_power" | "garage_car_power" | "garage_fridge_power" | "hall_stairs_power" | "living_room_light_energy" | "bedroom_bed_light_energy" | "hall_entrance_energy" | "garage_car_energy" | "garage_fridge_energy" | "hall_stairs_energy" | "garage_cluster_size" | "garage_cluster_leader" | "tim_s_phone_room_presence" | "gaby_s_phone_room_presence" | "kitchen_button_battery" | "kitchen_button_action" | "kitchen_button_click" | "coffee_machine_outlet_power" | "coffee_machine_outlet_energy" | "0xa4c1385c18410b5b_battery" | "0xa4c1385c18410b5b_temperature" | "0xa4c1385c18410b5b_humidity" | "living_room_remote_battery" | "living_room_remote_action" | "living_room_remote_action_duration" | "stairs_motion_sensor_battery" | "fridge_door_sensor_battery" | "fridge_door_sensor_temperature" | "bedside_lamp_power" | "bedside_lamp_energy" | "bedside_button_battery" | "bedside_button_action" | "coffee_machine_button_battery" | "coffee_machine_button_action" | "garage_electric_door_sensor_open_battery" | "garage_electric_door_sensor_open_temperature" | "garage_remote_battery" | "garage_remote_action" | "garage_remote_action_duration" | "washing_machine_power" | "washing_machine_energy" | "garage_door_battery" | "garage_door_temperature" | "garden_door_battery" | "garden_door_temperature" | "toilet_door_battery" | "entrance_door_battery" | "entrance_door_temperature" | "living_room_table_sensor_battery" | "living_room_table_sensor_temperature" | "living_room_table_sensor_humidity" | "living_room_table_button_battery" | "living_room_table_button_action" | "bedroom_window_bed_battery" | "bedroom_window_bed_temperature" | "garage_electric_door_sensor_closed_battery" | "garage_electric_door_sensor_closed_temperature" | "siren_temperature" | "siren_humidity" | "siren_power_type" | "1_yjx_427_car" | "1_yjx_427_ignition_state" | "1_yjx_427_lock" | "1_yjx_427_odometer" | "1_yjx_427_rcp_features" | "1_yjx_427_starter_battery_state" | "1_yjx_427_fuel_level" | "1_yjx_427_oil_level" | "nibe_133481_40067" | "nibe_133481_40014" | "nibe_133481_40013" | "nibe_133481_40004" | "nibe_133481_40083" | "nibe_133481_40081" | "nibe_133481_40079" | "nibe_133481_43005" | "nibe_133481_43161" | "nibe_133481_47276" | "nibe_133481_43009" | "nibe_133481_40071" | "nibe_133481_40152" | "nibe_133481_40033" | "nibe_133481_44256" | "nibe_133481_44270" | "nibe_133481_40045" | "nibe_133481_44266" | "nibe_133481_10033" | "nibe_133481_47613" | "nibe_133481_43091" | "nibe_133481_47214" | "nibe_133481_40121" | "nibe_133481_44899" | "nibe_133481_44896" | "nibe_133481_44897" | "nibe_133481_44908" | "nibe_133481_10069" | "nibe_133481_47411" | "nibe_133481_47410" | "nibe_133481_47409" | "nibe_133481_47408" | "nibe_133481_47407" | "nibe_133481_48366" | "nibe_133481_47412" | "nibe_133481_48745" | "nibe_133481_0" | "nibe_133481_44703" | "nibe_133481_44396" | "nibe_133481_44362" | "nibe_133481_10014" | "nibe_133481_44069" | "nibe_133481_44702" | "nibe_133481_44058" | "nibe_133481_44363" | "nibe_133481_44059" | "nibe_133481_44060" | "nibe_133481_44055" | "nibe_133481_44699" | "nibe_133481_44071" | "nibe_133481_44073" | "nibe_133481_40737" | "nibe_133481_44701" | "nibe_133481_40782" | "nibe_133481_44014" | "last_activity" | "connection_status" | "has_alarmed" | "hygea" | "hygea_be" | "d1df7d67_b4318c17" | "8ef2ec82_947cc02d" | "b8030a1c_3ebf007c" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "dc3b1fc5_4961a7e0" | "da2cf25e_bb796133" | "ccbd4341_01cc53c2" | "00e9e4f0_03e3732b" | "2bd1a2c0_2263df99" | "fde49bad_fb722687" | "7999b6c0_f93fbc37" | "50a79e21_74701770" | "187a9779_66735846" | "a788d83b_085169a8" | "my_wall_panel_battery_level" | "my_wall_panel_light" | "living_room_cluster_size" | "living_room_cluster_leader" | "bedroom_cluster_size" | "bedroom_cluster_leader" | "tims_ipone_room_presence" | "tim_s_watch_room_presence" | "tim_s_ipone_room_presence" | "tim_s_ipone_room_presence_2" | "mirahi_c02d96kqmd6t_battery_state" | "21adb4aa_66a6b9a2" | "3f2bb951_563ca5f2" | "desk_outlet_power" | "desk_outlet_energy" | "fridge_power" | "fridge_energy"
export const sensor: Sensor<SensorIDs> = {
  
  ["time_to_mirahi"]: {
    entity_id: "sensor.time_to_mirahi",
    get state() { return shadowState["sensor.time_to_mirahi"]},
  },

  ["local_ip"]: {
    entity_id: "sensor.local_ip",
    get state() { return shadowState["sensor.local_ip"]},
  },

  ["plex_celty_3_0"]: {
    entity_id: "sensor.plex_celty_3_0",
    get state() { return shadowState["sensor.plex_celty_3_0"]},
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

  ["living_room_ir_blaster_temperature"]: {
    entity_id: "sensor.living_room_ir_blaster_temperature",
    get state() { return shadowState["sensor.living_room_ir_blaster_temperature"]},
  },

  ["living_room_ir_blaster_humidity"]: {
    entity_id: "sensor.living_room_ir_blaster_humidity",
    get state() { return shadowState["sensor.living_room_ir_blaster_humidity"]},
  },

  ["bedroom_ir_blaster_temperature"]: {
    entity_id: "sensor.bedroom_ir_blaster_temperature",
    get state() { return shadowState["sensor.bedroom_ir_blaster_temperature"]},
  },

  ["bedroom_ir_blaster_humidity"]: {
    entity_id: "sensor.bedroom_ir_blaster_humidity",
    get state() { return shadowState["sensor.bedroom_ir_blaster_humidity"]},
  },

  ["current_ozone_level"]: {
    entity_id: "sensor.current_ozone_level",
    get state() { return shadowState["sensor.current_ozone_level"]},
  },

  ["current_uv_index"]: {
    entity_id: "sensor.current_uv_index",
    get state() { return shadowState["sensor.current_uv_index"]},
  },

  ["current_uv_level"]: {
    entity_id: "sensor.current_uv_level",
    get state() { return shadowState["sensor.current_uv_level"]},
  },

  ["max_uv_index"]: {
    entity_id: "sensor.max_uv_index",
    get state() { return shadowState["sensor.max_uv_index"]},
  },

  ["skin_type_1_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_1_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_1_safe_exposure_time"]},
  },

  ["skin_type_2_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_2_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_2_safe_exposure_time"]},
  },

  ["skin_type_3_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_3_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_3_safe_exposure_time"]},
  },

  ["skin_type_4_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_4_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_4_safe_exposure_time"]},
  },

  ["skin_type_5_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_5_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_5_safe_exposure_time"]},
  },

  ["skin_type_6_safe_exposure_time"]: {
    entity_id: "sensor.skin_type_6_safe_exposure_time",
    get state() { return shadowState["sensor.skin_type_6_safe_exposure_time"]},
  },

  ["garage_state"]: {
    entity_id: "sensor.garage_state",
    get state() { return shadowState["sensor.garage_state"]},
  },

  ["map_segments"]: {
    entity_id: "sensor.map_segments",
    get state() { return shadowState["sensor.map_segments"]},
  },

  ["zone_presets"]: {
    entity_id: "sensor.zone_presets",
    get state() { return shadowState["sensor.zone_presets"]},
  },

  ["goto_locations"]: {
    entity_id: "sensor.goto_locations",
    get state() { return shadowState["sensor.goto_locations"]},
  },

  ["wi_fi_configuration"]: {
    entity_id: "sensor.wi_fi_configuration",
    get state() { return shadowState["sensor.wi_fi_configuration"]},
  },

  ["error_description"]: {
    entity_id: "sensor.error_description",
    get state() { return shadowState["sensor.error_description"]},
  },

  ["main_brush"]: {
    entity_id: "sensor.main_brush",
    get state() { return shadowState["sensor.main_brush"]},
  },

  ["right_brush"]: {
    entity_id: "sensor.right_brush",
    get state() { return shadowState["sensor.right_brush"]},
  },

  ["garage_position"]: {
    entity_id: "sensor.garage_position",
    get state() { return shadowState["sensor.garage_position"]},
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

  ["main_filter"]: {
    entity_id: "sensor.main_filter",
    get state() { return shadowState["sensor.main_filter"]},
  },

  ["sensor_cleaning"]: {
    entity_id: "sensor.sensor_cleaning",
    get state() { return shadowState["sensor.sensor_cleaning"]},
  },

  ["hacs"]: {
    entity_id: "sensor.hacs",
    get state() { return shadowState["sensor.hacs"]},
  },

  ["tims_ipone_steps"]: {
    entity_id: "sensor.tims_ipone_steps",
    get state() { return shadowState["sensor.tims_ipone_steps"]},
  },

  ["tims_ipone_activity"]: {
    entity_id: "sensor.tims_ipone_activity",
    get state() { return shadowState["sensor.tims_ipone_activity"]},
  },

  ["tims_ipone_distance"]: {
    entity_id: "sensor.tims_ipone_distance",
    get state() { return shadowState["sensor.tims_ipone_distance"]},
  },

  ["tims_ipone_floors_ascended"]: {
    entity_id: "sensor.tims_ipone_floors_ascended",
    get state() { return shadowState["sensor.tims_ipone_floors_ascended"]},
  },

  ["tims_ipone_average_active_pace"]: {
    entity_id: "sensor.tims_ipone_average_active_pace",
    get state() { return shadowState["sensor.tims_ipone_average_active_pace"]},
  },

  ["tims_ipone_floors_descended"]: {
    entity_id: "sensor.tims_ipone_floors_descended",
    get state() { return shadowState["sensor.tims_ipone_floors_descended"]},
  },

  ["tims_ipone_battery_level"]: {
    entity_id: "sensor.tims_ipone_battery_level",
    get state() { return shadowState["sensor.tims_ipone_battery_level"]},
  },

  ["tims_ipone_battery_state"]: {
    entity_id: "sensor.tims_ipone_battery_state",
    get state() { return shadowState["sensor.tims_ipone_battery_state"]},
  },

  ["tims_ipone_sim_1"]: {
    entity_id: "sensor.tims_ipone_sim_1",
    get state() { return shadowState["sensor.tims_ipone_sim_1"]},
  },

  ["tims_ipone_connection_type"]: {
    entity_id: "sensor.tims_ipone_connection_type",
    get state() { return shadowState["sensor.tims_ipone_connection_type"]},
  },

  ["tims_ipone_ssid"]: {
    entity_id: "sensor.tims_ipone_ssid",
    get state() { return shadowState["sensor.tims_ipone_ssid"]},
  },

  ["tims_ipone_storage"]: {
    entity_id: "sensor.tims_ipone_storage",
    get state() { return shadowState["sensor.tims_ipone_storage"]},
  },

  ["tims_ipone_bssid"]: {
    entity_id: "sensor.tims_ipone_bssid",
    get state() { return shadowState["sensor.tims_ipone_bssid"]},
  },

  ["tims_ipone_sim_2"]: {
    entity_id: "sensor.tims_ipone_sim_2",
    get state() { return shadowState["sensor.tims_ipone_sim_2"]},
  },

  ["tims_ipone_geocoded_location"]: {
    entity_id: "sensor.tims_ipone_geocoded_location",
    get state() { return shadowState["sensor.tims_ipone_geocoded_location"]},
  },

  ["tims_ipone_last_update_trigger"]: {
    entity_id: "sensor.tims_ipone_last_update_trigger",
    get state() { return shadowState["sensor.tims_ipone_last_update_trigger"]},
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

  ["mirahi_c02d96kqmd6t_internal_battery_level"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_internal_battery_level",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_internal_battery_level"]},
  },

  ["mirahi_c02d96kqmd6t_internal_battery_state"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_internal_battery_state",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_internal_battery_state"]},
  },

  ["mirahi_c02d96kqmd6t_storage"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_storage",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_storage"]},
  },

  ["mirahi_c02d96kqmd6t_ssid"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_ssid",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_ssid"]},
  },

  ["mirahi_c02d96kqmd6t_bssid"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_bssid",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_bssid"]},
  },

  ["mirahi_c02d96kqmd6t_connection_type"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_connection_type",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_connection_type"]},
  },

  ["mirahi_c02d96kqmd6t_active_camera"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_active_camera",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_active_camera"]},
  },

  ["mirahi_c02d96kqmd6t_active_audio_input"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_active_audio_input",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_active_audio_input"]},
  },

  ["mirahi_c02d96kqmd6t_active_audio_output"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_active_audio_output",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_active_audio_output"]},
  },

  ["mirahi_c02d96kqmd6t_displays"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_displays",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_displays"]},
  },

  ["mirahi_c02d96kqmd6t_primary_display_id"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_primary_display_id",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_primary_display_id"]},
  },

  ["mirahi_c02d96kqmd6t_primary_display_name"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_primary_display_name",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_primary_display_name"]},
  },

  ["mirahi_c02d96kqmd6t_last_update_trigger"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_last_update_trigger",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_last_update_trigger"]},
  },

  ["mirahi_c02d96kqmd6t_frontmost_app"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_frontmost_app",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_frontmost_app"]},
  },

  ["macbook_geocoded_location"]: {
    entity_id: "sensor.macbook_geocoded_location",
    get state() { return shadowState["sensor.macbook_geocoded_location"]},
  },

  ["living_room_light_power"]: {
    entity_id: "sensor.living_room_light_power",
    get state() { return shadowState["sensor.living_room_light_power"]},
  },

  ["bedroom_bed_light_power"]: {
    entity_id: "sensor.bedroom_bed_light_power",
    get state() { return shadowState["sensor.bedroom_bed_light_power"]},
  },

  ["hall_entrance_power"]: {
    entity_id: "sensor.hall_entrance_power",
    get state() { return shadowState["sensor.hall_entrance_power"]},
  },

  ["garage_car_power"]: {
    entity_id: "sensor.garage_car_power",
    get state() { return shadowState["sensor.garage_car_power"]},
  },

  ["garage_fridge_power"]: {
    entity_id: "sensor.garage_fridge_power",
    get state() { return shadowState["sensor.garage_fridge_power"]},
  },

  ["hall_stairs_power"]: {
    entity_id: "sensor.hall_stairs_power",
    get state() { return shadowState["sensor.hall_stairs_power"]},
  },

  ["living_room_light_energy"]: {
    entity_id: "sensor.living_room_light_energy",
    get state() { return shadowState["sensor.living_room_light_energy"]},
  },

  ["bedroom_bed_light_energy"]: {
    entity_id: "sensor.bedroom_bed_light_energy",
    get state() { return shadowState["sensor.bedroom_bed_light_energy"]},
  },

  ["hall_entrance_energy"]: {
    entity_id: "sensor.hall_entrance_energy",
    get state() { return shadowState["sensor.hall_entrance_energy"]},
  },

  ["garage_car_energy"]: {
    entity_id: "sensor.garage_car_energy",
    get state() { return shadowState["sensor.garage_car_energy"]},
  },

  ["garage_fridge_energy"]: {
    entity_id: "sensor.garage_fridge_energy",
    get state() { return shadowState["sensor.garage_fridge_energy"]},
  },

  ["hall_stairs_energy"]: {
    entity_id: "sensor.hall_stairs_energy",
    get state() { return shadowState["sensor.hall_stairs_energy"]},
  },

  ["garage_cluster_size"]: {
    entity_id: "sensor.garage_cluster_size",
    get state() { return shadowState["sensor.garage_cluster_size"]},
  },

  ["garage_cluster_leader"]: {
    entity_id: "sensor.garage_cluster_leader",
    get state() { return shadowState["sensor.garage_cluster_leader"]},
  },

  ["tim_s_phone_room_presence"]: {
    entity_id: "sensor.tim_s_phone_room_presence",
    get state() { return shadowState["sensor.tim_s_phone_room_presence"]},
  },

  ["gaby_s_phone_room_presence"]: {
    entity_id: "sensor.gaby_s_phone_room_presence",
    get state() { return shadowState["sensor.gaby_s_phone_room_presence"]},
  },

  ["kitchen_button_battery"]: {
    entity_id: "sensor.kitchen_button_battery",
    get state() { return shadowState["sensor.kitchen_button_battery"]},
  },

  ["kitchen_button_action"]: {
    entity_id: "sensor.kitchen_button_action",
    get state() { return shadowState["sensor.kitchen_button_action"]},
  },

  ["kitchen_button_click"]: {
    entity_id: "sensor.kitchen_button_click",
    get state() { return shadowState["sensor.kitchen_button_click"]},
  },

  ["coffee_machine_outlet_power"]: {
    entity_id: "sensor.coffee_machine_outlet_power",
    get state() { return shadowState["sensor.coffee_machine_outlet_power"]},
  },

  ["coffee_machine_outlet_energy"]: {
    entity_id: "sensor.coffee_machine_outlet_energy",
    get state() { return shadowState["sensor.coffee_machine_outlet_energy"]},
  },

  ["0xa4c1385c18410b5b_battery"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_battery",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_battery"]},
  },

  ["0xa4c1385c18410b5b_temperature"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_temperature",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_temperature"]},
  },

  ["0xa4c1385c18410b5b_humidity"]: {
    entity_id: "sensor.0xa4c1385c18410b5b_humidity",
    get state() { return shadowState["sensor.0xa4c1385c18410b5b_humidity"]},
  },

  ["living_room_remote_battery"]: {
    entity_id: "sensor.living_room_remote_battery",
    get state() { return shadowState["sensor.living_room_remote_battery"]},
  },

  ["living_room_remote_action"]: {
    entity_id: "sensor.living_room_remote_action",
    get state() { return shadowState["sensor.living_room_remote_action"]},
  },

  ["living_room_remote_action_duration"]: {
    entity_id: "sensor.living_room_remote_action_duration",
    get state() { return shadowState["sensor.living_room_remote_action_duration"]},
  },

  ["stairs_motion_sensor_battery"]: {
    entity_id: "sensor.stairs_motion_sensor_battery",
    get state() { return shadowState["sensor.stairs_motion_sensor_battery"]},
  },

  ["fridge_door_sensor_battery"]: {
    entity_id: "sensor.fridge_door_sensor_battery",
    get state() { return shadowState["sensor.fridge_door_sensor_battery"]},
  },

  ["fridge_door_sensor_temperature"]: {
    entity_id: "sensor.fridge_door_sensor_temperature",
    get state() { return shadowState["sensor.fridge_door_sensor_temperature"]},
  },

  ["bedside_lamp_power"]: {
    entity_id: "sensor.bedside_lamp_power",
    get state() { return shadowState["sensor.bedside_lamp_power"]},
  },

  ["bedside_lamp_energy"]: {
    entity_id: "sensor.bedside_lamp_energy",
    get state() { return shadowState["sensor.bedside_lamp_energy"]},
  },

  ["bedside_button_battery"]: {
    entity_id: "sensor.bedside_button_battery",
    get state() { return shadowState["sensor.bedside_button_battery"]},
  },

  ["bedside_button_action"]: {
    entity_id: "sensor.bedside_button_action",
    get state() { return shadowState["sensor.bedside_button_action"]},
  },

  ["coffee_machine_button_battery"]: {
    entity_id: "sensor.coffee_machine_button_battery",
    get state() { return shadowState["sensor.coffee_machine_button_battery"]},
  },

  ["coffee_machine_button_action"]: {
    entity_id: "sensor.coffee_machine_button_action",
    get state() { return shadowState["sensor.coffee_machine_button_action"]},
  },

  ["garage_electric_door_sensor_open_battery"]: {
    entity_id: "sensor.garage_electric_door_sensor_open_battery",
    get state() { return shadowState["sensor.garage_electric_door_sensor_open_battery"]},
  },

  ["garage_electric_door_sensor_open_temperature"]: {
    entity_id: "sensor.garage_electric_door_sensor_open_temperature",
    get state() { return shadowState["sensor.garage_electric_door_sensor_open_temperature"]},
  },

  ["garage_remote_battery"]: {
    entity_id: "sensor.garage_remote_battery",
    get state() { return shadowState["sensor.garage_remote_battery"]},
  },

  ["garage_remote_action"]: {
    entity_id: "sensor.garage_remote_action",
    get state() { return shadowState["sensor.garage_remote_action"]},
  },

  ["garage_remote_action_duration"]: {
    entity_id: "sensor.garage_remote_action_duration",
    get state() { return shadowState["sensor.garage_remote_action_duration"]},
  },

  ["washing_machine_power"]: {
    entity_id: "sensor.washing_machine_power",
    get state() { return shadowState["sensor.washing_machine_power"]},
  },

  ["washing_machine_energy"]: {
    entity_id: "sensor.washing_machine_energy",
    get state() { return shadowState["sensor.washing_machine_energy"]},
  },

  ["garage_door_battery"]: {
    entity_id: "sensor.garage_door_battery",
    get state() { return shadowState["sensor.garage_door_battery"]},
  },

  ["garage_door_temperature"]: {
    entity_id: "sensor.garage_door_temperature",
    get state() { return shadowState["sensor.garage_door_temperature"]},
  },

  ["garden_door_battery"]: {
    entity_id: "sensor.garden_door_battery",
    get state() { return shadowState["sensor.garden_door_battery"]},
  },

  ["garden_door_temperature"]: {
    entity_id: "sensor.garden_door_temperature",
    get state() { return shadowState["sensor.garden_door_temperature"]},
  },

  ["toilet_door_battery"]: {
    entity_id: "sensor.toilet_door_battery",
    get state() { return shadowState["sensor.toilet_door_battery"]},
  },

  ["entrance_door_battery"]: {
    entity_id: "sensor.entrance_door_battery",
    get state() { return shadowState["sensor.entrance_door_battery"]},
  },

  ["entrance_door_temperature"]: {
    entity_id: "sensor.entrance_door_temperature",
    get state() { return shadowState["sensor.entrance_door_temperature"]},
  },

  ["living_room_table_sensor_battery"]: {
    entity_id: "sensor.living_room_table_sensor_battery",
    get state() { return shadowState["sensor.living_room_table_sensor_battery"]},
  },

  ["living_room_table_sensor_temperature"]: {
    entity_id: "sensor.living_room_table_sensor_temperature",
    get state() { return shadowState["sensor.living_room_table_sensor_temperature"]},
  },

  ["living_room_table_sensor_humidity"]: {
    entity_id: "sensor.living_room_table_sensor_humidity",
    get state() { return shadowState["sensor.living_room_table_sensor_humidity"]},
  },

  ["living_room_table_button_battery"]: {
    entity_id: "sensor.living_room_table_button_battery",
    get state() { return shadowState["sensor.living_room_table_button_battery"]},
  },

  ["living_room_table_button_action"]: {
    entity_id: "sensor.living_room_table_button_action",
    get state() { return shadowState["sensor.living_room_table_button_action"]},
  },

  ["bedroom_window_bed_battery"]: {
    entity_id: "sensor.bedroom_window_bed_battery",
    get state() { return shadowState["sensor.bedroom_window_bed_battery"]},
  },

  ["bedroom_window_bed_temperature"]: {
    entity_id: "sensor.bedroom_window_bed_temperature",
    get state() { return shadowState["sensor.bedroom_window_bed_temperature"]},
  },

  ["garage_electric_door_sensor_closed_battery"]: {
    entity_id: "sensor.garage_electric_door_sensor_closed_battery",
    get state() { return shadowState["sensor.garage_electric_door_sensor_closed_battery"]},
  },

  ["garage_electric_door_sensor_closed_temperature"]: {
    entity_id: "sensor.garage_electric_door_sensor_closed_temperature",
    get state() { return shadowState["sensor.garage_electric_door_sensor_closed_temperature"]},
  },

  ["siren_temperature"]: {
    entity_id: "sensor.siren_temperature",
    get state() { return shadowState["sensor.siren_temperature"]},
  },

  ["siren_humidity"]: {
    entity_id: "sensor.siren_humidity",
    get state() { return shadowState["sensor.siren_humidity"]},
  },

  ["siren_power_type"]: {
    entity_id: "sensor.siren_power_type",
    get state() { return shadowState["sensor.siren_power_type"]},
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

  ["1_yjx_427_oil_level"]: {
    entity_id: "sensor.1_yjx_427_oil_level",
    get state() { return shadowState["sensor.1_yjx_427_oil_level"]},
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

  ["8ef2ec82_947cc02d"]: {
    entity_id: "sensor.8ef2ec82_947cc02d",
    get state() { return shadowState["sensor.8ef2ec82_947cc02d"]},
  },

  ["b8030a1c_3ebf007c"]: {
    entity_id: "sensor.b8030a1c_3ebf007c",
    get state() { return shadowState["sensor.b8030a1c_3ebf007c"]},
  },

  ["ebbff7dd_e82b404f"]: {
    entity_id: "sensor.ebbff7dd_e82b404f",
    get state() { return shadowState["sensor.ebbff7dd_e82b404f"]},
  },

  ["aadf3129_ecd1ece2"]: {
    entity_id: "sensor.aadf3129_ecd1ece2",
    get state() { return shadowState["sensor.aadf3129_ecd1ece2"]},
  },

  ["dc3b1fc5_4961a7e0"]: {
    entity_id: "sensor.dc3b1fc5_4961a7e0",
    get state() { return shadowState["sensor.dc3b1fc5_4961a7e0"]},
  },

  ["da2cf25e_bb796133"]: {
    entity_id: "sensor.da2cf25e_bb796133",
    get state() { return shadowState["sensor.da2cf25e_bb796133"]},
  },

  ["ccbd4341_01cc53c2"]: {
    entity_id: "sensor.ccbd4341_01cc53c2",
    get state() { return shadowState["sensor.ccbd4341_01cc53c2"]},
  },

  ["00e9e4f0_03e3732b"]: {
    entity_id: "sensor.00e9e4f0_03e3732b",
    get state() { return shadowState["sensor.00e9e4f0_03e3732b"]},
  },

  ["2bd1a2c0_2263df99"]: {
    entity_id: "sensor.2bd1a2c0_2263df99",
    get state() { return shadowState["sensor.2bd1a2c0_2263df99"]},
  },

  ["fde49bad_fb722687"]: {
    entity_id: "sensor.fde49bad_fb722687",
    get state() { return shadowState["sensor.fde49bad_fb722687"]},
  },

  ["7999b6c0_f93fbc37"]: {
    entity_id: "sensor.7999b6c0_f93fbc37",
    get state() { return shadowState["sensor.7999b6c0_f93fbc37"]},
  },

  ["50a79e21_74701770"]: {
    entity_id: "sensor.50a79e21_74701770",
    get state() { return shadowState["sensor.50a79e21_74701770"]},
  },

  ["187a9779_66735846"]: {
    entity_id: "sensor.187a9779_66735846",
    get state() { return shadowState["sensor.187a9779_66735846"]},
  },

  ["a788d83b_085169a8"]: {
    entity_id: "sensor.a788d83b_085169a8",
    get state() { return shadowState["sensor.a788d83b_085169a8"]},
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

  ["mirahi_c02d96kqmd6t_battery_state"]: {
    entity_id: "sensor.mirahi_c02d96kqmd6t_battery_state",
    get state() { return shadowState["sensor.mirahi_c02d96kqmd6t_battery_state"]},
  },

  ["21adb4aa_66a6b9a2"]: {
    entity_id: "sensor.21adb4aa_66a6b9a2",
    get state() { return shadowState["sensor.21adb4aa_66a6b9a2"]},
  },

  ["3f2bb951_563ca5f2"]: {
    entity_id: "sensor.3f2bb951_563ca5f2",
    get state() { return shadowState["sensor.3f2bb951_563ca5f2"]},
  },

  ["desk_outlet_power"]: {
    entity_id: "sensor.desk_outlet_power",
    get state() { return shadowState["sensor.desk_outlet_power"]},
  },

  ["desk_outlet_energy"]: {
    entity_id: "sensor.desk_outlet_energy",
    get state() { return shadowState["sensor.desk_outlet_energy"]},
  },

  ["fridge_power"]: {
    entity_id: "sensor.fridge_power",
    get state() { return shadowState["sensor.fridge_power"]},
  },

  ["fridge_energy"]: {
    entity_id: "sensor.fridge_energy",
    get state() { return shadowState["sensor.fridge_energy"]},
  },
}
  