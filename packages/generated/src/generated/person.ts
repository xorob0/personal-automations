import {shadowState, Person, PersonProperties} from "@herja/core"
export type PersonIDs = "tim" | "gaby"
export type PersonEntities = Record<PersonIDs, Person>

export const person: Person<PersonIDs> = {

['tim']: {
  entity_id: "person.tim",
get entity() { return {state: shadowState["person.tim"].state, attributes: shadowState["person.tim"].attributes} as PersonProperties},
isHome() { return shadowState["person.tim"].state === "home"}
},

['gaby']: {
  entity_id: "person.gaby",
get entity() { return {state: shadowState["person.gaby"].state, attributes: shadowState["person.gaby"].attributes} as PersonProperties},
isHome() { return shadowState["person.gaby"].state === "home"}
},

}
