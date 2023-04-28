import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { ResolveGuard } from './resove.guard';

describe('authGuard', () => {
  const executeGuard: ResolveFn<string> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
