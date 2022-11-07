import { shadowState, MediaPlayer, callService} from "@herja/core"
        export type MediaPlayerIDs = "spotify_tim" | "plex_plex_for_android_tv_shield_android_tv" | "android_tv_living_room" | "android_tv_192_168_2_59" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c" | "snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a" | "snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5" | "snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e" | "snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76" | "snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53" | "plex_frederic_plex_for_android_tv_oy_tab_kids" | "plex_plex_for_android_tv_shield_android_tv_2" | "plex_plex_web_firefox_osx" | "plex_clement_plex_web_firefox_windows" | "plex_plex_for_ios_ipad_de_gaby" | "plex_plex_for_android_mobile_galaxy_s22" | "plex_kapy_plex_for_android_mobile_galaxy_s20" | "plex_frederic_plex_for_android_mobile_galaxy_s20"
export const media_player: MediaPlayer<MediaPlayerIDs> = {
  
  ["spotify_tim"]: {
    entity_id: "sensor.spotify_tim",
    get state() { return shadowState["media_player.spotify_tim"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.spotify_tim"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.spotify_tim"}),
  },

  ["plex_plex_for_android_tv_shield_android_tv"]: {
    entity_id: "sensor.plex_plex_for_android_tv_shield_android_tv",
    get state() { return shadowState["media_player.plex_plex_for_android_tv_shield_android_tv"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"}),
  },

  ["android_tv_living_room"]: {
    entity_id: "sensor.android_tv_living_room",
    get state() { return shadowState["media_player.android_tv_living_room"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.android_tv_living_room"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.android_tv_living_room"}),
  },

  ["android_tv_192_168_2_59"]: {
    entity_id: "sensor.android_tv_192_168_2_59",
    get state() { return shadowState["media_player.android_tv_192_168_2_59"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.android_tv_192_168_2_59"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.android_tv_192_168_2_59"}),
  },

  ["ebbff7dd_e82b404f"]: {
    entity_id: "sensor.ebbff7dd_e82b404f",
    get state() { return shadowState["media_player.ebbff7dd_e82b404f"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.ebbff7dd_e82b404f"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.ebbff7dd_e82b404f"}),
  },

  ["aadf3129_ecd1ece2"]: {
    entity_id: "sensor.aadf3129_ecd1ece2",
    get state() { return shadowState["media_player.aadf3129_ecd1ece2"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.aadf3129_ecd1ece2"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.aadf3129_ecd1ece2"}),
  },

  ["snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"]: {
    entity_id: "sensor.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c",
    get state() { return shadowState["media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"}),
  },

  ["snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"]: {
    entity_id: "sensor.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a",
    get state() { return shadowState["media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"}),
  },

  ["snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"]: {
    entity_id: "sensor.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5",
    get state() { return shadowState["media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"}),
  },

  ["snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"]: {
    entity_id: "sensor.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e",
    get state() { return shadowState["media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"}),
  },

  ["snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"]: {
    entity_id: "sensor.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76",
    get state() { return shadowState["media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"}),
  },

  ["snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"]: {
    entity_id: "sensor.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53",
    get state() { return shadowState["media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"}),
  },

  ["plex_frederic_plex_for_android_tv_oy_tab_kids"]: {
    entity_id: "sensor.plex_frederic_plex_for_android_tv_oy_tab_kids",
    get state() { return shadowState["media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"}),
  },

  ["plex_plex_for_android_tv_shield_android_tv_2"]: {
    entity_id: "sensor.plex_plex_for_android_tv_shield_android_tv_2",
    get state() { return shadowState["media_player.plex_plex_for_android_tv_shield_android_tv_2"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"}),
  },

  ["plex_plex_web_firefox_osx"]: {
    entity_id: "sensor.plex_plex_web_firefox_osx",
    get state() { return shadowState["media_player.plex_plex_web_firefox_osx"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_plex_web_firefox_osx"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_plex_web_firefox_osx"}),
  },

  ["plex_clement_plex_web_firefox_windows"]: {
    entity_id: "sensor.plex_clement_plex_web_firefox_windows",
    get state() { return shadowState["media_player.plex_clement_plex_web_firefox_windows"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"}),
  },

  ["plex_plex_for_ios_ipad_de_gaby"]: {
    entity_id: "sensor.plex_plex_for_ios_ipad_de_gaby",
    get state() { return shadowState["media_player.plex_plex_for_ios_ipad_de_gaby"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"}),
  },

  ["plex_plex_for_android_mobile_galaxy_s22"]: {
    entity_id: "sensor.plex_plex_for_android_mobile_galaxy_s22",
    get state() { return shadowState["media_player.plex_plex_for_android_mobile_galaxy_s22"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"}),
  },

  ["plex_kapy_plex_for_android_mobile_galaxy_s20"]: {
    entity_id: "sensor.plex_kapy_plex_for_android_mobile_galaxy_s20",
    get state() { return shadowState["media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"}),
  },

  ["plex_frederic_plex_for_android_mobile_galaxy_s20"]: {
    entity_id: "sensor.plex_frederic_plex_for_android_mobile_galaxy_s20",
    get state() { return shadowState["media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"]},
    turnOn: (serviceData = {}) => callService("media_player", 'turn_on', undefined, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"}),
    turnOff: (serviceData = {}) => callService("media_player", 'turn_off', undefined, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"}),
  },
}
  