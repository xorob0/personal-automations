import {callService, shadowState, Cover, CoverProperties} from "@herja/core"
export type CoverIDs = "garage_electric_door"
export type CoverEntities = Record<CoverIDs, Cover>

export const cover: Cover<CoverIDs> = {

['garage_electric_door']: {
  entity_id: "cover.garage_electric_door",
get entity() { return {state: shadowState["cover.garage_electric_door"].state, attributes: shadowState["cover.garage_electric_door"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_electric_door"].state === "closed" },
open() { return callService("cover", "open", {}, {entity_id: "garage_electric_door"})},
close() { return callService("cover", "close", {}, {entity_id: "garage_electric_door"})},
openTilt() { return callService("cover", "open_tilt", {}, {entity_id: "garage_electric_door"})},
closeTilt() { return callService("cover", "close_tilt", {}, {entity_id: "garage_electric_door"})},
stop() { return callService("cover", "stop", {}, {entity_id: "garage_electric_door"})},
stopTilt() { return callService("cover", "stop_tilt", {}, {entity_id: "garage_electric_door"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "garage_electric_door"})},
setPosition(position: number) { return callService("cover", "toggle", {position}, {entity_id: "garage_electric_door"})},
setTiltPosition(tilt_position: number) { return callService("cover", "toggle", {tilt_position}, {entity_id: "garage_electric_door"})}
},

}