
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-summary-with-type',
  templateUrl: './summary-with-type.component.html',
  styleUrls: ['./summary-with-type.component.scss']
})
export class SummaryWithTypeComponent {
  public isLoading: boolean = true;
  private name: any;
  public coupanForm !: FormGroup;
  public selectedLang: any;
  public summaryData : any=[];
  public Title: any;
  public dashbordDisplay: boolean= false;
  public activeclassForTortype: boolean = false;
  public activeclassForTourcountry: boolean = true;
  constructor(private appService: TourService,
    private formBuilder: FormBuilder,
    private router: Router,) {
      this.getTourTypeData();
      this.getContryTypeData();
      

    this.getTourTypeListWithCount();
    this.getTourContryListWithCount();

      if(sessionStorage.getItem('User_code')!=null){
        this.dashbordDisplay= true;
        this.username=sessionStorage.getItem('user_name');}
     
     }
     public username :any= '';
     
  
  ngOnInit() {
    //tour/:tour_type_code/:tour_subtype_code
    // tour_type_code for identifiy tour type or contry type 
    // tour_subtype_code for identifiy solo,friends,coupal 

    
    var url = document.URL;
    var result= url.split('/');

     var filter_type = result[result.length-2];
   
    

    if(filter_type == '1')
    {

      var type = result[result.length-1];
      this.getSubtypeourData(filter_type,type)
      this.activeclassForTortype= true;

      this.activeclassForTourcountry= false;
    }else{
    
      
      var country = result[result.length-1];
     
      this.activeclassForTortype= false;
      this.activeclassForTourcountry= true;
      this.getSubcountryourData(filter_type,country)
    }
    
  }

   hideThumbnail(){
   
    return false;
    
}

hideThumbnail1(){
   
  return true;
  
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
     
      });
  }
  urlimg='https://localhost:44312/tourimg/'
  getSubtypeourData(filter_type : any,type:any) {
      var obj ={
          filter_type : filter_type,
          type : type
     
        }
        this.appService
         .getSubtypeourData(obj)
         .subscribe((response) => {
           let prod = response;
           this.summaryData = prod;
           this.isLoading=false
           });
       }
  getSubcountryourData(filter_type : any,country:any) {
        var obj ={
            filter_type : filter_type,
            country_type : country
       
          }
     
          this.appService
           .getSubcountryourData(obj)
           .subscribe((response) => {
             let prod = response;
             this.summaryData = prod;
             this.isLoading=false
             });
         }

       tourlist(tour_code:any){
          this.router.navigate(['tour-list/'+tour_code]);
         }



         openDashnord(){
          this.router.navigate(['dashboard']);
        }

  public type: any = [];
  public Contry: any = [];
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
  openTourtype(ty: any) { 

        this.getSubtypeourData(1,2)
      this.activeclassForTortype= true;

      this.activeclassForTourcountry= false;
    this.router.navigate(['tour/1/' + ty['id']]);

   }
   openContrytype(co: any){
    this.activeclassForTortype= false;
    this.activeclassForTourcountry= true;
    this.getSubcountryourData(2,co['name'])
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
  logout(){
    window.sessionStorage.clear();
    location.reload();
    
  }

}


