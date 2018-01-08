
export class Player {
    status: string = "off";
    mp3_playback: number;   

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
