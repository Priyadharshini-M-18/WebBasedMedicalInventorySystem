import { TestBed } from '@angular/core/testing';

import { CActivateGuard } from './cactivate.guard';

describe('CActivateGuard', () => {
  let guard: CActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
