import { MP3Playback } from "../mp3-playback/mp3-playback";
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.css']
})
export class ConfirmDeleteModalComponent {

  @Input() message: String;
  @Input() modalConfirmDeleteIsVisible: Boolean;
  @Output() onConfirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  canceldeleteMP3Playback(){
    this.modalConfirmDeleteIsVisible = false;
    this.onConfirm.emit(false);
  }

  confirmDeleteMP3Playback(){
    this.modalConfirmDeleteIsVisible = false;
    this.onConfirm.emit(true);

  }



}