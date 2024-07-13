import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'state', component: StateComponent },
  { path: 'country', component: CountryComponent }
];
@NgModule({
  declarations: [
    StateComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule 
  ]
})
export class PlaceModule { }
