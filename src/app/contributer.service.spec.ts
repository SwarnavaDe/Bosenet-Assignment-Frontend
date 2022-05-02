import { TestBed } from '@angular/core/testing';

import { ContributerService } from './contributer.service';

describe('ContributerService', () => {
  let service: ContributerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
