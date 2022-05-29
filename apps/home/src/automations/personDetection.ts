import mqtt from 'mqtt'
import { effect, shadowState } from "@herja/core";
import { sensor } from "generated/src";

export const personDetection = (client:mqtt.MqttClient) => {
  effect(()=>{
    if(sensor.tims_ipone_ssid.state === "Private" || shadowState["device_tracker.tim_s_phone_tracker"] === "home" || shadowState["device_tracker.tim_iphone_ip"].state === "home" )
      client.publish('herja/sensor/tim_presence', "home");
    else
      client.publish('herja/sensor/tim_presence', "not_home");
  }, [sensor.tims_ipone_ssid, "device_tracker.tim_s_phone_tracker", "device_tracker.tim_iphone_ip"])
  effect(()=>{
    if(shadowState["device_tracker.gaby_s_phone_tracker"] === "home" || shadowState["device_tracker.kapy"].state === "home" )
      client.publish('herja/sensor/gaby_presence', "home");
    else
      client.publish('herja/sensor/gaby_presence', "not_home");
  }, ["device_tracker.gaby_s_phone_tracker", "device_tracker.kapy"])
};
