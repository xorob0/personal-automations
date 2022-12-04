import { callService, effect } from "@herja/core";
import {  binary_sensor } from "generated/src";
import { formatDistance } from 'date-fns'

let timeoutID: NodeJS.Timer|undefined = undefined;

export const alertFridgeOpen = () => {
  effect(()=>{
    if(binary_sensor.fridge_door_sensor_contact.isOn())
    {
      timeoutID = setTimeout(()=>{
        const distanceChange = formatDistance(new Date(binary_sensor.fridge_door_sensor_contact.entity.attributes.last_changed), new Date(), { addSuffix: true })
        //TODO add notify
        callService('notify', 'mobile_app_s22', {title: 'Alert fridge open', message: 'The fridge was last closed ' + distanceChange})
      }, 3*60*1000)
    }
    else{
      clearTimeout(timeoutID as number|undefined);
    }
  }, [binary_sensor.fridge_door_sensor_contact])
};
