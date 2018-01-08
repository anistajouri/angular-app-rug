import { TestBed, inject } from '@angular/core/testing';

import { AlertrugService } from './alertrug.service';

describe('AlertrugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertrugService]
    });
  });

  it('should be created', inject([AlertrugService], (service: AlertrugService) => {
    expect(service).toBeTruthy();
  }));
});
