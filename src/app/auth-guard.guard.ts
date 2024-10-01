import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EventLoginService } from './services/event-login.service';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
  ) { }

  canActivate(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
