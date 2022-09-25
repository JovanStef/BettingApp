import { TestBed } from '@angular/core/testing';

import { SportsObserverService } from './sports-observer.service';

describe('SportsObserverService', () => {
  let service: SportsObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
