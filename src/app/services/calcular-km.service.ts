import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcularKmService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl: string = 'https://nominatim.openstreetmap.org/';

  public calcularKm(endereco: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${encodeURIComponent(endereco)}&format=json`);
  }



}
