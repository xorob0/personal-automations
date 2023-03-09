import {callService, shadowState, Calendar, CalendarProperties} from "@herja/core"
export type CalendarIDs = "inbox" | "srl" | "to_buy" | "chores" | "selfhosted" | "home_assistant" | "o25" | "zorgi" | "gaby_gifts" | "herja" | "activities_exporter"
export type CalendarEntities = Record<CalendarIDs, Calendar>

export const calendar: Calendar<CalendarIDs> = {

['inbox']: {
  entity_id: "calendar.inbox",
get entity() { return {state: shadowState["calendar.inbox"].state, attributes: shadowState["calendar.inbox"].attributes} as CalendarProperties}
},

['srl']: {
  entity_id: "calendar.srl",
get entity() { return {state: shadowState["calendar.srl"].state, attributes: shadowState["calendar.srl"].attributes} as CalendarProperties}
},

['to_buy']: {
  entity_id: "calendar.to_buy",
get entity() { return {state: shadowState["calendar.to_buy"].state, attributes: shadowState["calendar.to_buy"].attributes} as CalendarProperties}
},

['chores']: {
  entity_id: "calendar.chores",
get entity() { return {state: shadowState["calendar.chores"].state, attributes: shadowState["calendar.chores"].attributes} as CalendarProperties}
},

['selfhosted']: {
  entity_id: "calendar.selfhosted",
get entity() { return {state: shadowState["calendar.selfhosted"].state, attributes: shadowState["calendar.selfhosted"].attributes} as CalendarProperties}
},

['home_assistant']: {
  entity_id: "calendar.home_assistant",
get entity() { return {state: shadowState["calendar.home_assistant"].state, attributes: shadowState["calendar.home_assistant"].attributes} as CalendarProperties}
},

['o25']: {
  entity_id: "calendar.o25",
get entity() { return {state: shadowState["calendar.o25"].state, attributes: shadowState["calendar.o25"].attributes} as CalendarProperties}
},

['zorgi']: {
  entity_id: "calendar.zorgi",
get entity() { return {state: shadowState["calendar.zorgi"].state, attributes: shadowState["calendar.zorgi"].attributes} as CalendarProperties}
},

['gaby_gifts']: {
  entity_id: "calendar.gaby_gifts",
get entity() { return {state: shadowState["calendar.gaby_gifts"].state, attributes: shadowState["calendar.gaby_gifts"].attributes} as CalendarProperties}
},

['herja']: {
  entity_id: "calendar.herja",
get entity() { return {state: shadowState["calendar.herja"].state, attributes: shadowState["calendar.herja"].attributes} as CalendarProperties}
},

['activities_exporter']: {
  entity_id: "calendar.activities_exporter",
get entity() { return {state: shadowState["calendar.activities_exporter"].state, attributes: shadowState["calendar.activities_exporter"].attributes} as CalendarProperties}
},

}
