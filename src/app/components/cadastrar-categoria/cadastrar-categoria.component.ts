import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';
import { DialogAtualizarCategoriaComponent } from '../dialog-atualizar-categoria/dialog-atualizar-categoria.component';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  constructor(
    private snackMessageService: SnackMessageService,
    private categoriaService: CategoriaService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  payloadCategoria: any = {
    titulo: ''
  }

  categorias: Array<any> = [];

  loader: boolean = true;

  ngOnInit(): void {
    this.lerCategorias();
  }

  criarCategoria(): void {
    if (this.payloadCategoria.titulo != '') {
      this.categoriaService.criarCategoria(this.payloadCategoria).subscribe((resp: any) => {
        this.snackMessageService.snackMessage('Categoria criada com sucesso!');
        this.payloadCategoria.titulo = ''
        this.lerCategorias();
      }, (error: any) => {
        this.snackMessageService.snackMessage(error.error.error);
      });
    } else {
      this.snackMessageService.snackMessage('Preencha todos os campos!');
    }
  }

  lerCategorias(): void {
    this.categoriaService.lerCategorias().subscribe((resp: any) => {
      this.categorias = resp;
      this.loader = false;
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.error.error);
    })
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }

  abrirModalAtualizar(item: any): void {
    this.dialog.open(DialogAtualizarCategoriaComponent, {
      data: item,
      width: '95svw'
    });
  }
}
