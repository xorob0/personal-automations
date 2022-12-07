import { binary_sensor } from "generated/src";
import { callService } from "@herja/core";
import { alertOpened } from "@herja/automations";

const delayFridgeOpenedTooLong = 3;
const alertFridgeOpenedTooLong = () => {
  alertOpened({
    sensor: binary_sensor.fridge_door_sensor_contact,
    onOpenedTooLong: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Alert Fridge Opened Too Long', message: `The Fridge has been open for more than ${delayFridgeOpenedTooLong} minutes`}),
    delay: 1000 * 60 * delayFridgeOpenedTooLong,
  });
}

export const allAlertsOpenedTooLong = () => {
  alertFridgeOpenedTooLong();
}
