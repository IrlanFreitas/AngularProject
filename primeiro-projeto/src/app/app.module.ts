import { HttpModule } from '@angular/http';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';


@NgModule({
  //Components, Diretivas, Pipes
  declarations: [
    AppComponent

  ],
  //Modulos ou Components acima que pertecem ao Modulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  //Serviços que irão ficar Disponiveis para todos os componentes declarados acima 
  //Como nesse caso é o app, fica de escopo global
  providers: [],
  //Component que deve ser instancia quando iniciar a aplicação
  //Somente no modulo de raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
