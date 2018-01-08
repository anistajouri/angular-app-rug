export class MP3Playback {
    id: number;
    name: string = '';
    mp3_playback: string = '';
    is_default: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
