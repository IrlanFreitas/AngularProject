import { Species } from './../../species';
import { StarwarsApiService } from './service/starwars-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starwars-api',
  templateUrl: './starwars-api.component.html',
  styleUrls: ['./starwars-api.component.css']
})
export class StarwarsApiComponent implements OnInit {

  public species: Species[] = []

  constructor(private starService: StarwarsApiService) { 
    this.getAllSpecies();
  }

  ngOnInit() {
  }

  getAllSpecies() {
    this.starService.getSpecies().subscribe( (response) => {
      this.species = response.json().results
      console.log("JSON");
      console.log(response.json().results);
      console.log("Texto");
      console.log(response.text());
      
    })
  }

}
