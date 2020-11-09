import { TestBed } from '@angular/core/testing';

import { MatchdetailsService } from './matchdetails.service';

describe('MatchdetailsService', () => {
  let service: MatchdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
