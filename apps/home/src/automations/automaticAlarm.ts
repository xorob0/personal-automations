import { effect } from "@herja/core";
import {  person, alarm_control_panel } from "generated/src";

export const automaticAlarm = () => {
  effect(() => {
    if (
      person.gaby.isHome() || person.tim.isHome()
    ) {
      alarm_control_panel.alarmo.disarm()
    } else {
      alarm_control_panel.alarmo.armAway()
    }
  }, [person.tim, person.gaby]);
};
