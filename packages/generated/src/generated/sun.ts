import {shadowState, Sun, SunProperties} from "@herja/core"
export type SunIDs = "sun"
export type SunEntities = Record<SunIDs, Sun>

export const sun: Sun<SunIDs> = {

['sun']: {
  entity_id: "sun.sun",
get entity() { return {state: shadowState["sun.sun"].state, attributes: shadowState["sun.sun"].attributes} as SunProperties},
isAboveHorizon() { return shadowState["sun.sun"].state === "above_horizon" },
isBelowHorizon() { return shadowState["sun.sun"].state === "below_horizon" }
},

}
