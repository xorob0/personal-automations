import { callService, effect } from "@herja/core";
import {  person } from "generated/src";

export const automaticAlarm = () => {
  effect(() => {
    if (
      person.gaby.isHome() || person.tim.isHome()
    ) {
      callService("alarm_control_panel", 'alarm_disarm', {code: '9372'}, {entity_id: 'alarm_control_panel.alarmo'})
    } else {
      callService("alarm_control_panel", 'alarm_arm_away', {code: '9372'}, {entity_id: 'alarm_control_panel.alarmo'})
    }
  }, [person.tim, person.gaby]);
};
