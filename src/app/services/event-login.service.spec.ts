import { TestBed } from '@angular/core/testing';

import { EventLoginService } from './event-login.service';

describe('EventLoginService', () => {
  let service: EventLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
