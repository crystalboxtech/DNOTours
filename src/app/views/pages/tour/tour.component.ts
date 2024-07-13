
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';

import { Router } from '@angular/router';
import { PlaceService } from '../../place/place.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent {

  private name: any;
  public bookingForm !: FormGroup;
  public selectedLang: any;
  public tours : any=[];
  
  public type: any = [];
  public Contry: any = [];
  @ViewChild('closebutton') closebutton: any;
  public _isDisabled: any;
  IsmodelShow = false;
  constructor(private appService: TourService,
    private formBuilder: FormBuilder,
    private appServiceplace: PlaceService,
    private router: Router,) {
   
    
    }
    public TypeListWithCount: any = [];
    public ContryListWithCount: any = [];
  
   
  ngOnInit() {
    var url = document.URL;
    var id = url.substring(url.lastIndexOf('/') + 1);
   
    this.getData(id)
    this.createBookingForm(id);
  

    this.getTourTypeListWithCount();
    this.getTourContryListWithCount();
    


    
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
  filename:any
  getData(id : any) {

        var obj ={
          tour_code : id
        }
        
        this.appService
         .getData(obj)
         .subscribe((response) => {
           let prod = response;
           this.tours = prod;

             this.filename = "";
   
   
         });
       }
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

      createBookingForm(id:any){
         var obj ={
          tour_code : id
        }
     this.appService
         .getData(obj)
         .subscribe((response) => {
           let prod = response;
           this.tours = prod;
          this.bookingForm = this.formBuilder.group({
          tour_name: [this.tours[0]['tour_name']],
          tour_code: [this.tours[0]['tour_code']],
          Booking_for_person_name: [],
          Booking_for_person_Email: [],
          Booking_for_person_Mobile: [],
          parson: [1],
          coupan: [],
          price: [this.tours[0]['tour_price']],
 
});
  this.bookingForm.controls['price'].disable();
  this.bookingForm.controls['tour_name'].disable();

 });
 }


 onSubmit() {
  // if(sessionStorage.getItem('User_code')!= null){
    
  var listObj = {
    "tour_code" : this.bookingForm.controls['tour_code'].value.toString(),
    "parson" : this.bookingForm.controls['parson'].value.toString(),
    "user_code" :   sessionStorage.getItem('User_code'),
    "Booking_for_person_name" : this.bookingForm.controls['Booking_for_person_name'].value.toString(),
    "Booking_for_person_Email" : this.bookingForm.controls['Booking_for_person_Email'].value.toString(),
    "Booking_for_person_Mobile" : this.bookingForm.controls['Booking_for_person_Mobile'].value.toString(),
    "StatusCode" : 1,
  };



  this.appService
  .addUpdateBookingData(listObj)
  .subscribe((response) => {

 
alert('Tour booking done successfully')
   var url = document.URL;
   var id = url.substring(url.lastIndexOf('/') + 1);
   this.closebutton.nativeElement.click();
    this.createBookingForm(id);
    // alert("For booking please logged in")
   });
  // }else{
  //   alert("For booking please logged in")
  // }

  

}
reset() {
  this.bookingForm.reset();
}

    
}
