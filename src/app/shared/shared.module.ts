import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ButtonSecundaryComponent } from './components/button/button-secundary/button-secundary.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoedaPipe } from '../core/pipes/moeda.pipe';
import { CpfPipe } from '../core/pipes/cpf.pipe';
import { CepPipe } from '../core/pipes/cep.pipe';
import { ItemListaComponent } from './components/item-lista/item-lista.component';
import { ItemListaCategoriaComponent } from './components/item-lista-categoria/item-lista-categoria.component';
import { ItemListaLancamentoComponent } from './components/item-lista-lancamento/item-lista-lancamento.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService, UserLoggedService } from './services/autenticacao';
import { StorageService } from './services';
import { UsuarioService } from './services/system/usuario.service';
import { CategoriaService } from './services/system/categoria.service';
import { LancamentoService } from './services/system/lancamento.service';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonSecundaryComponent,
    HeaderComponent,
    FooterComponent,
    ItemListaComponent,
    ItemListaCategoriaComponent,
    ItemListaLancamentoComponent,

    //PIPES
    MoedaPipe,
    CpfPipe,
    CepPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [
    LoginService,
    UserLoggedService,
    StorageService,
    UsuarioService,
    CategoriaService,
    LancamentoService,
  ],

  exports: [
    ButtonComponent,
    ButtonSecundaryComponent,
    HeaderComponent,
    FooterComponent,
    ItemListaComponent,
    ItemListaCategoriaComponent,
    ItemListaLancamentoComponent,

    //PIPES
    MoedaPipe,
    CpfPipe,
    CepPipe,

    //MODULES
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
