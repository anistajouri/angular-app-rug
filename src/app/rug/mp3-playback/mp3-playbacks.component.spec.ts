/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MP3PlaybacksComponent } from './mp3-playback.component';

describe('MP3PlaybacksComponent', () => {
  let component: MP3PlaybacksComponent;
  let fixture: ComponentFixture<MP3PlaybacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MP3PlaybacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MP3PlaybacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
