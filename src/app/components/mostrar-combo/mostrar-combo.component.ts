import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombosService } from 'src/app/services/combos.service';

@Component({
  selector: 'app-mostrar-combo',
  templateUrl: './mostrar-combo.component.html',
  styleUrls: ['./mostrar-combo.component.css']
})
export class MostrarComboComponent implements OnInit {

  constructor(
    private comboService: CombosService,
    private router: Router
  ) { }

  combos: any;
  loader: boolean = true;

  ngOnInit(): void {
    this.lerCombos();
  }

  lerCombos(): void {
    this.comboService.lerComboEProdutoPublico(this.getIdUrl()).subscribe((resp: any) => {
      this.combos = resp[0];
      this.loader = false;
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

  goTo(): void {
    this.router.navigate(['/listar-combos']);
  }

}
