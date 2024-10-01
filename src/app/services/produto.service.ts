import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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

  public lerProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-produtos`, { headers: this.getHeaders() });
  }

  public criarProdutos(produtos: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/criar-produto`, produtos, { headers: this.getHeaders() });
  }

  public atualizarProduto(produto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar-produto/${produto.id}`, produto, { headers: this.getHeaders() });
  }

  public desativarProduto(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/desativar-produto/${id}`, '', { headers: this.getHeaders() });
  }

  public ativarProduto(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/ativar-produto/${id}`, '', { headers: this.getHeaders() });
  }
}
