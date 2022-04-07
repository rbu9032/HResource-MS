import { TestBed } from '@angular/core/testing';

import { HrservicesService } from './hrservices.service';

describe('HrservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrservicesService = TestBed.get(HrservicesService);
    expect(service).toBeTruthy();
  });
});
