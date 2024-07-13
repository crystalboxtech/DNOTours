
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  private name: any;
  public coupanForm !: FormGroup;
  public selectedLang: any;
  public summaryData : any=[];
  public Title: any;
  public dashbordDisplay: boolean= false;
  public isLoading: boolean = true;
  urlimg='https://localhost:44312/tourimg/'
  constructor(private appService: TourService,
    private formBuilder: FormBuilder,
    private router: Router,) {
      this.getTourTypeData();
      this.getContryTypeData();
   
      if(sessionStorage.getItem('User_code')!=null){
        this.dashbordDisplay= true;
        this.username=sessionStorage.getItem('user_name');}
     }
     public username :any= '';
  ngOnInit() {


    this.getTourTypeListWithCount();
    this.getTourContryListWithCount();
    var url = document.URL;
    var id = url.substring(url.lastIndexOf('/') + 1);
    if(id= '0'){this.Title = "All Tour"}
    this.getAllTourData(id)
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

  getAllTourData(id : any) {
        var obj ={
          tour_type : id
        }
        this.appService
         .getAllTourSummaryData(obj)
         .subscribe((response) => {
           let prod = response;
           this.summaryData = prod;
           console.log(this.summaryData );
           this.isLoading = false
           });
       }


       tourlist(tour_code:any){
          this.router.navigate(['tour-list/'+tour_code]);
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
  logout(){
    window.sessionStorage.clear();
    location.reload();
    
  }

}
