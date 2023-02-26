import { BetterHassEntity, effect } from "@herja/core";

let timeoutID: NodeJS.Timer|undefined = undefined;


export type AlertAfterDelayProps = {
  sensor: BetterHassEntity;
  condition?: () => boolean;
  callback: () => void;
  delay: number;
}

export const callbackAfterDelay = ({callback, delay, condition, sensor }:AlertAfterDelayProps) => {
  effect(()=>{
    if(condition ? condition() : sensor.entity.state === true)
    {
      timeoutID = setTimeout(()=>{
        callback()
      }, delay)
    }
    else{
      clearTimeout(timeoutID as number|undefined);
    }
  }, [sensor])
};
