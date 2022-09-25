import { TestBed } from '@angular/core/testing';

import { MatchesUtilsService } from './matches-utils.service';

describe('MatchesUtilsService', () => {
  let service: MatchesUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
