import { callService, effect, shadowState } from "@herja/core";
import { sensor, person, light } from "generated/src";
import { clearTimeout } from "timers";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const nightMode = () => {
  effect(()=>{
    if(sensor.bedside_button_action.state.state !== 'single')
      return
    clearTimeout(timeoutID as number|undefined)

    const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./)).filter(key=> !key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
    const allSwitches = Object.keys(shadowState).filter(key=> key.match(/^switch\..*outlet$/))

    const isALightOn = allLights.map(key => shadowState[key].state === 'on').includes(true)

    if(isALightOn)
    {
      callService('light', 'turn_off', undefined, {entity_id: allLights})
      callService('switch', 'turn_off', undefined, {entity_id: allSwitches})
      if(person.gaby.isHome() && !light.bedside_lamp.isOn()){
        light.bedside_lamp.turn_on()

        timeoutID = setTimeout(() => {
          light.bedside_lamp.turn_off()
        },  15 * 60 * 1000)
        }
      }
    else{
      light.bedside_lamp.turn_on()
      timeoutID = setTimeout(() => {
        light.bedside_lamp.turn_off()
      }, 15 * 60 * 1000)
    }
  }, [sensor.bedside_button_action])


};
