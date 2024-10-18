import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CombosService } from 'src/app/services/combos.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';
import { DialogAtualizarComboComponent } from '../dialog-atualizar-combo/dialog-atualizar-combo.component';
import { EventoAtualizarComboService } from 'src/app/services/evento-atualizar-combo.service';

@Component({
  selector: 'app-cadastrar-combos',
  templateUrl: './cadastrar-combos.component.html',
  styleUrls: ['./cadastrar-combos.component.css']
})
export class CadastrarCombosComponent implements OnInit {

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private comboService: CombosService,
    private snackMessageService: SnackMessageService,
    private dialog: MatDialog,
    private eventoAtualizarComboService: EventoAtualizarComboService
  ) { }

  ngOnInit(): void {
    this.eventoAtualizarComboService.eventEmitter.subscribe(() => {
      this.lerCombosCompleto();
    });
    this.readCategoriasEProdutos();
    this.lerCombosCompleto();
  }

  payloadCombos: any = {
    titulo: '',
    descricao: '',
    valor_promocional_dinheiro: '',
    valor_promocional_pix: '',
    valor_promocional_cartao: ''
  }

  categoriasEProdutos: Array<any> = [];

  conteudoArray: Array<any> = [];

  combos: Array<any> = [];

  loader: boolean = true;

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  readCategoriasEProdutos(): void {
    this.categoriaService.lerCategorias().subscribe((resp: any) => {
      this.categoriasEProdutos = resp;
    })
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  lerCombosCompleto(): void {
    this.comboService.lerCombosEProdutos().subscribe((resp: any) => {
      this.combos = resp;
      this.loader = false;
    }, error => {
      this.snackMessageService.snackMessage(error.error.error);
      this.loader = false;
    })
  }

  cadastrarCombo(): void {

    this.payloadCombos.valor_promocional_pix = 0;
    this.payloadCombos.valor_promocional_dinheiro = 0;
    this.payloadCombos.valor_promocional_cartao = 0;

    let idCombo = 0;

    this.comboService.criarCombo(this.payloadCombos).subscribe((resp: any) => {
      idCombo = resp.id;
      this.conteudoArray.forEach((element: any, i: any) => {
        let payload = {
          fk_produto: element.id,
          fk_combo: resp.id
        }
        this.comboService.criarConteudoCombo(payload).subscribe((resp: any) => {
        })
        if ((i + 1) == this.conteudoArray.length) {
          this.comboService.atualizarValorCombo(idCombo).subscribe((resp: any) => {
            this.lerCombosCompleto();
            this.snackMessageService.snackMessage('Combo criado com sucesso!');
          })
        }
      })
    });
  }

  inserirProdutoAoArrayConteudo(produtos: any): void {
    if (this.conteudoArray.length === 0) {
      this.conteudoArray.push(produtos);
    } else {
      const index = this.conteudoArray.findIndex((element: any) => element.id === produtos.id);
      if (index !== -1) {
        this.conteudoArray.splice(index, 1);
      } else {
        this.conteudoArray.push(produtos);
      }
    }
  }

  abrirDialogAtualizarCombo(item: any): void {
    this.dialog.open(DialogAtualizarComboComponent, {
      data: item,
      width: '96svw'
    });
  }

  ativarOuDesativarCombo(combo: any): void {
    if (combo.active) {
      this.comboService.desativarCombo(combo.id).subscribe((resp: any) => {
        this.snackMessageService.snackMessage('Combo desativado com sucesso!');
        this.lerCombosCompleto();
      })
    } else {
      this.comboService.ativarCombo(combo.id).subscribe((resp: any) => {
        this.snackMessageService.snackMessage('Combo ativado com sucesso!');
        this.lerCombosCompleto();
      })
    }
  }
}
