import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarCombosComponent } from './components/cadastrar-combos/cadastrar-combos.component';
import { MostrarCardapioComponent } from './components/mostrar-cardapio/mostrar-cardapio.component';
import { MostrarComboComponent } from './components/mostrar-combo/mostrar-combo.component';
import { ListarCombosComponent } from './components/listar-combos/listar-combos.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cardapio',
    component: MostrarCardapioComponent
  },
  {
    path: 'listar-combos',
    component: ListarCombosComponent
  },
  {
    path: 'combos/:id',
    component: MostrarComboComponent
  },
  {
    path: 'auth',
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cadastrar-produto',
        component: CadastrarProdutosComponent
      },
      {
        path: 'cadastrar-categoria',
        component: CadastrarCategoriaComponent
      },
      {
        path: 'cadastrar-combo',
        component: CadastrarCombosComponent
      }
    ]
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
