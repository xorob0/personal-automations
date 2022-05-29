import mqtt from 'mqtt'
import { effect } from "@herja/core";
import { sensor, device_tracker } from "generated/src";


export const personDetection = (client:mqtt.MqttClient) => {
  const detectTim = () =>{
    if(sensor.tims_ipone_ssid.state === "Private" || device_tracker.tim_s_phone_tracker.isHome() || device_tracker.tim_iphone_ip.isHome() )
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
  }, [sensor.tims_ipone_ssid, device_tracker.tim_s_phone_tracker, device_tracker.tim_iphone_ip])
  effect(()=>{
    detectGaby()
  }, [device_tracker.gaby_s_phone_tracker, device_tracker.kapy])
};
