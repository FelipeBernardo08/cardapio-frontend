import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';

@Component({
  selector: 'app-dialog-atualizar-produto',
  templateUrl: './dialog-atualizar-produto.component.html',
  styleUrls: ['./dialog-atualizar-produto.component.css']
})
export class DialogAtualizarProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAtualizarProdutoComponent>,
    private categoriaService: CategoriaService,
    private snackMessageService: SnackMessageService,
    private produtosService: ProdutoService
  ) { }

  categorias: Array<any> = [];

  ngOnInit(): void {
    this.lerCategorias();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  lerCategorias(): void {
    this.categoriaService.lerCategorias().subscribe((resp: any) => {
      this.categorias = resp;
    })
  }

  atualizarProdutos(): void {
    let valor: number = parseFloat(this.data.valor.replace(',', '.'));
    this.data.valor = valor;
    this.produtosService.atualizarProduto(this.data).subscribe((res: any) => {
      this.snackMessageService.snackMessage('Produto atualizado com sucesso!');
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.message);
    })
  }
}
