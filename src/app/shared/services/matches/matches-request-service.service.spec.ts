import { TestBed } from '@angular/core/testing';

import { MatchesRequestServiceService } from './matches-request-service.service';

describe('MatchesRequestServiceService', () => {
  let service: MatchesRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
