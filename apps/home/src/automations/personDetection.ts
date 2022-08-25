import mqtt from 'mqtt'
import { effect } from "@herja/core";
import { sensor, device_tracker } from "generated/src";


export const personDetection = (client:mqtt.MqttClient) => {
  const detectTim = () =>{
    console.log(sensor.s22_wifi_connection.state.state)
    if(sensor.s22_wifi_connection.state.state === "Private" || device_tracker.s22.isHome() || device_tracker.galaxy_s22.isHome() )
      client.publish('herja/sensor/tim_presence', "home");
    else
      client.publish('herja/sensor/tim_presence', "not_home");
  }
  const detectGaby = () => {
    if(device_tracker.gaby_s_phone_tracker.isHome() || device_tracker.kapy.isHome() )
      client.publish('herja/sensor/gaby_presence', "home");
    else
      client.publish('herja/sensor/gaby_presence', "not_home");
  }
  detectTim()
  detectGaby()
  effect(()=>{
    detectTim()
  }, [sensor.s22_wifi_connection, device_tracker.s22, device_tracker.galaxy_s22])
  effect(()=>{
    detectGaby()
  }, [device_tracker.gaby_s_phone_tracker, device_tracker.kapy])
};
