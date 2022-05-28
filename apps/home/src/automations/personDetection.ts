import mqtt from 'mqtt'
import { effect } from "@herja/core";
import { sensor } from "generated";

export const personDetection = (client:mqtt.MqttClient) => {
  effect(()=>{
    if(sensor.tims_ipone_ssid.state === "Private" || sensor.tim_s_phone_room_presence.state === "home")
      client.publish('herja/sensor/tim_presence', "home");
    else
      client.publish('herja/sensor/tim_presence', "not_home");
  }, [sensor.tims_ipone_ssid, sensor.tim_s_phone_room_presence])
};
