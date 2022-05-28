import { callService, effect, shadowState } from "@herja/core";
import { sun, sensor, person, light, alarm_control_panel } from "generated/src";
import { clearTimeout } from "timers";

let timeoutID: NodeJS.Timer|undefined = undefined;

export const nightMode = () => {
  effect(()=>{
    if(alarm_control_panel.alarmo.state === 'armed_night')
      return
    if(sensor.bedside_button_action.state.state !== 'single')
      return
    clearTimeout(timeoutID as number|undefined)

    const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./)).filter(key=> !key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
    const allSwitches = Object.keys(shadowState).filter(key=> key.match(/^switch\..*outlet$/))

    const isALightOn = allLights.map(key => shadowState[key].state === 'on').includes(true)

    if(isALightOn)
    {
      alarm_control_panel.alarmo.armNight()
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
      callService("alarm_control_panel", 'alarm_disarm', {code: process.env.ALARM_CODE}, {entity_id: 'alarm_control_panel.alarmo'})

      light.bedside_lamp.turn_on()
      timeoutID = setTimeout(() => {
        light.bedside_lamp.turn_off()
      }, 15 * 60 * 1000)
    }
  }, [sensor.bedside_button_action])

  effect(()=>{
    if(shadowState['alarm_control_panel.alarmo'].state !== 'armed_night')
      return

    if( sun.sun.isAboveHorizon()){
      alarm_control_panel.alarmo.disarm()
    }
  }, [sun.sun])

  effect((event)=>{
    if(shadowState['alarm_control_panel.alarmo'].state !== 'armed_night')
      return

    if(event.data.actionName === 'alarm'){
      alarm_control_panel.alarmo.disarm()
    }
  }, [{eventType: "shortcut_event"}])


};
