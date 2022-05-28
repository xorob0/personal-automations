import { callService, effect, shadowState } from "@herja/core";
import { person } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const turnEverythingOffWhenLeaving = () => {
  effect(() => {
    if (
      person.gaby.isHome() || person.tim.isHome()
    ) {
      clearTimeout(timeoutID as number|undefined);
      callService('vacuum', 'return_to_base', undefined, {entity_id: 'vacuum.valetudo'})
    } else {
      timeoutID = setTimeout(() => {
        const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./)).filter(key=> !key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
        const allSwitches = Object.keys(shadowState).filter(key=> key.match(/^switch\./))
        callService('light', 'turn_off', undefined, {entity_id: allLights})
        callService('switch', 'turn_off', undefined, {entity_id: allSwitches})

        callService('vacuum', 'start', undefined, {entity_id: 'vacuum.valetudo'})
      }, 2 * 60 * 1000);
    }
  }, [person.tim, person.gaby]);
};
