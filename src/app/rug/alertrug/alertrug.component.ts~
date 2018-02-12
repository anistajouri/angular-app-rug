import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlertRug } from './alertrug';
import { AlertRugService } from './../alertrug/alertrug.service';
//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MP3PlaybackService } from '../mp3-playback/mp3-playback.service';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-alertrug',
  templateUrl: './alertrug.component.html',
  styleUrls: ['./alertrug.component.css']
})
export class AlertRugComponent implements OnInit, OnDestroy {
  currentAlertRug: AlertRug = new AlertRug();
  clock: Date;
  RugState: string;
  all_mp3playbacks: any[];
  active_mp3playbacks: any[];

  title = 'app';
  URL = 'ws://localhost:8000/stocks';
  socket:WebSocket;

  constructor(private mp3PlaybackService: MP3PlaybackService,
    private alertRugService: AlertRugService) {


  }

  ngOnInit() {
    // get the activated Rug
    this.alertRugService.getAlertRugById(1).subscribe(this.setAlertRug.bind(this));
    // get the active mp3 playback
    this.mp3PlaybackService.getAllMP3Playbacks()
      .subscribe(this.setActiveMP3Playback.bind(this));

    this.setsock();
  }


  setsock() {
//     this.socket = new WebSocket('ws://' + window.location.host + '/stocks/');
     this.socket = new WebSocket('ws://127.0.0.1:8000/stocks/');
    this.socket.onopen = () => {
      console.log('WebSockets connection created.');
    };

    this.socket.onmessage = (event) => {
      //  var data = JSON.parse(event.data);
      console.log("state:" + event.data);
      this.RugState = event.data;
    };

    if (this.socket.readyState == WebSocket.OPEN) {
      this.socket.onopen(null);
    }
    this.socket.send('start');    
  }

 start1() {
  this.socket.send('start');
 }

 stop1() {
  this.socket.send('stop');
 }


  ngOnDestroy() {


  }


  /**
   * Filter the received list of mp3playbacks to keep only the active one (is_default)
   */
  setActiveMP3Playback(mp3playbacks: MP3Playback[]) {
//    this.active_mp3playbacks = mp3playbacks;
    this.all_mp3playbacks = mp3playbacks;
    console.log(this.currentAlertRug.id);
    this.active_mp3playbacks = this.all_mp3playbacks.filter(
      mp3playback => mp3playback.id === this.currentAlertRug.mp3_playback
    )
  }

  switchActiveLight(alertrug: AlertRug){
    if (alertrug.is_light_active){
      alertrug.is_light_active = false
    }else{
       alertrug.is_light_active = true
    }
    // update the AlertRug
    this.alertRugService.updateAlertRugById(1, alertrug).subscribe(
        success => {          
          this.alertRugService.getAlertRugById(1).subscribe(this.setAlertRug.bind(this));
        },
        error => console.log("Error "+ error)
      );
  }

  switchActiveAudio(alertrug: AlertRug){
    if (alertrug.is_audio_active){
      alertrug.is_audio_active = false
    }else{
       alertrug.is_audio_active = true
    }
    // update the AlertRug
    this.alertRugService.updateAlertRugById(1, alertrug).subscribe(
        success => {          
          this.alertRugService.getAlertRugById(1).subscribe(this.setAlertRug.bind(this));
        },
        error => console.log("Error "+ error)
      );
  }

  switchActiveCamera(alertrug: AlertRug){
    if (alertrug.is_camera_active){
      alertrug.is_camera_active = false
    }else{
       alertrug.is_camera_active = true
    }
    // update the AlertRug
    this.alertRugService.updateAlertRugById(1, alertrug).subscribe(
        success => {          
          this.alertRugService.getAlertRugById(1).subscribe(this.setAlertRug.bind(this));
        },
        error => console.log("Error "+ error)
      );
  }


  switchActiveMessageAlert(alertrug: AlertRug){
    if (alertrug.is_message_active){
      alertrug.is_message_active = false
    }else{
       alertrug.is_message_active = true
    }
    // update the AlertRug
    this.alertRugService.updateAlertRugById(1, alertrug).subscribe(
        success => {          
          this.alertRugService.getAlertRugById(1).subscribe(this.setAlertRug.bind(this));
        },
        error => console.log("Error "+ error)
      );
  }

  setAlertRug(alertrug: AlertRug){
    this.currentAlertRug = alertrug;
  }

}
