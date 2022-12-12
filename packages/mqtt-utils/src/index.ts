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

export type SetPosition = (position: number | ((p:number) => number)) => void

export type createMQTTCoverConfig = {
  name: string
  onOpen?: (position: number) => void
  onClose?: (position: number) => void
  onSetPercent?: (position: number, setPosition:SetPosition) => void
  onStop?: (position: number) => void

}

const positions: Record<string, number> = {}

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
  const setPosition = (position: number | ((p:number) => number)) => {
    positions[unique_id] = typeof position === 'function' ? position(positions[unique_id]) : position
    client.publish(MQTTconfig.position_topic, positions[unique_id].toString()  )
  }
  const setState = (state: COVER_STATE) => client.publish(MQTTconfig.state_topic, state)

  client.publish(`${HATopic}/config`, JSON.stringify(MQTTconfig), {retain: true, qos: 2}, ()=>console.log('config pushed') )
  client.publish(MQTTconfig.state_topic, "unknown", {retain: true, qos: 2}, ()=>console.log('state unknown') )
  client.publish(MQTTconfig.position_topic, "-1", {retain: true, qos: 2}, ()=>console.log('position unknown') )
  client.subscribe(MQTTconfig.command_topic, {qos: 0}, (command)=>console.log('subscribed to command') )
  client.subscribe(MQTTconfig.set_position_topic, {qos: 0}, ()=>console.log('subscribed to position') )

  client.on("message", (topic, message) => {

    if(topic === MQTTconfig.command_topic){
      if(message.toString() === "OPEN"){
        onOpen?.(positions[unique_id])
      }
      if(message.toString() === "CLOSE"){
        onClose?.(positions[unique_id])
      }
      if(message.toString() === "STOP"){
        onStop?.(positions[unique_id])
      }
    }
    if(topic === MQTTconfig.set_position_topic){
      onSetPercent?.(parseInt(message.toString()), setPosition)
    }
  })

  return {setState, setPosition}
}

export enum SWITCH_STATE {
  ON = 'ON',
  OFF = 'OFF',
}
export type createMQTTSwitchConfig = {
  name: string
  onToggle?: (arg: {setState: ((state:SWITCH_STATE| ((old_state:SWITCH_STATE) => SWITCH_STATE)) => void)}) => void
  onTurnOn?: (arg: {setState: ((state:SWITCH_STATE| ((old_state:SWITCH_STATE) => SWITCH_STATE)) => void)}) => void
  onTurnOff?: (arg: {setState: ((state:SWITCH_STATE| ((old_state:SWITCH_STATE) => SWITCH_STATE)) => void)}) => void
}


const states: Record<string, SWITCH_STATE> = {}

export const createMQTTSwitch = ({name, onTurnOff: onTurnOffFromProps, onTurnOn: onTurnOnFromProps, onToggle:onToggleFromProps}:createMQTTSwitchConfig ) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }

  const onTurnOn = onTurnOnFromProps || (({setState}) => setState(SWITCH_STATE.ON))
  const onTurnOff = onTurnOnFromProps || (({setState}) => setState(SWITCH_STATE.OFF))
  const onToggle = onToggleFromProps || (({setState}) => setState((state) => state === SWITCH_STATE.ON ? SWITCH_STATE.OFF : SWITCH_STATE.ON))

  const unique_id = name.replace(/[^a-zA-Z\d:]/g, "_").toLowerCase()
  const HATopic = `homeassistant/switch/${unique_id}`
  const HerjaTopic = `herja/switch/${unique_id}`
  const MQTTconfig = {
    name,
    unique_id,
    state_topic: `${HerjaTopic}/state`,
    command_topic: `${HerjaTopic}/command`,
  }
  const setState = (state: SWITCH_STATE | ((old_state:SWITCH_STATE) => SWITCH_STATE)) => {
    states[unique_id] = typeof state === 'function' ? state(states[unique_id]) : state
    client.publish(MQTTconfig.state_topic, typeof state === 'function' ? state(states[unique_id]) : state)
  }

  client.publish(`${HATopic}/config`, JSON.stringify(MQTTconfig), {retain: true, qos: 2}, ()=>console.log(unique_id, 'config pushed') )
  client.subscribe(MQTTconfig.command_topic, {qos: 0}, (command)=>console.log('subscribed to command') )
  client.publish(MQTTconfig.state_topic, "OFF", {retain: true, qos: 2}, ()=>console.log('state off') )

  client.on("message", (topic, message) => {
    if(topic === MQTTconfig.command_topic){
      if(message.toString() === "ON"){
        onTurnOn?.({setState})
      }
      if(message.toString() === "OFF"){
        onTurnOff?.({setState})
      }
      if(message.toString() === "TOGGLE"){
        onToggle?.({setState})
      }
    }
  })

  return {setState}
}
