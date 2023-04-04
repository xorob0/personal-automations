import { AlarmControlPanelState, callService, effect, shadowState } from "@herja/core";
import { fan, alarm_control_panel, person, switches, vacuum, binary_sensor } from "generated/src";

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
      fan.afzuiging_badkamer.setSpeedPercentage?.(0)
      try{
        vacuum.valetudo_downstair_vacuum.returnToBase()
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
          // TODO export this list to reuse
          outlets.forEach((outlet) =>{
            outlet.turnOff()
          })

          fan.afzuiging_badkamer.setSpeedPercentage?.(100)
          vacuum.valetudo_downstair_vacuum.start()
          if(binary_sensor.washing_machine_washing.isOn()){
            callService('notify', 'mobile_app_tims_iphone', {title: 'The washing maching is still on', message: `If you leave too long it might not smell good`})
          }
        }
        catch(e){
          log("setTimeout callservice error", e)
        }
      }, 2 * 60 );
    }
  }, [person.tim, person.gaby]);
};
