import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourtypeRoutingModule } from './tourtype-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DisplaytourtypeComponent } from './displaytourtype/displaytourtype.component';

const routes: Routes = [
  { path: 'tourtype', component: DisplaytourtypeComponent }
];

@NgModule({
  declarations: [
    DisplaytourtypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class TourtypeModule { }
