import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RugModule } from './rug/rug.module';


import { AppComponent } from './app.component';


import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RugModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
