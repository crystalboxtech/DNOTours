import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourRoutingModule } from './tour-routing.module';
import { AddTourComponent } from './add-tour/add-tour.component';
import { DisplayTourComponent } from './display-tour/display-tour.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEditorModule } from 'ngx-editor';

const routes: Routes = [
  { path: 'add-Tour/:id', component: AddTourComponent },
  { path: 'display-Tour', component: DisplayTourComponent }
];

@NgModule({
  declarations: [
    AddTourComponent,
    DisplayTourComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule ,
    NgSelectModule,
    NgxEditorModule,
    
  ]
})
export class TourModule { }
