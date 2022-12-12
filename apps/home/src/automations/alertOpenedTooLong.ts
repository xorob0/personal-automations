import { binary_sensor, cover } from "generated/src";
import { callService } from "@herja/core";
import { alertOpened } from "@herja/automations";

const delayFridgeOpenTooLong = 3;
const delayEntranceDoorOpenTooLong = 3;
const delayGarageOpenTooLong = 3;
const alertFridgeOpenedTooLong = () => {
  alertOpened({
    sensor: binary_sensor.fridge_door_sensor_contact,
    //TODO add notify to herja
    onOpenedTooLong: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Fridge opened for too long', message: `The fridge has been open for more than ${delayFridgeOpenedTooLong} minutes`}),
    delay: 1000 * 60 * delayFridgeOpenTooLong,
  });
  alertOpened({
    sensor: binary_sensor.entrance_door_contact,
    onOpenedTooLong: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Entrance door still open', message: `The entrance door has been open for ${delayFridgeOpenedTooLong} minutes`}),
    delay: 1000 * 60 * delayEntranceDoorOpenTooLong,
  });
  alertOpened({
    isOpened: () => cover.garage_cover.entity.state === 'open',
    sensor: cover.garage_cover,
    onOpenedTooLong: () => callService('notify', 'mobile_app_tims_iphone', {title: 'Garage still open', message: `The garage electric door has been open for ${delayFridgeOpenedTooLong} minutes`}),
    delay: 1000 * 60 * delayGarageOpenTooLong,
  });
}

export const allAlertsOpenedTooLong = () => {
  alertFridgeOpenedTooLong();
}
