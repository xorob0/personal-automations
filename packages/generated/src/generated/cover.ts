import {callService, shadowState, Cover, CoverProperties} from "@herja/core"
export type CoverIDs = "garage_cover" | "garage_mqtt" | "garage_3_mqtt" | "garage_4_mqtt" | "garage_mqtt5" | "garage_mqtt6"
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

['garage_mqtt']: {
  entity_id: "cover.garage_mqtt",
get entity() { return {state: shadowState["cover.garage_mqtt"].state, attributes: shadowState["cover.garage_mqtt"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_mqtt"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_mqtt"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_mqtt"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_mqtt"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_mqtt"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_mqtt"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_mqtt"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_mqtt"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_mqtt"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_mqtt"})}
},

['garage_3_mqtt']: {
  entity_id: "cover.garage_3_mqtt",
get entity() { return {state: shadowState["cover.garage_3_mqtt"].state, attributes: shadowState["cover.garage_3_mqtt"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_3_mqtt"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_3_mqtt"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_3_mqtt"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_3_mqtt"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_3_mqtt"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_3_mqtt"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_3_mqtt"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_3_mqtt"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_3_mqtt"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_3_mqtt"})}
},

['garage_4_mqtt']: {
  entity_id: "cover.garage_4_mqtt",
get entity() { return {state: shadowState["cover.garage_4_mqtt"].state, attributes: shadowState["cover.garage_4_mqtt"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_4_mqtt"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_4_mqtt"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_4_mqtt"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_4_mqtt"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_4_mqtt"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_4_mqtt"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_4_mqtt"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_4_mqtt"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_4_mqtt"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_4_mqtt"})}
},

['garage_mqtt5']: {
  entity_id: "cover.garage_mqtt5",
get entity() { return {state: shadowState["cover.garage_mqtt5"].state, attributes: shadowState["cover.garage_mqtt5"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_mqtt5"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_mqtt5"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_mqtt5"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_mqtt5"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_mqtt5"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_mqtt5"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_mqtt5"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_mqtt5"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_mqtt5"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_mqtt5"})}
},

['garage_mqtt6']: {
  entity_id: "cover.garage_mqtt6",
get entity() { return {state: shadowState["cover.garage_mqtt6"].state, attributes: shadowState["cover.garage_mqtt6"].attributes} as CoverProperties},
isClosed() { return shadowState["cover.garage_mqtt6"].state === "closed" },
open() { return callService("cover", "open_cover", {}, {entity_id: "cover.garage_mqtt6"})},
close() { return callService("cover", "close_cover", {}, {entity_id: "cover.garage_mqtt6"})},
openTilt() { return callService("cover", "open_cover_tilt", {}, {entity_id: "cover.garage_mqtt6"})},
closeTilt() { return callService("cover", "close_cover_tilt", {}, {entity_id: "cover.garage_mqtt6"})},
stop() { return callService("cover", "stop_cover", {}, {entity_id: "cover.garage_mqtt6"})},
stopTilt() { return callService("cover", "stop_cover_tilt", {}, {entity_id: "cover.garage_mqtt6"})},
toggle() { return callService("cover", "toggle", {}, {entity_id: "cover.garage_mqtt6"})},
setPosition(position: number) { return callService("cover", "set_cover_position", {position}, {entity_id: "cover.garage_mqtt6"})},
setTiltPosition(tilt_position: number) { return callService("cover", "set_cover_tilt_position", {tilt_position}, {entity_id: "cover.garage_mqtt6"})}
},

}
