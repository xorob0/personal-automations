import { createMQTTHumidifier } from "mqtt-utils/src";
import { remote, sensor, switches } from "generated/src";
import { sleep } from "zx";

export const createHumidifiers = () => {
  createMQTTHumidifier({
    name: "Bedroom humidifier",
    onHumidityTooHigh: () => switches.bedroom_humidifier_switch.turnOff(),
    onHumidityTooLow: async () => {
      switches.bedroom_humidifier_switch.turnOn();
      await sleep(10 * 1000)
      remote.bedroom_ir_blaster_remote.sendCommand("b64:JgBQAAABKZQTEhUREhMVEBMTFBEUERUREzcSOBQ3EzcTNxQ3FTUUNxMSFBEUEhQRExIUEhM3ExIUNxM3FDYTOBI4FDcTEhU1EwAFFQABK0sTAA0")
      await sleep(1000)
      remote.living_room_ir_blaster_remote.sendCommand("b64:JgBYAAABLpEUEhUQFRIUERQQFhAVERUQFTYTNxM3FjUTNxQ3EzcUNxM3FBIVEBU2EzcTExM3ExMTExI3FDcTEhMUEjcTFBI3EwAFFQABLUkTAAxWAAEuSBUADQU")
    },
    turnOff: () => switches.bedroom_humidifier_switch.turnOff(),
    humiditySensor: sensor.living_room_ir_blaster_humidity,
    minDiff: 3,
    defaultTarget: 55
  })

  createMQTTHumidifier({
    name: "Living room humidifier",
    onHumidityTooHigh: () => switches.living_room_humidifier_switch.turnOff(),
    onHumidityTooLow: async () => {
      if(switches.living_room_humidifier_switch.isOn()) {
        switches.living_room_humidifier_switch.turnOff();
        sleep(10*1000)
      }
      switches.living_room_humidifier_switch.turnOn();
      await sleep(10 * 1000)
      remote.living_room_ir_blaster_remote.sendCommand("b64:JgBQAAABKZQTEhUREhMVEBMTFBEUERUREzcSOBQ3EzcTNxQ3FTUUNxMSFBEUEhQRExIUEhM3ExIUNxM3FDYTOBI4FDcTEhU1EwAFFQABK0sTAA0")
      await sleep(1 * 1000)
      remote.living_room_ir_blaster_remote.sendCommand("b64:JgBYAAABLpEUEhUQFRIUERQQFhAVERUQFTYTNxM3FjUTNxQ3EzcUNxM3FBIVEBU2EzcTExM3ExMTExI3FDcTEhMUEjcTFBI3EwAFFQABLUkTAAxWAAEuSBUADQU")
    },
    turnOff: () => switches.bedroom_humidifier_switch.turnOff(),
    humiditySensor: sensor.living_room_ir_blaster_humidity,
    minDiff: 3,
    defaultTarget: 55
  })

}
