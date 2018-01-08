import { NoSwitchCaseFallThroughWalker } from 'tslint/lib/rules/noSwitchCaseFallThroughRule';
import { Component, OnInit } from '@angular/core';
import { MP3PlaybackService } from '../mp3-playback.service';
import { MP3Playback } from '../mp3-playback';
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-mp3-playback-form',
  templateUrl: './mp3-playback-form.component.html',
  styleUrls: ['./mp3-playback-form.component.css']
})
export class MP3PlaybackFormComponent implements OnInit {

  newMP3playback: MP3Playback = new MP3Playback();
  existingMP3Playback: Boolean = true;
  private subscription: Subscription;

  constructor(
    private MP3PlaybackService: MP3PlaybackService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // get the id in the URL
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        let mp3playbackId = param['id'];
        console.log(mp3playbackId);
        if (!mp3playbackId) {
          console.log("no id");
          this.existingMP3Playback = false;
          return
        } else {
          console.log("get an id");
          // we have an ID, load the object from it
          this.MP3PlaybackService.getMP3PlaybackById(mp3playbackId).subscribe(newMP3playback => this.newMP3playback = newMP3playback,
            error => console.error('Error: ' + error),
            () => console.log('Completed!'));
          console.log(this.newMP3playback);
        }
      });

  }

  onSubmit() {
    console.log("mp3-playback form: onSubmit clicked")
    // check if the id alrady exist    
    if (this.existingMP3Playback) {
      // let MP3PlaybackToUpdate = this.MP3PlaybackService.getMP3PlaybackById(this.newMP3playback.id).toPromise()      
      console.log("mp3-playback form: mp3playback with id "+ this.newMP3playback.id +" already exist. Call update service");
      this.MP3PlaybackService.updateMP3PlaybackById(this.newMP3playback.id, this.newMP3playback).subscribe(
        success => {          
          this.router.navigate(["mp3playbacks"]);
        },
        error => console.log("Error "+ error)
      );
    } else {
      console.log("Create new mp3 playback");
      this.MP3PlaybackService.addMP3Playback(this.newMP3playback).subscribe(
        success => {          
          this.router.navigate(["mp3playbacks"]);
        },
        error => console.log("Error "+ error)
      );
      
    }
    
  }

}
