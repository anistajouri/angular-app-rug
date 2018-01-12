import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlarmClockService } from './../alarm-clock/alarm-clock.service';
//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Player } from './../player/player';
import { PlayerService } from '../player/player.service';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { SystemDateService } from './systemdate.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {SystemDate} from '../../system-date';
import { MP3PlaybackService } from '../mp3-playback/mp3-playback.service';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  clockString: string;
  StateRug: string;
  active_mp3playbacks: any[];
  active_alarms: AlarmClock[];
  all_mp3playbacks: any[];
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
    // get the active mp3 playback
    this.mp3PlaybackService.getAllMP3Playbacks()
      .subscribe(this.filterDefaultMP3Playback.bind(this));
    // get the player status
    this.playerService.getPlayerStatus().subscribe(this.setPlayerStatus.bind(this));
    // get the list of activated Alarm
    this.alarmClockService.getAllAlarmClocks().subscribe(this.setActiveAlarmClocks.bind(this));

  }

  ngOnDestroy() {

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
