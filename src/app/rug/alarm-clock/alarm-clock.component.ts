import {AlarmClockService} from "./alarm-clock.service";
import { Component, OnInit } from '@angular/core';
import { AlarmClock } from './alarm-clock';


//import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Player } from './../player/player';
import { PlayerService } from '../player/player.service';
import { MP3Playback } from './../mp3-playback/mp3-playback';
import { SystemDateService } from '../homepage/systemdate.service';
import { SystemDate } from '../../system-date';
import { Observable, Subscription } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.css']
})
export class AlarmClockComponent implements OnInit {

  alarmclocks: AlarmClock[] = [];

  modalConfirmDeleteAlarmClockIsVisible: Boolean = false;
  message: String;
  alarmClockToDelete: AlarmClock;
  clockString: String;

  clock: Date;
  RugState: string;
  systemDateSubscribption: Subscription;
  clockIncrementSubscription: Subscription;


  constructor(
    private alarmClockService: AlarmClockService,
    private systemDateService: SystemDateService,
  ) { }

  ngOnInit() {
    this.refreshAlarmClockList();
    // get the backend server time and date
    this.systemDateSubscribption = this.systemDateService.getSystemDate().subscribe(this.setClockCallback.bind(this));

  }

  ngOnDestroy() {
    this.systemDateSubscribption.unsubscribe();
    if (this.clockIncrementSubscription) {
      this.clockIncrementSubscription.unsubscribe();
    }
  }

  deleteAlarmClock(alarmclock){
    // console.log(alarmclock)
    this.alarmClockService.deleteAlarmClockById(alarmclock.id).subscribe(success => this.refreshAlarmClockList(),
      error => console.log("error: " + error));

  }

  confirmDeleteAlarmClock(alarmclock: AlarmClock){
      console.log("confirmDeleteAlarmClock clicked");
      this.modalConfirmDeleteAlarmClockIsVisible = true;
      this.alarmClockToDelete = alarmclock;
      this.message = "Are you sure you want to delete the alarm \"" + this.alarmClockToDelete.name + "\""
  }

  onConfirm(agreed: boolean) {
    this.modalConfirmDeleteAlarmClockIsVisible = false;
    if (agreed){
      this.deleteAlarmClock(this.alarmClockToDelete);
    }
  }

  setAlarmClocks(alarmclocks: AlarmClock[]){
    this.alarmclocks = alarmclocks;
  }

  refreshAlarmClockList(){
      this.alarmClockService.getAllAlarmClocks().subscribe(this.setAlarmClocks.bind(this));
  }

  /** 
   * Switch the status of the target AlarmClock. If the alarm is active, then switch to inactive and vice versa
   * */  
  switchActiveAlarmClock(alarmclock: AlarmClock){
    if (alarmclock.is_active){
      alarmclock.is_active = false
    }else{
       alarmclock.is_active = true
    }
    // update the AlarmClock
    this.alarmClockService.updateAlarmClockById(alarmclock.id, alarmclock).subscribe(
        success => {          
          this.refreshAlarmClockList();
        },
        error => console.log("Error "+ error)
      );
  }


  // subcribe return the target object
  setClockCallback(date: Date) {
    this.clock = date;
    //this.clock.setHours(this.clock.getHours()-1);
    this.clockIncrementSubscription = Observable
      .interval(1000)
      .subscribe(this.incrementDate.bind(this));

  }

  incrementDate() {
    this.clock.setSeconds(this.clock.getSeconds() + 1)
    this.clockString = this.clock.toLocaleString();
  }


}
