import {callService, shadowState, MediaPlayer, MediaPlayerProperties, Media} from "@herja/core"
export type MediaPlayerIDs = "living_room" | "android_tv_192_168_1_53" | "g4_doorbell_speaker" | "ebbff7dd_e82b404f" | "aadf3129_ecd1ece2" | "snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c" | "snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a" | "snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5" | "snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e" | "snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76" | "snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53" | "plex_plex_for_android_tv_shield_android_tv" | "plex_frederic_plex_for_android_tv_oy_tab_kids" | "plex_plex_for_android_tv_shield_android_tv_2" | "plex_plex_web_firefox_osx" | "plex_clement_plex_web_firefox_windows" | "plex_plex_for_ios_ipad_de_gaby" | "plex_plex_for_android_mobile_galaxy_s22" | "plex_kapy_plex_for_android_mobile_galaxy_s20" | "plex_frederic_plex_for_android_mobile_galaxy_s20" | "plex_frederic_plex_for_android_mobile_sm_s901b" | "plex_plex_for_android_tv_bq_5059_strike_power" | "plex_bury_v_plex_for_apple_tv_apple_tv" | "plex_isa_plex_for_android_tv_aftss" | "plex_isa_plex_for_android_tv_aftss_2" | "plex_l_legacy_l_plex_web_chrome_windows" | "plex_l_legacy_l_plex_for_android_tv_shield_android_tv" | "plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8" | "plex_hafxx_plex_for_android_tv_shield_android_tv" | "plex_plex_for_apple_tv_apple_tv" | "plex_frederic_plex_for_xbox_xboxone" | "plex_plex_for_ios_iphone"
export type MediaPlayerEntities = Record<MediaPlayerIDs, MediaPlayer>

export const media_player: MediaPlayer<MediaPlayerIDs> = {

['living_room']: {
  entity_id: "media_player.living_room",
get entity() { return {state: shadowState["media_player.living_room"].state, attributes: shadowState["media_player.living_room"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.living_room"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.living_room"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.living_room"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.living_room"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.living_room"})}
},

['android_tv_192_168_1_53']: {
  entity_id: "media_player.android_tv_192_168_1_53",
get entity() { return {state: shadowState["media_player.android_tv_192_168_1_53"].state, attributes: shadowState["media_player.android_tv_192_168_1_53"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.android_tv_192_168_1_53"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.android_tv_192_168_1_53"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.android_tv_192_168_1_53"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.android_tv_192_168_1_53"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.android_tv_192_168_1_53"})}
},

['g4_doorbell_speaker']: {
  entity_id: "media_player.g4_doorbell_speaker",
get entity() { return {state: shadowState["media_player.g4_doorbell_speaker"].state, attributes: shadowState["media_player.g4_doorbell_speaker"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.g4_doorbell_speaker"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.g4_doorbell_speaker"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.g4_doorbell_speaker"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.g4_doorbell_speaker"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.g4_doorbell_speaker"})}
},

['ebbff7dd_e82b404f']: {
  entity_id: "media_player.ebbff7dd_e82b404f",
get entity() { return {state: shadowState["media_player.ebbff7dd_e82b404f"].state, attributes: shadowState["media_player.ebbff7dd_e82b404f"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.ebbff7dd_e82b404f"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.ebbff7dd_e82b404f"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.ebbff7dd_e82b404f"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.ebbff7dd_e82b404f"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.ebbff7dd_e82b404f"})}
},

['aadf3129_ecd1ece2']: {
  entity_id: "media_player.aadf3129_ecd1ece2",
get entity() { return {state: shadowState["media_player.aadf3129_ecd1ece2"].state, attributes: shadowState["media_player.aadf3129_ecd1ece2"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.aadf3129_ecd1ece2"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.aadf3129_ecd1ece2"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.aadf3129_ecd1ece2"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.aadf3129_ecd1ece2"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.aadf3129_ecd1ece2"})}
},

['snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c']: {
  entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c",
get entity() { return {state: shadowState["media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"].state, attributes: shadowState["media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_group_e290b1ac_54c9_4c56_affb_d643ee8e385c"})}
},

['snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a']: {
  entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a",
get entity() { return {state: shadowState["media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"].state, attributes: shadowState["media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_group_d388b62b_954a_3c20_e0f4_97a9c3d7eb6a"})}
},

['snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5']: {
  entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5",
get entity() { return {state: shadowState["media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"].state, attributes: shadowState["media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_group_8b5371a4_7868_33e4_c642_938d495880a5"})}
},

['snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e']: {
  entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e",
get entity() { return {state: shadowState["media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"].state, attributes: shadowState["media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_client_fa646a44_3603_4033_a68f_fe6194b5713e"})}
},

['snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76']: {
  entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76",
get entity() { return {state: shadowState["media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"].state, attributes: shadowState["media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_client_3739bb6c_54ae_4d5c_8896_5915004c3b76"})}
},

['snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53']: {
  entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53",
get entity() { return {state: shadowState["media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"].state, attributes: shadowState["media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.snapcast_client_92db579b_66f1_4e96_84fb_832f867a8a53"})}
},

['plex_plex_for_android_tv_shield_android_tv']: {
  entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv",
get entity() { return {state: shadowState["media_player.plex_plex_for_android_tv_shield_android_tv"].state, attributes: shadowState["media_player.plex_plex_for_android_tv_shield_android_tv"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv"})}
},

['plex_frederic_plex_for_android_tv_oy_tab_kids']: {
  entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids",
get entity() { return {state: shadowState["media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"].state, attributes: shadowState["media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_frederic_plex_for_android_tv_oy_tab_kids"})}
},

['plex_plex_for_android_tv_shield_android_tv_2']: {
  entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2",
get entity() { return {state: shadowState["media_player.plex_plex_for_android_tv_shield_android_tv_2"].state, attributes: shadowState["media_player.plex_plex_for_android_tv_shield_android_tv_2"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_android_tv_shield_android_tv_2"})}
},

['plex_plex_web_firefox_osx']: {
  entity_id: "media_player.plex_plex_web_firefox_osx",
get entity() { return {state: shadowState["media_player.plex_plex_web_firefox_osx"].state, attributes: shadowState["media_player.plex_plex_web_firefox_osx"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_web_firefox_osx"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_web_firefox_osx"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_web_firefox_osx"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_web_firefox_osx"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_web_firefox_osx"})}
},

['plex_clement_plex_web_firefox_windows']: {
  entity_id: "media_player.plex_clement_plex_web_firefox_windows",
get entity() { return {state: shadowState["media_player.plex_clement_plex_web_firefox_windows"].state, attributes: shadowState["media_player.plex_clement_plex_web_firefox_windows"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_clement_plex_web_firefox_windows"})}
},

['plex_plex_for_ios_ipad_de_gaby']: {
  entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby",
get entity() { return {state: shadowState["media_player.plex_plex_for_ios_ipad_de_gaby"].state, attributes: shadowState["media_player.plex_plex_for_ios_ipad_de_gaby"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_ios_ipad_de_gaby"})}
},

['plex_plex_for_android_mobile_galaxy_s22']: {
  entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22",
get entity() { return {state: shadowState["media_player.plex_plex_for_android_mobile_galaxy_s22"].state, attributes: shadowState["media_player.plex_plex_for_android_mobile_galaxy_s22"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_android_mobile_galaxy_s22"})}
},

['plex_kapy_plex_for_android_mobile_galaxy_s20']: {
  entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20",
get entity() { return {state: shadowState["media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"].state, attributes: shadowState["media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_kapy_plex_for_android_mobile_galaxy_s20"})}
},

['plex_frederic_plex_for_android_mobile_galaxy_s20']: {
  entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20",
get entity() { return {state: shadowState["media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"].state, attributes: shadowState["media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_galaxy_s20"})}
},

['plex_frederic_plex_for_android_mobile_sm_s901b']: {
  entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b",
get entity() { return {state: shadowState["media_player.plex_frederic_plex_for_android_mobile_sm_s901b"].state, attributes: shadowState["media_player.plex_frederic_plex_for_android_mobile_sm_s901b"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_frederic_plex_for_android_mobile_sm_s901b"})}
},

['plex_plex_for_android_tv_bq_5059_strike_power']: {
  entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power",
get entity() { return {state: shadowState["media_player.plex_plex_for_android_tv_bq_5059_strike_power"].state, attributes: shadowState["media_player.plex_plex_for_android_tv_bq_5059_strike_power"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_android_tv_bq_5059_strike_power"})}
},

['plex_bury_v_plex_for_apple_tv_apple_tv']: {
  entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv",
get entity() { return {state: shadowState["media_player.plex_bury_v_plex_for_apple_tv_apple_tv"].state, attributes: shadowState["media_player.plex_bury_v_plex_for_apple_tv_apple_tv"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_bury_v_plex_for_apple_tv_apple_tv"})}
},

['plex_isa_plex_for_android_tv_aftss']: {
  entity_id: "media_player.plex_isa_plex_for_android_tv_aftss",
get entity() { return {state: shadowState["media_player.plex_isa_plex_for_android_tv_aftss"].state, attributes: shadowState["media_player.plex_isa_plex_for_android_tv_aftss"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss"})}
},

['plex_isa_plex_for_android_tv_aftss_2']: {
  entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2",
get entity() { return {state: shadowState["media_player.plex_isa_plex_for_android_tv_aftss_2"].state, attributes: shadowState["media_player.plex_isa_plex_for_android_tv_aftss_2"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_isa_plex_for_android_tv_aftss_2"})}
},

['plex_l_legacy_l_plex_web_chrome_windows']: {
  entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows",
get entity() { return {state: shadowState["media_player.plex_l_legacy_l_plex_web_chrome_windows"].state, attributes: shadowState["media_player.plex_l_legacy_l_plex_web_chrome_windows"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_l_legacy_l_plex_web_chrome_windows"})}
},

['plex_l_legacy_l_plex_for_android_tv_shield_android_tv']: {
  entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv",
get entity() { return {state: shadowState["media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"].state, attributes: shadowState["media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_tv_shield_android_tv"})}
},

['plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8']: {
  entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8",
get entity() { return {state: shadowState["media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"].state, attributes: shadowState["media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_l_legacy_l_plex_for_android_mobile_galaxy_tab_a8"})}
},

['plex_hafxx_plex_for_android_tv_shield_android_tv']: {
  entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv",
get entity() { return {state: shadowState["media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"].state, attributes: shadowState["media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_hafxx_plex_for_android_tv_shield_android_tv"})}
},

['plex_plex_for_apple_tv_apple_tv']: {
  entity_id: "media_player.plex_plex_for_apple_tv_apple_tv",
get entity() { return {state: shadowState["media_player.plex_plex_for_apple_tv_apple_tv"].state, attributes: shadowState["media_player.plex_plex_for_apple_tv_apple_tv"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_apple_tv_apple_tv"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_apple_tv_apple_tv"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_apple_tv_apple_tv"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_apple_tv_apple_tv"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_apple_tv_apple_tv"})}
},

['plex_frederic_plex_for_xbox_xboxone']: {
  entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone",
get entity() { return {state: shadowState["media_player.plex_frederic_plex_for_xbox_xboxone"].state, attributes: shadowState["media_player.plex_frederic_plex_for_xbox_xboxone"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_frederic_plex_for_xbox_xboxone"})}
},

['plex_plex_for_ios_iphone']: {
  entity_id: "media_player.plex_plex_for_ios_iphone",
get entity() { return {state: shadowState["media_player.plex_plex_for_ios_iphone"].state, attributes: shadowState["media_player.plex_plex_for_ios_iphone"].attributes} as MediaPlayerProperties},
turnOn() { return callService("media_player", "turn_on", {}, {entity_id: "media_player.plex_plex_for_ios_iphone"})},
turnOff() { return callService("media_player", "turn_off", {}, {entity_id: "media_player.plex_plex_for_ios_iphone"})},
playMedia(media:Media) { return callService("media_player", "play_media", media, {entity_id: "media_player.plex_plex_for_ios_iphone"})},
selectSource(source:string) { return callService("media_player", "select_sound", {source}, {entity_id: "media_player.plex_plex_for_ios_iphone"})},
selectSoundMode(sound_mode:string) { return callService("media_player", "select_sound_mode", {}, {entity_id: "media_player.plex_plex_for_ios_iphone"})}
},

}
