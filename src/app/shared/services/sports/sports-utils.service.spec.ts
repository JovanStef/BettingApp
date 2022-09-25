import { TestBed } from '@angular/core/testing';

import { SportsUtilsService } from './sports-utils.service';

describe('SportsUtilsService', () => {
  let service: SportsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
