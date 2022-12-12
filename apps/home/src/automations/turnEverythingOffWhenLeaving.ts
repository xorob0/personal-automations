import { AlarmControlPanelState, callService, effect, shadowState } from "@herja/core";
import { alarm_control_panel, person } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;

const log = (msg: string) => console.log(`[turnEverythingOffWhenLeaving]: ${msg}`)

export const turnEverythingOffWhenLeaving = () => {
  effect(() => {
    log(person.tim.entity.state + ' ' + person.gaby.entity.state)
    if(alarm_control_panel.alarmo.entity.state === AlarmControlPanelState.ARMED_NIGHT ){
      return
    }
    if (
      person.gaby.isHome() || person.tim.isHome()
    ) {
      log('clearTimeout ' + person.tim.entity.state + ' ' + person.gaby.entity.state)
      clearTimeout(timeoutID as number|undefined);
      callService('vacuum', 'return_to_base', undefined, {entity_id: 'vacuum.valetudo'})
    } else {
      log('setTimeout ' + person.tim.entity.state + ' ' + person.gaby.entity.state)
      timeoutID = setTimeout(() => {
        // TODO extract turn on/off all lights
        const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./)).filter(key=> !key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
        const allSwitches = Object.keys(shadowState).filter(key=> key.match(/^switch\..*outlet$/))
        callService('light', 'turn_off', undefined, {entity_id: allLights})
        callService('switch', 'turn_off', undefined, {entity_id: allSwitches})

        callService('vacuum', 'start', undefined, {entity_id: 'vacuum.valetudo'})
      }, 2 * 60 * 1000);
    }
  }, [person.tim, person.gaby]);
};
