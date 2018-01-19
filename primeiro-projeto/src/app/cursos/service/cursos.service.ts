import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  /*
    Services são responsáveis por se comunicar com o backend
    uma arquitetura MVVM, em resumo, web usando apis 
    para obter os dados
  */


  constructor(public http: Http) { 
    this.http.get("https://swapi.co/api/")
    
  }

  public getCursos():string[] {
    return ["Java", "Angular", "TypeScript", "Ext Js"]
  }

  //Fazendo a primeira requisição com SWAPI - Que dia lindo <3
  public getSwapi() {
    return this.http.get("https://swapi.co/api/")
  }

}
