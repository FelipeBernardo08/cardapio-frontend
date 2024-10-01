import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackMessageService: SnackMessageService
  ) { }

  credentials: any = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
    sessionStorage.getItem('token') != null ? this.router.navigate(['/auth/home']) : ''
  }

  login(): void {
    if (this.credentials.login != '' && this.credentials.password != '') {
      this.loginService.login(this.credentials).subscribe((resp: any) => {
        this.snackMessageService.snackMessage('Sucesso!')
        sessionStorage.setItem('token', resp)
        this.router.navigate(['/auth/home']);
      }, (error: any) => {
        this.snackMessageService.snackMessage(error.error.error)
      })
    } else {
      this.snackMessageService.snackMessage('Preencha todos os campos');
    }
  }

}
