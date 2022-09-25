import { TestBed } from '@angular/core/testing';

import { SportsRequestServiceService } from './sports-request-service.service';

describe('SportsRequestServiceService', () => {
  let service: SportsRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
