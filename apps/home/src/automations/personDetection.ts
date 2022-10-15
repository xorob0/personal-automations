import mqtt from 'mqtt'
import { effect } from "@herja/core";
import { sensor, binary_sensor } from 'generated/src'

TIMEOUT = 5 * 60 * 1000

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
    {
      sensor: binary_sensor.tim_s_galaxy_s22_victor,
      value: true,
      weight: -100
    },
  ]

export const personDetection = (client:mqtt.MqttClient) => {
  effect(()=>{
    const weight = tim_sensors.reduce((acc, s) => {
      if(s.sensor.state.state === s.value)
        return acc + s.weight;
      return acc
    }, 0)
    if(weight > 0){
      client.publish('herja/device_tracker/tim', 'home' )
    }else{
      client.publish('herja/device_tracker/tim', 'not_home' )
    }
  }, tim_sensors.map(s => s.sensor))
};
