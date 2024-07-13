

import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../user/user.service';
import { TourService } from '../tour.service';
import { Router } from '@angular/router';
import { AgGridAngular } from '@ag-grid-community/angular';

import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-display-tour',

  templateUrl: './display-tour.component.html',
  styleUrls: ['./display-tour.component.scss']
})
export class DisplayTourComponent {
  private name: any;
  public userForm !: FormGroup;
  public selectedLang: any;
  public orders : any=[];
  @ViewChild('closebutton') closebutton: any;
  constructor(private appService: TourService,
    private formBuilder: FormBuilder,private router: Router,) {
      this.maxPages = Math.ceil(this.totalCount / this.pageSize);

    }

    
  public sharedData: any;


  ngOnInit() {

    this.getData(this.pera);
 
  }

  
  dataInput: any;
  Tours: any =[];
  getData(pera:any) {
   this.appService
    .getallTourData(pera)
    .subscribe((response) => {
      let prod = response;
      this.Tours = prod;
      console.log(this.Tours)
 this.totalCount=this.Tours[0]['tourCount']
this.maxPages = Math.ceil(this.totalCount / this.pageSize);
alert(this.maxPages)

    });
  }
 

reset() {
  this.userForm.reset();
}


editdata(Tour: any){
 

    this.appService.settourInfo({
      tour_code: Tour.tour_code,

      tour_name: Tour.tour_name,
      tour_day: Tour.tour_day,
      tour_night: Tour.tour_night,
      tour_price: Tour.tour_code,
      tour_rate: Tour.tour_rate,
      tour_type: Tour.tour_type,
      country_code: Tour.country_code,
      discription: Tour.discription,
      overview: Tour.overview,
      included: Tour.included,
      excluded: Tour.excluded,
      tour_highlights: Tour.tour_highlights,     
    tour_information :Tour.tour_information,
   
    });
    this.router.navigateByUrl('tour/add-Tour/'+Tour.tour_code);
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
    { id: '3', name: 'User' }

  ];
}

pera= {
  "SearchColumn":"tour_name",
  "SearchValue":'',
  "PageNo":1,
  "PageSize" :3,
  "SortColumn":"tour_name",
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
console.log(SearchColumn);
  this.getData(this.pera);
}

changeSearchcolumn(column:string){
  this.SearchColumn=column
}




}
