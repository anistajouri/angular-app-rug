import { Router } from '@angular/router';
import { platform } from 'os';
import { Player } from '../player/player';
import { PlayerService } from './../player/player.service';
import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { MP3PlaybackService } from './mp3-playback.service';
import { MP3Playback } from './mp3-playback';

@Component({
  selector: 'app-mp3-playbacks',
  templateUrl: './mp3-playbacks.component.html',
  styleUrls: ['./mp3-playbacks.component.css']
})
export class MP3PlaybacksComponent implements OnInit {

  mp3playbacks: MP3Playback[] = [];
  mp3PlaybackToDelete: MP3Playback;
  modalConfirmDeleteMP3PlaybackIsVisible: Boolean = false;
  message: String;

  constructor(private mp3PlaybackService: MP3PlaybackService, private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.refreshMP3PlaybackList();
  }

  deleteMP3Playback(mp3PlaybackToDelete: MP3Playback) {
    console.log("Deleting" + mp3PlaybackToDelete);
    this.mp3PlaybackService.deleteMP3PlaybackById(mp3PlaybackToDelete.id).subscribe(success => this.refreshMP3PlaybackList(),
      error => console.log("error: " + error))

  }

  confirmDeleteMP3Playback(mp3playback: MP3Playback) {
    console.log("confirmDeleteMP3Playback clicked");
    this.modalConfirmDeleteMP3PlaybackIsVisible = true;
    this.mp3PlaybackToDelete = mp3playback;
    this.message = "Are you sure you want to delete " + this.mp3PlaybackToDelete.name
  }

  onConfirm(agreed: boolean) {
    this.modalConfirmDeleteMP3PlaybackIsVisible = false;
    if (agreed) {
      this.deleteMP3Playback(this.mp3PlaybackToDelete);
    }
  }

  setMP3Playbacks(mp3playbacks: MP3Playback[]) {
    console.log(mp3playbacks);
    this.mp3playbacks = mp3playbacks;
  }

  refreshMP3PlaybackList() {
    console.log("Refresh the mp3 playback list");
    this.mp3PlaybackService.getAllMP3Playbacks().subscribe(this.setMP3Playbacks.bind(this));
  }

  playMP3Playback(mp3playback: MP3Playback) {
    console.log("Play mp3 id " + mp3playback.id);
    let player = new Player();
    player.status = "on";
    player.mp3_playback = mp3playback.id;
    this.playerService.updatePlayer(player).subscribe(
        success => {          
          this.router.navigate(["homepage"]);
        },
        error => console.log("Error "+ error)
      );

  }


}
