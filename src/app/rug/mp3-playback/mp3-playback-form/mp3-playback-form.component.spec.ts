/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {} from 'jasmine';

import { MP3PlaybackFormComponent } from './mp3-playback-form.component';

describe('WebRadioFormComponent', () => {
  let component: MP3PlaybackFormComponent;
  let fixture: ComponentFixture<MP3PlaybackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MP3PlaybackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MP3PlaybackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
