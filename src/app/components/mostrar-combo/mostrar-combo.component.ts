import { Component, OnInit } from '@angular/core';
import { CombosService } from 'src/app/services/combos.service';

@Component({
  selector: 'app-mostrar-combo',
  templateUrl: './mostrar-combo.component.html',
  styleUrls: ['./mostrar-combo.component.css']
})
export class MostrarComboComponent implements OnInit {

  constructor(
    private comboService: CombosService
  ) { }

  combos: any;

  ngOnInit(): void {
    this.lerCombos();
  }

  lerCombos(): void {
    this.comboService.lerComboEProdutoPublico(this.getIdUrl()).subscribe((resp: any) => {
      this.combos = resp[0];
    })
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  getIdUrl(): string {
    let url: string = window.location.href;
    let lastSlash: number = url.lastIndexOf('/');
    return url.substring(lastSlash + 1);
  }

}
