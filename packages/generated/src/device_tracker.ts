import { shadowState, DeviceTracker} from "@herja/core"
        export type DeviceTrackerIDs = "tim_iphone_ip" | "gaby_galaxy_s20" | "hostname1" | "00_01_2e_65_c0_dc" | "02_42_c0_a8_c8_03" | "aida" | "broadlink_wifi_device_23_cb_47" | "yeelink_light_color2_miio134290485" | "broadlink_remote_0c_81_90" | "openwrt" | "sma3004169620" | "living_room" | "bedroom" | "48_b0_2d_15_21_c5" | "gs1200_8" | "ce_4e_3a_21_d1_16" | "fritz1" | "92_ce_51_71_7e_6c" | "2c_76_8a_5a_f2_d4" | "78_d6_dc_2f_29_a8" | "kapy" | "54_10_ec_c4_ef_fa" | "64_b5_c6_52_0c_fd" | "14_7d_da_07_bf_1f" | "2c_f0_5d_85_80_3c" | "50_ec_50_1b_3a_85" | "04_03_d6_07_6b_09" | "galaxywatch3_6bc3" | "86_68_bf_9c_55_5c" | "2e_cf_bf_46_3b_bb" | "mirahi_c02cm4h9md6t" | "antonios_mbp" | "64_4b_f0_2b_93_d8" | "ipad" | "tims_ipone" | "sm_g980f" | "mirahi_c02d96kqmd6t" | "1_yjx_427_device_tracker" | "tim_s_phone_tracker" | "tims_ipone_tracker" | "tim_s_watch_tracker" | "tim_s_ipone_tracker" | "tim_s_ipone_tracker_2" | "gaby_s_phone_tracker" | "tim_all_in_one" | "gaby_all_in_one"
export const device_tracker: DeviceTracker<DeviceTrackerIDs> = {
  
  ["tim_iphone_ip"]: {
    entity_id: "sun.tim_iphone_ip",
    isHome: () => shadowState["device_tracker.tim_iphone_ip"].state === 'home',
    get state() { return shadowState["device_tracker.tim_iphone_ip"]},
  },

  ["gaby_galaxy_s20"]: {
    entity_id: "sun.gaby_galaxy_s20",
    isHome: () => shadowState["device_tracker.gaby_galaxy_s20"].state === 'home',
    get state() { return shadowState["device_tracker.gaby_galaxy_s20"]},
  },

  ["hostname1"]: {
    entity_id: "sun.hostname1",
    isHome: () => shadowState["device_tracker.hostname1"].state === 'home',
    get state() { return shadowState["device_tracker.hostname1"]},
  },

  ["00_01_2e_65_c0_dc"]: {
    entity_id: "sun.00_01_2e_65_c0_dc",
    isHome: () => shadowState["device_tracker.00_01_2e_65_c0_dc"].state === 'home',
    get state() { return shadowState["device_tracker.00_01_2e_65_c0_dc"]},
  },

  ["02_42_c0_a8_c8_03"]: {
    entity_id: "sun.02_42_c0_a8_c8_03",
    isHome: () => shadowState["device_tracker.02_42_c0_a8_c8_03"].state === 'home',
    get state() { return shadowState["device_tracker.02_42_c0_a8_c8_03"]},
  },

  ["aida"]: {
    entity_id: "sun.aida",
    isHome: () => shadowState["device_tracker.aida"].state === 'home',
    get state() { return shadowState["device_tracker.aida"]},
  },

  ["broadlink_wifi_device_23_cb_47"]: {
    entity_id: "sun.broadlink_wifi_device_23_cb_47",
    isHome: () => shadowState["device_tracker.broadlink_wifi_device_23_cb_47"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_wifi_device_23_cb_47"]},
  },

  ["yeelink_light_color2_miio134290485"]: {
    entity_id: "sun.yeelink_light_color2_miio134290485",
    isHome: () => shadowState["device_tracker.yeelink_light_color2_miio134290485"].state === 'home',
    get state() { return shadowState["device_tracker.yeelink_light_color2_miio134290485"]},
  },

  ["broadlink_remote_0c_81_90"]: {
    entity_id: "sun.broadlink_remote_0c_81_90",
    isHome: () => shadowState["device_tracker.broadlink_remote_0c_81_90"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_0c_81_90"]},
  },

  ["openwrt"]: {
    entity_id: "sun.openwrt",
    isHome: () => shadowState["device_tracker.openwrt"].state === 'home',
    get state() { return shadowState["device_tracker.openwrt"]},
  },

  ["sma3004169620"]: {
    entity_id: "sun.sma3004169620",
    isHome: () => shadowState["device_tracker.sma3004169620"].state === 'home',
    get state() { return shadowState["device_tracker.sma3004169620"]},
  },

  ["living_room"]: {
    entity_id: "sun.living_room",
    isHome: () => shadowState["device_tracker.living_room"].state === 'home',
    get state() { return shadowState["device_tracker.living_room"]},
  },

  ["bedroom"]: {
    entity_id: "sun.bedroom",
    isHome: () => shadowState["device_tracker.bedroom"].state === 'home',
    get state() { return shadowState["device_tracker.bedroom"]},
  },

  ["48_b0_2d_15_21_c5"]: {
    entity_id: "sun.48_b0_2d_15_21_c5",
    isHome: () => shadowState["device_tracker.48_b0_2d_15_21_c5"].state === 'home',
    get state() { return shadowState["device_tracker.48_b0_2d_15_21_c5"]},
  },

  ["gs1200_8"]: {
    entity_id: "sun.gs1200_8",
    isHome: () => shadowState["device_tracker.gs1200_8"].state === 'home',
    get state() { return shadowState["device_tracker.gs1200_8"]},
  },

  ["ce_4e_3a_21_d1_16"]: {
    entity_id: "sun.ce_4e_3a_21_d1_16",
    isHome: () => shadowState["device_tracker.ce_4e_3a_21_d1_16"].state === 'home',
    get state() { return shadowState["device_tracker.ce_4e_3a_21_d1_16"]},
  },

  ["fritz1"]: {
    entity_id: "sun.fritz1",
    isHome: () => shadowState["device_tracker.fritz1"].state === 'home',
    get state() { return shadowState["device_tracker.fritz1"]},
  },

  ["92_ce_51_71_7e_6c"]: {
    entity_id: "sun.92_ce_51_71_7e_6c",
    isHome: () => shadowState["device_tracker.92_ce_51_71_7e_6c"].state === 'home',
    get state() { return shadowState["device_tracker.92_ce_51_71_7e_6c"]},
  },

  ["2c_76_8a_5a_f2_d4"]: {
    entity_id: "sun.2c_76_8a_5a_f2_d4",
    isHome: () => shadowState["device_tracker.2c_76_8a_5a_f2_d4"].state === 'home',
    get state() { return shadowState["device_tracker.2c_76_8a_5a_f2_d4"]},
  },

  ["78_d6_dc_2f_29_a8"]: {
    entity_id: "sun.78_d6_dc_2f_29_a8",
    isHome: () => shadowState["device_tracker.78_d6_dc_2f_29_a8"].state === 'home',
    get state() { return shadowState["device_tracker.78_d6_dc_2f_29_a8"]},
  },

  ["kapy"]: {
    entity_id: "sun.kapy",
    isHome: () => shadowState["device_tracker.kapy"].state === 'home',
    get state() { return shadowState["device_tracker.kapy"]},
  },

  ["54_10_ec_c4_ef_fa"]: {
    entity_id: "sun.54_10_ec_c4_ef_fa",
    isHome: () => shadowState["device_tracker.54_10_ec_c4_ef_fa"].state === 'home',
    get state() { return shadowState["device_tracker.54_10_ec_c4_ef_fa"]},
  },

  ["64_b5_c6_52_0c_fd"]: {
    entity_id: "sun.64_b5_c6_52_0c_fd",
    isHome: () => shadowState["device_tracker.64_b5_c6_52_0c_fd"].state === 'home',
    get state() { return shadowState["device_tracker.64_b5_c6_52_0c_fd"]},
  },

  ["14_7d_da_07_bf_1f"]: {
    entity_id: "sun.14_7d_da_07_bf_1f",
    isHome: () => shadowState["device_tracker.14_7d_da_07_bf_1f"].state === 'home',
    get state() { return shadowState["device_tracker.14_7d_da_07_bf_1f"]},
  },

  ["2c_f0_5d_85_80_3c"]: {
    entity_id: "sun.2c_f0_5d_85_80_3c",
    isHome: () => shadowState["device_tracker.2c_f0_5d_85_80_3c"].state === 'home',
    get state() { return shadowState["device_tracker.2c_f0_5d_85_80_3c"]},
  },

  ["50_ec_50_1b_3a_85"]: {
    entity_id: "sun.50_ec_50_1b_3a_85",
    isHome: () => shadowState["device_tracker.50_ec_50_1b_3a_85"].state === 'home',
    get state() { return shadowState["device_tracker.50_ec_50_1b_3a_85"]},
  },

  ["04_03_d6_07_6b_09"]: {
    entity_id: "sun.04_03_d6_07_6b_09",
    isHome: () => shadowState["device_tracker.04_03_d6_07_6b_09"].state === 'home',
    get state() { return shadowState["device_tracker.04_03_d6_07_6b_09"]},
  },

  ["galaxywatch3_6bc3"]: {
    entity_id: "sun.galaxywatch3_6bc3",
    isHome: () => shadowState["device_tracker.galaxywatch3_6bc3"].state === 'home',
    get state() { return shadowState["device_tracker.galaxywatch3_6bc3"]},
  },

  ["86_68_bf_9c_55_5c"]: {
    entity_id: "sun.86_68_bf_9c_55_5c",
    isHome: () => shadowState["device_tracker.86_68_bf_9c_55_5c"].state === 'home',
    get state() { return shadowState["device_tracker.86_68_bf_9c_55_5c"]},
  },

  ["2e_cf_bf_46_3b_bb"]: {
    entity_id: "sun.2e_cf_bf_46_3b_bb",
    isHome: () => shadowState["device_tracker.2e_cf_bf_46_3b_bb"].state === 'home',
    get state() { return shadowState["device_tracker.2e_cf_bf_46_3b_bb"]},
  },

  ["mirahi_c02cm4h9md6t"]: {
    entity_id: "sun.mirahi_c02cm4h9md6t",
    isHome: () => shadowState["device_tracker.mirahi_c02cm4h9md6t"].state === 'home',
    get state() { return shadowState["device_tracker.mirahi_c02cm4h9md6t"]},
  },

  ["antonios_mbp"]: {
    entity_id: "sun.antonios_mbp",
    isHome: () => shadowState["device_tracker.antonios_mbp"].state === 'home',
    get state() { return shadowState["device_tracker.antonios_mbp"]},
  },

  ["64_4b_f0_2b_93_d8"]: {
    entity_id: "sun.64_4b_f0_2b_93_d8",
    isHome: () => shadowState["device_tracker.64_4b_f0_2b_93_d8"].state === 'home',
    get state() { return shadowState["device_tracker.64_4b_f0_2b_93_d8"]},
  },

  ["ipad"]: {
    entity_id: "sun.ipad",
    isHome: () => shadowState["device_tracker.ipad"].state === 'home',
    get state() { return shadowState["device_tracker.ipad"]},
  },

  ["tims_ipone"]: {
    entity_id: "sun.tims_ipone",
    isHome: () => shadowState["device_tracker.tims_ipone"].state === 'home',
    get state() { return shadowState["device_tracker.tims_ipone"]},
  },

  ["sm_g980f"]: {
    entity_id: "sun.sm_g980f",
    isHome: () => shadowState["device_tracker.sm_g980f"].state === 'home',
    get state() { return shadowState["device_tracker.sm_g980f"]},
  },

  ["mirahi_c02d96kqmd6t"]: {
    entity_id: "sun.mirahi_c02d96kqmd6t",
    isHome: () => shadowState["device_tracker.mirahi_c02d96kqmd6t"].state === 'home',
    get state() { return shadowState["device_tracker.mirahi_c02d96kqmd6t"]},
  },

  ["1_yjx_427_device_tracker"]: {
    entity_id: "sun.1_yjx_427_device_tracker",
    isHome: () => shadowState["device_tracker.1_yjx_427_device_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.1_yjx_427_device_tracker"]},
  },

  ["tim_s_phone_tracker"]: {
    entity_id: "sun.tim_s_phone_tracker",
    isHome: () => shadowState["device_tracker.tim_s_phone_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_phone_tracker"]},
  },

  ["tims_ipone_tracker"]: {
    entity_id: "sun.tims_ipone_tracker",
    isHome: () => shadowState["device_tracker.tims_ipone_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tims_ipone_tracker"]},
  },

  ["tim_s_watch_tracker"]: {
    entity_id: "sun.tim_s_watch_tracker",
    isHome: () => shadowState["device_tracker.tim_s_watch_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_watch_tracker"]},
  },

  ["tim_s_ipone_tracker"]: {
    entity_id: "sun.tim_s_ipone_tracker",
    isHome: () => shadowState["device_tracker.tim_s_ipone_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_ipone_tracker"]},
  },

  ["tim_s_ipone_tracker_2"]: {
    entity_id: "sun.tim_s_ipone_tracker_2",
    isHome: () => shadowState["device_tracker.tim_s_ipone_tracker_2"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_ipone_tracker_2"]},
  },

  ["gaby_s_phone_tracker"]: {
    entity_id: "sun.gaby_s_phone_tracker",
    isHome: () => shadowState["device_tracker.gaby_s_phone_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.gaby_s_phone_tracker"]},
  },

  ["tim_all_in_one"]: {
    entity_id: "sun.tim_all_in_one",
    isHome: () => shadowState["device_tracker.tim_all_in_one"].state === 'home',
    get state() { return shadowState["device_tracker.tim_all_in_one"]},
  },

  ["gaby_all_in_one"]: {
    entity_id: "sun.gaby_all_in_one",
    isHome: () => shadowState["device_tracker.gaby_all_in_one"].state === 'home',
    get state() { return shadowState["device_tracker.gaby_all_in_one"]},
  },
}
  