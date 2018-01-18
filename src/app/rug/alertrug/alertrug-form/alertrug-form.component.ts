import { PopupComponent } from './../../popup/popup.component';
import { error } from 'util';
import { AlertRug } from './../alertrug';
import { AlertRugService } from "../alertrug.service";
import { MP3PlaybackService } from "../../mp3-playback/mp3-playback.service";
import { MP3Playback } from "../../mp3-playback/mp3-playback";
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-alertrug-form',
  templateUrl: './alertrug-form.component.html',
  styleUrls: ['./alertrug-form.component.css']
})
export class AlertRugFormComponent implements OnInit {

  updatedAlertRug: AlertRug = new AlertRug();
  MP3Playbacks: MP3Playback[];
  existingAlertRug: boolean = true;
  @ViewChild(PopupComponent) popupComponent: PopupComponent;

  // list of availlable minutes & hours
  max_stop_seconds_hit_rug: number[];
  private subscription: Subscription;

  constructor(private MP3PlaybackService: MP3PlaybackService,
    private alertRugService: AlertRugService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.max_stop_seconds_hit_rug = this.create_range(60);
  }

  ngOnInit() {
    // get the id in the URL
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        let alertRugId = 1;

        console.log("get an id:",alertRugId);
        // we have an ID, load the object from it
        this.alertRugService.getAlertRugById(alertRugId).subscribe(
          this.setExistingAlertRug.bind(this),
          error => console.error('Error: ' + error),
          () => console.log('Completed! Get the config ' + this.updatedAlertRug.mp3_playback));
      });

    // get the list of MP3Playback
    this.MP3PlaybackService.getAllMP3Playbacks().subscribe(this.setMP3Playbacks.bind(this))
  }

  onSubmit() {
    console.log("alertrug form: onSubmit clicked")
    console.log("Only one alertrug, updating it with val" + this.updatedAlertRug);
    this.alertRugService.updateAlertRugById(/*this.updatedAlertRug.id*/ 1, this.updatedAlertRug).subscribe(
      success => {
        this.router.navigate(["alertrug"]);
      },
      error => console.log("Error "+ error)
    );
  }

  create_range(maxVal: number): number[] {
    var x = [];
    var i = 0;
    while (x.push(i++) <= maxVal) {};
    return x;
  }

  setMP3Playbacks(MP3Playbacks: MP3Playback[]) {
    console.log(MP3Playbacks);
    this.MP3Playbacks = MP3Playbacks;
  }

  setExistingAlertRug(alertRug: AlertRug){
    this.updatedAlertRug = alertRug;
  }

}