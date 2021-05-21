import { TestBed } from '@angular/core/testing';

import { N0tasService } from './n0tas.service';

describe('N0tasService', () => {
  let service: N0tasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(N0tasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
