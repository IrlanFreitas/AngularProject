import { OutputPropertyComponent } from './../output-property/output-property.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { MeuFormComponent } from '../meu-form/meu-form.component';
import { InputPropertyComponent } from '../input-property/input-property.component';

@NgModule({
  imports: [
    CommonModule,
    MeuFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  exports: [DataBindingComponent],
  declarations: [DataBindingComponent]
})
export class DataBindingModule { }
