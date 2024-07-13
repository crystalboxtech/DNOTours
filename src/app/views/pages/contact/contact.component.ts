import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public isLoading: boolean = true;
  constructor(private router: Router, private appService: TourService,
    private formBuilder: FormBuilder) {
    this.getTourTypeData();
    this.getContryTypeData();
    this.getTourTypeListWithCount();
    this.getTourContryListWithCount();
    if(sessionStorage.getItem('User_code')!=null){
      this.dashbordDisplay= true;
      this.username=sessionStorage.getItem('user_name');}
   

  }
  public username :any= '';
  public type: any = [];
  public Contry: any = [];
  public dashbordDisplay: boolean= false;
  getTourTypeData() {
    this.appService
      .get_tourtype_help()
      .subscribe((response) => {
        let prod = response;
        this.type = prod;
      
      });
  }

  getContryTypeData() {
    this.appService
      .get_Contrytype_help()
      .subscribe((response) => {
        let prod = response;
        this.Contry = prod;

      });
  }
  public TypeListWithCount: any = [];
  public ContryListWithCount: any = [];
  getTourTypeListWithCount() {
    this.appService
      .getTourTypeListWithCount()
      .subscribe((response) => {
        let prod = response;
        this.TypeListWithCount = prod;
      
      
      });
  }
  getTourContryListWithCount() {
    this.appService
      .getTourContryListWithCount()
      .subscribe((response) => {
        let prod = response;
        this.ContryListWithCount = prod;
        this.isLoading=false
      });
  }
  openTourtype(ty: any) { 
    this.router.navigate(['tour/1/' + ty['id']]);
   }
   openContrytype(co: any){
    this.router.navigate(['tour/2/' + co['name']]);
   }
  openSingInPage() {
    this.router.navigate(['login']);
  }
  openAllTour() {
    this.router.navigate(['all-tour/0']);
    
  }
  opencontact(){
    this.router.navigate(['contact']);
  }
  openDashnord(){
    this.router.navigate(['dashboard']);
  }
  ngOnInit() {

  }
  logout(){
    window.sessionStorage.clear();
    location.reload();
    
  }
}
