import { callService, effect } from "@herja/core";
import { sensor } from "generated/src";
import { CronJob } from "cron"

let timeoutID: NodeJS.Timer|undefined = undefined;

const job = new CronJob('0 21 * * *', () => {
  if(sensor.wvgzzze2zmp011645_charging_state.state.state !== "charging" && parseInt(sensor.wvgzzze2zmp011645_state_of_charge.state.state) < 70)
  {
    timeoutID = setTimeout(()=>{
      callService('notify', 'mobile_app_s22', {title: 'Car not charging', message: `Your car has only ${sensor.wvgzzze2zmp011645_state_of_charge.state.state}% and is not charging`})
    }, 3*60*1000)
  }
  else{
    clearTimeout(timeoutID as number|undefined);
  }
})
export const alertCarNotCharging = job.start