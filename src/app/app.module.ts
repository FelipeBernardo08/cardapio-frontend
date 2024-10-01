import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarCombosComponent } from './components/cadastrar-combos/cadastrar-combos.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogAtualizarCategoriaComponent } from './components/dialog-atualizar-categoria/dialog-atualizar-categoria.component';
import { DialogAtualizarProdutoComponent } from './components/dialog-atualizar-produto/dialog-atualizar-produto.component';
import { DialogAtualizarComboComponent } from './components/dialog-atualizar-combo/dialog-atualizar-combo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MostrarCardapioComponent } from './components/mostrar-cardapio/mostrar-cardapio.component';
import { FooterComponent } from './components/footer/footer.component';
import { MostrarComboComponent } from './components/mostrar-combo/mostrar-combo.component';
import { ListarCombosComponent } from './components/listar-combos/listar-combos.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastrarProdutosComponent,
    PaginaNaoEncontradaComponent,
    CadastrarCategoriaComponent,
    CadastrarCombosComponent,
    HeaderComponent,
    DialogAtualizarCategoriaComponent,
    DialogAtualizarProdutoComponent,
    DialogAtualizarComboComponent,
    MostrarCardapioComponent,
    FooterComponent,
    MostrarComboComponent,
    ListarCombosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
