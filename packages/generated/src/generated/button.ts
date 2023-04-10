import {callService, shadowState, Button, ButtonProperties} from "@herja/core"
export type ButtonIDs = "charger_reset" | "charger_unlock" | "scan_clients_celty_3_0" | "octoprint_resume_job" | "octoprint_pause_job" | "octoprint_stop_job" | "tim_s_id_4_start_climate" | "tim_s_id_4_stop_climate" | "tim_s_id_4_toggle_ac_charge_speed" | "tim_s_id_4_start_charging" | "tim_s_id_4_stop_charging"
export type ButtonEntities = Record<ButtonIDs, Button>

export const button: Button<ButtonIDs> = {

['charger_reset']: {
  entity_id: "button.charger_reset",
get entity() { return {state: shadowState["button.charger_reset"].state, attributes: shadowState["button.charger_reset"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.charger_reset"})}
},

['charger_unlock']: {
  entity_id: "button.charger_unlock",
get entity() { return {state: shadowState["button.charger_unlock"].state, attributes: shadowState["button.charger_unlock"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.charger_unlock"})}
},

['scan_clients_celty_3_0']: {
  entity_id: "button.scan_clients_celty_3_0",
get entity() { return {state: shadowState["button.scan_clients_celty_3_0"].state, attributes: shadowState["button.scan_clients_celty_3_0"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.scan_clients_celty_3_0"})}
},

['octoprint_resume_job']: {
  entity_id: "button.octoprint_resume_job",
get entity() { return {state: shadowState["button.octoprint_resume_job"].state, attributes: shadowState["button.octoprint_resume_job"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.octoprint_resume_job"})}
},

['octoprint_pause_job']: {
  entity_id: "button.octoprint_pause_job",
get entity() { return {state: shadowState["button.octoprint_pause_job"].state, attributes: shadowState["button.octoprint_pause_job"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.octoprint_pause_job"})}
},

['octoprint_stop_job']: {
  entity_id: "button.octoprint_stop_job",
get entity() { return {state: shadowState["button.octoprint_stop_job"].state, attributes: shadowState["button.octoprint_stop_job"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.octoprint_stop_job"})}
},

['tim_s_id_4_start_climate']: {
  entity_id: "button.tim_s_id_4_start_climate",
get entity() { return {state: shadowState["button.tim_s_id_4_start_climate"].state, attributes: shadowState["button.tim_s_id_4_start_climate"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.tim_s_id_4_start_climate"})}
},

['tim_s_id_4_stop_climate']: {
  entity_id: "button.tim_s_id_4_stop_climate",
get entity() { return {state: shadowState["button.tim_s_id_4_stop_climate"].state, attributes: shadowState["button.tim_s_id_4_stop_climate"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.tim_s_id_4_stop_climate"})}
},

['tim_s_id_4_toggle_ac_charge_speed']: {
  entity_id: "button.tim_s_id_4_toggle_ac_charge_speed",
get entity() { return {state: shadowState["button.tim_s_id_4_toggle_ac_charge_speed"].state, attributes: shadowState["button.tim_s_id_4_toggle_ac_charge_speed"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.tim_s_id_4_toggle_ac_charge_speed"})}
},

['tim_s_id_4_start_charging']: {
  entity_id: "button.tim_s_id_4_start_charging",
get entity() { return {state: shadowState["button.tim_s_id_4_start_charging"].state, attributes: shadowState["button.tim_s_id_4_start_charging"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.tim_s_id_4_start_charging"})}
},

['tim_s_id_4_stop_charging']: {
  entity_id: "button.tim_s_id_4_stop_charging",
get entity() { return {state: shadowState["button.tim_s_id_4_stop_charging"].state, attributes: shadowState["button.tim_s_id_4_stop_charging"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.tim_s_id_4_stop_charging"})}
},

}
