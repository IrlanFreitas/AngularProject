import { CursosService } from './service/cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponent } from '../meu-primeiro/meu-primeiro.component';
import { CursosComponent } from '../cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  //Necessário indicar quais serão os Servicos utilizados pelos componentes aqui
  providers: [CursosService],
  //Deixa visivel o componente para ser utilizado por outro component
  exports:[MeuPrimeiroComponent, CursosComponent],
  //CursoDetalhe Fica como component privado do component Cursos
  declarations: [MeuPrimeiroComponent, CursosComponent, CursoDetalheComponent]
})
export class CursosModule { }
