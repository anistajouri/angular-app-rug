import { Player } from './player';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { GlobalVariable } from './../../globals';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

  baseUrl: string = GlobalVariable.BASE_API_URL;

  constructor(private httpService: Http) {}

  getPlayerStatus(): Observable < Player > {
    var player = this.httpService.get(this.baseUrl + "/player/")
      .map((res: Response) => res.json())
    return player;
  }

  updatePlayer(player: Player): Observable < Player > {
    let body = JSON.stringify(player); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log("body:"+body);
    var returnedPlayer = this.httpService.post(this.baseUrl + "/player/", body, {
        headers: headers
      })
      .map((res: Response) => res.json())
    return returnedPlayer;
  }

}
