import { shadowState, Person} from "@herja/core"
        export type PersonIDs = "tim" | "gaby"
export const person: Person<PersonIDs> = {
  
  ["tim"]: {
    entity_id: "person.tim",
    isHome: () => shadowState["person.tim"].state === "home",
    get state() { return shadowState["person.tim"]},
  },

  ["gaby"]: {
    entity_id: "person.gaby",
    isHome: () => shadowState["person.gaby"].state === "home",
    get state() { return shadowState["person.gaby"]},
  },
}
  