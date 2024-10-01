import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscribable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CombosService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl: string = environment.BASE_URL;

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
  }

  private getToken(): string {
    let token = sessionStorage.getItem('token')
    if (token) {
      return token;
    }
    return '';
  }

  public criarCombo(combo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/criar-combo`, combo, { headers: this.getHeaders() });
  }

  public criarConteudoCombo(conteudo: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/criar-conteudo-combo`, conteudo, { headers: this.getHeaders() });
  }

  public lerCombosEProdutos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-combos`, { headers: this.getHeaders() });
  }

  public lerCombosEProdutosPublico(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-combos-publico`);
  }

  public lerComboEProdutoPublico(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/ler-combo/${id}`);
  }

  public atualizarCombo(combo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizar-combo/${combo.id}`, combo, { headers: this.getHeaders() });
  }

  public apagarConteudoCombo(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/apagar-conteudo-combo/${id}`, { headers: this.getHeaders() });
  }

  public ativarCombo(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/ativar-combo/${id}`, '', { headers: this.getHeaders() });
  }

  public desativarCombo(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/desativar-combo/${id}`, '', { headers: this.getHeaders() });
  }
}
