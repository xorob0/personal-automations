import {callService, shadowState, Cover, CoverProperties} from "@herja/core"
export type CoverIDs = "garage_cover"
export type CoverEntities = Record<CoverIDs, Cover>

export const cover: Cover<CoverIDs> = {

['garage_cover']: {
  entity_id: "cover.garage_cover",
get entity() { return {state: shadowState["cover.garage_cover"].state, attributes: shadowState["cover.garage_cover"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_cover"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_cover"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_cover"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_cover"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_cover"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_cover"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_cover"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_cover"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_cover"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_cover"})}
},

}
