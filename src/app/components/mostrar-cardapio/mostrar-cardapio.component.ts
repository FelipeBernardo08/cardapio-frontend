import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import html2pdf from 'html2pdf.js';
import { CalcularKmService } from 'src/app/services/calcular-km.service';

@Component({
  selector: 'app-mostrar-cardapio',
  templateUrl: './mostrar-cardapio.component.html',
  styleUrls: ['./mostrar-cardapio.component.css']
})
export class MostrarCardapioComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private calcularKmService: CalcularKmService
  ) { }

  categoriasCompletas: Array<any> = [];
  loader: boolean = true;

  ngOnInit(): void {
    this.lerCategoriasCompletas();
    // this.calcularKmService.calcularKm('Rua Rafael Romeiro, 571, Sao jose do rio preto').subscribe((resp: any) => {
    //   let address = [resp[0].lat, resp[0].lon];
    //   let response = this.calculateDistance(address);
    //   console.log(response);
    // })
  }

  // public haversine(coord1: Array<any>, coord2: Array<any>): number {
  //   const R = 6371;
  //   const [lat1, lon1] = coord1;
  //   const [lat2, lon2] = coord2;

  //   const dlat = (lat2 - lat1) * Math.PI / 180;
  //   const dlon = (lon2 - lon1) * Math.PI / 180;

  //   const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dlon / 2) ** 2;
  //   const c = 2 * Math.asin(Math.sqrt(a));

  //   return R * c;
  // }

  // public calculateDistance(address: Array<any>): any {
  //   try {
  //     let lat: number = -20.8154004;
  //     let lon: number = -49.421814;
  //     const coord1 = [lat, lon];
  //     const coord2 = address;

  //     const distance = this.haversine(coord1, coord2);
  //     return distance
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
