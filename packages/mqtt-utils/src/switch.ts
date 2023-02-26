import { client } from "./index";

export enum SWITCH_STATE {
  ON = 'ON',
  OFF = 'OFF',
}
export type createMQTTSwitchConfig = {
  name: string
  onTurnOn?: (arg: {setState: ((state:SWITCH_STATE| ((old_state:SWITCH_STATE) => SWITCH_STATE)) => void)}) => void
  onTurnOff?: (arg: {setState: ((state:SWITCH_STATE| ((old_state:SWITCH_STATE) => SWITCH_STATE)) => void)}) => void
}


const states: Record<string, SWITCH_STATE> = {}

export const createMQTTSwitch = ({name, onTurnOff: onTurnOffFromProps, onTurnOn: onTurnOnFromProps}:createMQTTSwitchConfig ) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }

  const onTurnOn = onTurnOnFromProps || (({setState}) => setState(SWITCH_STATE.ON))
  const onTurnOff = onTurnOnFromProps || (({setState}) => setState(SWITCH_STATE.OFF))

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
  client.publish(MQTTconfig.state_topic, "OFF", {retain: true, qos: 2}, ()=>console.log('state off') )

  client.subscribe(MQTTconfig.command_topic, {qos: 0}, (command)=>console.log('subscribed to command') )

  client.on("message", (topic, message) => {
    if(topic === MQTTconfig.command_topic){
      if(message.toString() === "ON"){
        onTurnOn?.({setState})
      }
      if(message.toString() === "OFF"){
        onTurnOff?.({setState})
      }
      if(message.toString() === "TOGGLE"){
        if(states[unique_id] === SWITCH_STATE.ON){
          onTurnOff?.({setState})
        }
        if(states[unique_id] === SWITCH_STATE.OFF){
          onTurnOn?.({setState})
        }
      }
    }
  })

  return {setState}
}
