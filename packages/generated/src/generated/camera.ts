import {callService, shadowState, Camera, CameraProperties} from "@herja/core"
export type CameraIDs = "octoprint_camera" | "g4_bullet_high" | "g4_doorbell_high" | "robot_rendered_map" | "g4_instant_high" | "valetudo_downstair_vacuum_map_data"
export type CameraEntities = Record<CameraIDs, Camera>

export const camera: Camera<CameraIDs> = {

['octoprint_camera']: {
  entity_id: "camera.octoprint_camera",
get entity() { return {state: shadowState["camera.octoprint_camera"].state, attributes: shadowState["camera.octoprint_camera"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.octoprint_camera"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.octoprint_camera"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.octoprint_camera"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.octoprint_camera"})}
},

['g4_bullet_high']: {
  entity_id: "camera.g4_bullet_high",
get entity() { return {state: shadowState["camera.g4_bullet_high"].state, attributes: shadowState["camera.g4_bullet_high"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.g4_bullet_high"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.g4_bullet_high"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_bullet_high"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_bullet_high"})}
},

['g4_doorbell_high']: {
  entity_id: "camera.g4_doorbell_high",
get entity() { return {state: shadowState["camera.g4_doorbell_high"].state, attributes: shadowState["camera.g4_doorbell_high"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.g4_doorbell_high"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.g4_doorbell_high"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_doorbell_high"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_doorbell_high"})}
},

['robot_rendered_map']: {
  entity_id: "camera.robot_rendered_map",
get entity() { return {state: shadowState["camera.robot_rendered_map"].state, attributes: shadowState["camera.robot_rendered_map"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.robot_rendered_map"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.robot_rendered_map"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.robot_rendered_map"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.robot_rendered_map"})}
},

['g4_instant_high']: {
  entity_id: "camera.g4_instant_high",
get entity() { return {state: shadowState["camera.g4_instant_high"].state, attributes: shadowState["camera.g4_instant_high"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.g4_instant_high"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.g4_instant_high"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_instant_high"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.g4_instant_high"})}
},

['valetudo_downstair_vacuum_map_data']: {
  entity_id: "camera.valetudo_downstair_vacuum_map_data",
get entity() { return {state: shadowState["camera.valetudo_downstair_vacuum_map_data"].state, attributes: shadowState["camera.valetudo_downstair_vacuum_map_data"].attributes} as CameraProperties},
turnOn() { return callService("camera", "turn_on", {}, {entity_id: "camera.valetudo_downstair_vacuum_map_data"})},
turnOff() { return callService("camera", "turn_off", {}, {entity_id: "camera.valetudo_downstair_vacuum_map_data"})},
enableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.valetudo_downstair_vacuum_map_data"})},
disableMotionDetection() { return callService("camera", "enable_motion_detection", {}, {entity_id: "camera.valetudo_downstair_vacuum_map_data"})}
},

}
