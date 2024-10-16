import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-mostrar-cardapio',
  templateUrl: './mostrar-cardapio.component.html',
  styleUrls: ['./mostrar-cardapio.component.css']
})
export class MostrarCardapioComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService
  ) { }

  categoriasCompletas: Array<any> = [];
  loader: boolean = true;

  ngOnInit(): void {
    this.lerCategoriasCompletas();
  }

  lerCategoriasCompletas(): void {
    this.categoriaService.lerCategoriasPublico().subscribe((resp: any) => {
      this.categoriasCompletas = resp;
      this.loader = false;
    }, error => {
      this.loader = false;
    })
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  imprimir(): void {
    window.print();
  }

  countRows(coment: string): number {
    let result = coment.split('\n');
    return result.length + 1;
  }

}
