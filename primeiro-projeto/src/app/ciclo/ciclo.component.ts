import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  //Expondo o valor para outro component
  @Input() valorInicial: number = 10;

  constructor() { 
    console.log("constructor");
  }
  //Inicio do ciclo de vida do component
  //É sempre bom declarar as interfaces mesmo, que não precise
  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
}
