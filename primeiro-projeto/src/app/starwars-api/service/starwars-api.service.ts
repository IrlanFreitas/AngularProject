import { Headers } from '@angular/http/src/headers';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http/src/base_request_options';


@Injectable()
export class StarwarsApiService {

  constructor(private http: Http) { }

  getGeneralUrl() {
    return this.http.get("https://swapi.co/api/")
  }

  getSpecies() {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json; charset=utf-8');
    // headers.append('Access-Control-Allow-Origin', "*");
    // let options = new RequestOptions({headers: headers});
    return this.http.get("https://swapi.co/api/species")
  }

}
