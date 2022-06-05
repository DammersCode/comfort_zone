import { TestBed } from '@angular/core/testing';

import { IconRegistrationService } from './icon-registration.service';

describe('IconRegistrationService', () => {
  let service: IconRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
