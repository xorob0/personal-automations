import { createMQTTHumidifier } from "mqtt-utils/src";
import { remote, sensor, switches } from "generated/src";
import { sleep } from "zx";

export const createHumidifiers = () => {
  createMQTTHumidifier({
    name: "Living room humidifier",
    onHumidityTooHigh: () => switches.bedroom_humidifier_switch.turnOff(),
    onHumidityTooLow: async () => {
      switches.bedroom_humidifier_switch.turnOn();
      console.log('turn on')
      await sleep(10 * 1000)
      remote.bedroom_ir_blaster_remote.sendCommand("b64:JgBQAAABKZQTEhUREhMVEBMTFBEUERUREzcSOBQ3EzcTNxQ3FTUUNxMSFBEUEhQRExIUEhM3ExIUNxM3FDYTOBI4FDcTEhU1EwAFFQABK0sTAA0")
      console.log('send command')
    },
    turnOff: () => switches.bedroom_humidifier_switch.turnOff(),
    humiditySensor: sensor.living_room_ir_blaster_humidity_2,
    minDiff: 10
  })
}
