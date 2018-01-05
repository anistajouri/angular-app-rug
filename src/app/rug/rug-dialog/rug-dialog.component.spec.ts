import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RugDialogComponent } from './rug-dialog.component';

describe('RugDialogComponent', () => {
  let component: RugDialogComponent;
  let fixture: ComponentFixture<RugDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
