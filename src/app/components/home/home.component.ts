import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.checkUser();
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  checkUser(): void {
    this.loginService.me().subscribe((resp: any) => {
    }, (error: any) => {
      sessionStorage.clear();
      this.router.navigate(['/']);
    })
  }
}
