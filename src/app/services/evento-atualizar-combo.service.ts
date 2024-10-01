import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoAtualizarComboService {
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  atualizarCombo(): void {
    this.eventEmitter.emit();
  }
}
