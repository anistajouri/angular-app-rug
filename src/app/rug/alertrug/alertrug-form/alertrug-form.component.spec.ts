import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRugFormComponent } from './alertrug-form.component';

describe('AlertRugFormComponent', () => {
  let component: AlertRugFormComponent;
  let fixture: ComponentFixture<AlertRugFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertRugFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertRugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
