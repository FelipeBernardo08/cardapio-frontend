import { TestBed } from '@angular/core/testing';

import { CalcularKmService } from './calcular-km.service';

describe('CalcularKmService', () => {
  let service: CalcularKmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularKmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
