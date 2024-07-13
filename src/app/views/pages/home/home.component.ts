
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';
import { environment } from '../../envirment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isLoading: boolean = true;
  public urlimg :any=environment['imgURL']
  constructor(private router: Router, private appService: TourService,
    private formBuilder: FormBuilder) {
    this.getTourTypeData();
    this.getContryTypeData();
    this.getTourTypeListWithCount();
    this.getTourContryListWithCount();
    
console.log('img url',this.urlimg)

if(sessionStorage.getItem('User_code')!=null)
{
   this.dashbordDisplay= true;
   this.username=sessionStorage.getItem('user_name');
}


  }
  
  public username :any= '';
  public dashbordDisplay: boolean= false;
  public type: any = [];
  public Contry: any = [];
  public TypeListWithCount: any = [];
  public ContryListWithCount: any = [];
 
  getTourTypeData() {
    this.appService
      .get_tourtype_help()
      .subscribe((response) => {
        let prod = response;
        this.type = prod;
    
      });
  }
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
  openDashnord(){
    if(sessionStorage.getItem('Usertype_code')=='4'){
      this.router.navigate(['/pages/mytour']);
    }else{
      this.router.navigate(['dashboard']);
    }
  

   
    
  }
  openAllTour() {
    this.router.navigate(['all-tour/0']);
  }
  opencontact(){
    this.router.navigate(['contact']);
  }
  logout(){
    window.sessionStorage.clear();
    location.reload();
    
  }
  ngOnInit() {
    this.getAllTourData(1)

  }
  getContryTypeData() {
    this.appService
      .get_Contrytype_help()
      .subscribe((response) => {
        let prod = response;
        this.Contry = prod;

      });
  }
  public summaryData: any = [];
  tourlist(tour_code:any){
    this.router.navigate(['tour-list/'+tour_code]);
   }




  
  getAllTourData(id : any) {
    var obj ={
      tour_type : id
    }
    this.appService
     .getAllTourSummaryData(obj)
     .subscribe((response) => {
       let prod = response;
       this.summaryData = prod;
       this.isLoading=false
       console.log('chk all tour' ,this.summaryData );
       });
   }


}
