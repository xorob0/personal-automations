import { shadowState, DeviceTracker} from "@herja/core"
        export type DeviceTrackerIDs = "gaby_galaxy_s20" | "hostname1" | "tim_iphone_ip" | "00_01_2e_65_c0_dc" | "02_42_c0_a8_c8_03" | "aida" | "broadlink_wifi_device_23_cb_47" | "yeelink_light_color2_miio134290485" | "broadlink_remote_0c_81_90" | "openwrt" | "sma3004169620" | "living_room" | "bedroom" | "48_b0_2d_15_21_c5" | "gs1200_8" | "ce_4e_3a_21_d1_16" | "fritz1" | "92_ce_51_71_7e_6c" | "2c_76_8a_5a_f2_d4" | "78_d6_dc_2f_29_a8" | "kapy" | "54_10_ec_c4_ef_fa" | "64_b5_c6_52_0c_fd" | "14_7d_da_07_bf_1f" | "2c_f0_5d_85_80_3c" | "50_ec_50_1b_3a_85" | "04_03_d6_07_6b_09" | "galaxywatch3_6bc3" | "86_68_bf_9c_55_5c" | "2e_cf_bf_46_3b_bb" | "mirahi_c02cm4h9md6t" | "antonios_mbp" | "64_4b_f0_2b_93_d8" | "ipad" | "tims_mbp" | "kobo" | "air_de_gaby" | "6c_3c_7c_02_33_af" | "galaxy_s22" | "ea_99_73_29_70_32" | "lt_621jtg3" | "android_5ef1b103dc61d633" | "7a_c1_86_3d_b5_93" | "synologynas" | "wb457613" | "antonioplewatch" | "94_18_82_c6_a8_00" | "32_25_e5_6c_52_92" | "broadlink_remote_b8_f4_bf" | "galaxy_s22_2" | "ca_14_46_8a_20_2a" | "72_31_7e_fa_4f_c0" | "ea_52_c4_99_56_8f" | "victors_mbp" | "60_22_32_36_3b_f8" | "galaxy_s22_3" | "galaxy_s22_4" | "60_22_32_33_8d_ec" | "00_90_9e_9d_84_8e" | "broadlink_remote_72_4c_9b" | "ba_6b_79_eb_92_7c" | "galaxy_s22_5" | "galaxy_s22_6" | "kapy_2" | "32_2b_1c_02_37_a0" | "42_24_66_e9_f0_84" | "pink" | "2a_06_c2_4a_01_15" | "00_04_4b_fc_fb_81" | "00_04_4b_fb_74_e1" | "living_room_esp32" | "c0_49_ef_ca_39_c4" | "34_86_5d_fd_76_8c" | "c8_f0_9e_9e_0f_98" | "b6_b1_26_aa_df_85" | "be_b6_67_82_75_a2" | "broadlink_remote_b8_f4_bf_2" | "living_room_esp32_2" | "bedroom_esp32" | "broadlink_remote_72_4c_9b_2" | "broadlink_remote_0c_81_90_2" | "broadlink_wifi_device_23_cb_47_2" | "victor_esp32" | "ual6" | "ual6_2" | "1_yjx_427_device_tracker" | "tim" | "sm_g980f" | "tims_macbook_pro" | "s22" | "tims_ipone_tracker" | "tim_s_watch_tracker" | "tim_s_ipone_tracker" | "tim_s_ipone_tracker_2" | "tim_s_phone_tracker" | "gaby_s_phone_tracker" | "tim_all_in_one" | "gaby_all_in_one" | "tim_s_id_4_tracker" | "tim_calculated" | "garage_esp32" | "01073d14_3789_4814_82fe_330131debcf9_100_1_1ef9" | "747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_3bb2" | "01073d14_3789_4814_82fe_330131debcf9_100_1_9871" | "747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_7f86"
export const device_tracker: DeviceTracker<DeviceTrackerIDs> = {
  
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

  ["tim_iphone_ip"]: {
    entity_id: "sun.tim_iphone_ip",
    isHome: () => shadowState["device_tracker.tim_iphone_ip"].state === 'home',
    get state() { return shadowState["device_tracker.tim_iphone_ip"]},
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

  ["tims_mbp"]: {
    entity_id: "sun.tims_mbp",
    isHome: () => shadowState["device_tracker.tims_mbp"].state === 'home',
    get state() { return shadowState["device_tracker.tims_mbp"]},
  },

  ["kobo"]: {
    entity_id: "sun.kobo",
    isHome: () => shadowState["device_tracker.kobo"].state === 'home',
    get state() { return shadowState["device_tracker.kobo"]},
  },

  ["air_de_gaby"]: {
    entity_id: "sun.air_de_gaby",
    isHome: () => shadowState["device_tracker.air_de_gaby"].state === 'home',
    get state() { return shadowState["device_tracker.air_de_gaby"]},
  },

  ["6c_3c_7c_02_33_af"]: {
    entity_id: "sun.6c_3c_7c_02_33_af",
    isHome: () => shadowState["device_tracker.6c_3c_7c_02_33_af"].state === 'home',
    get state() { return shadowState["device_tracker.6c_3c_7c_02_33_af"]},
  },

  ["galaxy_s22"]: {
    entity_id: "sun.galaxy_s22",
    isHome: () => shadowState["device_tracker.galaxy_s22"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22"]},
  },

  ["ea_99_73_29_70_32"]: {
    entity_id: "sun.ea_99_73_29_70_32",
    isHome: () => shadowState["device_tracker.ea_99_73_29_70_32"].state === 'home',
    get state() { return shadowState["device_tracker.ea_99_73_29_70_32"]},
  },

  ["lt_621jtg3"]: {
    entity_id: "sun.lt_621jtg3",
    isHome: () => shadowState["device_tracker.lt_621jtg3"].state === 'home',
    get state() { return shadowState["device_tracker.lt_621jtg3"]},
  },

  ["android_5ef1b103dc61d633"]: {
    entity_id: "sun.android_5ef1b103dc61d633",
    isHome: () => shadowState["device_tracker.android_5ef1b103dc61d633"].state === 'home',
    get state() { return shadowState["device_tracker.android_5ef1b103dc61d633"]},
  },

  ["7a_c1_86_3d_b5_93"]: {
    entity_id: "sun.7a_c1_86_3d_b5_93",
    isHome: () => shadowState["device_tracker.7a_c1_86_3d_b5_93"].state === 'home',
    get state() { return shadowState["device_tracker.7a_c1_86_3d_b5_93"]},
  },

  ["synologynas"]: {
    entity_id: "sun.synologynas",
    isHome: () => shadowState["device_tracker.synologynas"].state === 'home',
    get state() { return shadowState["device_tracker.synologynas"]},
  },

  ["wb457613"]: {
    entity_id: "sun.wb457613",
    isHome: () => shadowState["device_tracker.wb457613"].state === 'home',
    get state() { return shadowState["device_tracker.wb457613"]},
  },

  ["antonioplewatch"]: {
    entity_id: "sun.antonioplewatch",
    isHome: () => shadowState["device_tracker.antonioplewatch"].state === 'home',
    get state() { return shadowState["device_tracker.antonioplewatch"]},
  },

  ["94_18_82_c6_a8_00"]: {
    entity_id: "sun.94_18_82_c6_a8_00",
    isHome: () => shadowState["device_tracker.94_18_82_c6_a8_00"].state === 'home',
    get state() { return shadowState["device_tracker.94_18_82_c6_a8_00"]},
  },

  ["32_25_e5_6c_52_92"]: {
    entity_id: "sun.32_25_e5_6c_52_92",
    isHome: () => shadowState["device_tracker.32_25_e5_6c_52_92"].state === 'home',
    get state() { return shadowState["device_tracker.32_25_e5_6c_52_92"]},
  },

  ["broadlink_remote_b8_f4_bf"]: {
    entity_id: "sun.broadlink_remote_b8_f4_bf",
    isHome: () => shadowState["device_tracker.broadlink_remote_b8_f4_bf"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_b8_f4_bf"]},
  },

  ["galaxy_s22_2"]: {
    entity_id: "sun.galaxy_s22_2",
    isHome: () => shadowState["device_tracker.galaxy_s22_2"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22_2"]},
  },

  ["ca_14_46_8a_20_2a"]: {
    entity_id: "sun.ca_14_46_8a_20_2a",
    isHome: () => shadowState["device_tracker.ca_14_46_8a_20_2a"].state === 'home',
    get state() { return shadowState["device_tracker.ca_14_46_8a_20_2a"]},
  },

  ["72_31_7e_fa_4f_c0"]: {
    entity_id: "sun.72_31_7e_fa_4f_c0",
    isHome: () => shadowState["device_tracker.72_31_7e_fa_4f_c0"].state === 'home',
    get state() { return shadowState["device_tracker.72_31_7e_fa_4f_c0"]},
  },

  ["ea_52_c4_99_56_8f"]: {
    entity_id: "sun.ea_52_c4_99_56_8f",
    isHome: () => shadowState["device_tracker.ea_52_c4_99_56_8f"].state === 'home',
    get state() { return shadowState["device_tracker.ea_52_c4_99_56_8f"]},
  },

  ["victors_mbp"]: {
    entity_id: "sun.victors_mbp",
    isHome: () => shadowState["device_tracker.victors_mbp"].state === 'home',
    get state() { return shadowState["device_tracker.victors_mbp"]},
  },

  ["60_22_32_36_3b_f8"]: {
    entity_id: "sun.60_22_32_36_3b_f8",
    isHome: () => shadowState["device_tracker.60_22_32_36_3b_f8"].state === 'home',
    get state() { return shadowState["device_tracker.60_22_32_36_3b_f8"]},
  },

  ["galaxy_s22_3"]: {
    entity_id: "sun.galaxy_s22_3",
    isHome: () => shadowState["device_tracker.galaxy_s22_3"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22_3"]},
  },

  ["galaxy_s22_4"]: {
    entity_id: "sun.galaxy_s22_4",
    isHome: () => shadowState["device_tracker.galaxy_s22_4"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22_4"]},
  },

  ["60_22_32_33_8d_ec"]: {
    entity_id: "sun.60_22_32_33_8d_ec",
    isHome: () => shadowState["device_tracker.60_22_32_33_8d_ec"].state === 'home',
    get state() { return shadowState["device_tracker.60_22_32_33_8d_ec"]},
  },

  ["00_90_9e_9d_84_8e"]: {
    entity_id: "sun.00_90_9e_9d_84_8e",
    isHome: () => shadowState["device_tracker.00_90_9e_9d_84_8e"].state === 'home',
    get state() { return shadowState["device_tracker.00_90_9e_9d_84_8e"]},
  },

  ["broadlink_remote_72_4c_9b"]: {
    entity_id: "sun.broadlink_remote_72_4c_9b",
    isHome: () => shadowState["device_tracker.broadlink_remote_72_4c_9b"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_72_4c_9b"]},
  },

  ["ba_6b_79_eb_92_7c"]: {
    entity_id: "sun.ba_6b_79_eb_92_7c",
    isHome: () => shadowState["device_tracker.ba_6b_79_eb_92_7c"].state === 'home',
    get state() { return shadowState["device_tracker.ba_6b_79_eb_92_7c"]},
  },

  ["galaxy_s22_5"]: {
    entity_id: "sun.galaxy_s22_5",
    isHome: () => shadowState["device_tracker.galaxy_s22_5"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22_5"]},
  },

  ["galaxy_s22_6"]: {
    entity_id: "sun.galaxy_s22_6",
    isHome: () => shadowState["device_tracker.galaxy_s22_6"].state === 'home',
    get state() { return shadowState["device_tracker.galaxy_s22_6"]},
  },

  ["kapy_2"]: {
    entity_id: "sun.kapy_2",
    isHome: () => shadowState["device_tracker.kapy_2"].state === 'home',
    get state() { return shadowState["device_tracker.kapy_2"]},
  },

  ["32_2b_1c_02_37_a0"]: {
    entity_id: "sun.32_2b_1c_02_37_a0",
    isHome: () => shadowState["device_tracker.32_2b_1c_02_37_a0"].state === 'home',
    get state() { return shadowState["device_tracker.32_2b_1c_02_37_a0"]},
  },

  ["42_24_66_e9_f0_84"]: {
    entity_id: "sun.42_24_66_e9_f0_84",
    isHome: () => shadowState["device_tracker.42_24_66_e9_f0_84"].state === 'home',
    get state() { return shadowState["device_tracker.42_24_66_e9_f0_84"]},
  },

  ["pink"]: {
    entity_id: "sun.pink",
    isHome: () => shadowState["device_tracker.pink"].state === 'home',
    get state() { return shadowState["device_tracker.pink"]},
  },

  ["2a_06_c2_4a_01_15"]: {
    entity_id: "sun.2a_06_c2_4a_01_15",
    isHome: () => shadowState["device_tracker.2a_06_c2_4a_01_15"].state === 'home',
    get state() { return shadowState["device_tracker.2a_06_c2_4a_01_15"]},
  },

  ["00_04_4b_fc_fb_81"]: {
    entity_id: "sun.00_04_4b_fc_fb_81",
    isHome: () => shadowState["device_tracker.00_04_4b_fc_fb_81"].state === 'home',
    get state() { return shadowState["device_tracker.00_04_4b_fc_fb_81"]},
  },

  ["00_04_4b_fb_74_e1"]: {
    entity_id: "sun.00_04_4b_fb_74_e1",
    isHome: () => shadowState["device_tracker.00_04_4b_fb_74_e1"].state === 'home',
    get state() { return shadowState["device_tracker.00_04_4b_fb_74_e1"]},
  },

  ["living_room_esp32"]: {
    entity_id: "sun.living_room_esp32",
    isHome: () => shadowState["device_tracker.living_room_esp32"].state === 'home',
    get state() { return shadowState["device_tracker.living_room_esp32"]},
  },

  ["c0_49_ef_ca_39_c4"]: {
    entity_id: "sun.c0_49_ef_ca_39_c4",
    isHome: () => shadowState["device_tracker.c0_49_ef_ca_39_c4"].state === 'home',
    get state() { return shadowState["device_tracker.c0_49_ef_ca_39_c4"]},
  },

  ["34_86_5d_fd_76_8c"]: {
    entity_id: "sun.34_86_5d_fd_76_8c",
    isHome: () => shadowState["device_tracker.34_86_5d_fd_76_8c"].state === 'home',
    get state() { return shadowState["device_tracker.34_86_5d_fd_76_8c"]},
  },

  ["c8_f0_9e_9e_0f_98"]: {
    entity_id: "sun.c8_f0_9e_9e_0f_98",
    isHome: () => shadowState["device_tracker.c8_f0_9e_9e_0f_98"].state === 'home',
    get state() { return shadowState["device_tracker.c8_f0_9e_9e_0f_98"]},
  },

  ["b6_b1_26_aa_df_85"]: {
    entity_id: "sun.b6_b1_26_aa_df_85",
    isHome: () => shadowState["device_tracker.b6_b1_26_aa_df_85"].state === 'home',
    get state() { return shadowState["device_tracker.b6_b1_26_aa_df_85"]},
  },

  ["be_b6_67_82_75_a2"]: {
    entity_id: "sun.be_b6_67_82_75_a2",
    isHome: () => shadowState["device_tracker.be_b6_67_82_75_a2"].state === 'home',
    get state() { return shadowState["device_tracker.be_b6_67_82_75_a2"]},
  },

  ["broadlink_remote_b8_f4_bf_2"]: {
    entity_id: "sun.broadlink_remote_b8_f4_bf_2",
    isHome: () => shadowState["device_tracker.broadlink_remote_b8_f4_bf_2"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_b8_f4_bf_2"]},
  },

  ["living_room_esp32_2"]: {
    entity_id: "sun.living_room_esp32_2",
    isHome: () => shadowState["device_tracker.living_room_esp32_2"].state === 'home',
    get state() { return shadowState["device_tracker.living_room_esp32_2"]},
  },

  ["bedroom_esp32"]: {
    entity_id: "sun.bedroom_esp32",
    isHome: () => shadowState["device_tracker.bedroom_esp32"].state === 'home',
    get state() { return shadowState["device_tracker.bedroom_esp32"]},
  },

  ["broadlink_remote_72_4c_9b_2"]: {
    entity_id: "sun.broadlink_remote_72_4c_9b_2",
    isHome: () => shadowState["device_tracker.broadlink_remote_72_4c_9b_2"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_72_4c_9b_2"]},
  },

  ["broadlink_remote_0c_81_90_2"]: {
    entity_id: "sun.broadlink_remote_0c_81_90_2",
    isHome: () => shadowState["device_tracker.broadlink_remote_0c_81_90_2"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_remote_0c_81_90_2"]},
  },

  ["broadlink_wifi_device_23_cb_47_2"]: {
    entity_id: "sun.broadlink_wifi_device_23_cb_47_2",
    isHome: () => shadowState["device_tracker.broadlink_wifi_device_23_cb_47_2"].state === 'home',
    get state() { return shadowState["device_tracker.broadlink_wifi_device_23_cb_47_2"]},
  },

  ["victor_esp32"]: {
    entity_id: "sun.victor_esp32",
    isHome: () => shadowState["device_tracker.victor_esp32"].state === 'home',
    get state() { return shadowState["device_tracker.victor_esp32"]},
  },

  ["ual6"]: {
    entity_id: "sun.ual6",
    isHome: () => shadowState["device_tracker.ual6"].state === 'home',
    get state() { return shadowState["device_tracker.ual6"]},
  },

  ["ual6_2"]: {
    entity_id: "sun.ual6_2",
    isHome: () => shadowState["device_tracker.ual6_2"].state === 'home',
    get state() { return shadowState["device_tracker.ual6_2"]},
  },

  ["1_yjx_427_device_tracker"]: {
    entity_id: "sun.1_yjx_427_device_tracker",
    isHome: () => shadowState["device_tracker.1_yjx_427_device_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.1_yjx_427_device_tracker"]},
  },

  ["tim"]: {
    entity_id: "sun.tim",
    isHome: () => shadowState["device_tracker.tim"].state === 'home',
    get state() { return shadowState["device_tracker.tim"]},
  },

  ["sm_g980f"]: {
    entity_id: "sun.sm_g980f",
    isHome: () => shadowState["device_tracker.sm_g980f"].state === 'home',
    get state() { return shadowState["device_tracker.sm_g980f"]},
  },

  ["tims_macbook_pro"]: {
    entity_id: "sun.tims_macbook_pro",
    isHome: () => shadowState["device_tracker.tims_macbook_pro"].state === 'home',
    get state() { return shadowState["device_tracker.tims_macbook_pro"]},
  },

  ["s22"]: {
    entity_id: "sun.s22",
    isHome: () => shadowState["device_tracker.s22"].state === 'home',
    get state() { return shadowState["device_tracker.s22"]},
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

  ["tim_s_phone_tracker"]: {
    entity_id: "sun.tim_s_phone_tracker",
    isHome: () => shadowState["device_tracker.tim_s_phone_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_phone_tracker"]},
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

  ["tim_s_id_4_tracker"]: {
    entity_id: "sun.tim_s_id_4_tracker",
    isHome: () => shadowState["device_tracker.tim_s_id_4_tracker"].state === 'home',
    get state() { return shadowState["device_tracker.tim_s_id_4_tracker"]},
  },

  ["tim_calculated"]: {
    entity_id: "sun.tim_calculated",
    isHome: () => shadowState["device_tracker.tim_calculated"].state === 'home',
    get state() { return shadowState["device_tracker.tim_calculated"]},
  },

  ["garage_esp32"]: {
    entity_id: "sun.garage_esp32",
    isHome: () => shadowState["device_tracker.garage_esp32"].state === 'home',
    get state() { return shadowState["device_tracker.garage_esp32"]},
  },

  ["01073d14_3789_4814_82fe_330131debcf9_100_1_1ef9"]: {
    entity_id: "sun.01073d14_3789_4814_82fe_330131debcf9_100_1_1ef9",
    isHome: () => shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1_1ef9"].state === 'home',
    get state() { return shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1_1ef9"]},
  },

  ["747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_3bb2"]: {
    entity_id: "sun.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_3bb2",
    isHome: () => shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_3bb2"].state === 'home',
    get state() { return shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_3bb2"]},
  },

  ["01073d14_3789_4814_82fe_330131debcf9_100_1_9871"]: {
    entity_id: "sun.01073d14_3789_4814_82fe_330131debcf9_100_1_9871",
    isHome: () => shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1_9871"].state === 'home',
    get state() { return shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1_9871"]},
  },

  ["747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_7f86"]: {
    entity_id: "sun.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_7f86",
    isHome: () => shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_7f86"].state === 'home',
    get state() { return shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1_7f86"]},
  },
}
  