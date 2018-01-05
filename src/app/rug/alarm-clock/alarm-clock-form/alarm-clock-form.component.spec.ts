import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmClockFormComponent } from './alarm-clock-form.component';

describe('AlarmClockFormComponent', () => {
  let component: AlarmClockFormComponent;
  let fixture: ComponentFixture<AlarmClockFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmClockFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmClockFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
