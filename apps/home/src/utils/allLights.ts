import { light } from "generated/src";
import { callService, shadowState } from "@herja/core";

export const missingLights = [light.toilet.entity_id, light.bathroom.entity_id, light.bathroom_spot_2.entity_id, light.bathroom_spot_1.entity_id]

type AllLightsProps = {exceptions: string[]}

export const getAllLights = ({exceptions}: AllLightsProps = {exceptions:[]} ) => Object.keys(shadowState).filter(key=>{
  if(!key.match(/^light\./))
    return false
  if(key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
    return false
  if(!missingLights.includes(key))
    return false
  if(!exceptions.includes(key))
  return true
})

export const turnOffAllLights = ({exceptions}: AllLightsProps = {exceptions:[]}) => {
  const allLights = getAllLights().filter(key => !exceptions.includes(key))
  callService('light', 'turn_off', undefined, {entity_id:allLights})
}