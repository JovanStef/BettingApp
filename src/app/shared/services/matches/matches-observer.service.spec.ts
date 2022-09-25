import { TestBed } from '@angular/core/testing';

import { MatchesObserverService } from './matches-observer.service';

describe('MatchesObserverService', () => {
  let service: MatchesObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
