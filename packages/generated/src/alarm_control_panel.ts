import {callService, shadowState, AlarmControlPanel} from "@herja/core"
        export type AlarmControlPanelIDs = "alarmo"
export const alarm_control_panel: AlarmControlPanel<AlarmControlPanelIDs> = {
  
  ["alarmo"]: {
    entity_id: "alarm_control_panel.alarmo",
    isArmed: () => !!shadowState["alarm_control_panel.alarmo"].state.match(/^armed/),
    isDisarmed: () => shadowState["alarm_control_panel.alarmo"].state === 'disarmed',
    armAway: (serviceData = {}) => callService("alarm_control_panel", 'alarm_arm_away', {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"}),
    armHome: (serviceData = {}) => callService("alarm_control_panel", 'alarm_arm_home', {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"}),
    armNight: (serviceData = {}) => callService("alarm_control_panel", 'alarm_arm_night', {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"}),
    disarm: (serviceData = {}) => callService("alarm_control_panel", 'alarm_disarm', {code: process?.env?.ALARM_CODE, ...serviceData}, {entity_id: "alarm_control_panel.alarmo"}),
    get state() { return shadowState["alarm_control_panel.alarmo"]},
  },
}
  