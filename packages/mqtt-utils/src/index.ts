import mqtt from "mqtt"

const client = mqtt.connect('mqtt://192.168.2.65:1883' );

// TODO reuse this, use home assistant for all available entities
export const createMQTTDeviceTracker = (name: string) => {
  if( !client.connected){
    throw Error('MQTT client not connected')
  }
  const unique_id = name.replace(/[^a-zA-Z\d:]/, "_").toLowerCase()
  const topic = `homeassistant/device_tracker/${unique_id}`
  const config = {name, unique_id, state_topic: `${topic}/state`,payload_home: "home", payload_not_home: "not_home" }
  client.publish(`${topic}/config`, JSON.stringify(config) )
  const setHome = () => client.publish(`${topic}/state`, 'home' )
  const setNotHome = () => client.publish(`${topic}/state`, 'not_home' )
  const set = (state: string) => client.publish(`${topic}/state`, state )
  return {setHome, setNotHome, set}
}

export const createMQTTSensor = (name: string) => {
  const topic = `homeassistant/sensor/${name}`
  const config = {name, state_topic: `${topic}/state`}
  client.publish(`${topic}/config`, JSON.stringify(config) )

  const set = (state: string) => client.publish(`${topic}/state`, state, {retain: true, qos: 0}, ()=>console.log('config pushed') )
  return { set}
}
