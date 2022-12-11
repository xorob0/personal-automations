import mqtt from "mqtt"

export const client = mqtt.connect('mqtt://192.168.2.65:1883' );

export const createMQTTEntity = ({entityType, name, config}: {entityType:string, name:string, config?:Record<string, string>}) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }
  const unique_id = name.replace(/[^a-zA-Z\d:]/, "_").toLowerCase()
  const topic = `homeassistant/${entityType}/${unique_id}`
  const MQTTconfig = {name, unique_id, state_topic: `${topic}/state`,...config }
  client.publish(`${topic}/config`, JSON.stringify(MQTTconfig) )
  return {topic}
}

export const createMQTTDeviceTracker = (name: string) => {
  const {topic} = createMQTTEntity({entityType:"device_tracker", name, config: {payload_home: "home", payload_not_home: "not_home"}})
  const setHome = () => client.publish(`${topic}/state`, 'home' )
  const setNotHome = () => client.publish(`${topic}/state`, 'not_home' )
  const set = (state: string) => client.publish(`${topic}/state`, state )
  return {setHome, setNotHome, set}
}


export const createMQTTSensor = (name: string) => {
  const {topic} = createMQTTEntity({entityType:"sensor", name})

  const set = (state: string) => client.publish(`${topic}/state`, state, {retain: true, qos: 0}, ()=>console.log('config pushed') )
  return { set }
}

export enum COVER_STATE {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  OPENING = 'OPENING',
  CLOSING = 'CLOSING',
  UNKNOWN = 'UNKNOWN',
}

export type createMQTTCoverConfig = {
  name: string
  onOpen?: () => void
  onClose?: () => void
  onSetPercent?: (percent: number) => void
  onStop?: () => void

}

export const createMQTTCover = ({name, onStop, onClose, onOpen, onSetPercent}:createMQTTCoverConfig) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }

  const unique_id = name.replace(/[^a-zA-Z\d:]/, "_").toLowerCase()
  console.log("unique_id", unique_id.replace(/[^a-zA-Z\d:]/, "_"));
  const HATopic = `homeassistant/cover/${unique_id}`
  const HerjaTopic = `herja/cover/${unique_id}`
  const MQTTconfig = {
    payload_available: "online",
    payload_not_available: "offline",
    optimistic: true,
    name, unique_id,
    state_topic: `${HerjaTopic}/state`,
    command_topic: `${HerjaTopic}/command`,
    position_topic: `${HerjaTopic}/position`,
    set_position_topic: `${HerjaTopic}/set_position`,
  }
  const setPosition = (position: number) => client.publish(MQTTconfig.position_topic, position.toString()  )
  const setState = (state: COVER_STATE) => client.publish(MQTTconfig.state_topic, state)

  client.publish(`${HATopic}/config`, JSON.stringify(MQTTconfig), {retain: true, qos: 2}, ()=>console.log('config pushed') )
  client.subscribe(MQTTconfig.command_topic, {qos: 0}, ()=>console.log('subscribed') )
  client.subscribe(MQTTconfig.set_position_topic, {qos: 0}, ()=>console.log('set position') )

  return {setState, setPosition}
}

