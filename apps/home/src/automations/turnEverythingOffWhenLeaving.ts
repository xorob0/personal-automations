import { AlarmControlPanelState, callService, effect, shadowState } from "@herja/core";
import { alarm_control_panel, person, switches, vacuum } from "generated/src";

let timeoutID: NodeJS.Timer|undefined = undefined;

const outlets = [switches.desk_outlet, switches.christmas_tree_led_outlet]

const log = (...msg: any[]) => console.log(`[turnEverythingOffWhenLeaving]: ${msg.concat(" ")}`)

let ranOnce = false

export const turnEverythingOffWhenLeaving = () => {
  effect(() => {
    log(person.tim.entity.state + ' ' + person.gaby.entity.state)
    if(alarm_control_panel.alarmo.entity.state === AlarmControlPanelState.ARMED_NIGHT ){
      return
    }
    const isSomeoneHome = person.gaby.isHome() || person.tim.isHome()
    if (isSomeoneHome) {
      if(!ranOnce)
        return
      ranOnce = false
      log('clearTimeout ' + person.tim.entity.state + ' ' + person.gaby.entity.state)
      clearTimeout(timeoutID as number|undefined);
      try{
        vacuum.valetudo.returnToBase()
      }
      catch(e){
        log('vacuum error', e)
      }
    } else {
      if(ranOnce)
        return
      ranOnce = true
      log('setTimeout ' + person.tim.entity.state + ' ' + person.gaby.entity.state)
      timeoutID = setTimeout(() => {
        // TODO extract turn on/off all lights
        const allLights = Object.keys(shadowState).filter(key=> key.match(/^light\./)).filter(key=> !key.match(/light.[0-9a-f]{8}_[0-9a-f]{8}$/))
        try{
          callService('light', 'turn_off', undefined, {entity_id: allLights})
          outlets.forEach((outlet) =>{
            outlet.turnOff()
          })

          vacuum.valetudo.start()
        }
        catch(e){
          log("setTimeout callservice error", e)
        }
      }, 2 * 60 );
    }
  }, [person.tim, person.gaby]);
};
