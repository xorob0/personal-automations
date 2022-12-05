import {callService, shadowState, Camera, CameraProperties} from "@herja/core"
export type CameraIDs = "living_room_panel" | "g4_doorbell_high" | "g4_bullet_high" | "robot_rendered_map" | "map_data"
export type CameraEntities = Record<CameraIDs, Camera>

export const camera: Camera<CameraIDs> = {

['living_room_panel']: {
  entity_id: "camera.living_room_panel",
get entity() { return {state: shadowState["camera.living_room_panel"].state, attributes: shadowState["camera.living_room_panel"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.living_room_panel"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.living_room_panel"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.living_room_panel"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.living_room_panel"})}
},

['g4_doorbell_high']: {
  entity_id: "camera.g4_doorbell_high",
get entity() { return {state: shadowState["camera.g4_doorbell_high"].state, attributes: shadowState["camera.g4_doorbell_high"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.g4_doorbell_high"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.g4_doorbell_high"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_doorbell_high"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_doorbell_high"})}
},

['g4_bullet_high']: {
  entity_id: "camera.g4_bullet_high",
get entity() { return {state: shadowState["camera.g4_bullet_high"].state, attributes: shadowState["camera.g4_bullet_high"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.g4_bullet_high"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.g4_bullet_high"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_bullet_high"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_bullet_high"})}
},

['robot_rendered_map']: {
  entity_id: "camera.robot_rendered_map",
get entity() { return {state: shadowState["camera.robot_rendered_map"].state, attributes: shadowState["camera.robot_rendered_map"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.robot_rendered_map"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.robot_rendered_map"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.robot_rendered_map"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.robot_rendered_map"})}
},

['map_data']: {
  entity_id: "camera.map_data",
get entity() { return {state: shadowState["camera.map_data"].state, attributes: shadowState["camera.map_data"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.map_data"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.map_data"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.map_data"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.map_data"})}
},

}
