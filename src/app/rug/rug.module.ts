import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { CommonModule } from '@angular/common';
import { HomepageService } from './homepage.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AlertrugService } from './alertrug.service';
import { AlertrugComponent } from './alertrug/alertrug.component';

import { SystemdateService } from './systemdate.service';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
import { RouterModule } from '@angular/router';
import { OptionComponent } from './option/option.component';
import { OptionService } from './option/option.service';
import { PlayerService } from './player/player.service';


import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RugDialogComponent } from './rug-dialog/rug-dialog.component';
import { PopupComponent } from './popup/popup.component';
import { AlarmClockFormComponent } from './alarm-clock/alarm-clock-form/alarm-clock-form.component';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm-delete-modal.component';
import { MP3PlaybacksComponent } from './mp3-playback/mp3-playbacks.component';
import { MP3PlaybackFormComponent } from './mp3-playback/mp3-playback-form/mp3-playback-form.component';


import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MP3PlaybackService } from './mp3-playback/mp3-playback.service';
import { SystemDateService } from './homepage/systemdate.service';
import {AlarmClockService} from "./alarm-clock/alarm-clock.service";


@NgModule({
declarations: [
    MP3PlaybacksComponent,
    HomepageComponent,
    AlertrugComponent,
    AlarmClockComponent,
    MP3PlaybackFormComponent,
    AlarmClockFormComponent,
    ConfirmDeleteModalComponent,
    OptionComponent,
    PopupComponent,
    RugDialogComponent,
  ],  
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MatSlideToggleModule,
    FileUploadModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'alertrug',
        component: AlertrugComponent
      },
      {
        path: 'mp3playbacks',
        component: MP3PlaybacksComponent
      },
      {
        path: 'mp3playbacks/new',
        component: MP3PlaybackFormComponent
      },
      { path: 'mp3playbacks/:id',
       component: MP3PlaybackFormComponent
      },
      {
        path: 'alarms',
        component: AlarmClockComponent
      },
      {
        path: 'alarms/new',
        component: AlarmClockFormComponent
      },
      {
        path: 'alarms/:id',
        component: AlarmClockFormComponent
      },
      {
        path: 'option',
        component: OptionComponent
      }
    ])
  ],
  exports: [RugDialogComponent],
//  declarations: [HomepageComponent, AlarmClockComponent, RugDialogComponent, PopupComponent, AlarmClockFormComponent, ConfirmDeleteModalComponent, MP3PlaybacksComponent, MP3PlaybackFormComponent],
//  providers: [HomepageService, SystemdateService, AlarmClockService],
  providers: [MP3PlaybackService, AlertrugService, AlarmClockService, SystemDateService, PlayerService, OptionService, {provide: LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap: [RugDialogComponent]
})
export class RugModule { }
