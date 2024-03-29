import {callService, shadowState, Lock, LockProperties} from "@herja/core"
export type LockIDs = "christmas_tree_led_outlet_child_lock" | "bedroom_secondary_lamp_child_lock" | "bedside_lamp_child_lock" | "bedroom_humidifier_switch_child_lock" | "living_room_humidifier_switch_child_lock" | "coffee_machine_outlet_child_lock" | "dishwasher_outlet_child_lock" | "washing_machine_outlet_child_lock" | "3dprinter_child_lock" | "desk_outlet_child_lock"
export type LockEntities = Record<LockIDs, Lock>

export const lock: Lock<LockIDs> = {

['christmas_tree_led_outlet_child_lock']: {
  entity_id: "lock.christmas_tree_led_outlet_child_lock",
get entity() { return {state: shadowState["lock.christmas_tree_led_outlet_child_lock"].state, attributes: shadowState["lock.christmas_tree_led_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.christmas_tree_led_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.christmas_tree_led_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.christmas_tree_led_outlet_child_lock"})}
},

['bedroom_secondary_lamp_child_lock']: {
  entity_id: "lock.bedroom_secondary_lamp_child_lock",
get entity() { return {state: shadowState["lock.bedroom_secondary_lamp_child_lock"].state, attributes: shadowState["lock.bedroom_secondary_lamp_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.bedroom_secondary_lamp_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.bedroom_secondary_lamp_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.bedroom_secondary_lamp_child_lock"})}
},

['bedside_lamp_child_lock']: {
  entity_id: "lock.bedside_lamp_child_lock",
get entity() { return {state: shadowState["lock.bedside_lamp_child_lock"].state, attributes: shadowState["lock.bedside_lamp_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.bedside_lamp_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.bedside_lamp_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.bedside_lamp_child_lock"})}
},

['bedroom_humidifier_switch_child_lock']: {
  entity_id: "lock.bedroom_humidifier_switch_child_lock",
get entity() { return {state: shadowState["lock.bedroom_humidifier_switch_child_lock"].state, attributes: shadowState["lock.bedroom_humidifier_switch_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.bedroom_humidifier_switch_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.bedroom_humidifier_switch_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.bedroom_humidifier_switch_child_lock"})}
},

['living_room_humidifier_switch_child_lock']: {
  entity_id: "lock.living_room_humidifier_switch_child_lock",
get entity() { return {state: shadowState["lock.living_room_humidifier_switch_child_lock"].state, attributes: shadowState["lock.living_room_humidifier_switch_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.living_room_humidifier_switch_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.living_room_humidifier_switch_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.living_room_humidifier_switch_child_lock"})}
},

['coffee_machine_outlet_child_lock']: {
  entity_id: "lock.coffee_machine_outlet_child_lock",
get entity() { return {state: shadowState["lock.coffee_machine_outlet_child_lock"].state, attributes: shadowState["lock.coffee_machine_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.coffee_machine_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.coffee_machine_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.coffee_machine_outlet_child_lock"})}
},

['dishwasher_outlet_child_lock']: {
  entity_id: "lock.dishwasher_outlet_child_lock",
get entity() { return {state: shadowState["lock.dishwasher_outlet_child_lock"].state, attributes: shadowState["lock.dishwasher_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.dishwasher_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.dishwasher_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.dishwasher_outlet_child_lock"})}
},

['washing_machine_outlet_child_lock']: {
  entity_id: "lock.washing_machine_outlet_child_lock",
get entity() { return {state: shadowState["lock.washing_machine_outlet_child_lock"].state, attributes: shadowState["lock.washing_machine_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.washing_machine_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.washing_machine_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.washing_machine_outlet_child_lock"})}
},

['3dprinter_child_lock']: {
  entity_id: "lock.3dprinter_child_lock",
get entity() { return {state: shadowState["lock.3dprinter_child_lock"].state, attributes: shadowState["lock.3dprinter_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.3dprinter_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.3dprinter_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.3dprinter_child_lock"})}
},

['desk_outlet_child_lock']: {
  entity_id: "lock.desk_outlet_child_lock",
get entity() { return {state: shadowState["lock.desk_outlet_child_lock"].state, attributes: shadowState["lock.desk_outlet_child_lock"].attributes} as LockProperties},
lock() { return callService("lock", "lock", {}, {entity_id: "lock.desk_outlet_child_lock"})},
unlock() { return callService("lock", "unlock", {}, {entity_id: "lock.desk_outlet_child_lock"})},
open() { return callService("lock", "open", {}, {entity_id: "lock.desk_outlet_child_lock"})}
},

}
