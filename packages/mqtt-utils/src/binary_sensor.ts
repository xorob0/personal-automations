import { client } from "./index";

export enum BINARY_SENSOR_STATE {
  ON = 'ON',
  OFF = 'OFF',
}
export type createMQTTBinarySensorConfig = {
  name: string
  onTurnOn?: (arg: {setState: ((state:BINARY_SENSOR_STATE| ((old_state:BINARY_SENSOR_STATE) => BINARY_SENSOR_STATE)) => void)}) => void
  onTurnOff?: (arg: {setState: ((state:BINARY_SENSOR_STATE| ((old_state:BINARY_SENSOR_STATE) => BINARY_SENSOR_STATE)) => void)}) => void
}

const states: Record<string, BINARY_SENSOR_STATE> = {}

export const createMQTTBinarySensor = ({name}:createMQTTBinarySensorConfig ) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }

  const unique_id = name.replace(/[^a-zA-Z\d:]/g, "_").toLowerCase()
  const HATopic = `homeassistant/binary_sensor/${unique_id}`
  const HerjaTopic = `herja/binary_sensor/${unique_id}`
  const MQTTconfig = {
    name,
    unique_id,
    state_topic: `${HerjaTopic}/state`,
  }
  const setState = (state: BINARY_SENSOR_STATE | ((old_state:BINARY_SENSOR_STATE) => BINARY_SENSOR_STATE)) => {
    states[unique_id] = typeof state === 'function' ? state(states[unique_id]) : state
    client.publish(MQTTconfig.state_topic, typeof state === 'function' ? state(states[unique_id]) : state)
  }

  client.publish(`${HATopic}/config`, JSON.stringify(MQTTconfig), {retain: true, qos: 2}, ()=>console.log(unique_id, 'config pushed') )
  client.publish(MQTTconfig.state_topic, "OFF", {retain: true, qos: 2}, ()=>console.log('state off') )


  return {setState}
}
