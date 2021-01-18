import { TestBed } from '@angular/core/testing';

import { AuthenticationLoginService } from './authentication-login.service';

describe('AuthenticationLoginService', () => {
  let service: AuthenticationLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
