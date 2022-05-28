import { configure } from '@herja/core';
import * as mqtt from 'mqtt';
import { garage } from "@herja/automations";
import { turnOnGardenLightWithGardenDoorAtNight } from "./automations/turnOnGardenLightWithGardenDoorAtNight";
import { turnOnGarageLightWhenADoorIsOpened } from "./automations/turnOnGarageLightWenADoorIsOpened";
import { turnEverythingOffWhenLeaving } from "./automations/turnEverythingOffWhenLeaving";
import { turnOnSomeLightsWhenComingHome } from "./automations/turnOnSomeLightsWhenComingHome";
import { nightMode } from "./automations/nightMode";
import { wallSwitches } from "./automations/wallSwitches";
import { automaticAlarm } from "./automations/automaticAlarm";
import { tripodButton } from "./automations/tripodButton";
import { coffeeMachineButton } from "./automations/coffeeMachineButton";
import { alertFridgeOpen } from "./automations/alertFridgeOpen";
import { wakeup } from "./automations/wakeup";
import { garageRemote } from "./automations/garageRemote";
import { turnOnTripodOnSunset } from "./automations/turnOnTripodOnSunset";
import { turnOnToiletLightWithDoor } from "./automations/TurnOnToiletLightWithDoor";

require('dotenv').config();

const base = async () => {
  if (!process.env.API_URL || !process.env.API_TOKEN)
    throw new Error('You need to specify API_URL and API_TOKEN');
  const client = mqtt.connect('mqtt://192.168.2.65:1883');
  await configure({
    url: process.env.API_URL,
    access_token: process.env.API_TOKEN,
    path: '../../packages/generated/src',
  });
  turnOnGarageLightWhenADoorIsOpened();
  turnOnGardenLightWithGardenDoorAtNight();
  turnEverythingOffWhenLeaving()
  turnOnSomeLightsWhenComingHome()
  nightMode()
  wallSwitches()
  automaticAlarm()
  tripodButton()
  coffeeMachineButton()
  alertFridgeOpen()
  wakeup()
  garageRemote()
  turnOnTripodOnSunset()
  turnOnToiletLightWithDoor()
  garage(client);
};

base();
