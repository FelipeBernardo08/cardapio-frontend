import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
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

  public criarCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/criar-categoria`, categoria, { headers: this.getHeaders() });
  }

  public lerCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-categorias`, { headers: this.getHeaders() });
  }

  public lerCategoriasPublico(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-categorias-publico`);
  }

  public atualizarCategoria(categoria: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar-categoria/${categoria.id}`, categoria, { headers: this.getHeaders() });
  }
}
