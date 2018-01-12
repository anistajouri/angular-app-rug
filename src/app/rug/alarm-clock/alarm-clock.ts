import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { MP3Playback } from '../mp3-playback/mp3-playback';

export class AlarmClock {
    id: number;
    name: string = '';
    monday: boolean  = false;
    tuesday: boolean  = false;
    wednesday: boolean  = false;
    thursday: boolean  = false;
    friday: boolean  = false;
    saturday: boolean  = false;
    sunday: boolean  = false;
    hour: number;
    minute: number;
    auto_stop_seconds: number;
    stop_seconds_hit_rug: number;
    is_active: boolean = false;
    mp3_playback: MP3Playback;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
