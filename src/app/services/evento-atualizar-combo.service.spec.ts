import { TestBed } from '@angular/core/testing';

import { EventoAtualizarComboService } from './evento-atualizar-combo.service';

describe('EventoAtualizarComboService', () => {
  let service: EventoAtualizarComboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoAtualizarComboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
