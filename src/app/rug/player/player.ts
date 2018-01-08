
export class Player {
    status: string = "off";
    mp3Playback: number;   

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
