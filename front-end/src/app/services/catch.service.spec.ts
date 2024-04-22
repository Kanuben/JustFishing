import { TestBed } from '@angular/core/testing';

import { CatchService } from './catch.service';

describe('CatchService', () => {
  let service: CatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
