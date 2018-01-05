import { TestBed, inject } from '@angular/core/testing';

import { SystemdateService } from './systemdate.service';

describe('SystemdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemdateService]
    });
  });

  it('should be created', inject([SystemdateService], (service: SystemdateService) => {
    expect(service).toBeTruthy();
  }));
});
