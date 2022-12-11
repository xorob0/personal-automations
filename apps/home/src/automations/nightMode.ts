import { effect, MediaPlayerEntity, shadowState } from "@herja/core";
import { sun, sensor, light, alarm_control_panel, switches, binary_sensor } from "generated/src";
import { clearTimeout } from "timers";
import { getAllLights, turnOffAllLights } from "../utils/allLights";

let timeoutID: NodeJS.Timer|undefined = undefined;

const lightBedroom = [light.bedroom_secondary_lamp.entity_id,
  light.bedside_lamp.entity_id,
  light.bedroom_lights.entity_id,
  light.bedroom_secondary_lights.entity_id,
  light.bedroom_tv_light.entity_id,
  light.bedroom_bed_light_2.entity_id]

const outlets = [switches.desk_outlet, switches.christmas_tree_led_outlet]
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
      console.log('alarm should be armed for night')

      // if a light is on but not a light in the bedroom
      if(isALightOn(getAllLights({exceptions: lightBedroom}))){
        await turnOffAllLights({exceptions: lightBedroom})
        turnOnBedroomLight()
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

  //TODO disable alarm when bedroom door is opened

  effect(()=>{
    console.log(JSON.stringify(alarm_control_panel.alarmo))
    if(alarm_control_panel.alarmo.entity.state !== 'armed_night')
      return

    if( sun.sun.isAboveHorizon()){
      alarm_control_panel.alarmo.disarm()
    }
  }, [sun.sun])
  effect((e)=>{
    if(e.data.new_state.state !== 'off')
      return
    if(alarm_control_panel.alarmo.entity.state !== 'armed_night')
      return
    alarm_control_panel.alarmo.disarm()
  }, [binary_sensor.tim_s_id_4_car_is_active])
};
