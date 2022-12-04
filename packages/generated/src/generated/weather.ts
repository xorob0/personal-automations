import {shadowState, Weather, WeatherProperties} from "@herja/core"
export type WeatherIDs = "home"
export type WeatherEntities = Record<WeatherIDs, Weather>

export const weather: Weather<WeatherIDs> = {

['home']: {
  entity_id: "weather.home",
get entity() { return {state: shadowState["weather.home"].state, attributes: shadowState["weather.home"].attributes} as WeatherProperties}
},

}
