import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryWithTypeComponent } from './summary-with-type/summary-with-type.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerTourListComponent } from './customer-tour-list/customer-tour-list.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
const routes: Routes = [
  { path: 'mytour', component: CustomerTourListComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    HomeComponent,
    TourComponent,
    TourListComponent,
    SummaryComponent,
    SummaryWithTypeComponent,
    ContactComponent,
    CustomerTourListComponent
    
  ],
  imports: [
    CommonModule,
     PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
     ReactiveFormsModule ,
     RouterModule.forChild(routes),
     FormsModule
 

  ]
})

export class PagesModule {
}
