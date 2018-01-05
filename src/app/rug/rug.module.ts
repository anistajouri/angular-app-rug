import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { CommonModule } from '@angular/common';
import { HomepageService } from './homepage.service';
import { HomepageComponent } from './homepage/homepage.component';
import { SystemdateService } from './systemdate.service';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
//import { AlarmClockService } from './alarm-clock/alarm-clock.service';
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
import { WebRadiosComponent } from './web-radios/web-radios.component';
import { WebRadioFormComponent } from './web-radios/web-radio-form/web-radio-form.component';


import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { WebRadioService } from './web-radios/web-radio.service';
import { SystemDateService } from './homepage/systemdate.service';
import {AlarmClockService} from "./alarm-clock/alarm-clock.service";


@NgModule({
declarations: [
    WebRadiosComponent,
    HomepageComponent,
    AlarmClockComponent,
    WebRadioFormComponent,
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
        path: 'webradios',
        component: WebRadiosComponent
      },
      {
        path: 'webradios/new',
        component: WebRadioFormComponent
      },
      { path: 'webradios/:id',
       component: WebRadioFormComponent
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
//  declarations: [HomepageComponent, AlarmClockComponent, RugDialogComponent, PopupComponent, AlarmClockFormComponent, ConfirmDeleteModalComponent, WebRadiosComponent, WebRadioFormComponent],
//  providers: [HomepageService, SystemdateService, AlarmClockService],
  providers: [WebRadioService, AlarmClockService, SystemDateService, PlayerService, OptionService, {provide: LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap: [RugDialogComponent]
})
export class RugModule { }
