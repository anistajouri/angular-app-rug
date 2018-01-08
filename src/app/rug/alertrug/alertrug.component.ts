import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlertRug } from './alertrug';
import { AlarmClockService } from './../alarm-clock/alarm-clock.service';
//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Player } from './../player/player';
import { PlayerService } from '../player/player.service';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { SystemDateService } from '../homepage/systemdate.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {SystemDate} from '../../system-date';
import { MP3PlaybackService } from '../mp3-playback/mp3-playback.service';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-alertrug',
  templateUrl: './alertrug.component.html',
  styleUrls: ['./alertrug.component.css']
})
export class AlertrugComponent implements OnInit, OnDestroy {
  currentAlertRug: AlertRug = new AlertRug();  
  clock: Date;
  RugState: string;
  active_mp3playbacks: any[];
  active_alarms: AlarmClock[];
  all_mp3playbacks: any[];
  systemDateSubscribption: Subscription;
  clockIncrementSubscription: Subscription;
  player: Player;
  playerLoaded: boolean = false;


  title = 'app';
  URL = 'ws://localhost:8000/stocks';
  socket:WebSocket;

  constructor(private mp3PlaybackService: MP3PlaybackService,
    private systemDateService: SystemDateService,
    private playerService: PlayerService,
    private alarmClockService: AlarmClockService) {


  }



  ngOnInit() {
    // get the backend server time and date
    this.systemDateSubscribption = this.systemDateService.getSystemDate().subscribe(this.setClockCallback.bind(this));
    // get the active web radio
    this.mp3PlaybackService.getAllMP3Playbacks()
      .subscribe(this.filterDefaultMP3Playback.bind(this));
    // get the player status
    this.playerService.getPlayerStatus().subscribe(this.setPlayerStatus.bind(this));
    // get the list of activated Alarm
    this.alarmClockService.getAllAlarmClocks().subscribe(this.setActiveAlarmClocks.bind(this));

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
      console.log("data from socket:" + event.data);
      var NumEvent = +event.data;
      if (NumEvent>150) {
         console.log("NumEvent superior to 150");
         this.RugState = "Tapis pressé";
      }
      else
      {
         this.RugState = "Rien sur le tapis";
      }
      this.RugState = event.data;
      this.title = event.data;
    };

    if (this.socket.readyState == WebSocket.OPEN) {
      this.socket.onopen(null);
    }
  }

 start1() {
  this.socket.send('start');
 }

 stop1() {
  this.socket.send('stop');
 }

  // subcribe return the target object
  setClockCallback(date: Date) {
    this.clock = date;
    this.clockIncrementSubscription = Observable
      .interval(1000)
      .subscribe(this.incrementDate.bind(this));

  }

  incrementDate() {
    //this.clock.setSeconds(this.clock.getSeconds() + 1)
    //this.clockString = "111111111"; 
    //DateFormatter.format(this.clock, 'en', 'EEEE, MMMM d, y H:mm:ss');
  }

  ngOnDestroy() {
    this.systemDateSubscribption.unsubscribe();
    if (this.clockIncrementSubscription) {
      this.clockIncrementSubscription.unsubscribe();
    }

  }

  /**
   * Filter the received list of mp3playbacks to keep only the active one (is_default)
   */
  filterDefaultMP3Playback(mp3playbacks: MP3Playback[]) {
    this.all_mp3playbacks = mp3playbacks;
    console.log(mp3playbacks);
    this.active_mp3playbacks = this.all_mp3playbacks.filter(
      mp3playback => mp3playback.is_default === true
    )
  }

  setPlayerStatus(player: Player){
    console.log("Player: " + player);
    this.player = player;
    this.playerLoaded = true;
  }


  switchActiveFirstPassAlert(alertrug: AlertRug){
    if (alertrug.is_active_first_pass){
      alertrug.is_active_first_pass = false
    }else{
       alertrug.is_active_first_pass = true
    }
    // update the AlertRug
/*    this.alarmClockService.updateAlarmClockById(alarmclock.id, alarmclock).subscribe(
        success => {          
          this.refreshAlarmClockList();
        },
        error => console.log("Error "+ error)
      );
*/

  }

  switchActiveSecondPassAlert(alertrug: AlertRug){
    if (alertrug.is_active_second_pass){
      alertrug.is_active_second_pass = false
    }else{
       alertrug.is_active_second_pass = true
    }
  }


  switchActivePlaybackAlert(alertrug: AlertRug){
    if (alertrug.is_playback_active){
      alertrug.is_playback_active = false
    }else{
       alertrug.is_playback_active = true
    }
  }

  /*
    alert_duration_Seconds: number;
    auto_stop_seconds: number;
    stop_seconds_hit_rug: number;
   */



  setActiveAlarmClocks(alarmclocks: AlarmClock[]){
    this.active_alarms = alarmclocks.filter(
      alarms => alarms.is_active === true
    )

  }

}
