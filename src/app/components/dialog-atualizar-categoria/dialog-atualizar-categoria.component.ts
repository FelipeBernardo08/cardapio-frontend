import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SnackMessageService } from 'src/app/services/snack-message.service';

@Component({
  selector: 'app-dialog-atualizar-categoria',
  templateUrl: './dialog-atualizar-categoria.component.html',
  styleUrls: ['./dialog-atualizar-categoria.component.css']
})
export class DialogAtualizarCategoriaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAtualizarCategoriaComponent>,
    private categoriaService: CategoriaService,
    private snackMessageService: SnackMessageService
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  atualizarCategoria(): void {
    this.categoriaService.atualizarCategoria(this.data).subscribe((resp: any) => {
      this.snackMessageService.snackMessage('Categoria atualizada com sucesso!');
    }, (error: any) => {
      this.snackMessageService.snackMessage(error.message);
    });
  }

}
