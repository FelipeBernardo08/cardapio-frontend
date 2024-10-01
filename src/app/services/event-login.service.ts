import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventLoginService {
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  loginSusseFull(): void {
    this.eventEmitter.emit();
  }
}
