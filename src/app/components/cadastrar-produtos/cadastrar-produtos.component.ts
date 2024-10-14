import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';
import { DialogAtualizarProdutoComponent } from '../dialog-atualizar-produto/dialog-atualizar-produto.component';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private snackMessageService: SnackMessageService,
    private produtosService: ProdutoService,
    private dialog: MatDialog
  ) { }

  idFilter: any;

  categorias: Array<any> = [];

  produtos: Array<any> = [];

  produtosDefault: Array<any> = [];

  loader: boolean = true;

  payloadProdutos: any = {
    titulo: '',
    descricao: '',
    valor: '',
    fk_categoria: ''
  }

  ngOnInit(): void {
    this.lerCategorias();
    this.lerProdutos();
  }

  lerCategorias(): void {
    this.categoriaService.lerCategorias().subscribe((resp: any) => {
      this.categorias = resp;
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.message);
    })
  }

  lerProdutos(): void {
    this.produtosService.lerProdutos().subscribe((resp: any) => {
      this.produtos = resp;
      this.produtosDefault = resp;
      this.loader = false;
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.message);
      this.loader = false;
    })
  }

  criarProduto(): void {
    let valor: number = parseFloat(this.payloadProdutos.valor.replace(',', '.'));
    this.payloadProdutos.valor = valor;
    this.produtosService.criarProdutos(this.payloadProdutos).subscribe((resp: any) => {
      this.snackMessageService.snackMessage('Produtos criados com sucesso!');
      this.payloadProdutos.titulo = '';
      this.payloadProdutos.descricao = '';
      this.payloadProdutos.valor = '';
      this.payloadProdutos.fk_categoria = '';
      this.lerProdutos();
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.message);
    })
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  abrirDialogAtualizar(item: any): void {
    this.dialog.open(DialogAtualizarProdutoComponent, {
      data: item,
      width: '95svw'
    })
  }

  filtrarProdutos(event: any): void {
    if (event.target.value == '' || event.target.value == undefined || event.target.value == null) {
      this.produtos = this.produtosDefault;
    } else {
      this.produtos = this.produtosDefault.filter((product: any) => product.id == event.target.value);
    }
  }

  ativarOuDesativarProduto(produto: any): void {
    if (produto.active) {
      this.produtosService.desativarProduto(produto.id).subscribe((resp: any) => {
        this.lerProdutos();
      })
    } else {
      this.produtosService.ativarProduto(produto.id).subscribe((resp: any) => {
        this.lerProdutos();
      })
    }
  }
}
