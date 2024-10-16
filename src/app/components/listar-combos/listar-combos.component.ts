import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombosService } from 'src/app/services/combos.service';

@Component({
  selector: 'app-listar-combos',
  templateUrl: './listar-combos.component.html',
  styleUrls: ['./listar-combos.component.css']
})
export class ListarCombosComponent implements OnInit {

  constructor(
    private comboService: CombosService,
    private router: Router
  ) { }

  combos: Array<any> = [];
  loader: boolean = true;

  ngOnInit(): void {
    this.lerCombos();
  }

  lerCombos(): void {
    this.comboService.lerCombosEProdutosPublico().subscribe((resp: any) => {
      this.combos = resp;
      this.loader = false;
    }, error => {
      this.loader = false;
    })
  }

  goTo(id: any): void {
    this.router.navigate([`/combos/${id}`]);
  }
}
