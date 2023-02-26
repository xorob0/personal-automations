import {callService, shadowState, AlarmControlPanel, AlarmControlPanelProperties, ArmingOptions} from "@herja/core"
export type AlarmControlPanelIDs = "alarmo"
export type AlarmControlPanelEntities = Record<AlarmControlPanelIDs, AlarmControlPanel>

export const alarm_control_panel: AlarmControlPanel<AlarmControlPanelIDs> = {

['alarmo']: {
  entity_id: "alarm_control_panel.alarmo",
get entity() { return {state: shadowState["alarm_control_panel.alarmo"].state, attributes: shadowState["alarm_control_panel.alarmo"].attributes} as AlarmControlPanelProperties},
isArmed() { return !!shadowState["alarm_control_panel.alarmo"].state.toString().match(/armed/)},
isDisarmed() { return shadowState["alarm_control_panel.alarmo"].state.toString() === "disarmed"},
armAway(options?: ArmingOptions, serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_arm_away", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
armHome(options?: ArmingOptions, serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_arm_home", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
armNight(options?: ArmingOptions, serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_arm_night", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
armVacation(options?: ArmingOptions, serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_arm_vacation", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
armCustomBypass(options?: ArmingOptions, serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_custom_bypass", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
trigger(serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_trigger", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})},
disarm(serviceData?: Record<string, any>) { return callService("alarm_control_panel", "alarm_disarm", {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"})}
},

}
