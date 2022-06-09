import { callService, effect, shadowState } from "@herja/core";
import { sun, sensor, light, alarm_control_panel, switches } from "generated/src";
import { clearTimeout } from "timers";
import { getAllLights, turnOffAllLights } from "../utils/allLights";

let timeoutID: NodeJS.Timer|undefined = undefined;

const switchExceptions = [switches.bedside_lamp.entity_id, switches.bedroom_secondary_lamp.entity_id]
const lightExceptions = [light.bedroom_secondary_lamp.entity_id, light.bedside_lamp.entity_id, light.bedroom_lights.entity_id]

const isALightOn = (entities: string[]) => entities.map(key => shadowState[key].state === 'on').includes(true)

export const nightMode = () => {
  effect(async (e)=>{
    if(e.data.new_state.state !== 'single')
      return

    clearTimeout(timeoutID as number|undefined)

    const allLights = getAllLights()
    const allSwitches = Object.keys(shadowState).filter(key=> key.match(/^switch\..*outlet$/))

    if(isALightOn(allLights))
    {
      const allLightsWithoutExceptions = getAllLights({exceptions: lightExceptions})
      const allSwitchesWithoutExceptions = allSwitches.filter(key => !switchExceptions.includes(key))

      if(!isALightOn(allLightsWithoutExceptions)){
        turnOffAllLights()
        callService('switch', 'turn_off', undefined, {entity_id: allSwitches })
        return
      }

      alarm_control_panel.alarmo.armNight()
      light.bedroom_secondary_lights.turn_on()

      turnOffAllLights({exceptions: lightExceptions})
      callService('switch', 'turn_off', undefined, {entity_id: allSwitchesWithoutExceptions })

      timeoutID = setTimeout(() => {
        light.bedroom_secondary_lights.turn_off()
      },  15 * 60 * 1000)
      }
    else{
      alarm_control_panel.alarmo.disarm()
      light.bedroom_secondary_lights.turn_on()

      timeoutID = setTimeout(() => {
        light.bedroom_secondary_lights.turn_off()
        alarm_control_panel.alarmo.armNight()
      }, 15 * 60 * 1000)
    }
  }, [sensor.bedside_button_action])

  effect(()=>{
    if(alarm_control_panel.alarmo.state.state !== 'armed_night')
      return

    if( sun.sun.isAboveHorizon()){
      alarm_control_panel.alarmo.disarm()
    }
  }, [sun.sun])

  effect((event)=>{
    if(alarm_control_panel.alarmo.state.state !== 'armed_night')
      return

    if(event.data.actionName === 'alarm'){
      alarm_control_panel.alarmo.disarm()
    }
  }, [{eventType: "shortcut_event"}])
};
