import { TestBed } from '@angular/core/testing';

import { LayoutRequestService } from './layout-request.service';

describe('LayoutRequestService', () => {
  let service: LayoutRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
