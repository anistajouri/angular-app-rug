import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { MP3Playback } from '../mp3-playback/mp3-playback';
import { AlarmClock } from '../alarm-clock/alarm-clock';

export class AlertRug {
    id: number;
    is_light_active: boolean = false;
    is_audio_active: boolean = false;
    is_camera_active: boolean =  false;
    is_message_active: boolean = false;
    stop_seconds_hit_rug: number;
    mp3_playback: MP3Playback;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
