import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupanRoutingModule } from './coupan-routing.module';
import { DisplayCoupanComponent } from './display-coupan/display-coupan.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'coupan', component: DisplayCoupanComponent }
];
@NgModule({
  declarations: [
    DisplayCoupanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule 
  ]
})
export class CoupanModule { }
