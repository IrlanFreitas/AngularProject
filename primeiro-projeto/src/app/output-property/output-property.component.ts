import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // inputs: ["valor"],
  // outputs: ["mudouValor"]
})
export class OutputPropertyComponent implements OnInit {

  //Expor o campo para que outro component nausei
  @Input() valor: number = 0;
  
  //Expor o event para que outro component use
  @Output() mudouValor: EventEmitter<Object> = new EventEmitter();

  //ViewChild - Associa a variavel do html com o objeto do ts
  @ViewChild("campoInput") campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementar(){
    console.log(this.campoValorInput.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementar(){
    console.log(this.campoValorInput.nativeElement.value);
    this.valor--;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value });
  }

}
