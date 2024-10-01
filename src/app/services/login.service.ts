import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl: string = environment.BASE_URL;

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
  }

  public getToken(): string {
    let token = sessionStorage.getItem('token')
    if (token) {
      return token;
    }
    return '';
  }

  public login(login: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, login);
  }

  public me(): Observable<any> {
    return this.http.post(`${this.baseUrl}/me`, '', { headers: this.getHeaders() });
  }
}
