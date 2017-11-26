import { TestBed, inject } from '@angular/core/testing';

import { ConsultantsService } from './consultants.service';

describe('ConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultantsService]
    });
  });

  it('should be created', inject([ConsultantsService], (service: ConsultantsService) => {
    expect(service).toBeTruthy();
  }));
});
