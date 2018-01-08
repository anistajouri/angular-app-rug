import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { MP3Playback } from '../mp3-playback/mp3-playback';
import { AlarmClock } from '../alarm-clock/alarm-clock';

export class AlertRug {
    id: number;
    name: string = '';
    is_active_first_pass: boolean = false;
    is_active_second_pass: boolean = false;
    is_playback_active: boolean = false;
    alert_duration_Seconds: number;
    auto_stop_seconds: number;
    stop_seconds_hit_rug: number;
    alarmclock: AlarmClock;
    mp3playback: MP3Playback;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
