
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { TourService } from '../../tour/tour.service';
import { Editor } from 'ngx-editor';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent {
  private name: any;
  public userForm !: FormGroup;
  public BookingForm !: FormGroup;
  
  public selectedLang: any;
  public orders : any=[];
  @ViewChild('closebutton') closebutton: any;
  constructor(private appService: UserService,  private appServicetour: TourService,
    private formBuilder: FormBuilder) {
      this.getData(this.pera);
      // this.maxPages = Math.ceil(this.totalCount / this.pageSize);
      
      this.createContactForm();
      this.getTourData();
      this.createBookingForm();
    }
  createContactForm(){
    this.orders = this.getOrders();
    this.userForm = this.formBuilder.group({
      user_code: ['-1'],  
      user_name: [''],  
      password: [''],
      mobile_number: [''],
      user_type: [''],
      email: ['']
    });
  }

  createBookingForm(){

    this.BookingForm = this.formBuilder.group({
      user_code: ['-1'], 
      user_name: [''],
      tour: [],  
     Person: [1],

    });
  }
  ngOnInit() {


 
  }

  
  dataInput: any;
  users: any =[];
  getData(pera:any) {
   this.appService
    .getData(pera)
    .subscribe((response) => {
      let prod = response;
      this.users = prod;

 this.totalCount=this.users[0]['TotalRows']
 console.log(this.users[0]['TotalRows']);
this.maxPages = Math.ceil(this.totalCount / this.pageSize);

    });
  }
 
  onSubmit() {

    this.appService
    .addUpdateData(this.userForm.value)
    .subscribe((response) => {
      this.reset();
     alert('User save sucessfully');
     this.closebutton.nativeElement.click();
     this.getData(this.pera)
     });
}
public tourlist : any=[];
booking() {

    this.tourlist=this.BookingForm.controls['tour'].value
    if(this.BookingForm.controls['Person'].value != null && this.BookingForm.controls['Person'].value >= 1)
{
  var listObj = {
    "Tour_code" : this.tourlist['id'],
    "user_code" : this.BookingForm.controls['user_code'].value,
    "booking_code" : -1,
    "parson" :this.BookingForm.controls['Person'].value
    };
   

  this.appService
  .addBooking(listObj)
  .subscribe((response) => {
    this.reset();
   alert('Booking save sucessfully');
   this.closebutton.nativeElement.click();
   this.getData(this.pera)
   });
  }
  else{
    alert('please select how many person for Tour')
  }
}
reset() {
  this.userForm.reset();
}
adddata(user: any){
  this.createContactForm();

}

getTourData() {
  this.appService
   .get_tour_help()
   .subscribe((response) => {
     let prod = response;
     this.tourlist = prod;
    
   });
  }

editdata(user: any){
    this.userForm.patchValue(user);
    
}
bookingdata(user: any){

   this.BookingForm.patchValue(user);
}
deleteData(user: any){
  this.appService
  .deleteData(user)
  .subscribe((response) => {
    alert('User Delete sucessfully');
    this.getData(this.pera)
  });
}


getOrders() {
  return [
    { id: '1', name: 'SuperAdmin' },
    { id: '2', name: 'Admin' },
    { id: '3', name: 'User' },
    { id: '4', name: 'Customer' }
  ];
}

pera= {
  "SearchColumn":"user_name",
  "SearchValue":'',
  "PageNo":1,
  "PageSize" :3,
  "SortColumn":"user_name",
  "SortOrder":  "ASC"
}

maxPages: number = 0;
@Input() index: number = 1;
@Input() totalCount: number = 0;
@Input() SearchColumn: string = this.pera['SearchColumn']  ;
@Input() pageSize: number = this.pera['PageSize']  ;
@Input() rulerLength: number = 5;

page:number= 3;

navigateToPage(i:any){

  if(i==2 && this.totalCount<=3){
    this.pera['PageNo'] =1
  }else if(i==0){
    this.pera['PageNo'] =1
  }else
  {
    this.pera['PageNo'] =i
  }

  this.getData(this.pera)
}
onsearch(searchtext: string,SearchColumn:any){
  this.pera['SearchValue'] =searchtext;
  this.pera['SearchColumn'] =SearchColumn;

  this.getData(this.pera);
}

changeSearchcolumn(column:string){
  this.SearchColumn=column
}

}
