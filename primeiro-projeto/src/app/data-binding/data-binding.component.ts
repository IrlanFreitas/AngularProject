import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  
  texto: string = "Interpolação!";
  isInterpolation: boolean = true;
  urlImagem: string = "http://lorempixel.com/200/200/";
  valorKeyUp: string = "";
  valorEnter: string = "";
  valorBlur: string = "";
  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular"
  valorObtidoOutput: number = 0;

  constructor() {}

  ngOnInit() {}

  getTexto() {
    return "Um texto qualquer a ser renderizado";
  }

  usingStyleBinding() {
    let styles = {
      // CSS property names
      "margin-left": "auto",
      "margin-right": "auto",
      border: "2px solid black" // italic
    };
    return styles;
  }

  escutandoClick(){
    alert("Fui clicado!")
  }

  onKeyUp($event: KeyboardEvent){
    this.valorKeyUp = (<HTMLInputElement> $event.target).value
  }

  salvarComEnter(valor){
    this.valorEnter = valor
  }

  salvarComBlur(valor){
    this.valorBlur = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  testeOutput($event) {
    this.valorObtidoOutput = $event.novoValor;
    
  }
}
