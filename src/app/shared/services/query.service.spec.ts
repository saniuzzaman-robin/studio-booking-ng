import { TestBed } from '@angular/core/testing';

import { TwittxQueryService } from './query.service';

describe('TwittxQueryService', () => {
  let service: TwittxQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwittxQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
