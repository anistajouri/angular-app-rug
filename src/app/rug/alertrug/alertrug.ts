import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { MP3Playback } from '../mp3-playback/mp3-playback';
import { AlarmClock } from '../alarm-clock/alarm-clock';

export class AlertRug {
    id: number;
    is_active_first_pass: boolean = false;
    is_active_second_pass: boolean = false;
    is_playback_active: boolean = false;
    stop_seconds_hit_rug: number;
    mp3_playback: MP3Playback;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
