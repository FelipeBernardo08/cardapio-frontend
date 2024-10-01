import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);

  user$ = this.userSubject.asObservable();

  constructor() { }

  setarUsuário(receive: string): void {
    const token: string = receive;
    const user: User = { token };
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  returnToken(): string | undefined {
    return this.userSubject.value?.token;
  }

  isAuthenticated(): boolean {
    return this.userSubject.value !== null;
  }
}
