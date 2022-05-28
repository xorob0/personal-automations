import { callService, effect, shadowState } from "@herja/core";
import { person } from "generated/src/person";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const turnEverythingOffWhenLeaving = () => {
  effect(() => {
    if (
      person.gaby.isHome() || person.tim.isHome()
    ) {
      clearTimeout(timeoutID as number|undefined);
    } else {
      timeoutID = setTimeout(() => {
        const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./))
        callService('light', 'turn_off', undefined, {entity_id: allLights})
      }, 2 * 60 * 1000);
    }
  }, [person.tim, person.gaby]);
};
