import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertrugComponent } from './Alertrug.component';

describe('AlertrugComponent', () => {
  let component: AlertrugComponent;
  let fixture: ComponentFixture<AlertrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
