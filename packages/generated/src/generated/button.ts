import {callService, shadowState, Button, ButtonProperties} from "@herja/core"
export type ButtonIDs = "scan_clients_celty_3_0" | "charger_reset" | "charger_unlock" | "octoprint_resume_job" | "octoprint_pause_job" | "octoprint_stop_job"
export type ButtonEntities = Record<ButtonIDs, Button>

export const button: Button<ButtonIDs> = {

['scan_clients_celty_3_0']: {
  entity_id: "button.scan_clients_celty_3_0",
get entity() { return {state: shadowState["button.scan_clients_celty_3_0"].state, attributes: shadowState["button.scan_clients_celty_3_0"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.scan_clients_celty_3_0"})}
},

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

}
