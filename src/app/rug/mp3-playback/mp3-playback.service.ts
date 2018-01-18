import { GlobalVariable } from './../../globals';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MP3Playback } from './mp3-playback';

@Injectable()
export class MP3PlaybackService {
 
  baseUrl: string = GlobalVariable.BASE_API_URL;

  constructor(private httpService: Http) {}

  // GET /mp3playbacks
  getAllMP3Playbacks(): Observable < MP3Playback[] > {    
    var mp3Playbacks = this.httpService.get(this.baseUrl + "/mp3playback/")      
      .map((res: Response) => res.json())
    console.log("hhhh:"+JSON.stringify(mp3Playbacks));
    return mp3Playbacks;
  }

  // GET /mp3playbacks/:id
  getMP3PlaybackById(id: number): Observable < MP3Playback > {
    var returnedMP3Playback = this.httpService.get(this.baseUrl + "/mp3playback/" + id)      
      .map((res: Response) => res.json())
    return returnedMP3Playback;
  }

  // POST /mp3playbacks
  addMP3Playback(mp3playback: MP3Playback): Observable < MP3Playback > {
    let body = JSON.stringify(mp3playback); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    var returnedMP3Playback = this.httpService.post(this.baseUrl + "/mp3playback/", body, {
        headers: headers
      })
      .map((res: Response) => res.json())
    return returnedMP3Playback;
  }

  // DELETE /mp3playbacks/:id
  deleteMP3PlaybackById(id: number): Observable < any > {
    console.log("call delete service, delete mp3playback id " + id);
    return this.httpService.delete(this.baseUrl + "/mp3playback/" + id)
      .map((res: Response) => res.json());
  }

  //  PUT /todos/:id
  updateMP3PlaybackById(id: number, values: Object = {}): Observable < MP3Playback > {

    let body = JSON.stringify(values); // Stringify payload
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    var returnedMP3Playback = this.httpService.put(this.baseUrl + "/mp3playback/" + id, body, {
        headers: headers
      })
      .map((res: Response) => res.json())
    return returnedMP3Playback;
  }
}
