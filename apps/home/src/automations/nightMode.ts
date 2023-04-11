import { effect, MediaPlayerEntity, shadowState, SunState } from "@herja/core";
import {
  sun,
  sensor,
  light,
  alarm_control_panel,
  switches,
  humidifier,
  climate,
  media_player
} from "generated/src";
import { clearTimeout } from "timers";
import { getAllLights, turnOffAllLights } from "../utils/allLights";
import { fan } from "generated/src/generated/fan";

let timeoutID: NodeJS.Timer|undefined = undefined;

const lightBedroom = [light.bedroom_secondary_lamp.entity_id,
  light.bedside_lamp.entity_id,
  light.bedroom_lights.entity_id,
  light.bedroom_secondary_lights.entity_id,
  light.bedroom_tv_light.entity_id,
  light.bedroom_bed_light_2.entity_id]

const outlets = [switches.desk_outlet]
const mediaPlayers:MediaPlayerEntity[] = []

const isALightOn = (entities: string[]) => entities.map(key => shadowState[key].state === 'on').includes(true)

const turnOnBedroomLight = () =>{
  light.bedroom_secondary_lights.turnOn()
  light.bedroom_bed_light_2.turnOn({brightness: 1, transition: 1000*60*5})
  light.bedroom_tv_light.turnOn({brightness: 1, transition: 1000*60*5})
  timeoutID = setTimeout(()=>{
    light.bedroom_lights.turnOff()
  }, 1000 * 60 * 15)
}

export const nightMode = () => {
  effect(async (event)=>{
    if(event?.data.new_state.state !== 'single' && event?.data.new_state.state !== "on")
      return

    clearTimeout(timeoutID as number|undefined)

    const allLights = getAllLights()
    outlets.forEach((outlet) =>{
      outlet.turnOff()
    })
    mediaPlayers.forEach((media_player) =>{
      media_player.turnOff()
    })

    // if a light in the house is on
    if(isALightOn(allLights))
    {
      alarm_control_panel.alarmo.armNight()
      humidifier.bedroom_humidifier.turnOff()
      fan.afzuiging_badkamer.setSpeedPercentage?.(0)
      media_player.android_tv_192_168_1_53.turnOff()
      // if a light is on but not a light in the bedroom
      if(isALightOn(getAllLights({exceptions: lightBedroom}))){
        await turnOffAllLights({exceptions: lightBedroom})
        turnOnBedroomLight()
        climate.bedroom_ac.turnOff()
        climate.office_ac.turnOff()
        climate.secondary_room_ac.turnOff()
      }
      // if the only light that is on is in the bedroom
      else{
        await turnOffAllLights()
      }
    }
    else {
      turnOnBedroomLight()
    }
  }, [sensor.bedside_button_action, sensor.bedroom_button_tim_action, sensor.bedroom_button_gaby_action])
  //
  // effect((event)=>{
  //   if(alarm_control_panel.alarmo.entity.state !== 'armed_night')
  //     return
  //
  //   if( event?.data.new_state.state === SunState.ABOVE_HORIZON && event?.data.old_state.state === SunState.BELOW_HORIZON){
  //     alarm_control_panel.alarmo.disarm()
  //   }
  // }, [sun.sun])
  //
  // effect(()=>{
  //   if(alarm_control_panel.alarmo.entity.state !== 'armed_night')
  //     return
  //
  //   alarm_control_panel.alarmo.disarm()
  // }, [{eventType:'tim_wakeup'}])
  //
  // effect(()=>{
  //   humidifier.bedroom_humidifier.turnOn()
  // }, ["0 10 * * *"])
  //
  // effect(()=>{
  //   if(sensor.bedroom_ir_blaster_temperature.entity.state > 20)
  //     return
  //   climate.bedroom_ac.setHeating()
  //   climate.bedroom_ac.setTargetTemperature(20)
  // }, ["0 21 * * *"])
};
