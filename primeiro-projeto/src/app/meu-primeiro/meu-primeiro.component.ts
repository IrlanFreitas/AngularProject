import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent {
  public nome: string = "Teste"
  
  constructor() { }

  public teste(params:number[]) {
    
  }

}
