import {shadowState, DeviceTracker, DeviceTrackerProperties} from "@herja/core"
export type DeviceTrackerIDs = "gaby_galaxy_s20" | "hostname1" | "tim_iphone_ip" | "00_01_2e_65_c0_dc" | "02_42_c0_a8_c8_03" | "aida" | "broadlink_wifi_device_23_cb_47" | "yeelink_light_color2_miio134290485" | "broadlink_remote_0c_81_90" | "openwrt" | "sma3004169620" | "living_room" | "bedroom" | "48_b0_2d_15_21_c5" | "gs1200_8" | "ce_4e_3a_21_d1_16" | "fritz1" | "92_ce_51_71_7e_6c" | "2c_76_8a_5a_f2_d4" | "78_d6_dc_2f_29_a8" | "kapy" | "54_10_ec_c4_ef_fa" | "64_b5_c6_52_0c_fd" | "14_7d_da_07_bf_1f" | "2c_f0_5d_85_80_3c" | "50_ec_50_1b_3a_85" | "04_03_d6_07_6b_09" | "galaxywatch3_6bc3" | "86_68_bf_9c_55_5c" | "2e_cf_bf_46_3b_bb" | "mirahi_c02cm4h9md6t" | "antonios_mbp" | "64_4b_f0_2b_93_d8" | "ipad" | "tims_mbp" | "kobo" | "air_de_gaby" | "6c_3c_7c_02_33_af" | "galaxy_s22" | "ea_99_73_29_70_32" | "lt_621jtg3" | "android_5ef1b103dc61d633" | "7a_c1_86_3d_b5_93" | "synologynas" | "wb457613" | "antonioplewatch" | "94_18_82_c6_a8_00" | "32_25_e5_6c_52_92" | "broadlink_remote_b8_f4_bf" | "galaxy_s22_2" | "ca_14_46_8a_20_2a" | "72_31_7e_fa_4f_c0" | "ea_52_c4_99_56_8f" | "victors_mbp" | "60_22_32_36_3b_f8" | "galaxy_s22_3" | "galaxy_s22_4" | "60_22_32_33_8d_ec" | "00_90_9e_9d_84_8e" | "broadlink_remote_72_4c_9b" | "ba_6b_79_eb_92_7c" | "galaxy_s22_5" | "galaxy_s22_6" | "kapy_2" | "32_2b_1c_02_37_a0" | "42_24_66_e9_f0_84" | "pink" | "2a_06_c2_4a_01_15" | "00_04_4b_fc_fb_81" | "00_04_4b_fb_74_e1" | "living_room_esp32" | "c0_49_ef_ca_39_c4" | "34_86_5d_fd_76_8c" | "c8_f0_9e_9e_0f_98" | "b6_b1_26_aa_df_85" | "be_b6_67_82_75_a2" | "2e_e4_84_ab_72_75" | "0e_79_d2_f5_4b_1e" | "02_d3_ef_d7_03_9a" | "ba_f7_93_f6_8a_d8" | "3e_6e_9e_5a_e0_a8" | "6e_81_87_c1_bc_3e" | "da_5f_69_7c_31_c8" | "unifi_3a_32_32_0e_f3_22_default" | "uvc_g4_instant" | "aida_2" | "unifi_54_10_ec_c4_ef_fa_default" | "tims_mbp_2" | "g4_doorbell" | "broadlink_remote_0c_81_90_2" | "apple_tv" | "office_esp32" | "unifi_78_d6_dc_2f_29_a8_default" | "uvc_g4_bullet" | "wb457613_2" | "garage_esp32" | "unifi_f4_cf_a2_f6_8f_73_default" | "unifi_6c_3c_7c_02_33_af_default" | "broadlink_wifi_device_23_cb_47_2" | "sma3004169620_2" | "unifi_2c_76_8a_5a_f2_d5_default" | "unifi_4a_ef_78_49_26_a4_default" | "broadlink_remote_72_4c_9b_2" | "unifi_92_ce_51_71_7e_6c_default" | "unifi_2e_e4_84_ab_72_75_default" | "air_de_gaby_2" | "lt_621jtg3_2" | "unifi_64_4b_f0_2b_93_d8_default" | "broadlink_remote_b8_f4_bf_2" | "unifi_50_ec_50_1b_3a_85_default" | "unifi_cc_9f_7a_e2_ae_81_default" | "unifi_00_90_9e_9d_84_8e_default" | "unifi_5c_1d_d9_61_ed_04_default" | "unifi_e2_90_5e_3c_00_ef_default" | "unifi_2c_f0_5d_85_80_3c_default" | "unifi_48_b0_2d_13_83_b5_default" | "aida_3" | "office_pi" | "unifi_ec_fa_bc_d2_dc_4d_default" | "unifi_18_fa_b7_a8_fa_7b_default" | "unifi_7e_be_cc_5c_90_9b_default" | "unifi_d0_4e_50_f6_15_80_default" | "unifi_0c_23_69_53_96_a0_default" | "iphone" | "unifi_ae_79_f6_5e_2c_2c_default" | "unifi_56_c5_41_35_7e_cd_default" | "unifi_00_24_e4_f0_d4_0e_default" | "usmini_2" | "dream_machine_pro" | "u6_lite_living_room" | "usmini" | "u6_lite_tatoo_room" | "us24pro" | "sm_g980f" | "tims_macbook_pro" | "tims_iphone" | "iphone_2" | "iphone_3" | "tims_ipone_tracker" | "tim_s_watch_tracker" | "tim_s_ipone_tracker" | "tim_s_ipone_tracker_2" | "tim_s_phone_tracker" | "gaby_s_phone_tracker" | "tim_all_in_one" | "gaby_all_in_one" | "unifi_00_04_4b_fb_74_e1_default" | "tim_calculated" | "01073d14_3789_4814_82fe_330131debcf9_100_1" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_17667_14594_8ed9" | "sb0c958382bb2fbd7c_4623" | "e2c56db5_dffb_48d2_b060_d0f5a71096e0_0_0" | "accma99c32488a978558_fb1f" | "gs1200_8_2" | "unifi_2c_76_8a_5a_f2_d4_default" | "unifi_48_b0_2d_15_21_c5_default" | "unifi_ba_f7_93_f6_8a_d8_default" | "kapy_3" | "android_5ef1b103dc61d633_2" | "unifi_3e_6e_9e_5a_e0_a8_default" | "galaxywatch3_6bc3_2" | "unifi_ae_d2_4a_a3_f5_28_default" | "unifi_7a_43_d0_03_dc_aa_default" | "galaxy_s22_7" | "living_room_esp32_2" | "unifi_da_5f_69_7c_31_c8_default" | "unifi_92_99_c1_60_3c_ae_default" | "galaxy_j5_2016" | "unifi_04_03_d6_07_6b_09_default" | "unifi_d2_21_f9_85_ae_ce_default" | "unifi_02_17_f9_4d_0a_70_default" | "unifi_04_cf_8c_b4_8b_63_default" | "gabys_phone" | "74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04" | "74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73" | "74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2" | "74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c" | "unifi_b2_4a_0b_7b_66_c0_default" | "unifi_a6_cc_57_a9_45_db_default" | "unifi_da_cd_96_ed_bb_39_default" | "unifi_32_6b_07_24_08_ce_default" | "unifi_1e_85_c8_66_73_ba_default" | "unifi_de_1b_cc_10_28_29_default" | "living_room_2" | "saacbe39bdc4e468cc_297d" | "antonios_mbp_2" | "unifi_40_5b_d8_3d_62_81_default" | "unifi_32_68_38_67_26_d5_default" | "unifi_42_63_99_22_9c_50_default" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933" | "unifi_70_a7_41_c1_b0_03_default" | "lt_621jtg3_3" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169" | "lt_621jtg3_4" | "unifi_ae_ce_22_98_fb_36_default" | "unifi_3e_0c_8e_06_cb_58_default" | "unifi_9a_74_da_19_a8_46_default" | "unifi_a6_00_d0_c4_81_43_default" | "unifi_62_28_d3_b8_aa_ae_default" | "unifi_e6_ae_a7_af_5b_72_default" | "tim_s_id_4_tracker" | "unifi_46_d7_4b_eb_b7_6b_default" | "74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208" | "unifi_5a_cd_95_e0_7c_70_default" | "user_pc" | "unifi_9e_bd_39_73_2e_7b_default" | "unifi_46_96_44_f7_b0_31_default" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2" | "unifi_6e_51_7c_0a_df_f6_default" | "oneplus_9" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e" | "unifi_3c_06_30_33_c5_39_default" | "android_1688bb625b0c2c6" | "74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb" | "unifi_96_8a_4d_9f_15_37_default" | "pc_linuxshop_376156" | "galaxy_a71" | "unifi_1e_16_36_4e_38_6e_default" | "unifi_fa_6d_90_47_b3_f6_default" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28" | "unifi_ea_15_e0_03_7b_ff_default" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b" | "unifi_5e_71_99_6a_34_f3_default" | "unifi_fe_48_78_4b_e6_5d_default" | "unifi_c6_ee_dc_4b_cf_b5_default" | "unifi_68_4e_05_1e_0d_fd_default" | "unifi_f6_c6_d9_5f_5c_4c_default" | "unifi_22_85_cf_22_12_95_default" | "unifi_e6_cb_40_5b_d5_dd_default" | "74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca" | "android_00907aa9525f" | "74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355" | "unifi_4a_74_6f_81_31_e6_default" | "unifi_bc_d0_74_6b_24_ee_default" | "unifi_36_0f_11_d2_6f_3c_default" | "unifi_1a_37_8d_d1_45_c6_default" | "094f5242_4954_09ff_0f00_35414a575755_0_0_78ca" | "094f5242_4954_09ff_0f00_35414a575755_0_0_affd" | "unifi_50_a6_7f_54_4b_f6_default" | "74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18" | "094f5242_4954_09ff_0f00_35414a575755_0_0_a673" | "unifi_ea_09_28_82_f1_b4_default" | "unifi_72_32_ef_89_76_57_default" | "094f5242_4954_09ff_0f00_35414a575755_0_0_0228" | "unifi_00_00_89_0d_02_0c_default" | "sena_motorcycles_db89" | "74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af" | "unifi_de_1a_c8_54_f8_8f_default" | "74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e" | "unifi_22_0f_09_86_ba_51_default" | "fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040" | "unifi_e2_2c_34_4e_5b_86_default" | "74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da" | "74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b" | "unifi_9e_89_6d_7d_27_58_default" | "unifi_6e_d8_7f_81_19_a6_default" | "unifi_00_00_ae_23_00_00_default" | "unifi_aa_5e_76_34_21_08_default" | "unifi_ce_4f_5d_36_28_d6_default" | "74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca" | "094f5242_4954_09ff_0f00_35414a575755_0_0_610c" | "74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d" | "74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702" | "74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38" | "74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854" | "a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e" | "74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59" | "74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20" | "74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65" | "4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4" | "74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0" | "74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b" | "74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df" | "400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71" | "74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210" | "4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444" | "74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987" | "74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8" | "74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e" | "74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604" | "e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702"
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

['unifi_3a_32_32_0e_f3_22_default']: {
  entity_id: "device_tracker.unifi_3a_32_32_0e_f3_22_default",
get entity() { return {state: shadowState["device_tracker.unifi_3a_32_32_0e_f3_22_default"].state, attributes: shadowState["device_tracker.unifi_3a_32_32_0e_f3_22_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_3a_32_32_0e_f3_22_default"].state === "home"}
},

['uvc_g4_instant']: {
  entity_id: "device_tracker.uvc_g4_instant",
get entity() { return {state: shadowState["device_tracker.uvc_g4_instant"].state, attributes: shadowState["device_tracker.uvc_g4_instant"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.uvc_g4_instant"].state === "home"}
},

['aida_2']: {
  entity_id: "device_tracker.aida_2",
get entity() { return {state: shadowState["device_tracker.aida_2"].state, attributes: shadowState["device_tracker.aida_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.aida_2"].state === "home"}
},

['unifi_54_10_ec_c4_ef_fa_default']: {
  entity_id: "device_tracker.unifi_54_10_ec_c4_ef_fa_default",
get entity() { return {state: shadowState["device_tracker.unifi_54_10_ec_c4_ef_fa_default"].state, attributes: shadowState["device_tracker.unifi_54_10_ec_c4_ef_fa_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_54_10_ec_c4_ef_fa_default"].state === "home"}
},

['tims_mbp_2']: {
  entity_id: "device_tracker.tims_mbp_2",
get entity() { return {state: shadowState["device_tracker.tims_mbp_2"].state, attributes: shadowState["device_tracker.tims_mbp_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_mbp_2"].state === "home"}
},

['g4_doorbell']: {
  entity_id: "device_tracker.g4_doorbell",
get entity() { return {state: shadowState["device_tracker.g4_doorbell"].state, attributes: shadowState["device_tracker.g4_doorbell"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.g4_doorbell"].state === "home"}
},

['broadlink_remote_0c_81_90_2']: {
  entity_id: "device_tracker.broadlink_remote_0c_81_90_2",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_0c_81_90_2"].state, attributes: shadowState["device_tracker.broadlink_remote_0c_81_90_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_0c_81_90_2"].state === "home"}
},

['apple_tv']: {
  entity_id: "device_tracker.apple_tv",
get entity() { return {state: shadowState["device_tracker.apple_tv"].state, attributes: shadowState["device_tracker.apple_tv"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.apple_tv"].state === "home"}
},

['office_esp32']: {
  entity_id: "device_tracker.office_esp32",
get entity() { return {state: shadowState["device_tracker.office_esp32"].state, attributes: shadowState["device_tracker.office_esp32"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.office_esp32"].state === "home"}
},

['unifi_78_d6_dc_2f_29_a8_default']: {
  entity_id: "device_tracker.unifi_78_d6_dc_2f_29_a8_default",
get entity() { return {state: shadowState["device_tracker.unifi_78_d6_dc_2f_29_a8_default"].state, attributes: shadowState["device_tracker.unifi_78_d6_dc_2f_29_a8_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_78_d6_dc_2f_29_a8_default"].state === "home"}
},

['uvc_g4_bullet']: {
  entity_id: "device_tracker.uvc_g4_bullet",
get entity() { return {state: shadowState["device_tracker.uvc_g4_bullet"].state, attributes: shadowState["device_tracker.uvc_g4_bullet"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.uvc_g4_bullet"].state === "home"}
},

['wb457613_2']: {
  entity_id: "device_tracker.wb457613_2",
get entity() { return {state: shadowState["device_tracker.wb457613_2"].state, attributes: shadowState["device_tracker.wb457613_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.wb457613_2"].state === "home"}
},

['garage_esp32']: {
  entity_id: "device_tracker.garage_esp32",
get entity() { return {state: shadowState["device_tracker.garage_esp32"].state, attributes: shadowState["device_tracker.garage_esp32"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.garage_esp32"].state === "home"}
},

['unifi_f4_cf_a2_f6_8f_73_default']: {
  entity_id: "device_tracker.unifi_f4_cf_a2_f6_8f_73_default",
get entity() { return {state: shadowState["device_tracker.unifi_f4_cf_a2_f6_8f_73_default"].state, attributes: shadowState["device_tracker.unifi_f4_cf_a2_f6_8f_73_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_f4_cf_a2_f6_8f_73_default"].state === "home"}
},

['unifi_6c_3c_7c_02_33_af_default']: {
  entity_id: "device_tracker.unifi_6c_3c_7c_02_33_af_default",
get entity() { return {state: shadowState["device_tracker.unifi_6c_3c_7c_02_33_af_default"].state, attributes: shadowState["device_tracker.unifi_6c_3c_7c_02_33_af_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_6c_3c_7c_02_33_af_default"].state === "home"}
},

['broadlink_wifi_device_23_cb_47_2']: {
  entity_id: "device_tracker.broadlink_wifi_device_23_cb_47_2",
get entity() { return {state: shadowState["device_tracker.broadlink_wifi_device_23_cb_47_2"].state, attributes: shadowState["device_tracker.broadlink_wifi_device_23_cb_47_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_wifi_device_23_cb_47_2"].state === "home"}
},

['sma3004169620_2']: {
  entity_id: "device_tracker.sma3004169620_2",
get entity() { return {state: shadowState["device_tracker.sma3004169620_2"].state, attributes: shadowState["device_tracker.sma3004169620_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.sma3004169620_2"].state === "home"}
},

['unifi_2c_76_8a_5a_f2_d5_default']: {
  entity_id: "device_tracker.unifi_2c_76_8a_5a_f2_d5_default",
get entity() { return {state: shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d5_default"].state, attributes: shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d5_default"].state === "home"}
},

['unifi_4a_ef_78_49_26_a4_default']: {
  entity_id: "device_tracker.unifi_4a_ef_78_49_26_a4_default",
get entity() { return {state: shadowState["device_tracker.unifi_4a_ef_78_49_26_a4_default"].state, attributes: shadowState["device_tracker.unifi_4a_ef_78_49_26_a4_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_4a_ef_78_49_26_a4_default"].state === "home"}
},

['broadlink_remote_72_4c_9b_2']: {
  entity_id: "device_tracker.broadlink_remote_72_4c_9b_2",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_72_4c_9b_2"].state, attributes: shadowState["device_tracker.broadlink_remote_72_4c_9b_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_72_4c_9b_2"].state === "home"}
},

['unifi_92_ce_51_71_7e_6c_default']: {
  entity_id: "device_tracker.unifi_92_ce_51_71_7e_6c_default",
get entity() { return {state: shadowState["device_tracker.unifi_92_ce_51_71_7e_6c_default"].state, attributes: shadowState["device_tracker.unifi_92_ce_51_71_7e_6c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_92_ce_51_71_7e_6c_default"].state === "home"}
},

['unifi_2e_e4_84_ab_72_75_default']: {
  entity_id: "device_tracker.unifi_2e_e4_84_ab_72_75_default",
get entity() { return {state: shadowState["device_tracker.unifi_2e_e4_84_ab_72_75_default"].state, attributes: shadowState["device_tracker.unifi_2e_e4_84_ab_72_75_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_2e_e4_84_ab_72_75_default"].state === "home"}
},

['air_de_gaby_2']: {
  entity_id: "device_tracker.air_de_gaby_2",
get entity() { return {state: shadowState["device_tracker.air_de_gaby_2"].state, attributes: shadowState["device_tracker.air_de_gaby_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.air_de_gaby_2"].state === "home"}
},

['lt_621jtg3_2']: {
  entity_id: "device_tracker.lt_621jtg3_2",
get entity() { return {state: shadowState["device_tracker.lt_621jtg3_2"].state, attributes: shadowState["device_tracker.lt_621jtg3_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.lt_621jtg3_2"].state === "home"}
},

['unifi_64_4b_f0_2b_93_d8_default']: {
  entity_id: "device_tracker.unifi_64_4b_f0_2b_93_d8_default",
get entity() { return {state: shadowState["device_tracker.unifi_64_4b_f0_2b_93_d8_default"].state, attributes: shadowState["device_tracker.unifi_64_4b_f0_2b_93_d8_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_64_4b_f0_2b_93_d8_default"].state === "home"}
},

['broadlink_remote_b8_f4_bf_2']: {
  entity_id: "device_tracker.broadlink_remote_b8_f4_bf_2",
get entity() { return {state: shadowState["device_tracker.broadlink_remote_b8_f4_bf_2"].state, attributes: shadowState["device_tracker.broadlink_remote_b8_f4_bf_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.broadlink_remote_b8_f4_bf_2"].state === "home"}
},

['unifi_50_ec_50_1b_3a_85_default']: {
  entity_id: "device_tracker.unifi_50_ec_50_1b_3a_85_default",
get entity() { return {state: shadowState["device_tracker.unifi_50_ec_50_1b_3a_85_default"].state, attributes: shadowState["device_tracker.unifi_50_ec_50_1b_3a_85_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_50_ec_50_1b_3a_85_default"].state === "home"}
},

['unifi_cc_9f_7a_e2_ae_81_default']: {
  entity_id: "device_tracker.unifi_cc_9f_7a_e2_ae_81_default",
get entity() { return {state: shadowState["device_tracker.unifi_cc_9f_7a_e2_ae_81_default"].state, attributes: shadowState["device_tracker.unifi_cc_9f_7a_e2_ae_81_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_cc_9f_7a_e2_ae_81_default"].state === "home"}
},

['unifi_00_90_9e_9d_84_8e_default']: {
  entity_id: "device_tracker.unifi_00_90_9e_9d_84_8e_default",
get entity() { return {state: shadowState["device_tracker.unifi_00_90_9e_9d_84_8e_default"].state, attributes: shadowState["device_tracker.unifi_00_90_9e_9d_84_8e_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_00_90_9e_9d_84_8e_default"].state === "home"}
},

['unifi_5c_1d_d9_61_ed_04_default']: {
  entity_id: "device_tracker.unifi_5c_1d_d9_61_ed_04_default",
get entity() { return {state: shadowState["device_tracker.unifi_5c_1d_d9_61_ed_04_default"].state, attributes: shadowState["device_tracker.unifi_5c_1d_d9_61_ed_04_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_5c_1d_d9_61_ed_04_default"].state === "home"}
},

['unifi_e2_90_5e_3c_00_ef_default']: {
  entity_id: "device_tracker.unifi_e2_90_5e_3c_00_ef_default",
get entity() { return {state: shadowState["device_tracker.unifi_e2_90_5e_3c_00_ef_default"].state, attributes: shadowState["device_tracker.unifi_e2_90_5e_3c_00_ef_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_e2_90_5e_3c_00_ef_default"].state === "home"}
},

['unifi_2c_f0_5d_85_80_3c_default']: {
  entity_id: "device_tracker.unifi_2c_f0_5d_85_80_3c_default",
get entity() { return {state: shadowState["device_tracker.unifi_2c_f0_5d_85_80_3c_default"].state, attributes: shadowState["device_tracker.unifi_2c_f0_5d_85_80_3c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_2c_f0_5d_85_80_3c_default"].state === "home"}
},

['unifi_48_b0_2d_13_83_b5_default']: {
  entity_id: "device_tracker.unifi_48_b0_2d_13_83_b5_default",
get entity() { return {state: shadowState["device_tracker.unifi_48_b0_2d_13_83_b5_default"].state, attributes: shadowState["device_tracker.unifi_48_b0_2d_13_83_b5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_48_b0_2d_13_83_b5_default"].state === "home"}
},

['aida_3']: {
  entity_id: "device_tracker.aida_3",
get entity() { return {state: shadowState["device_tracker.aida_3"].state, attributes: shadowState["device_tracker.aida_3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.aida_3"].state === "home"}
},

['office_pi']: {
  entity_id: "device_tracker.office_pi",
get entity() { return {state: shadowState["device_tracker.office_pi"].state, attributes: shadowState["device_tracker.office_pi"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.office_pi"].state === "home"}
},

['unifi_ec_fa_bc_d2_dc_4d_default']: {
  entity_id: "device_tracker.unifi_ec_fa_bc_d2_dc_4d_default",
get entity() { return {state: shadowState["device_tracker.unifi_ec_fa_bc_d2_dc_4d_default"].state, attributes: shadowState["device_tracker.unifi_ec_fa_bc_d2_dc_4d_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ec_fa_bc_d2_dc_4d_default"].state === "home"}
},

['unifi_18_fa_b7_a8_fa_7b_default']: {
  entity_id: "device_tracker.unifi_18_fa_b7_a8_fa_7b_default",
get entity() { return {state: shadowState["device_tracker.unifi_18_fa_b7_a8_fa_7b_default"].state, attributes: shadowState["device_tracker.unifi_18_fa_b7_a8_fa_7b_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_18_fa_b7_a8_fa_7b_default"].state === "home"}
},

['unifi_7e_be_cc_5c_90_9b_default']: {
  entity_id: "device_tracker.unifi_7e_be_cc_5c_90_9b_default",
get entity() { return {state: shadowState["device_tracker.unifi_7e_be_cc_5c_90_9b_default"].state, attributes: shadowState["device_tracker.unifi_7e_be_cc_5c_90_9b_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_7e_be_cc_5c_90_9b_default"].state === "home"}
},

['unifi_d0_4e_50_f6_15_80_default']: {
  entity_id: "device_tracker.unifi_d0_4e_50_f6_15_80_default",
get entity() { return {state: shadowState["device_tracker.unifi_d0_4e_50_f6_15_80_default"].state, attributes: shadowState["device_tracker.unifi_d0_4e_50_f6_15_80_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_d0_4e_50_f6_15_80_default"].state === "home"}
},

['unifi_0c_23_69_53_96_a0_default']: {
  entity_id: "device_tracker.unifi_0c_23_69_53_96_a0_default",
get entity() { return {state: shadowState["device_tracker.unifi_0c_23_69_53_96_a0_default"].state, attributes: shadowState["device_tracker.unifi_0c_23_69_53_96_a0_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_0c_23_69_53_96_a0_default"].state === "home"}
},

['iphone']: {
  entity_id: "device_tracker.iphone",
get entity() { return {state: shadowState["device_tracker.iphone"].state, attributes: shadowState["device_tracker.iphone"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.iphone"].state === "home"}
},

['unifi_ae_79_f6_5e_2c_2c_default']: {
  entity_id: "device_tracker.unifi_ae_79_f6_5e_2c_2c_default",
get entity() { return {state: shadowState["device_tracker.unifi_ae_79_f6_5e_2c_2c_default"].state, attributes: shadowState["device_tracker.unifi_ae_79_f6_5e_2c_2c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ae_79_f6_5e_2c_2c_default"].state === "home"}
},

['unifi_56_c5_41_35_7e_cd_default']: {
  entity_id: "device_tracker.unifi_56_c5_41_35_7e_cd_default",
get entity() { return {state: shadowState["device_tracker.unifi_56_c5_41_35_7e_cd_default"].state, attributes: shadowState["device_tracker.unifi_56_c5_41_35_7e_cd_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_56_c5_41_35_7e_cd_default"].state === "home"}
},

['unifi_00_24_e4_f0_d4_0e_default']: {
  entity_id: "device_tracker.unifi_00_24_e4_f0_d4_0e_default",
get entity() { return {state: shadowState["device_tracker.unifi_00_24_e4_f0_d4_0e_default"].state, attributes: shadowState["device_tracker.unifi_00_24_e4_f0_d4_0e_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_00_24_e4_f0_d4_0e_default"].state === "home"}
},

['usmini_2']: {
  entity_id: "device_tracker.usmini_2",
get entity() { return {state: shadowState["device_tracker.usmini_2"].state, attributes: shadowState["device_tracker.usmini_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.usmini_2"].state === "home"}
},

['dream_machine_pro']: {
  entity_id: "device_tracker.dream_machine_pro",
get entity() { return {state: shadowState["device_tracker.dream_machine_pro"].state, attributes: shadowState["device_tracker.dream_machine_pro"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.dream_machine_pro"].state === "home"}
},

['u6_lite_living_room']: {
  entity_id: "device_tracker.u6_lite_living_room",
get entity() { return {state: shadowState["device_tracker.u6_lite_living_room"].state, attributes: shadowState["device_tracker.u6_lite_living_room"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.u6_lite_living_room"].state === "home"}
},

['usmini']: {
  entity_id: "device_tracker.usmini",
get entity() { return {state: shadowState["device_tracker.usmini"].state, attributes: shadowState["device_tracker.usmini"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.usmini"].state === "home"}
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

['tims_macbook_pro']: {
  entity_id: "device_tracker.tims_macbook_pro",
get entity() { return {state: shadowState["device_tracker.tims_macbook_pro"].state, attributes: shadowState["device_tracker.tims_macbook_pro"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_macbook_pro"].state === "home"}
},

['tims_iphone']: {
  entity_id: "device_tracker.tims_iphone",
get entity() { return {state: shadowState["device_tracker.tims_iphone"].state, attributes: shadowState["device_tracker.tims_iphone"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tims_iphone"].state === "home"}
},

['iphone_2']: {
  entity_id: "device_tracker.iphone_2",
get entity() { return {state: shadowState["device_tracker.iphone_2"].state, attributes: shadowState["device_tracker.iphone_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.iphone_2"].state === "home"}
},

['iphone_3']: {
  entity_id: "device_tracker.iphone_3",
get entity() { return {state: shadowState["device_tracker.iphone_3"].state, attributes: shadowState["device_tracker.iphone_3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.iphone_3"].state === "home"}
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

['unifi_00_04_4b_fb_74_e1_default']: {
  entity_id: "device_tracker.unifi_00_04_4b_fb_74_e1_default",
get entity() { return {state: shadowState["device_tracker.unifi_00_04_4b_fb_74_e1_default"].state, attributes: shadowState["device_tracker.unifi_00_04_4b_fb_74_e1_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_00_04_4b_fb_74_e1_default"].state === "home"}
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

['gs1200_8_2']: {
  entity_id: "device_tracker.gs1200_8_2",
get entity() { return {state: shadowState["device_tracker.gs1200_8_2"].state, attributes: shadowState["device_tracker.gs1200_8_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gs1200_8_2"].state === "home"}
},

['unifi_2c_76_8a_5a_f2_d4_default']: {
  entity_id: "device_tracker.unifi_2c_76_8a_5a_f2_d4_default",
get entity() { return {state: shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d4_default"].state, attributes: shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d4_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_2c_76_8a_5a_f2_d4_default"].state === "home"}
},

['unifi_48_b0_2d_15_21_c5_default']: {
  entity_id: "device_tracker.unifi_48_b0_2d_15_21_c5_default",
get entity() { return {state: shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].state, attributes: shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_48_b0_2d_15_21_c5_default"].state === "home"}
},

['unifi_ba_f7_93_f6_8a_d8_default']: {
  entity_id: "device_tracker.unifi_ba_f7_93_f6_8a_d8_default",
get entity() { return {state: shadowState["device_tracker.unifi_ba_f7_93_f6_8a_d8_default"].state, attributes: shadowState["device_tracker.unifi_ba_f7_93_f6_8a_d8_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ba_f7_93_f6_8a_d8_default"].state === "home"}
},

['kapy_3']: {
  entity_id: "device_tracker.kapy_3",
get entity() { return {state: shadowState["device_tracker.kapy_3"].state, attributes: shadowState["device_tracker.kapy_3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.kapy_3"].state === "home"}
},

['android_5ef1b103dc61d633_2']: {
  entity_id: "device_tracker.android_5ef1b103dc61d633_2",
get entity() { return {state: shadowState["device_tracker.android_5ef1b103dc61d633_2"].state, attributes: shadowState["device_tracker.android_5ef1b103dc61d633_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.android_5ef1b103dc61d633_2"].state === "home"}
},

['unifi_3e_6e_9e_5a_e0_a8_default']: {
  entity_id: "device_tracker.unifi_3e_6e_9e_5a_e0_a8_default",
get entity() { return {state: shadowState["device_tracker.unifi_3e_6e_9e_5a_e0_a8_default"].state, attributes: shadowState["device_tracker.unifi_3e_6e_9e_5a_e0_a8_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_3e_6e_9e_5a_e0_a8_default"].state === "home"}
},

['galaxywatch3_6bc3_2']: {
  entity_id: "device_tracker.galaxywatch3_6bc3_2",
get entity() { return {state: shadowState["device_tracker.galaxywatch3_6bc3_2"].state, attributes: shadowState["device_tracker.galaxywatch3_6bc3_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxywatch3_6bc3_2"].state === "home"}
},

['unifi_ae_d2_4a_a3_f5_28_default']: {
  entity_id: "device_tracker.unifi_ae_d2_4a_a3_f5_28_default",
get entity() { return {state: shadowState["device_tracker.unifi_ae_d2_4a_a3_f5_28_default"].state, attributes: shadowState["device_tracker.unifi_ae_d2_4a_a3_f5_28_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ae_d2_4a_a3_f5_28_default"].state === "home"}
},

['unifi_7a_43_d0_03_dc_aa_default']: {
  entity_id: "device_tracker.unifi_7a_43_d0_03_dc_aa_default",
get entity() { return {state: shadowState["device_tracker.unifi_7a_43_d0_03_dc_aa_default"].state, attributes: shadowState["device_tracker.unifi_7a_43_d0_03_dc_aa_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_7a_43_d0_03_dc_aa_default"].state === "home"}
},

['galaxy_s22_7']: {
  entity_id: "device_tracker.galaxy_s22_7",
get entity() { return {state: shadowState["device_tracker.galaxy_s22_7"].state, attributes: shadowState["device_tracker.galaxy_s22_7"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_s22_7"].state === "home"}
},

['living_room_esp32_2']: {
  entity_id: "device_tracker.living_room_esp32_2",
get entity() { return {state: shadowState["device_tracker.living_room_esp32_2"].state, attributes: shadowState["device_tracker.living_room_esp32_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.living_room_esp32_2"].state === "home"}
},

['unifi_da_5f_69_7c_31_c8_default']: {
  entity_id: "device_tracker.unifi_da_5f_69_7c_31_c8_default",
get entity() { return {state: shadowState["device_tracker.unifi_da_5f_69_7c_31_c8_default"].state, attributes: shadowState["device_tracker.unifi_da_5f_69_7c_31_c8_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_da_5f_69_7c_31_c8_default"].state === "home"}
},

['unifi_92_99_c1_60_3c_ae_default']: {
  entity_id: "device_tracker.unifi_92_99_c1_60_3c_ae_default",
get entity() { return {state: shadowState["device_tracker.unifi_92_99_c1_60_3c_ae_default"].state, attributes: shadowState["device_tracker.unifi_92_99_c1_60_3c_ae_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_92_99_c1_60_3c_ae_default"].state === "home"}
},

['galaxy_j5_2016']: {
  entity_id: "device_tracker.galaxy_j5_2016",
get entity() { return {state: shadowState["device_tracker.galaxy_j5_2016"].state, attributes: shadowState["device_tracker.galaxy_j5_2016"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_j5_2016"].state === "home"}
},

['unifi_04_03_d6_07_6b_09_default']: {
  entity_id: "device_tracker.unifi_04_03_d6_07_6b_09_default",
get entity() { return {state: shadowState["device_tracker.unifi_04_03_d6_07_6b_09_default"].state, attributes: shadowState["device_tracker.unifi_04_03_d6_07_6b_09_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_04_03_d6_07_6b_09_default"].state === "home"}
},

['unifi_d2_21_f9_85_ae_ce_default']: {
  entity_id: "device_tracker.unifi_d2_21_f9_85_ae_ce_default",
get entity() { return {state: shadowState["device_tracker.unifi_d2_21_f9_85_ae_ce_default"].state, attributes: shadowState["device_tracker.unifi_d2_21_f9_85_ae_ce_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_d2_21_f9_85_ae_ce_default"].state === "home"}
},

['unifi_02_17_f9_4d_0a_70_default']: {
  entity_id: "device_tracker.unifi_02_17_f9_4d_0a_70_default",
get entity() { return {state: shadowState["device_tracker.unifi_02_17_f9_4d_0a_70_default"].state, attributes: shadowState["device_tracker.unifi_02_17_f9_4d_0a_70_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_02_17_f9_4d_0a_70_default"].state === "home"}
},

['unifi_04_cf_8c_b4_8b_63_default']: {
  entity_id: "device_tracker.unifi_04_cf_8c_b4_8b_63_default",
get entity() { return {state: shadowState["device_tracker.unifi_04_cf_8c_b4_8b_63_default"].state, attributes: shadowState["device_tracker.unifi_04_cf_8c_b4_8b_63_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_04_cf_8c_b4_8b_63_default"].state === "home"}
},

['gabys_phone']: {
  entity_id: "device_tracker.gabys_phone",
get entity() { return {state: shadowState["device_tracker.gabys_phone"].state, attributes: shadowState["device_tracker.gabys_phone"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.gabys_phone"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_9010_6d04"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_19818_6d73"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_6674_b4c2"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13460_f42d"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_43750_18816_d02c"].state === "home"}
},

['unifi_b2_4a_0b_7b_66_c0_default']: {
  entity_id: "device_tracker.unifi_b2_4a_0b_7b_66_c0_default",
get entity() { return {state: shadowState["device_tracker.unifi_b2_4a_0b_7b_66_c0_default"].state, attributes: shadowState["device_tracker.unifi_b2_4a_0b_7b_66_c0_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_b2_4a_0b_7b_66_c0_default"].state === "home"}
},

['unifi_a6_cc_57_a9_45_db_default']: {
  entity_id: "device_tracker.unifi_a6_cc_57_a9_45_db_default",
get entity() { return {state: shadowState["device_tracker.unifi_a6_cc_57_a9_45_db_default"].state, attributes: shadowState["device_tracker.unifi_a6_cc_57_a9_45_db_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_a6_cc_57_a9_45_db_default"].state === "home"}
},

['unifi_da_cd_96_ed_bb_39_default']: {
  entity_id: "device_tracker.unifi_da_cd_96_ed_bb_39_default",
get entity() { return {state: shadowState["device_tracker.unifi_da_cd_96_ed_bb_39_default"].state, attributes: shadowState["device_tracker.unifi_da_cd_96_ed_bb_39_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_da_cd_96_ed_bb_39_default"].state === "home"}
},

['unifi_32_6b_07_24_08_ce_default']: {
  entity_id: "device_tracker.unifi_32_6b_07_24_08_ce_default",
get entity() { return {state: shadowState["device_tracker.unifi_32_6b_07_24_08_ce_default"].state, attributes: shadowState["device_tracker.unifi_32_6b_07_24_08_ce_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_32_6b_07_24_08_ce_default"].state === "home"}
},

['unifi_1e_85_c8_66_73_ba_default']: {
  entity_id: "device_tracker.unifi_1e_85_c8_66_73_ba_default",
get entity() { return {state: shadowState["device_tracker.unifi_1e_85_c8_66_73_ba_default"].state, attributes: shadowState["device_tracker.unifi_1e_85_c8_66_73_ba_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_1e_85_c8_66_73_ba_default"].state === "home"}
},

['unifi_de_1b_cc_10_28_29_default']: {
  entity_id: "device_tracker.unifi_de_1b_cc_10_28_29_default",
get entity() { return {state: shadowState["device_tracker.unifi_de_1b_cc_10_28_29_default"].state, attributes: shadowState["device_tracker.unifi_de_1b_cc_10_28_29_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_de_1b_cc_10_28_29_default"].state === "home"}
},

['living_room_2']: {
  entity_id: "device_tracker.living_room_2",
get entity() { return {state: shadowState["device_tracker.living_room_2"].state, attributes: shadowState["device_tracker.living_room_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.living_room_2"].state === "home"}
},

['saacbe39bdc4e468cc_297d']: {
  entity_id: "device_tracker.saacbe39bdc4e468cc_297d",
get entity() { return {state: shadowState["device_tracker.saacbe39bdc4e468cc_297d"].state, attributes: shadowState["device_tracker.saacbe39bdc4e468cc_297d"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.saacbe39bdc4e468cc_297d"].state === "home"}
},

['antonios_mbp_2']: {
  entity_id: "device_tracker.antonios_mbp_2",
get entity() { return {state: shadowState["device_tracker.antonios_mbp_2"].state, attributes: shadowState["device_tracker.antonios_mbp_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.antonios_mbp_2"].state === "home"}
},

['unifi_40_5b_d8_3d_62_81_default']: {
  entity_id: "device_tracker.unifi_40_5b_d8_3d_62_81_default",
get entity() { return {state: shadowState["device_tracker.unifi_40_5b_d8_3d_62_81_default"].state, attributes: shadowState["device_tracker.unifi_40_5b_d8_3d_62_81_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_40_5b_d8_3d_62_81_default"].state === "home"}
},

['unifi_32_68_38_67_26_d5_default']: {
  entity_id: "device_tracker.unifi_32_68_38_67_26_d5_default",
get entity() { return {state: shadowState["device_tracker.unifi_32_68_38_67_26_d5_default"].state, attributes: shadowState["device_tracker.unifi_32_68_38_67_26_d5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_32_68_38_67_26_d5_default"].state === "home"}
},

['unifi_42_63_99_22_9c_50_default']: {
  entity_id: "device_tracker.unifi_42_63_99_22_9c_50_default",
get entity() { return {state: shadowState["device_tracker.unifi_42_63_99_22_9c_50_default"].state, attributes: shadowState["device_tracker.unifi_42_63_99_22_9c_50_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_42_63_99_22_9c_50_default"].state === "home"}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933']: {
  entity_id: "device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933",
get entity() { return {state: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933"].state, attributes: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_23522_e933"].state === "home"}
},

['unifi_70_a7_41_c1_b0_03_default']: {
  entity_id: "device_tracker.unifi_70_a7_41_c1_b0_03_default",
get entity() { return {state: shadowState["device_tracker.unifi_70_a7_41_c1_b0_03_default"].state, attributes: shadowState["device_tracker.unifi_70_a7_41_c1_b0_03_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_70_a7_41_c1_b0_03_default"].state === "home"}
},

['lt_621jtg3_3']: {
  entity_id: "device_tracker.lt_621jtg3_3",
get entity() { return {state: shadowState["device_tracker.lt_621jtg3_3"].state, attributes: shadowState["device_tracker.lt_621jtg3_3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.lt_621jtg3_3"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_32150_48426_3169"].state === "home"}
},

['lt_621jtg3_4']: {
  entity_id: "device_tracker.lt_621jtg3_4",
get entity() { return {state: shadowState["device_tracker.lt_621jtg3_4"].state, attributes: shadowState["device_tracker.lt_621jtg3_4"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.lt_621jtg3_4"].state === "home"}
},

['unifi_ae_ce_22_98_fb_36_default']: {
  entity_id: "device_tracker.unifi_ae_ce_22_98_fb_36_default",
get entity() { return {state: shadowState["device_tracker.unifi_ae_ce_22_98_fb_36_default"].state, attributes: shadowState["device_tracker.unifi_ae_ce_22_98_fb_36_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ae_ce_22_98_fb_36_default"].state === "home"}
},

['unifi_3e_0c_8e_06_cb_58_default']: {
  entity_id: "device_tracker.unifi_3e_0c_8e_06_cb_58_default",
get entity() { return {state: shadowState["device_tracker.unifi_3e_0c_8e_06_cb_58_default"].state, attributes: shadowState["device_tracker.unifi_3e_0c_8e_06_cb_58_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_3e_0c_8e_06_cb_58_default"].state === "home"}
},

['unifi_9a_74_da_19_a8_46_default']: {
  entity_id: "device_tracker.unifi_9a_74_da_19_a8_46_default",
get entity() { return {state: shadowState["device_tracker.unifi_9a_74_da_19_a8_46_default"].state, attributes: shadowState["device_tracker.unifi_9a_74_da_19_a8_46_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_9a_74_da_19_a8_46_default"].state === "home"}
},

['unifi_a6_00_d0_c4_81_43_default']: {
  entity_id: "device_tracker.unifi_a6_00_d0_c4_81_43_default",
get entity() { return {state: shadowState["device_tracker.unifi_a6_00_d0_c4_81_43_default"].state, attributes: shadowState["device_tracker.unifi_a6_00_d0_c4_81_43_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_a6_00_d0_c4_81_43_default"].state === "home"}
},

['unifi_62_28_d3_b8_aa_ae_default']: {
  entity_id: "device_tracker.unifi_62_28_d3_b8_aa_ae_default",
get entity() { return {state: shadowState["device_tracker.unifi_62_28_d3_b8_aa_ae_default"].state, attributes: shadowState["device_tracker.unifi_62_28_d3_b8_aa_ae_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_62_28_d3_b8_aa_ae_default"].state === "home"}
},

['unifi_e6_ae_a7_af_5b_72_default']: {
  entity_id: "device_tracker.unifi_e6_ae_a7_af_5b_72_default",
get entity() { return {state: shadowState["device_tracker.unifi_e6_ae_a7_af_5b_72_default"].state, attributes: shadowState["device_tracker.unifi_e6_ae_a7_af_5b_72_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_e6_ae_a7_af_5b_72_default"].state === "home"}
},

['tim_s_id_4_tracker']: {
  entity_id: "device_tracker.tim_s_id_4_tracker",
get entity() { return {state: shadowState["device_tracker.tim_s_id_4_tracker"].state, attributes: shadowState["device_tracker.tim_s_id_4_tracker"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.tim_s_id_4_tracker"].state === "home"}
},

['unifi_46_d7_4b_eb_b7_6b_default']: {
  entity_id: "device_tracker.unifi_46_d7_4b_eb_b7_6b_default",
get entity() { return {state: shadowState["device_tracker.unifi_46_d7_4b_eb_b7_6b_default"].state, attributes: shadowState["device_tracker.unifi_46_d7_4b_eb_b7_6b_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_46_d7_4b_eb_b7_6b_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_61758_23681_29c6"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_10885_53791_0208"].state === "home"}
},

['unifi_5a_cd_95_e0_7c_70_default']: {
  entity_id: "device_tracker.unifi_5a_cd_95_e0_7c_70_default",
get entity() { return {state: shadowState["device_tracker.unifi_5a_cd_95_e0_7c_70_default"].state, attributes: shadowState["device_tracker.unifi_5a_cd_95_e0_7c_70_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_5a_cd_95_e0_7c_70_default"].state === "home"}
},

['user_pc']: {
  entity_id: "device_tracker.user_pc",
get entity() { return {state: shadowState["device_tracker.user_pc"].state, attributes: shadowState["device_tracker.user_pc"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.user_pc"].state === "home"}
},

['unifi_9e_bd_39_73_2e_7b_default']: {
  entity_id: "device_tracker.unifi_9e_bd_39_73_2e_7b_default",
get entity() { return {state: shadowState["device_tracker.unifi_9e_bd_39_73_2e_7b_default"].state, attributes: shadowState["device_tracker.unifi_9e_bd_39_73_2e_7b_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_9e_bd_39_73_2e_7b_default"].state === "home"}
},

['unifi_46_96_44_f7_b0_31_default']: {
  entity_id: "device_tracker.unifi_46_96_44_f7_b0_31_default",
get entity() { return {state: shadowState["device_tracker.unifi_46_96_44_f7_b0_31_default"].state, attributes: shadowState["device_tracker.unifi_46_96_44_f7_b0_31_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_46_96_44_f7_b0_31_default"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_65148_50317_630d"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_29686_4467_3bb2"].state === "home"}
},

['unifi_6e_51_7c_0a_df_f6_default']: {
  entity_id: "device_tracker.unifi_6e_51_7c_0a_df_f6_default",
get entity() { return {state: shadowState["device_tracker.unifi_6e_51_7c_0a_df_f6_default"].state, attributes: shadowState["device_tracker.unifi_6e_51_7c_0a_df_f6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_6e_51_7c_0a_df_f6_default"].state === "home"}
},

['oneplus_9']: {
  entity_id: "device_tracker.oneplus_9",
get entity() { return {state: shadowState["device_tracker.oneplus_9"].state, attributes: shadowState["device_tracker.oneplus_9"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.oneplus_9"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_35032_27729_b6b8"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55860_13282_c97e"].state === "home"}
},

['unifi_3c_06_30_33_c5_39_default']: {
  entity_id: "device_tracker.unifi_3c_06_30_33_c5_39_default",
get entity() { return {state: shadowState["device_tracker.unifi_3c_06_30_33_c5_39_default"].state, attributes: shadowState["device_tracker.unifi_3c_06_30_33_c5_39_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_3c_06_30_33_c5_39_default"].state === "home"}
},

['android_1688bb625b0c2c6']: {
  entity_id: "device_tracker.android_1688bb625b0c2c6",
get entity() { return {state: shadowState["device_tracker.android_1688bb625b0c2c6"].state, attributes: shadowState["device_tracker.android_1688bb625b0c2c6"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.android_1688bb625b0c2c6"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_63203_5fcb"].state === "home"}
},

['unifi_96_8a_4d_9f_15_37_default']: {
  entity_id: "device_tracker.unifi_96_8a_4d_9f_15_37_default",
get entity() { return {state: shadowState["device_tracker.unifi_96_8a_4d_9f_15_37_default"].state, attributes: shadowState["device_tracker.unifi_96_8a_4d_9f_15_37_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_96_8a_4d_9f_15_37_default"].state === "home"}
},

['pc_linuxshop_376156']: {
  entity_id: "device_tracker.pc_linuxshop_376156",
get entity() { return {state: shadowState["device_tracker.pc_linuxshop_376156"].state, attributes: shadowState["device_tracker.pc_linuxshop_376156"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.pc_linuxshop_376156"].state === "home"}
},

['galaxy_a71']: {
  entity_id: "device_tracker.galaxy_a71",
get entity() { return {state: shadowState["device_tracker.galaxy_a71"].state, attributes: shadowState["device_tracker.galaxy_a71"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.galaxy_a71"].state === "home"}
},

['unifi_1e_16_36_4e_38_6e_default']: {
  entity_id: "device_tracker.unifi_1e_16_36_4e_38_6e_default",
get entity() { return {state: shadowState["device_tracker.unifi_1e_16_36_4e_38_6e_default"].state, attributes: shadowState["device_tracker.unifi_1e_16_36_4e_38_6e_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_1e_16_36_4e_38_6e_default"].state === "home"}
},

['unifi_fa_6d_90_47_b3_f6_default']: {
  entity_id: "device_tracker.unifi_fa_6d_90_47_b3_f6_default",
get entity() { return {state: shadowState["device_tracker.unifi_fa_6d_90_47_b3_f6_default"].state, attributes: shadowState["device_tracker.unifi_fa_6d_90_47_b3_f6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_fa_6d_90_47_b3_f6_default"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_2775_42956_dd28"].state === "home"}
},

['unifi_ea_15_e0_03_7b_ff_default']: {
  entity_id: "device_tracker.unifi_ea_15_e0_03_7b_ff_default",
get entity() { return {state: shadowState["device_tracker.unifi_ea_15_e0_03_7b_ff_default"].state, attributes: shadowState["device_tracker.unifi_ea_15_e0_03_7b_ff_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ea_15_e0_03_7b_ff_default"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_25477_34554_54ca"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_55659_56955_911b"].state === "home"}
},

['unifi_5e_71_99_6a_34_f3_default']: {
  entity_id: "device_tracker.unifi_5e_71_99_6a_34_f3_default",
get entity() { return {state: shadowState["device_tracker.unifi_5e_71_99_6a_34_f3_default"].state, attributes: shadowState["device_tracker.unifi_5e_71_99_6a_34_f3_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_5e_71_99_6a_34_f3_default"].state === "home"}
},

['unifi_fe_48_78_4b_e6_5d_default']: {
  entity_id: "device_tracker.unifi_fe_48_78_4b_e6_5d_default",
get entity() { return {state: shadowState["device_tracker.unifi_fe_48_78_4b_e6_5d_default"].state, attributes: shadowState["device_tracker.unifi_fe_48_78_4b_e6_5d_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_fe_48_78_4b_e6_5d_default"].state === "home"}
},

['unifi_c6_ee_dc_4b_cf_b5_default']: {
  entity_id: "device_tracker.unifi_c6_ee_dc_4b_cf_b5_default",
get entity() { return {state: shadowState["device_tracker.unifi_c6_ee_dc_4b_cf_b5_default"].state, attributes: shadowState["device_tracker.unifi_c6_ee_dc_4b_cf_b5_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_c6_ee_dc_4b_cf_b5_default"].state === "home"}
},

['unifi_68_4e_05_1e_0d_fd_default']: {
  entity_id: "device_tracker.unifi_68_4e_05_1e_0d_fd_default",
get entity() { return {state: shadowState["device_tracker.unifi_68_4e_05_1e_0d_fd_default"].state, attributes: shadowState["device_tracker.unifi_68_4e_05_1e_0d_fd_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_68_4e_05_1e_0d_fd_default"].state === "home"}
},

['unifi_f6_c6_d9_5f_5c_4c_default']: {
  entity_id: "device_tracker.unifi_f6_c6_d9_5f_5c_4c_default",
get entity() { return {state: shadowState["device_tracker.unifi_f6_c6_d9_5f_5c_4c_default"].state, attributes: shadowState["device_tracker.unifi_f6_c6_d9_5f_5c_4c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_f6_c6_d9_5f_5c_4c_default"].state === "home"}
},

['unifi_22_85_cf_22_12_95_default']: {
  entity_id: "device_tracker.unifi_22_85_cf_22_12_95_default",
get entity() { return {state: shadowState["device_tracker.unifi_22_85_cf_22_12_95_default"].state, attributes: shadowState["device_tracker.unifi_22_85_cf_22_12_95_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_22_85_cf_22_12_95_default"].state === "home"}
},

['unifi_e6_cb_40_5b_d5_dd_default']: {
  entity_id: "device_tracker.unifi_e6_cb_40_5b_d5_dd_default",
get entity() { return {state: shadowState["device_tracker.unifi_e6_cb_40_5b_d5_dd_default"].state, attributes: shadowState["device_tracker.unifi_e6_cb_40_5b_d5_dd_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_e6_cb_40_5b_d5_dd_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_55689_e8ca"].state === "home"}
},

['android_00907aa9525f']: {
  entity_id: "device_tracker.android_00907aa9525f",
get entity() { return {state: shadowState["device_tracker.android_00907aa9525f"].state, attributes: shadowState["device_tracker.android_00907aa9525f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.android_00907aa9525f"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43705_6355"].state === "home"}
},

['unifi_4a_74_6f_81_31_e6_default']: {
  entity_id: "device_tracker.unifi_4a_74_6f_81_31_e6_default",
get entity() { return {state: shadowState["device_tracker.unifi_4a_74_6f_81_31_e6_default"].state, attributes: shadowState["device_tracker.unifi_4a_74_6f_81_31_e6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_4a_74_6f_81_31_e6_default"].state === "home"}
},

['unifi_bc_d0_74_6b_24_ee_default']: {
  entity_id: "device_tracker.unifi_bc_d0_74_6b_24_ee_default",
get entity() { return {state: shadowState["device_tracker.unifi_bc_d0_74_6b_24_ee_default"].state, attributes: shadowState["device_tracker.unifi_bc_d0_74_6b_24_ee_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_bc_d0_74_6b_24_ee_default"].state === "home"}
},

['unifi_36_0f_11_d2_6f_3c_default']: {
  entity_id: "device_tracker.unifi_36_0f_11_d2_6f_3c_default",
get entity() { return {state: shadowState["device_tracker.unifi_36_0f_11_d2_6f_3c_default"].state, attributes: shadowState["device_tracker.unifi_36_0f_11_d2_6f_3c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_36_0f_11_d2_6f_3c_default"].state === "home"}
},

['unifi_1a_37_8d_d1_45_c6_default']: {
  entity_id: "device_tracker.unifi_1a_37_8d_d1_45_c6_default",
get entity() { return {state: shadowState["device_tracker.unifi_1a_37_8d_d1_45_c6_default"].state, attributes: shadowState["device_tracker.unifi_1a_37_8d_d1_45_c6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_1a_37_8d_d1_45_c6_default"].state === "home"}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_78ca']: {
  entity_id: "device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca",
get entity() { return {state: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca"].state, attributes: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_78ca"].state === "home"}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_affd']: {
  entity_id: "device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_affd",
get entity() { return {state: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_affd"].state, attributes: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_affd"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_affd"].state === "home"}
},

['unifi_50_a6_7f_54_4b_f6_default']: {
  entity_id: "device_tracker.unifi_50_a6_7f_54_4b_f6_default",
get entity() { return {state: shadowState["device_tracker.unifi_50_a6_7f_54_4b_f6_default"].state, attributes: shadowState["device_tracker.unifi_50_a6_7f_54_4b_f6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_50_a6_7f_54_4b_f6_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15496_7c18"].state === "home"}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_a673']: {
  entity_id: "device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_a673",
get entity() { return {state: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_a673"].state, attributes: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_a673"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_a673"].state === "home"}
},

['unifi_ea_09_28_82_f1_b4_default']: {
  entity_id: "device_tracker.unifi_ea_09_28_82_f1_b4_default",
get entity() { return {state: shadowState["device_tracker.unifi_ea_09_28_82_f1_b4_default"].state, attributes: shadowState["device_tracker.unifi_ea_09_28_82_f1_b4_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ea_09_28_82_f1_b4_default"].state === "home"}
},

['unifi_72_32_ef_89_76_57_default']: {
  entity_id: "device_tracker.unifi_72_32_ef_89_76_57_default",
get entity() { return {state: shadowState["device_tracker.unifi_72_32_ef_89_76_57_default"].state, attributes: shadowState["device_tracker.unifi_72_32_ef_89_76_57_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_72_32_ef_89_76_57_default"].state === "home"}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_0228']: {
  entity_id: "device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_0228",
get entity() { return {state: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_0228"].state, attributes: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_0228"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_0228"].state === "home"}
},

['unifi_00_00_89_0d_02_0c_default']: {
  entity_id: "device_tracker.unifi_00_00_89_0d_02_0c_default",
get entity() { return {state: shadowState["device_tracker.unifi_00_00_89_0d_02_0c_default"].state, attributes: shadowState["device_tracker.unifi_00_00_89_0d_02_0c_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_00_00_89_0d_02_0c_default"].state === "home"}
},

['sena_motorcycles_db89']: {
  entity_id: "device_tracker.sena_motorcycles_db89",
get entity() { return {state: shadowState["device_tracker.sena_motorcycles_db89"].state, attributes: shadowState["device_tracker.sena_motorcycles_db89"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.sena_motorcycles_db89"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_51244_e3e3_2"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_56011_59378_56af"].state === "home"}
},

['unifi_de_1a_c8_54_f8_8f_default']: {
  entity_id: "device_tracker.unifi_de_1a_c8_54_f8_8f_default",
get entity() { return {state: shadowState["device_tracker.unifi_de_1a_c8_54_f8_8f_default"].state, attributes: shadowState["device_tracker.unifi_de_1a_c8_54_f8_8f_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_de_1a_c8_54_f8_8f_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_26427_0a2e"].state === "home"}
},

['unifi_22_0f_09_86_ba_51_default']: {
  entity_id: "device_tracker.unifi_22_0f_09_86_ba_51_default",
get entity() { return {state: shadowState["device_tracker.unifi_22_0f_09_86_ba_51_default"].state, attributes: shadowState["device_tracker.unifi_22_0f_09_86_ba_51_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_22_0f_09_86_ba_51_default"].state === "home"}
},

['fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040']: {
  entity_id: "device_tracker.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040",
get entity() { return {state: shadowState["device_tracker.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040"].state, attributes: shadowState["device_tracker.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.fda50693_a4e2_4fb1_afcf_c6eb07647825_10065_26049_9040"].state === "home"}
},

['unifi_e2_2c_34_4e_5b_86_default']: {
  entity_id: "device_tracker.unifi_e2_2c_34_4e_5b_86_default",
get entity() { return {state: shadowState["device_tracker.unifi_e2_2c_34_4e_5b_86_default"].state, attributes: shadowState["device_tracker.unifi_e2_2c_34_4e_5b_86_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_e2_2c_34_4e_5b_86_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25925_59da"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_25303_490b"].state === "home"}
},

['unifi_9e_89_6d_7d_27_58_default']: {
  entity_id: "device_tracker.unifi_9e_89_6d_7d_27_58_default",
get entity() { return {state: shadowState["device_tracker.unifi_9e_89_6d_7d_27_58_default"].state, attributes: shadowState["device_tracker.unifi_9e_89_6d_7d_27_58_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_9e_89_6d_7d_27_58_default"].state === "home"}
},

['unifi_6e_d8_7f_81_19_a6_default']: {
  entity_id: "device_tracker.unifi_6e_d8_7f_81_19_a6_default",
get entity() { return {state: shadowState["device_tracker.unifi_6e_d8_7f_81_19_a6_default"].state, attributes: shadowState["device_tracker.unifi_6e_d8_7f_81_19_a6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_6e_d8_7f_81_19_a6_default"].state === "home"}
},

['unifi_00_00_ae_23_00_00_default']: {
  entity_id: "device_tracker.unifi_00_00_ae_23_00_00_default",
get entity() { return {state: shadowState["device_tracker.unifi_00_00_ae_23_00_00_default"].state, attributes: shadowState["device_tracker.unifi_00_00_ae_23_00_00_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_00_00_ae_23_00_00_default"].state === "home"}
},

['unifi_aa_5e_76_34_21_08_default']: {
  entity_id: "device_tracker.unifi_aa_5e_76_34_21_08_default",
get entity() { return {state: shadowState["device_tracker.unifi_aa_5e_76_34_21_08_default"].state, attributes: shadowState["device_tracker.unifi_aa_5e_76_34_21_08_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_aa_5e_76_34_21_08_default"].state === "home"}
},

['unifi_ce_4f_5d_36_28_d6_default']: {
  entity_id: "device_tracker.unifi_ce_4f_5d_36_28_d6_default",
get entity() { return {state: shadowState["device_tracker.unifi_ce_4f_5d_36_28_d6_default"].state, attributes: shadowState["device_tracker.unifi_ce_4f_5d_36_28_d6_default"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.unifi_ce_4f_5d_36_28_d6_default"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_53751_5f1f"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_9470_25503_21ca"].state === "home"}
},

['094f5242_4954_09ff_0f00_35414a575755_0_0_610c']: {
  entity_id: "device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_610c",
get entity() { return {state: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_610c"].state, attributes: shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_610c"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.094f5242_4954_09ff_0f00_35414a575755_0_0_610c"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_2447_3c9d"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5462_d702"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_4932_7a38"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_13612_4854"].state === "home"}
},

['a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e']: {
  entity_id: "device_tracker.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e",
get entity() { return {state: shadowState["device_tracker.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e"].state, attributes: shadowState["device_tracker.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.a085b012_b6a6_bd67_90e6_7898cdf65f88_1_1_bd0e"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_43522_8e59"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_50587_ef20"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_15326_b9b6"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_21854_60707_a860"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7136_6457_8bea"].state === "home"}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65']: {
  entity_id: "device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65",
get entity() { return {state: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65"].state, attributes: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_61660_6f65"].state === "home"}
},

['4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4']: {
  entity_id: "device_tracker.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4",
get entity() { return {state: shadowState["device_tracker.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4"].state, attributes: shadowState["device_tracker.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.4d437e54_2a72_3abf_d63e_fac6dfd6624c_258_772_c7f4"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_24636_f454"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_16368_61499_83b0"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_1986_2f3b"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_8496_dd28"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_53696_63239_ac83"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_60228_3508_4439"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_51609_41813_21df"].state === "home"}
},

['400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2']: {
  entity_id: "device_tracker.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2",
get entity() { return {state: shadowState["device_tracker.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2"].state, attributes: shadowState["device_tracker.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.400225dd_3d15_4a4b_9db3_93c4b2d01eda_0_0_52b2"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_59513_56105_6c71"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_37733_d2de"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_39529_25054_f501"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_5590_38045_5cf6"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_14266_61394_7763"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_7419_42853_f210"].state === "home"}
},

['4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444']: {
  entity_id: "device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444",
get entity() { return {state: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444"].state, attributes: shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.4340640c_cc56_5c2c_bace_d13a2b2a1ffe_0_38177_8444"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_256_41794_b987"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_5109_58a8"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_13720_e19e"].state === "home"}
},

['74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604']: {
  entity_id: "device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604",
get entity() { return {state: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604"].state, attributes: shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.74278bda_b644_4520_8f0c_720eaf059935_0_46416_d604"].state === "home"}
},

['e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702']: {
  entity_id: "device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702",
get entity() { return {state: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702"].state, attributes: shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702"].attributes} as DeviceTrackerProperties},
isHome() { return shadowState["device_tracker.e20a39f4_73f5_4bc4_1864_17d1ad07a962_27067_57490_0702"].state === "home"}
},

}
