import {callService, shadowState, Lock, LockProperties} from "@herja/core"
export type LockIDs = "wallbox_portal_locked_unlocked" | "bedside_lamp_child_lock" | "bedroom_secondary_lamp_child_lock" | "christmas_tree_led_outlet_child_lock" | "washing_machine_plug_child_lock" | "desk_outlet_child_lock" | "bedroom_humidifier_switch_child_lock"
export type LockEntities = Record<LockIDs, Lock>

export const lock: Lock<LockIDs> = {

['wallbox_portal_locked_unlocked']: {
  entity_id: "lock.wallbox_portal_locked_unlocked",
get entity() { return {state: shadowState["lock.wallbox_portal_locked_unlocked"].state, attributes: shadowState["lock.wallbox_portal_locked_unlocked"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "wallbox_portal_locked_unlocked"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "wallbox_portal_locked_unlocked"})},
open() { return callService("lock", "open", {}, {entity_id: "wallbox_portal_locked_unlocked"})}
},

['bedside_lamp_child_lock']: {
  entity_id: "lock.bedside_lamp_child_lock",
get entity() { return {state: shadowState["lock.bedside_lamp_child_lock"].state, attributes: shadowState["lock.bedside_lamp_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "bedside_lamp_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "bedside_lamp_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "bedside_lamp_child_lock"})}
},

['bedroom_secondary_lamp_child_lock']: {
  entity_id: "lock.bedroom_secondary_lamp_child_lock",
get entity() { return {state: shadowState["lock.bedroom_secondary_lamp_child_lock"].state, attributes: shadowState["lock.bedroom_secondary_lamp_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "bedroom_secondary_lamp_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "bedroom_secondary_lamp_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "bedroom_secondary_lamp_child_lock"})}
},

['christmas_tree_led_outlet_child_lock']: {
  entity_id: "lock.christmas_tree_led_outlet_child_lock",
get entity() { return {state: shadowState["lock.christmas_tree_led_outlet_child_lock"].state, attributes: shadowState["lock.christmas_tree_led_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "christmas_tree_led_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "christmas_tree_led_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "christmas_tree_led_outlet_child_lock"})}
},

['washing_machine_plug_child_lock']: {
  entity_id: "lock.washing_machine_plug_child_lock",
get entity() { return {state: shadowState["lock.washing_machine_plug_child_lock"].state, attributes: shadowState["lock.washing_machine_plug_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "washing_machine_plug_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "washing_machine_plug_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "washing_machine_plug_child_lock"})}
},

['desk_outlet_child_lock']: {
  entity_id: "lock.desk_outlet_child_lock",
get entity() { return {state: shadowState["lock.desk_outlet_child_lock"].state, attributes: shadowState["lock.desk_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "desk_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "desk_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "desk_outlet_child_lock"})}
},

['bedroom_humidifier_switch_child_lock']: {
  entity_id: "lock.bedroom_humidifier_switch_child_lock",
get entity() { return {state: shadowState["lock.bedroom_humidifier_switch_child_lock"].state, attributes: shadowState["lock.bedroom_humidifier_switch_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "bedroom_humidifier_switch_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "bedroom_humidifier_switch_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "bedroom_humidifier_switch_child_lock"})}
},

}