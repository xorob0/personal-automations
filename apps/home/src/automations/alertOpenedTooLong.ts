import { binary_sensor, cover } from "generated/src";
import { callService } from "@herja/core";
import { callbackAfterDelay } from "@herja/automations";

const delayFridgeOpenTooLong = 3;
const delayEntranceDoorOpenTooLong = 3;
const delayGarageOpenTooLong = 3;
const alertFridgeOpenedTooLong = () => {
  callbackAfterDelay({
    sensor: binary_sensor.fridge_door_sensor_contact,
    //TODO add notify to herja
    callback: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Fridge opened for too long', message: `The fridge has been open for more than ${delayFridgeOpenTooLong} minutes`}),
    delay: 1000 * 60 * delayFridgeOpenTooLong,
  });
  callbackAfterDelay({
    sensor: binary_sensor.entrance_door_contact,
    callback: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Entrance door still open', message: `The entrance door has been open for ${delayFridgeOpenTooLong} minutes`}),
    delay: 1000 * 60 * delayEntranceDoorOpenTooLong,
  });
  callbackAfterDelay({
    condition: () => !cover.garage_mqtt.isClosed(),
    sensor: cover.garage_mqtt,
    callback: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Garage still open', message: `The garage electric door has been open for ${delayFridgeOpenTooLong} minutes`}),
    delay: 1000 * 60 * delayGarageOpenTooLong,
  });
}

export const allAlertsOpenedTooLong = () => {
  alertFridgeOpenedTooLong();
}
