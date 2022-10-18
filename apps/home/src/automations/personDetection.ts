import mqtt from 'mqtt'
import { effect } from "@herja/core";
import { sensor, binary_sensor, light } from "generated/src";
import { createMQTTDeviceTracker } from "mqtt-utils/src";

const TIMEOUT = 5 * 60 * 1000
let timeoutID: NodeJS.Timer|undefined = undefined;

const tim_sensors = [
    {
      sensor: sensor.s22_wifi_connection,
      value: 'Private',
      weight: 2
    },
    {
      sensor: binary_sensor.tim_s_galaxy_s22_living_room,
      value: true,
      weight: 1
    },
    {
      sensor: binary_sensor.tim_s_galaxy_s22_bedroom,
      value: true,
      weight: 2
    },
    {
      sensor: binary_sensor.tim_s_galaxy_s22_office,
      value: true,
      weight: 2
    },
    {
      sensor: binary_sensor.tim_s_galaxy_s22_garage,
      value: true,
      weight: 2
    },
    // {
    //   sensor: binary_sensor.tim_s_galaxy_s22_victor,
    //   value: true,
    //   weight: -100
    // },
  ]

let lastTim = 'unknown'

export const personDetection = () => {
  const {setHome, setNotHome} = createMQTTDeviceTracker('Tim calculated')
  effect((e)=>{
    console.log(e)
    const weight = tim_sensors.reduce((acc, s) => {
      if(s.sensor.state.state === s.value)
        return acc + s.weight;
      return acc
    }, 0)

    if(weight > 0 && lastTim !== 'home'){
      lastTim = 'home'

      clearTimeout(timeoutID as number|undefined)

      timeoutID = setTimeout( setHome , TIMEOUT)
    }

    if(weight<=0 && lastTim !== 'not_home'){
      lastTim = 'not_home'

      clearTimeout(timeoutID as number|undefined)

      timeoutID = setTimeout( setNotHome , TIMEOUT)
    }
  }, tim_sensors.map(s => s.sensor))
};
