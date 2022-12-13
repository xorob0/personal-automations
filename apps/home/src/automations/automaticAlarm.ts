import { AlarmControlPanelState, effect } from "@herja/core";
import { alarm_control_panel, person } from "generated/src";

export const automaticAlarm = () => {
  effect(() => {
    if(alarm_control_panel.alarmo.entity.state === AlarmControlPanelState.ARMED_NIGHT)
      return

    const isSomeoneHome = person.gaby.isHome() || person.tim.isHome()
    if (isSomeoneHome) {
      console.log('disarm')
      alarm_control_panel.alarmo.disarm()
    } else {
      console.log('arm away')
      alarm_control_panel.alarmo.armAway()
    }
  }, [person.tim, person.gaby]);
};
