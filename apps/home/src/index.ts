import { configure } from '@herja/core';
import * as mqtt from 'mqtt';
import { light } from "generated/src";
import { garage } from "@herja/automations";
import { turnOnGardenLightWithGardenDoorAtNight } from "./automations/turnOnGardenLightWithGardenDoorAtNight";
import { turnOnGarageLightWhenADoorIsOpened } from "./automations/turnOnGarageLightWenADoorIsOpened";
import { turnEverythingOffWhenLeaving } from "./automations/turnEverythingOffWhenLeaving";

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
  garage(client);
};

base();
