import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlarmClockService } from './../alarm-clock/alarm-clock.service';
//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Player } from './../player/player';
import { PlayerService } from '../player/player.service';
import { WebRadio } from './../web-radios/web-radio';
import { SystemDateService } from './systemdate.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {SystemDate} from '../../system-date';
import { WebRadioService } from '../web-radios/web-radio.service';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  clock: Date;
  clockString: string;
  active_webradios: any[];
  active_alarms: AlarmClock[];
  all_webradios: any[];
  systemDateSubscribption: Subscription;
  clockIncrementSubscription: Subscription;
  player: Player;
  playerLoaded: boolean = false;


  title = 'app';
  URL = 'ws://localhost:8000/stocks';
  socket:WebSocket;

  constructor(private webRadioService: WebRadioService,
    private systemDateService: SystemDateService,
    private playerService: PlayerService,
    private alarmClockService: AlarmClockService) {


  }

  ngOnInit() {
    // get the backend server time and date
    this.systemDateSubscribption = this.systemDateService.getSystemDate().subscribe(this.setClockCallback.bind(this));
    // get the active web radio
    this.webRadioService.getAllWebRadios()
      .subscribe(this.filterDefaultWebRadio.bind(this));
    //console.log("ANISSSSSSSSS");
    // get the player status
    this.playerService.getPlayerStatus().subscribe(this.setPlayerStatus.bind(this));
    // get the list of activated Alarm
    this.alarmClockService.getAllAlarmClocks().subscribe(this.setActiveAlarmClocks.bind(this));

    this.setsock();
  }


  setsock() {
     console.log("setsock 8000:"+ window.location.host);
//     this.socket = new WebSocket('ws://' + window.location.host + '/stocks/');
     this.socket = new WebSocket('ws://127.0.0.1:8000/stocks/');
    console.log("setsock 2 ");
    this.socket.onopen = () => {
      console.log('WebSockets connection created.');
    };
    console.log("setsock 3 ");    

    this.socket.onmessage = (event) => {
      //  var data = JSON.parse(event.data);
      console.log("data from socket:" + event.data);
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
    this.clock.setSeconds(this.clock.getSeconds() + 1)
    this.clockString = "111111111"; 
    //DateFormatter.format(this.clock, 'en', 'EEEE, MMMM d, y H:mm:ss');
  }

  ngOnDestroy() {
    this.systemDateSubscribption.unsubscribe();
    if (this.clockIncrementSubscription) {
      this.clockIncrementSubscription.unsubscribe();
    }

  }

  /**
   * Filter the received list of webradios to keep only the active one (is_default)
   */
  filterDefaultWebRadio(webradios: WebRadio[]) {
    this.all_webradios = webradios;
    console.log(webradios);
    this.active_webradios = this.all_webradios.filter(
      webradio => webradio.is_default === true
    )
  }

  setPlayerStatus(player: Player){
    console.log("Player: " + player);
    this.player = player;
    this.playerLoaded = true;
  }

  switchPlayerStatus(){
    if (this.player.status == "on"){
        this.player.status = "off";
    }else{
      this.player.status = "on";
    }
    this.playerService.updatePlayer(this.player).subscribe(this.setPlayerStatus.bind(this));
  }

  setActiveAlarmClocks(alarmclocks: AlarmClock[]){
    this.active_alarms = alarmclocks.filter(
      alarms => alarms.is_active === true
    )

  }

}
