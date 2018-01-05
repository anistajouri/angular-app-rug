import { TestBed, inject } from '@angular/core/testing';

import { AlarmClockService } from './alarm-clock.service';

describe('AlarmClockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmClockService]
    });
  });

  it('should be created', inject([AlarmClockService], (service: AlarmClockService) => {
    expect(service).toBeTruthy();
  }));
});
