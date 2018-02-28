import { HttpModule } from '@angular/http';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarwarsApiModule } from './starwars-api/starwars-api.module';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { RotasHomeComponent } from './rotas-home/rotas-home.component';
import { RotasLoginComponent } from './rotas-login/rotas-login.component';
import { RotasCursosComponent } from './rotas-cursos/rotas-cursos.component';
import { routing } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { RotasCursoDetalheComponent } from './rotas-curso-detalhe/rotas-curso-detalhe.component';



@NgModule({
  //Components, Diretivas, Pipes
  declarations: [
    AppComponent,
    CicloComponent,
    OutputPropertyComponent,
    InputPropertyComponent,
    DataBindingComponent,
    DiretivaNgifComponent,
    RotasHomeComponent,
    RotasLoginComponent,
    RotasCursosComponent,
    RotasCursoDetalheComponent
  ],
  //Modulos ou Components acima que pertecem ao Modulo
  //Rotas que são carregadas
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    StarwarsApiModule,
    MeuFormModule,
    routing
  ],
  //Serviços que irão ficar Disponiveis para todos os componentes declarados acima 
  //Como nesse caso é o app, fica de escopo global
  providers: [],
  //Component que deve ser instancia quando iniciar a aplicação
  //Somente no modulo de raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
