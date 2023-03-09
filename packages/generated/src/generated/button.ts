import {callService, shadowState, Button, ButtonProperties} from "@herja/core"
export type ButtonIDs = "scan_clients_celty_3_0" | "charger_reset" | "charger_unlock"
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

}
