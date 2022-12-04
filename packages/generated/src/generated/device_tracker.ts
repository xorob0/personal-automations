import {shadowState, DeviceTracker, DeviceTrackerProperties} from "@herja/core"
export type DeviceTrackerIDs = "gaby_galaxy_s20" | "hostname1" | "tim_iphone_ip" | "00_01_2e_65_c0_dc" | "02_42_c0_a8_c8_03" | "aida" | "broadlink_wifi_device_23_cb_47" | "yeelink_light_color2_miio134290485" | "broadlink_remote_0c_81_90" | "openwrt" | "sma3004169620" | "living_room" | "bedroom" | "48_b0_2d_15_21_c5" | "gs1200_8" | "ce_4e_3a_21_d1_16" | "fritz1" | "92_ce_51_71_7e_6c" | "2c_76_8a_5a_f2_d4" | "78_d6_dc_2f_29_a8" | "kapy" | "54_10_ec_c4_ef_fa" | "64_b5_c6_52_0c_fd" | "14_7d_da_07_bf_1f" | "2c_f0_5d_85_80_3c" | "50_ec_50_1b_3a_85" | "04_03_d6_07_6b_09" | "galaxywatch3_6bc3" | "86_68_bf_9c_55_5c" | "2e_cf_bf_46_3b_bb" | "mirahi_c02cm4h9md6t" | "antonios_mbp" | "64_4b_f0_2b_93_d8" | "ipad" | "tims_mbp" | "kobo" | "air_de_gaby" | "6c_3c_7c_02_33_af" | "galaxy_s22" | "ea_99_73_29_70_32" | "lt_621jtg3" | "android_5ef1b103dc61d633" | "7a_c1_86_3d_b5_93" | "synologynas" | "wb457613" | "antonioplewatch" | "94_18_82_c6_a8_00" | "32_25_e5_6c_52_92" | "broadlink_remote_b8_f4_bf" | "galaxy_s22_2" | "ca_14_46_8a_20_2a" | "72_31_7e_fa_4f_c0" | "ea_52_c4_99_56_8f" | "victors_mbp" | "60_22_32_36_3b_f8" | "galaxy_s22_3" | "galaxy_s22_4" | "60_22_32_33_8d_ec" | "00_90_9e_9d_84_8e" | "broadlink_remote_72_4c_9b" | "ba_6b_79_eb_92_7c" | "galaxy_s22_5" | "galaxy_s22_6" | "kapy_2" | "32_2b_1c_02_37_a0" | "42_24_66_e9_f0_84" | "pink" | "2a_06_c2_4a_01_15" | "00_04_4b_fc_fb_81" | "00_04_4b_fb_74_e1" | "living_room_esp32" | "c0_49_ef_ca_39_c4" | "34_86_5d_fd_76_8c" | "c8_f0_9e_9e_0f_98" | "b6_b1_26_aa_df_85" | "be_b6_67_82_75_a2" | "2e_e4_84_ab_72_75" | "0e_79_d2_f5_4b_1e" | "02_d3_ef_d7_03_9a" | "ba_f7_93_f6_8a_d8" | "3e_6e_9e_5a_e0_a8" | "6e_81_87_c1_bc_3e" | "da_5f_69_7c_31_c8" | "unifi_48_b0_2d_15_21_c5_default" | "g4_doorbell" | "u6_lite_living_room" | "dream_machine_pro" | "u6_lite_tatoo_room" | "us24pro" | "sm_g980f" | "s22" | "tims_iphone" | "tims_macbook_pro" | "tims_ipone_tracker" | "tim_s_watch_tracker" | "tim_s_ipone_tracker" | "tim_s_ipone_tracker_2" | "tim_s_phone_tracker" | "gaby_s_phone_tracker" | "tim_all_in_one" | "gaby_all_in_one" | "tim_s_id_4_tracker" | "tim_calculated" | "01073d14_3789_4814_82fe_330131debcf9_100_1" | "747addc7_9fb4_43c1_ba7f_41c38118048f_100_1" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9" | "sb0c958382bb2fbd7c_4623" | "e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0" | "accma99c32488a978558_fb1f" | "uvc_g4_bullet"
export type DeviceTrackerEntities = Record<DeviceTrackerIDs, DeviceTracker>

export const device_tracker: DeviceTracker<DeviceTrackerIDs> = {

['gaby_galaxy_s20']: {
  entity_id: "device_tracker.gaby_galaxy_s20",
get entity() { return {state: shadowState["device_tracker.gaby_galaxy_s20"].state, attributes: shadowState["device_tracker.gaby_galaxy_s20"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gaby_galaxy_s20"].state === "home"}
},

['hostname1']: {
  entity_id: "device_tracker.hostname1",
get entity() { return {state: shadowState["device_tracker.hostname1"].state, attributes: shadowState["device_tracker.hostname1"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.hostname1"].state === "home"}
},

['tim_iphone_ip']: {
  entity_id: "device_tracker.tim_iphone_ip",
get entity() { return {state: shadowState["device_tracker.tim_iphone_ip"].state, attributes: shadowState["device_tracker.tim_iphone_ip"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_iphone_ip"].state === "home"}
},

['00_01_2e_65_c0_dc']: {
  entity_id: "device_tracker.00_01_2e_65_c0_dc",
get entity() { return {state: shadowState["device_tracker.00_01_2e_65_c0_dc"].state, attributes: shadowState["device_tracker.00_01_2e_65_c0_dc"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.00_01_2e_65_c0_dc"].state === "home"}
},

['02_42_c0_a8_c8_03']: {
  entity_id: "device_tracker.02_42_c0_a8_c8_03",
get entity() { return {state: shadowState["device_tracker.02_42_c0_a8_c8_03"].state, attributes: shadowState["device_tracker.02_42_c0_a8_c8_03"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.02_42_c0_a8_c8_03"].state === "home"}
},

['aida']: {
  entity_id: "device_tracker.aida",
get entity() { return {state: shadowState["device_tracker.aida"].state, attributes: shadowState["device_tracker.aida"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.aida"].state === "home"}
},

['broadlink_wifi_device_23_cb_47']: {
  entity_id: "device_tracker.broadlink_wifi_device_23_cb_47",
get entity() { return {state: shadowState["device_tracker.broadlink_wifi_device_23_cb_47"].state, attributes: shadowState["device_tracker.broadlink_wifi_device_23_cb_47"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_wifi_device_23_cb_47"].state === "home"}
},

['yeelink_light_color2_miio134290485']: {
  entity_id: "device_tracker.yeelink_light_color2_miio134290485",
get entity() { return {state: shadowState["device_tracker.yeelink_light_color2_miio134290485"].state, attributes: shadowState["device_tracker.yeelink_light_color2_miio134290485"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.yeelink_light_color2_miio134290485"].state === "home"}
},

['broadlink_remote_0c_81_90']: {
  entity_id: "device_tracker.broadlink_remote_0c_81_90",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_0c_81_90"].state, attributes: shadowState["device_tracker.broadlink_remote_0c_81_90"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_0c_81_90"].state === "home"}
},

['openwrt']: {
  entity_id: "device_tracker.openwrt",
get entity() { return {state: shadowState["device_tracker.openwrt"].state, attributes: shadowState["device_tracker.openwrt"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.openwrt"].state === "home"}
},

['sma3004169620']: {
  entity_id: "device_tracker.sma3004169620",
get entity() { return {state: shadowState["device_tracker.sma3004169620"].state, attributes: shadowState["device_tracker.sma3004169620"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.sma3004169620"].state === "home"}
},

['living_room']: {
  entity_id: "device_tracker.living_room",
get entity() { return {state: shadowState["device_tracker.living_room"].state, attributes: shadowState["device_tracker.living_room"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.living_room"].state === "home"}
},

['bedroom']: {
  entity_id: "device_tracker.bedroom",
get entity() { return {state: shadowState["device_tracker.bedroom"].state, attributes: shadowState["device_tracker.bedroom"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.bedroom"].state === "home"}
},

['48_b0_2d_15_21_c5']: {
  entity_id: "device_tracker.48_b0_2d_15_21_c5",
get entity() { return {state: shadowState["device_tracker.48_b0_2d_15_21_c5"].state, attributes: shadowState["device_tracker.48_b0_2d_15_21_c5"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.48_b0_2d_15_21_c5"].state === "home"}
},

['gs1200_8']: {
  entity_id: "device_tracker.gs1200_8",
get entity() { return {state: shadowState["device_tracker.gs1200_8"].state, attributes: shadowState["device_tracker.gs1200_8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gs1200_8"].state === "home"}
},

['ce_4e_3a_21_d1_16']: {
  entity_id: "device_tracker.ce_4e_3a_21_d1_16",
get entity() { return {state: shadowState["device_tracker.ce_4e_3a_21_d1_16"].state, attributes: shadowState["device_tracker.ce_4e_3a_21_d1_16"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ce_4e_3a_21_d1_16"].state === "home"}
},

['fritz1']: {
  entity_id: "device_tracker.fritz1",
get entity() { return {state: shadowState["device_tracker.fritz1"].state, attributes: shadowState["device_tracker.fritz1"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.fritz1"].state === "home"}
},

['92_ce_51_71_7e_6c']: {
  entity_id: "device_tracker.92_ce_51_71_7e_6c",
get entity() { return {state: shadowState["device_tracker.92_ce_51_71_7e_6c"].state, attributes: shadowState["device_tracker.92_ce_51_71_7e_6c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.92_ce_51_71_7e_6c"].state === "home"}
},

['2c_76_8a_5a_f2_d4']: {
  entity_id: "device_tracker.2c_76_8a_5a_f2_d4",
get entity() { return {state: shadowState["device_tracker.2c_76_8a_5a_f2_d4"].state, attributes: shadowState["device_tracker.2c_76_8a_5a_f2_d4"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.2c_76_8a_5a_f2_d4"].state === "home"}
},

['78_d6_dc_2f_29_a8']: {
  entity_id: "device_tracker.78_d6_dc_2f_29_a8",
get entity() { return {state: shadowState["device_tracker.78_d6_dc_2f_29_a8"].state, attributes: shadowState["device_tracker.78_d6_dc_2f_29_a8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.78_d6_dc_2f_29_a8"].state === "home"}
},

['kapy']: {
  entity_id: "device_tracker.kapy",
get entity() { return {state: shadowState["device_tracker.kapy"].state, attributes: shadowState["device_tracker.kapy"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.kapy"].state === "home"}
},

['54_10_ec_c4_ef_fa']: {
  entity_id: "device_tracker.54_10_ec_c4_ef_fa",
get entity() { return {state: shadowState["device_tracker.54_10_ec_c4_ef_fa"].state, attributes: shadowState["device_tracker.54_10_ec_c4_ef_fa"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.54_10_ec_c4_ef_fa"].state === "home"}
},

['64_b5_c6_52_0c_fd']: {
  entity_id: "device_tracker.64_b5_c6_52_0c_fd",
get entity() { return {state: shadowState["device_tracker.64_b5_c6_52_0c_fd"].state, attributes: shadowState["device_tracker.64_b5_c6_52_0c_fd"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.64_b5_c6_52_0c_fd"].state === "home"}
},

['14_7d_da_07_bf_1f']: {
  entity_id: "device_tracker.14_7d_da_07_bf_1f",
get entity() { return {state: shadowState["device_tracker.14_7d_da_07_bf_1f"].state, attributes: shadowState["device_tracker.14_7d_da_07_bf_1f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.14_7d_da_07_bf_1f"].state === "home"}
},

['2c_f0_5d_85_80_3c']: {
  entity_id: "device_tracker.2c_f0_5d_85_80_3c",
get entity() { return {state: shadowState["device_tracker.2c_f0_5d_85_80_3c"].state, attributes: shadowState["device_tracker.2c_f0_5d_85_80_3c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.2c_f0_5d_85_80_3c"].state === "home"}
},

['50_ec_50_1b_3a_85']: {
  entity_id: "device_tracker.50_ec_50_1b_3a_85",
get entity() { return {state: shadowState["device_tracker.50_ec_50_1b_3a_85"].state, attributes: shadowState["device_tracker.50_ec_50_1b_3a_85"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.50_ec_50_1b_3a_85"].state === "home"}
},

['04_03_d6_07_6b_09']: {
  entity_id: "device_tracker.04_03_d6_07_6b_09",
get entity() { return {state: shadowState["device_tracker.04_03_d6_07_6b_09"].state, attributes: shadowState["device_tracker.04_03_d6_07_6b_09"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.04_03_d6_07_6b_09"].state === "home"}
},

['galaxywatch3_6bc3']: {
  entity_id: "device_tracker.galaxywatch3_6bc3",
get entity() { return {state: shadowState["device_tracker.galaxywatch3_6bc3"].state, attributes: shadowState["device_tracker.galaxywatch3_6bc3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxywatch3_6bc3"].state === "home"}
},

['86_68_bf_9c_55_5c']: {
  entity_id: "device_tracker.86_68_bf_9c_55_5c",
get entity() { return {state: shadowState["device_tracker.86_68_bf_9c_55_5c"].state, attributes: shadowState["device_tracker.86_68_bf_9c_55_5c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.86_68_bf_9c_55_5c"].state === "home"}
},

['2e_cf_bf_46_3b_bb']: {
  entity_id: "device_tracker.2e_cf_bf_46_3b_bb",
get entity() { return {state: shadowState["device_tracker.2e_cf_bf_46_3b_bb"].state, attributes: shadowState["device_tracker.2e_cf_bf_46_3b_bb"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.2e_cf_bf_46_3b_bb"].state === "home"}
},

['mirahi_c02cm4h9md6t']: {
  entity_id: "device_tracker.mirahi_c02cm4h9md6t",
get entity() { return {state: shadowState["device_tracker.mirahi_c02cm4h9md6t"].state, attributes: shadowState["device_tracker.mirahi_c02cm4h9md6t"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.mirahi_c02cm4h9md6t"].state === "home"}
},

['antonios_mbp']: {
  entity_id: "device_tracker.antonios_mbp",
get entity() { return {state: shadowState["device_tracker.antonios_mbp"].state, attributes: shadowState["device_tracker.antonios_mbp"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.antonios_mbp"].state === "home"}
},

['64_4b_f0_2b_93_d8']: {
  entity_id: "device_tracker.64_4b_f0_2b_93_d8",
get entity() { return {state: shadowState["device_tracker.64_4b_f0_2b_93_d8"].state, attributes: shadowState["device_tracker.64_4b_f0_2b_93_d8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.64_4b_f0_2b_93_d8"].state === "home"}
},

['ipad']: {
  entity_id: "device_tracker.ipad",
get entity() { return {state: shadowState["device_tracker.ipad"].state, attributes: shadowState["device_tracker.ipad"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ipad"].state === "home"}
},

['tims_mbp']: {
  entity_id: "device_tracker.tims_mbp",
get entity() { return {state: shadowState["device_tracker.tims_mbp"].state, attributes: shadowState["device_tracker.tims_mbp"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_mbp"].state === "home"}
},

['kobo']: {
  entity_id: "device_tracker.kobo",
get entity() { return {state: shadowState["device_tracker.kobo"].state, attributes: shadowState["device_tracker.kobo"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.kobo"].state === "home"}
},

['air_de_gaby']: {
  entity_id: "device_tracker.air_de_gaby",
get entity() { return {state: shadowState["device_tracker.air_de_gaby"].state, attributes: shadowState["device_tracker.air_de_gaby"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.air_de_gaby"].state === "home"}
},

['6c_3c_7c_02_33_af']: {
  entity_id: "device_tracker.6c_3c_7c_02_33_af",
get entity() { return {state: shadowState["device_tracker.6c_3c_7c_02_33_af"].state, attributes: shadowState["device_tracker.6c_3c_7c_02_33_af"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.6c_3c_7c_02_33_af"].state === "home"}
},

['galaxy_s22']: {
  entity_id: "device_tracker.galaxy_s22",
get entity() { return {state: shadowState["device_tracker.galaxy_s22"].state, attributes: shadowState["device_tracker.galaxy_s22"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22"].state === "home"}
},

['ea_99_73_29_70_32']: {
  entity_id: "device_tracker.ea_99_73_29_70_32",
get entity() { return {state: shadowState["device_tracker.ea_99_73_29_70_32"].state, attributes: shadowState["device_tracker.ea_99_73_29_70_32"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ea_99_73_29_70_32"].state === "home"}
},

['lt_621jtg3']: {
  entity_id: "device_tracker.lt_621jtg3",
get entity() { return {state: shadowState["device_tracker.lt_621jtg3"].state, attributes: shadowState["device_tracker.lt_621jtg3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.lt_621jtg3"].state === "home"}
},

['android_5ef1b103dc61d633']: {
  entity_id: "device_tracker.android_5ef1b103dc61d633",
get entity() { return {state: shadowState["device_tracker.android_5ef1b103dc61d633"].state, attributes: shadowState["device_tracker.android_5ef1b103dc61d633"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.android_5ef1b103dc61d633"].state === "home"}
},

['7a_c1_86_3d_b5_93']: {
  entity_id: "device_tracker.7a_c1_86_3d_b5_93",
get entity() { return {state: shadowState["device_tracker.7a_c1_86_3d_b5_93"].state, attributes: shadowState["device_tracker.7a_c1_86_3d_b5_93"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.7a_c1_86_3d_b5_93"].state === "home"}
},

['synologynas']: {
  entity_id: "device_tracker.synologynas",
get entity() { return {state: shadowState["device_tracker.synologynas"].state, attributes: shadowState["device_tracker.synologynas"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.synologynas"].state === "home"}
},

['wb457613']: {
  entity_id: "device_tracker.wb457613",
get entity() { return {state: shadowState["device_tracker.wb457613"].state, attributes: shadowState["device_tracker.wb457613"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.wb457613"].state === "home"}
},

['antonioplewatch']: {
  entity_id: "device_tracker.antonioplewatch",
get entity() { return {state: shadowState["device_tracker.antonioplewatch"].state, attributes: shadowState["device_tracker.antonioplewatch"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.antonioplewatch"].state === "home"}
},

['94_18_82_c6_a8_00']: {
  entity_id: "device_tracker.94_18_82_c6_a8_00",
get entity() { return {state: shadowState["device_tracker.94_18_82_c6_a8_00"].state, attributes: shadowState["device_tracker.94_18_82_c6_a8_00"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.94_18_82_c6_a8_00"].state === "home"}
},

['32_25_e5_6c_52_92']: {
  entity_id: "device_tracker.32_25_e5_6c_52_92",
get entity() { return {state: shadowState["device_tracker.32_25_e5_6c_52_92"].state, attributes: shadowState["device_tracker.32_25_e5_6c_52_92"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.32_25_e5_6c_52_92"].state === "home"}
},

['broadlink_remote_b8_f4_bf']: {
  entity_id: "device_tracker.broadlink_remote_b8_f4_bf",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_b8_f4_bf"].state, attributes: shadowState["device_tracker.broadlink_remote_b8_f4_bf"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_b8_f4_bf"].state === "home"}
},

['galaxy_s22_2']: {
  entity_id: "device_tracker.galaxy_s22_2",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_2"].state, attributes: shadowState["device_tracker.galaxy_s22_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_2"].state === "home"}
},

['ca_14_46_8a_20_2a']: {
  entity_id: "device_tracker.ca_14_46_8a_20_2a",
get entity() { return {state: shadowState["device_tracker.ca_14_46_8a_20_2a"].state, attributes: shadowState["device_tracker.ca_14_46_8a_20_2a"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ca_14_46_8a_20_2a"].state === "home"}
},

['72_31_7e_fa_4f_c0']: {
  entity_id: "device_tracker.72_31_7e_fa_4f_c0",
get entity() { return {state: shadowState["device_tracker.72_31_7e_fa_4f_c0"].state, attributes: shadowState["device_tracker.72_31_7e_fa_4f_c0"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.72_31_7e_fa_4f_c0"].state === "home"}
},

['ea_52_c4_99_56_8f']: {
  entity_id: "device_tracker.ea_52_c4_99_56_8f",
get entity() { return {state: shadowState["device_tracker.ea_52_c4_99_56_8f"].state, attributes: shadowState["device_tracker.ea_52_c4_99_56_8f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ea_52_c4_99_56_8f"].state === "home"}
},

['victors_mbp']: {
  entity_id: "device_tracker.victors_mbp",
get entity() { return {state: shadowState["device_tracker.victors_mbp"].state, attributes: shadowState["device_tracker.victors_mbp"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.victors_mbp"].state === "home"}
},

['60_22_32_36_3b_f8']: {
  entity_id: "device_tracker.60_22_32_36_3b_f8",
get entity() { return {state: shadowState["device_tracker.60_22_32_36_3b_f8"].state, attributes: shadowState["device_tracker.60_22_32_36_3b_f8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.60_22_32_36_3b_f8"].state === "home"}
},

['galaxy_s22_3']: {
  entity_id: "device_tracker.galaxy_s22_3",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_3"].state, attributes: shadowState["device_tracker.galaxy_s22_3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_3"].state === "home"}
},

['galaxy_s22_4']: {
  entity_id: "device_tracker.galaxy_s22_4",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_4"].state, attributes: shadowState["device_tracker.galaxy_s22_4"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_4"].state === "home"}
},

['60_22_32_33_8d_ec']: {
  entity_id: "device_tracker.60_22_32_33_8d_ec",
get entity() { return {state: shadowState["device_tracker.60_22_32_33_8d_ec"].state, attributes: shadowState["device_tracker.60_22_32_33_8d_ec"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.60_22_32_33_8d_ec"].state === "home"}
},

['00_90_9e_9d_84_8e']: {
  entity_id: "device_tracker.00_90_9e_9d_84_8e",
get entity() { return {state: shadowState["device_tracker.00_90_9e_9d_84_8e"].state, attributes: shadowState["device_tracker.00_90_9e_9d_84_8e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.00_90_9e_9d_84_8e"].state === "home"}
},

['broadlink_remote_72_4c_9b']: {
  entity_id: "device_tracker.broadlink_remote_72_4c_9b",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_72_4c_9b"].state, attributes: shadowState["device_tracker.broadlink_remote_72_4c_9b"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_72_4c_9b"].state === "home"}
},

['ba_6b_79_eb_92_7c']: {
  entity_id: "device_tracker.ba_6b_79_eb_92_7c",
get entity() { return {state: shadowState["device_tracker.ba_6b_79_eb_92_7c"].state, attributes: shadowState["device_tracker.ba_6b_79_eb_92_7c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ba_6b_79_eb_92_7c"].state === "home"}
},

['galaxy_s22_5']: {
  entity_id: "device_tracker.galaxy_s22_5",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_5"].state, attributes: shadowState["device_tracker.galaxy_s22_5"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_5"].state === "home"}
},

['galaxy_s22_6']: {
  entity_id: "device_tracker.galaxy_s22_6",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_6"].state, attributes: shadowState["device_tracker.galaxy_s22_6"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_6"].state === "home"}
},

['kapy_2']: {
  entity_id: "device_tracker.kapy_2",
get entity() { return {state: shadowState["device_tracker.kapy_2"].state, attributes: shadowState["device_tracker.kapy_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.kapy_2"].state === "home"}
},

['32_2b_1c_02_37_a0']: {
  entity_id: "device_tracker.32_2b_1c_02_37_a0",
get entity() { return {state: shadowState["device_tracker.32_2b_1c_02_37_a0"].state, attributes: shadowState["device_tracker.32_2b_1c_02_37_a0"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.32_2b_1c_02_37_a0"].state === "home"}
},

['42_24_66_e9_f0_84']: {
  entity_id: "device_tracker.42_24_66_e9_f0_84",
get entity() { return {state: shadowState["device_tracker.42_24_66_e9_f0_84"].state, attributes: shadowState["device_tracker.42_24_66_e9_f0_84"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.42_24_66_e9_f0_84"].state === "home"}
},

['pink']: {
  entity_id: "device_tracker.pink",
get entity() { return {state: shadowState["device_tracker.pink"].state, attributes: shadowState["device_tracker.pink"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.pink"].state === "home"}
},

['2a_06_c2_4a_01_15']: {
  entity_id: "device_tracker.2a_06_c2_4a_01_15",
get entity() { return {state: shadowState["device_tracker.2a_06_c2_4a_01_15"].state, attributes: shadowState["device_tracker.2a_06_c2_4a_01_15"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.2a_06_c2_4a_01_15"].state === "home"}
},

['00_04_4b_fc_fb_81']: {
  entity_id: "device_tracker.00_04_4b_fc_fb_81",
get entity() { return {state: shadowState["device_tracker.00_04_4b_fc_fb_81"].state, attributes: shadowState["device_tracker.00_04_4b_fc_fb_81"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.00_04_4b_fc_fb_81"].state === "home"}
},

['00_04_4b_fb_74_e1']: {
  entity_id: "device_tracker.00_04_4b_fb_74_e1",
get entity() { return {state: shadowState["device_tracker.00_04_4b_fb_74_e1"].state, attributes: shadowState["device_tracker.00_04_4b_fb_74_e1"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.00_04_4b_fb_74_e1"].state === "home"}
},

['living_room_esp32']: {
  entity_id: "device_tracker.living_room_esp32",
get entity() { return {state: shadowState["device_tracker.living_room_esp32"].state, attributes: shadowState["device_tracker.living_room_esp32"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.living_room_esp32"].state === "home"}
},

['c0_49_ef_ca_39_c4']: {
  entity_id: "device_tracker.c0_49_ef_ca_39_c4",
get entity() { return {state: shadowState["device_tracker.c0_49_ef_ca_39_c4"].state, attributes: shadowState["device_tracker.c0_49_ef_ca_39_c4"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.c0_49_ef_ca_39_c4"].state === "home"}
},

['34_86_5d_fd_76_8c']: {
  entity_id: "device_tracker.34_86_5d_fd_76_8c",
get entity() { return {state: shadowState["device_tracker.34_86_5d_fd_76_8c"].state, attributes: shadowState["device_tracker.34_86_5d_fd_76_8c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.34_86_5d_fd_76_8c"].state === "home"}
},

['c8_f0_9e_9e_0f_98']: {
  entity_id: "device_tracker.c8_f0_9e_9e_0f_98",
get entity() { return {state: shadowState["device_tracker.c8_f0_9e_9e_0f_98"].state, attributes: shadowState["device_tracker.c8_f0_9e_9e_0f_98"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.c8_f0_9e_9e_0f_98"].state === "home"}
},

['b6_b1_26_aa_df_85']: {
  entity_id: "device_tracker.b6_b1_26_aa_df_85",
get entity() { return {state: shadowState["device_tracker.b6_b1_26_aa_df_85"].state, attributes: shadowState["device_tracker.b6_b1_26_aa_df_85"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.b6_b1_26_aa_df_85"].state === "home"}
},

['be_b6_67_82_75_a2']: {
  entity_id: "device_tracker.be_b6_67_82_75_a2",
get entity() { return {state: shadowState["device_tracker.be_b6_67_82_75_a2"].state, attributes: shadowState["device_tracker.be_b6_67_82_75_a2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.be_b6_67_82_75_a2"].state === "home"}
},

['2e_e4_84_ab_72_75']: {
  entity_id: "device_tracker.2e_e4_84_ab_72_75",
get entity() { return {state: shadowState["device_tracker.2e_e4_84_ab_72_75"].state, attributes: shadowState["device_tracker.2e_e4_84_ab_72_75"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.2e_e4_84_ab_72_75"].state === "home"}
},

['0e_79_d2_f5_4b_1e']: {
  entity_id: "device_tracker.0e_79_d2_f5_4b_1e",
get entity() { return {state: shadowState["device_tracker.0e_79_d2_f5_4b_1e"].state, attributes: shadowState["device_tracker.0e_79_d2_f5_4b_1e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.0e_79_d2_f5_4b_1e"].state === "home"}
},

['02_d3_ef_d7_03_9a']: {
  entity_id: "device_tracker.02_d3_ef_d7_03_9a",
get entity() { return {state: shadowState["device_tracker.02_d3_ef_d7_03_9a"].state, attributes: shadowState["device_tracker.02_d3_ef_d7_03_9a"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.02_d3_ef_d7_03_9a"].state === "home"}
},

['ba_f7_93_f6_8a_d8']: {
  entity_id: "device_tracker.ba_f7_93_f6_8a_d8",
get entity() { return {state: shadowState["device_tracker.ba_f7_93_f6_8a_d8"].state, attributes: shadowState["device_tracker.ba_f7_93_f6_8a_d8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.ba_f7_93_f6_8a_d8"].state === "home"}
},

['3e_6e_9e_5a_e0_a8']: {
  entity_id: "device_tracker.3e_6e_9e_5a_e0_a8",
get entity() { return {state: shadowState["device_tracker.3e_6e_9e_5a_e0_a8"].state, attributes: shadowState["device_tracker.3e_6e_9e_5a_e0_a8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.3e_6e_9e_5a_e0_a8"].state === "home"}
},

['6e_81_87_c1_bc_3e']: {
  entity_id: "device_tracker.6e_81_87_c1_bc_3e",
get entity() { return {state: shadowState["device_tracker.6e_81_87_c1_bc_3e"].state, attributes: shadowState["device_tracker.6e_81_87_c1_bc_3e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.6e_81_87_c1_bc_3e"].state === "home"}
},

['da_5f_69_7c_31_c8']: {
  entity_id: "device_tracker.da_5f_69_7c_31_c8",
get entity() { return {state: shadowState["device_tracker.da_5f_69_7c_31_c8"].state, attributes: shadowState["device_tracker.da_5f_69_7c_31_c8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.da_5f_69_7c_31_c8"].state === "home"}
},

['unifi_48_b0_2d_15_21_c5_default']: {
  entity_id: "device_tracker.unifi_48_b0_2d_15_21_c5_default",
get entity() { return {state: shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].state, attributes: shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].state === "home"}
},

['g4_doorbell']: {
  entity_id: "device_tracker.g4_doorbell",
get entity() { return {state: shadowState["device_tracker.g4_doorbell"].state, attributes: shadowState["device_tracker.g4_doorbell"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.g4_doorbell"].state === "home"}
},

['u6_lite_living_room']: {
  entity_id: "device_tracker.u6_lite_living_room",
get entity() { return {state: shadowState["device_tracker.u6_lite_living_room"].state, attributes: shadowState["device_tracker.u6_lite_living_room"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.u6_lite_living_room"].state === "home"}
},

['dream_machine_pro']: {
  entity_id: "device_tracker.dream_machine_pro",
get entity() { return {state: shadowState["device_tracker.dream_machine_pro"].state, attributes: shadowState["device_tracker.dream_machine_pro"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.dream_machine_pro"].state === "home"}
},

['u6_lite_tatoo_room']: {
  entity_id: "device_tracker.u6_lite_tatoo_room",
get entity() { return {state: shadowState["device_tracker.u6_lite_tatoo_room"].state, attributes: shadowState["device_tracker.u6_lite_tatoo_room"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.u6_lite_tatoo_room"].state === "home"}
},

['us24pro']: {
  entity_id: "device_tracker.us24pro",
get entity() { return {state: shadowState["device_tracker.us24pro"].state, attributes: shadowState["device_tracker.us24pro"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.us24pro"].state === "home"}
},

['sm_g980f']: {
  entity_id: "device_tracker.sm_g980f",
get entity() { return {state: shadowState["device_tracker.sm_g980f"].state, attributes: shadowState["device_tracker.sm_g980f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.sm_g980f"].state === "home"}
},

['s22']: {
  entity_id: "device_tracker.s22",
get entity() { return {state: shadowState["device_tracker.s22"].state, attributes: shadowState["device_tracker.s22"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.s22"].state === "home"}
},

['tims_iphone']: {
  entity_id: "device_tracker.tims_iphone",
get entity() { return {state: shadowState["device_tracker.tims_iphone"].state, attributes: shadowState["device_tracker.tims_iphone"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_iphone"].state === "home"}
},

['tims_macbook_pro']: {
  entity_id: "device_tracker.tims_macbook_pro",
get entity() { return {state: shadowState["device_tracker.tims_macbook_pro"].state, attributes: shadowState["device_tracker.tims_macbook_pro"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_macbook_pro"].state === "home"}
},

['tims_ipone_tracker']: {
  entity_id: "device_tracker.tims_ipone_tracker",
get entity() { return {state: shadowState["device_tracker.tims_ipone_tracker"].state, attributes: shadowState["device_tracker.tims_ipone_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_ipone_tracker"].state === "home"}
},

['tim_s_watch_tracker']: {
  entity_id: "device_tracker.tim_s_watch_tracker",
get entity() { return {state: shadowState["device_tracker.tim_s_watch_tracker"].state, attributes: shadowState["device_tracker.tim_s_watch_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_watch_tracker"].state === "home"}
},

['tim_s_ipone_tracker']: {
  entity_id: "device_tracker.tim_s_ipone_tracker",
get entity() { return {state: shadowState["device_tracker.tim_s_ipone_tracker"].state, attributes: shadowState["device_tracker.tim_s_ipone_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_ipone_tracker"].state === "home"}
},

['tim_s_ipone_tracker_2']: {
  entity_id: "device_tracker.tim_s_ipone_tracker_2",
get entity() { return {state: shadowState["device_tracker.tim_s_ipone_tracker_2"].state, attributes: shadowState["device_tracker.tim_s_ipone_tracker_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_ipone_tracker_2"].state === "home"}
},

['tim_s_phone_tracker']: {
  entity_id: "device_tracker.tim_s_phone_tracker",
get entity() { return {state: shadowState["device_tracker.tim_s_phone_tracker"].state, attributes: shadowState["device_tracker.tim_s_phone_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_phone_tracker"].state === "home"}
},

['gaby_s_phone_tracker']: {
  entity_id: "device_tracker.gaby_s_phone_tracker",
get entity() { return {state: shadowState["device_tracker.gaby_s_phone_tracker"].state, attributes: shadowState["device_tracker.gaby_s_phone_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gaby_s_phone_tracker"].state === "home"}
},

['tim_all_in_one']: {
  entity_id: "device_tracker.tim_all_in_one",
get entity() { return {state: shadowState["device_tracker.tim_all_in_one"].state, attributes: shadowState["device_tracker.tim_all_in_one"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_all_in_one"].state === "home"}
},

['gaby_all_in_one']: {
  entity_id: "device_tracker.gaby_all_in_one",
get entity() { return {state: shadowState["device_tracker.gaby_all_in_one"].state, attributes: shadowState["device_tracker.gaby_all_in_one"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gaby_all_in_one"].state === "home"}
},

['tim_s_id_4_tracker']: {
  entity_id: "device_tracker.tim_s_id_4_tracker",
get entity() { return {state: shadowState["device_tracker.tim_s_id_4_tracker"].state, attributes: shadowState["device_tracker.tim_s_id_4_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_id_4_tracker"].state === "home"}
},

['tim_calculated']: {
  entity_id: "device_tracker.tim_calculated",
get entity() { return {state: shadowState["device_tracker.tim_calculated"].state, attributes: shadowState["device_tracker.tim_calculated"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_calculated"].state === "home"}
},

['01073d14_3789_4814_82fe_330131debcf9_100_1']: {
  entity_id: "device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1",
get entity() { return {state: shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1"].state, attributes: shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.01073d14_3789_4814_82fe_330131debcf9_100_1"].state === "home"}
},

['747addc7_9fb4_43c1_ba7f_41c38118048f_100_1']: {
  entity_id: "device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1",
get entity() { return {state: shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1"].state, attributes: shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.747addc7_9fb4_43c1_ba7f_41c38118048f_100_1"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9"].state === "home"}
},

['sb0c958382bb2fbd7c_4623']: {
  entity_id: "device_tracker.sb0c958382bb2fbd7c_4623",
get entity() { return {state: shadowState["device_tracker.sb0c958382bb2fbd7c_4623"].state, attributes: shadowState["device_tracker.sb0c958382bb2fbd7c_4623"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.sb0c958382bb2fbd7c_4623"].state === "home"}
},

['e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0']: {
  entity_id: "device_tracker.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0",
get entity() { return {state: shadowState["device_tracker.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0"].state, attributes: shadowState["device_tracker.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0"].state === "home"}
},

['accma99c32488a978558_fb1f']: {
  entity_id: "device_tracker.accma99c32488a978558_fb1f",
get entity() { return {state: shadowState["device_tracker.accma99c32488a978558_fb1f"].state, attributes: shadowState["device_tracker.accma99c32488a978558_fb1f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.accma99c32488a978558_fb1f"].state === "home"}
},

['uvc_g4_bullet']: {
  entity_id: "device_tracker.uvc_g4_bullet",
get entity() { return {state: shadowState["device_tracker.uvc_g4_bullet"].state, attributes: shadowState["device_tracker.uvc_g4_bullet"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.uvc_g4_bullet"].state === "home"}
},

}
