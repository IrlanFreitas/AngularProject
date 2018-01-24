import { CursosService } from './service/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nomePortal: string 
  public cursos: string[] = ["Java", "Angular", "TypeScript"]

  //A Injeção de Dependencia acontece sempre pelo construtor
  constructor(private cursosService: CursosService) {
    this.nomePortal = "http://loiane.training"
    this.cursos = this.cursosService.getCursos()
    // this.testeSwapi()
   }

  ngOnInit() {
  }

  //Entendendo a Injeção de Dependencia !!!
  testeSwapi() {
    this.cursosService.getSwapi().subscribe((response) => {
      console.log(response.json())
    })
  }
}
