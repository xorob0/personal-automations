import {  effect, shadowState } from "@herja/core";
import { sun, sensor, light, alarm_control_panel, switches } from "generated/src";
import { clearTimeout } from "timers";
import { getAllLights, turnOffAllLights } from "../utils/allLights";

let timeoutID: NodeJS.Timer|undefined = undefined;

const lightExceptions = [light.bedroom_secondary_lamp.entity_id, light.bedside_lamp.entity_id, light.bedroom_lights.entity_id, light.bedroom_secondary_lights.entity_id, light.bedroom_bed_light.entity_id]
const outlets = [switches.coffee_machine_outlet]

const isALightOn = (entities: string[]) => entities.map(key => shadowState[key].state === 'on').includes(true)

const turnOnBedroomLight = () =>{
  light.bedroom_secondary_lights.turn_on()
  light.bedroom_bed_light.turn_on({brightness: 1})
  timeoutID = setTimeout(()=>{
    light.bedroom_lights.turn_off()
  }, 1000 * 60 * 15)
}

export const nightMode = () => {
  effect(async (e)=>{
    if(e.data.new_state.state !== 'single' && e.data.new_state.state !== "on")
      return

    clearTimeout(timeoutID as number|undefined)

    const allLights = getAllLights()
    outlets.forEach((outlet) =>{
      outlet.turn_off()
    })

    // if a light in the house is on
    if(isALightOn(allLights))
    {
      // if a light is on but not a light in the bedroom
      if(isALightOn(getAllLights({exceptions: lightExceptions}))){
        await turnOffAllLights({exceptions: lightExceptions})
        turnOnBedroomLight()
      }
      // if the only light that is on is in the bedroom
      else{
        await turnOffAllLights()
      }
      alarm_control_panel.alarmo.armNight()
    }
    else {
      turnOnBedroomLight()
    }
  }, [sensor.bedside_button_action, sensor.bedroom_button_tim_action, sensor.bedroom_button_gaby_action])
};