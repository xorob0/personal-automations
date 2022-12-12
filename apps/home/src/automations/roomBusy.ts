import { createMQTTSwitch } from "mqtt-utils/src";

export const roomBusy = () => {
  createMQTTSwitch({
    name: "Tatoo in progress",
  })
  createMQTTSwitch({
    name: "Meeting in progress",
  })
}
