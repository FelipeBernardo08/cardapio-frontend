import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CombosService } from 'src/app/services/combos.service';
import { EventoAtualizarComboService } from 'src/app/services/evento-atualizar-combo.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';

@Component({
  selector: 'app-dialog-atualizar-combo',
  templateUrl: './dialog-atualizar-combo.component.html',
  styleUrls: ['./dialog-atualizar-combo.component.css']
})
export class DialogAtualizarComboComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAtualizarComboComponent>,
    private comboService: CombosService,
    private snackMessageService: SnackMessageService,
    private categoriaService: CategoriaService,
    private eventoAtualizarComboService: EventoAtualizarComboService
  ) { }

  conteudoArray: Array<any> = this.data.conteudo_combos;

  categoriasEProdutos: Array<any> = [];


  ngOnInit(): void {
    this.readCategoriasEProdutos();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  inserirProdutoAoArrayConteudo(produto: any): void {
    if (this.conteudoArray.length === 0) {
      let payload = {
        fk_produto: produto.id,
        fk_combo: this.data.id
      }
      this.comboService.criarConteudoCombo(payload).subscribe((resp: any) => {
        this.eventoAtualizarComboService.atualizarCombo();
        this.snackMessageService.snackMessage('Conteúdo criado com sucesso!');
      })
    } else {
      const element = this.conteudoArray.filter((element: any) => element.fk_produto === produto.id);
      if (element.length != 0) {
        this.comboService.apagarConteudoCombo(element[0].id).subscribe((resp: any) => {
          this.eventoAtualizarComboService.atualizarCombo();
          this.snackMessageService.snackMessage('Conteúdo excluido com sucesso!');
        });
      } else {
        let payload = {
          fk_produto: produto.id,
          fk_combo: this.data.id
        }
        this.comboService.criarConteudoCombo(payload).subscribe((resp: any) => {
          this.eventoAtualizarComboService.atualizarCombo();
          this.snackMessageService.snackMessage('Conteúdo criado com sucesso!');
        })
      }
    }
  }

  checkChecked(id: any): boolean {
    return this.data.conteudo_combos.some((element: any) => element.fk_produto === id);
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

  atualizarCombo(): void {
    this.comboService.atualizarCombo(this.data).subscribe((resp: any) => {
      this.eventoAtualizarComboService.atualizarCombo();
      this.snackMessageService.snackMessage('Combo atualizado com sucesso!');
    })
  }
}
