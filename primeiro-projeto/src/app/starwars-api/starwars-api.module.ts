import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarwarsApiComponent } from './starwars-api.component';
import { StarwarsApiService } from './service/starwars-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StarwarsApiService],
  exports: [StarwarsApiComponent],
  declarations: [StarwarsApiComponent]
})
export class StarwarsApiModule { }
