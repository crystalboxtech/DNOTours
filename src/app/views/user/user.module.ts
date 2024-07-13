import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayUserComponent } from './display-user/display-user.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UsersRoutingModule } from './users-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgGridAngular } from 'ag-grid-angular';
const routes: Routes = [
  { path: 'member', component: DisplayUserComponent }
];
@NgModule({
  declarations: [
    DisplayUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule ,
    NgSelectModule,
    AgGridAngular
  
  ]
})
export class UserModule { }
