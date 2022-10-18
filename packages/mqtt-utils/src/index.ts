import mqtt from "mqtt"

const client = mqtt.connect('mqtt://192.168.2.65:1883' );

export const createMQTTEntity = ({entityType, name}: {entityType:string, name:string}) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }
  const unique_id = name.replace(/[^a-zA-Z\d:]/, "_").toLowerCase()
  const topic = `homeassistant/${entityType}/${unique_id}`
  const config = {name, unique_id, state_topic: `${topic}/state`,payload_home: "home", payload_not_home: "not_home" }
  client.publish(`${topic}/config`, JSON.stringify(config) )
  return {topic}
}

export const createMQTTDeviceTracker = (name: string) => {
  const {topic} = createMQTTEntity({entityType:"device_tracker", name})
  const setHome = () => client.publish(`${topic}/state`, 'home' )
  const setNotHome = () => client.publish(`${topic}/state`, 'not_home' )
  const set = (state: string) => client.publish(`${topic}/state`, state )
  return {setHome, setNotHome, set}
}


export const createMQTTSensor = (name: string) => {
  const {topic} = createMQTTEntity({entityType:"sensor", name})

  const set = (state: string) => client.publish(`${topic}/state`, state, {retain: true, qos: 0}, ()=>console.log('config pushed') )
  return { set}
}
