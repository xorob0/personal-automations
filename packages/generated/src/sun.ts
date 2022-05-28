import { shadowState, Sun} from "@herja/core"
        export type SunIDs = "sun"
export const sun: Sun<SunIDs> = {
  
  ["sun"]: {
    entity_id: "sun.sun",
    isBelowHorizon: () => shadowState["sun.sun"].state === "below_horizon",
    isAboveHorizon: () => shadowState["sun.sun"].state === "above_horizon",
    get state() { return shadowState["sun.sun"]},
  },
}
  