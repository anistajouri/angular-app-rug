import { Injectable } from '@angular/core';
import { GlobalVariable } from './../../globals';
import { Http, Response, Headers } from '@angular/http';
import {AlertRug} from "./alertrug";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertRugService {

  baseUrl: string = GlobalVariable.BASE_API_URL;

  constructor(private httpService: Http) { }

  // GET /alertrug
/*  getAllAlertRugs(): Observable <AlertRug[]> {
    var alertrug = this.httpService.get(this.baseUrl + "/alertrug/")      
      .map((res: Response) => res.json())
    return alertrug;
  }
*/
  // GET /alertrug/:id
  getAlertRugById(id: number): Observable <AlertRug> {
    var returnedAlertRug = this.httpService.get(this.baseUrl + "/alertrug/" + id)      
      .map((res: Response) => res.json())
    return returnedAlertRug;
  }

  updateAlertRugById(id: number, values: Object = {}): Observable <AlertRug> {        
    let body = JSON.stringify(values); // Stringify payload
    console.log("alertrug body:", body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    var returnedAlertRug = this.httpService.put(this.baseUrl + "/alertrug/" + id, body, {
        headers: headers
      })
      .map((res: Response) => res.json())
    return returnedAlertRug;
  }
}
