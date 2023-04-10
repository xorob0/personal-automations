import { configure } from "@herja/core";
import { garage } from "@herja/automations";
import { turnOnGardenLightWithGardenDoorAtNight } from "./automations/turnOnGardenLightWithGardenDoorAtNight";
import { turnOnGarageLightWhenADoorIsOpened } from "./automations/turnOnGarageLightWenADoorIsOpened";
import { nightMode } from "./automations/nightMode";
import { wallSwitches } from "./automations/wallSwitches";
import { automaticAlarm } from "./automations/automaticAlarm";
import { tripodButton } from "./automations/tripodButton";
import { coffeeMachineButton } from "./automations/coffeeMachineButton";
import { garageRemote } from "./automations/garageRemote";
import { turnOnTripodOnSunset } from "./automations/turnOnTripodOnSunset";
import { turnOnToiletLightWithDoor } from "./automations/TurnOnToiletLightWithDoor";
import { TurnOnUpstairsHallWithSensor } from "./automations/TurnOnUpstairsHallWithSensor";
import { BedroomACTimer } from "./automations/bedroomACTimer";
import { turnOnSomeLightsWhenComingHome } from "./automations/turnOnSomeLightsWhenComingHome";
import { turnEverythingOffWhenLeaving } from "./automations/turnEverythingOffWhenLeaving";
import { personDetection } from "./automations/personDetection";
import { deskButton } from "./automations/DeskButton";
import { alertCarUnplugged } from "./automations/alertCarUnplugged";
import { allAlertsOpenedTooLong } from "./automations/alertOpenedTooLong";
import { roomBusy } from "./automations/roomBusy";
import { createHumidifiers } from "./automations/humidifiers";
import { hvacOnHumidity } from "./automations/hvacOnHumidity";
import { machines } from "./automations/machines";
import { livingRoomRemote } from "./automations/LivingRoomRemote";
import { hallPresenceSensor } from "./automations/HallPresenceSensor";

require('dotenv').config();

const base = async () => {
  if (!process.env.API_URL || !process.env.API_TOKEN)
    throw new Error('You need to specify API_URL and API_TOKEN');
  await configure({
    url: process.env.API_URL,
    access_token: process.env.API_TOKEN,
    path: '../../packages/generated/src',
  });
  turnOnGarageLightWhenADoorIsOpened();
  turnOnGardenLightWithGardenDoorAtNight();
  turnEverythingOffWhenLeaving();
  turnOnSomeLightsWhenComingHome()
  nightMode()
  wallSwitches()
  automaticAlarm()
  tripodButton()
  coffeeMachineButton()
  allAlertsOpenedTooLong()
  garageRemote()
  turnOnTripodOnSunset()
  turnOnToiletLightWithDoor()
  TurnOnUpstairsHallWithSensor()
  personDetection()
  garage();
  BedroomACTimer();
  deskButton();
  alertCarUnplugged()
  roomBusy()
  createHumidifiers()
  hvacOnHumidity()
  machines()
  // livingRoomRemote()
  // hallPresenceSensor()
};

base().catch(e => console.error("[index] error: ", e));
