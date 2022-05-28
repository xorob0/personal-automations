import {callService, shadowState, Cover} from "@herja/core"
        export type CoverIDs = "garage_electric_door"
export const cover: Cover<CoverIDs> = {
  
  ["garage_electric_door"]: {
    entity_id: "cover.garage_electric_door",
    isClosed: () => shadowState["cover.garage_electric_door"].state === "closed",
    close: () => callService("cover", 'close_cover', undefined, {entity_id: "cover.garage_electric_door"}),
    open: () => callService("cover", 'open_cover', undefined, {entity_id: "cover.garage_electric_door"}),
    stop: () => callService("cover", 'stop_cover', undefined, {entity_id: "cover.garage_electric_door"}),
    toggle: () => callService("cover", 'toggle_cover', undefined, {entity_id: "cover.garage_electric_door"}),
    setPosition: (serviceData) => callService("cover", 'set_cover_position', serviceData, {entity_id: "cover.garage_electric_door"}),
    get state() { return shadowState["cover.garage_electric_door"]},
  },
}
  