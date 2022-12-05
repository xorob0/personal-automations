import {callService, shadowState, Button, ButtonProperties} from "@herja/core"
export type ButtonIDs = "wvgzzze2zmp011645_start_climate" | "wvgzzze2zmp011645_toggle_ac_charge_speed" | "scan_clients_celty_3_0"
export type ButtonEntities = Record<ButtonIDs, Button>

export const button: Button<ButtonIDs> = {

['wvgzzze2zmp011645_start_climate']: {
  entity_id: "button.wvgzzze2zmp011645_start_climate",
get entity() { return {state: shadowState["button.wvgzzze2zmp011645_start_climate"].state, attributes: shadowState["button.wvgzzze2zmp011645_start_climate"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.wvgzzze2zmp011645_start_climate"})}
},

['wvgzzze2zmp011645_toggle_ac_charge_speed']: {
  entity_id: "button.wvgzzze2zmp011645_toggle_ac_charge_speed",
get entity() { return {state: shadowState["button.wvgzzze2zmp011645_toggle_ac_charge_speed"].state, attributes: shadowState["button.wvgzzze2zmp011645_toggle_ac_charge_speed"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.wvgzzze2zmp011645_toggle_ac_charge_speed"})}
},

['scan_clients_celty_3_0']: {
  entity_id: "button.scan_clients_celty_3_0",
get entity() { return {state: shadowState["button.scan_clients_celty_3_0"].state, attributes: shadowState["button.scan_clients_celty_3_0"].attributes} as ButtonProperties},
press() { return callService("button", "press", {}, {entity_id: "button.scan_clients_celty_3_0"})}
},

}
