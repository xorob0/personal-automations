import { BetterHassEntity, effect } from "@herja/core";

let timeoutID: NodeJS.Timer|undefined = undefined;


export type AlertOpenedProps = {
  sensor: BetterHassEntity;
  isOpened?: () => boolean;
  onOpenedTooLong: () => void;
  delay: number;
}

export const alertOpened = ({onOpenedTooLong, delay, isOpened, sensor }:AlertOpenedProps) => {
  effect(()=>{
    if(isOpened ? isOpened() : sensor.entity.state === "on")
    {
      timeoutID = setTimeout(()=>{
        onOpenedTooLong()
      }, delay)
    }
    else{
      clearTimeout(timeoutID as number|undefined);
    }
  }, [sensor])
};
