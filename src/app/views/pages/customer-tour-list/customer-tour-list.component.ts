import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TourService } from '../../tour/tour.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-tour-list',
  templateUrl: './customer-tour-list.component.html',
  styleUrls: ['./customer-tour-list.component.scss']
})
export class CustomerTourListComponent {

  file: any;
Usertype_code: any;


  constructor(private appService: TourService,
) {
  
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
@ViewChild('closebutton') closebutton: any;
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

  var obj = {
    "code":sessionStorage.getItem('User_code'),
    "Usertype_code": sessionStorage.getItem('Usertype_code'),
  }
  this.getCustomerTourData(obj)
}
onsearch(searchtext: string,SearchColumn:any){
  this.pera['SearchValue'] =searchtext;
  this.pera['SearchColumn'] =SearchColumn;
console.log(SearchColumn);
var obj = {
  "code":sessionStorage.getItem('User_code'),
  "Usertype_code": sessionStorage.getItem('Usertype_code'),
}
this.getCustomerTourData(obj)
}

changeSearchcolumn(column:string){
  this.SearchColumn=column
}
shortLink: string = ''; // Variable to store shortLink from api response
loading: boolean = false; // Flag variable
enter_name = '';
your_name = '';
your_new_name = '';
BookingCode:any;
booking_id:any;
fileUploader:any
onSubmit() {
    if (this.file) {
        this.appService.uploadTicket(this.file,this.BookingCode).subscribe(() => {
 alert('file save sucessfully')
 console.log(this.file["name"]="")
    });
    }

}

onsubmitstatus(){



var obj = {
  'StatusCode':this.selected,
  'booking_id':this.booking_id,
  'booking_code':this.BookingCode
}


  this.appService.statusChange(obj).subscribe(() => {
alert('status change sucessfully')

var obj = {
  "code":sessionStorage.getItem('User_code'),
  "Usertype_code": sessionStorage.getItem('Usertype_code'),
}
this.getCustomerTourData(obj)
this.closebutton.nativeElement.click();


});
}




sendBookingId(item:any){

  this.BookingCode =item["booking_code"];
  this.booking_id =item["booking_id"];
}
onFileChanged(event:any) {
  this.file = event.target.files[0];
}
public tours : any=[];
public statushelp : any=[];

  ngOnInit() {

    
    var url = document.URL;
    var id = sessionStorage.getItem('User_code')
     this.Usertype_code = sessionStorage.getItem('Usertype_code')


    var obj = {
      "code":sessionStorage.getItem('User_code'),
      "Usertype_code": sessionStorage.getItem('Usertype_code'),
    }
    
    this.statusHelp()
    this.getCustomerTourData(obj)

    
  }
  
  statusHelp() {
    this.appService
     .statusHelp()
     .subscribe((response) => {
       let prod = response;
       this.statushelp = prod;
       console.log(this.statushelp);
       });
   }
   
   selected= null;
  getCustomerTourData(obj :any) {
    this.appService
     .getCustomerTourData(obj)
     .subscribe((response) => {
       let prod = response;
       this.tours = prod;
       console.log(this.tours);
       });
   }
   
   openFile(filename:any){
       window.open('https://localhost:44312/ticket/'+filename);
   }


}
