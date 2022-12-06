import {callService, shadowState, Cover, CoverProperties} from "@herja/core"
export type CoverIDs = "garage_electric_door"
export type CoverEntities = Record<CoverIDs, Cover>

export const cover: Cover<CoverIDs> = {

['garage_electric_door']: {
  entity_id: "cover.garage_electric_door",
get entity() { return {state: shadowState["cover.garage_electric_door"].state, attributes: shadowState["cover.garage_electric_door"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_electric_door"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_electric_door"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_electric_door"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_electric_door"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_electric_door"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_electric_door"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_electric_door"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_electric_door"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_electric_door"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_electric_door"})}
},

}
