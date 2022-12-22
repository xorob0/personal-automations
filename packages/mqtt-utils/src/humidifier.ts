import { BetterHassEntity, effect } from "@herja/core";
import { client } from "./index";

export enum HUMIDIFIER_STATE {
  ON = 'ON',
  OFF = 'OFF',
}

export enum HUMIDIFIER_HUMIDITY_LEVEL {
  TOO_LOW = 'TOO_LOW',
  MIDDLE = 'MIDDLE',
  TOO_HIGH = 'TOO_HIGH',
}

export type createMQTTHumidifierConfig = {
  name: string
  onHumidityTooHigh: () => void
  onHumidityTooLow: () => void
  turnOff: () => void
  humiditySensor: BetterHassEntity
  minDiff?: number
  defaultTarget?: number
}

const states: Record<string, HUMIDIFIER_STATE> = {}
const targetHumidities: Record<string, number> = {}
const humidityLevels: Record<string, HUMIDIFIER_HUMIDITY_LEVEL> = {}

export const createMQTTHumidifier = ({name, defaultTarget, onHumidityTooHigh, onHumidityTooLow,turnOff, humiditySensor, minDiff: minDiffFromProps}:createMQTTHumidifierConfig ) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }



  const minDiff = minDiffFromProps || 10

  const unique_id = name.replace(/[^a-zA-Z\d:]/g, "_").toLowerCase()
  const HATopic = `homeassistant/humidifier/${unique_id}`
  const HerjaTopic = `herja/humidifier/${unique_id}`
  const MQTTconfig = {
    name,
    unique_id,
    state_topic: `${HerjaTopic}/state`,
    command_topic: `${HerjaTopic}/command`,
    target_humidity_command_topic: `${HerjaTopic}/target_humidity_command`,
  }


  targetHumidities[unique_id] = defaultTarget || 0

  const onChange = () => {
    if(!humiditySensor?.entity?.state)
      return

    if(states[unique_id] !== HUMIDIFIER_STATE.ON){
      turnOff()
      return
    }

    const currentHumidity = parseInt(humiditySensor.entity.state as string)

    if(isNaN(currentHumidity))
      return

    if(currentHumidity - minDiff > targetHumidities[unique_id] && humidityLevels[unique_id] !== HUMIDIFIER_HUMIDITY_LEVEL.TOO_HIGH){
      humidityLevels[unique_id] = HUMIDIFIER_HUMIDITY_LEVEL.TOO_HIGH
      onHumidityTooHigh()
    }
    if(currentHumidity + minDiff < targetHumidities[unique_id] && humidityLevels[unique_id] !== HUMIDIFIER_HUMIDITY_LEVEL.TOO_LOW){
      humidityLevels[unique_id] = HUMIDIFIER_HUMIDITY_LEVEL.TOO_LOW
      onHumidityTooLow()
    }
  }

  const setState = (state: HUMIDIFIER_STATE | ((old_state:HUMIDIFIER_STATE) => HUMIDIFIER_STATE)) => {
    states[unique_id] = typeof state === 'function' ? state(states[unique_id]) : state
    client.publish(MQTTconfig.state_topic, typeof state === 'function' ? state(states[unique_id]) : state)
    onChange()
  }

  client.publish(`${HATopic}/config`, JSON.stringify(MQTTconfig), {retain: true, qos: 2}, ()=>console.log(unique_id, 'config pushed') )
  client.subscribe(MQTTconfig.command_topic, {qos: 0}, (command)=>console.log('subscribed to command') )
  client.subscribe(MQTTconfig.target_humidity_command_topic, {qos: 0}, (command)=>console.log('subscribed to command') )
  client.publish(MQTTconfig.state_topic, HUMIDIFIER_STATE.OFF, {retain: true, qos: 2}, ()=>console.log('state off') )
  client.publish(MQTTconfig.target_humidity_command_topic, "0", {retain: true, qos: 2}, ()=>console.log('state 0') )

  client.on("message", (topic, message) => {
    if(topic === MQTTconfig.command_topic){
      states[unique_id] = message.toString() as HUMIDIFIER_STATE
      setState(states[unique_id])
    }
    if(topic === MQTTconfig.target_humidity_command_topic){
      targetHumidities[unique_id] = parseInt(message.toString())
    }
    onChange()
  })

  effect(onChange, [humiditySensor])

  return
}
