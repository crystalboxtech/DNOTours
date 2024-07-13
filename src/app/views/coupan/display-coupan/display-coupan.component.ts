
import { CoupanService } from '../coupan.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-display-coupan',
  templateUrl: './display-coupan.component.html',
  styleUrls: ['./display-coupan.component.scss']
})
export class DisplayCoupanComponent {

  private name: any;
  public coupanForm !: FormGroup;
  public selectedLang: any;
  public orders : any=[];
  @ViewChild('closebutton') closebutton: any;
  constructor(private appService: CoupanService,
    private formBuilder: FormBuilder) {
      this.createCoupanForm();
    }
  createCoupanForm(){

    this.coupanForm = this.formBuilder.group({
      coupan_code: ['-1'],  
      coupan_name: [''],  
      start_date: [''],
      end_date: [''],
      coupan_percentage: [''],
      coupan_amount: ['']
    });
  }
  ngOnInit() {
  
    this.getData()
  }
  dataInput: any;
  users: any =[];
  getData() {
   this.appService
    .getData()
    .subscribe((response) => {
      let prod = response;
      this.users = prod;

 
    });
  }
  
  onSubmit() {

    this.appService
    .addUpdateData(this.coupanForm.value)
    .subscribe((response) => {
      this.reset();
     alert('User save sucessfully');
     this.closebutton.nativeElement.click();
      this.getData();
     });
}
reset() {
  this.coupanForm.reset();
}
adddata(Coupan: any){

  // this.coupanForm.reset;
  // this.coupanForm.patchValue(Coupan);
  this.createCoupanForm();

}

editdata(Coupan: any){
  console.log(Coupan);
    this.coupanForm.patchValue(Coupan);
}
deleteData(Coupan: any){
  this.appService
  .deleteData(Coupan)
  .subscribe((response) => {
    alert('Coupan Delete sucessfully');
    this.getData();
  });
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

  this.getData()
}
onsearch(searchtext: string,SearchColumn:any){
  this.pera['SearchValue'] =searchtext;
  this.pera['SearchColumn'] =SearchColumn;
console.log(SearchColumn);
  this.getData();
}

changeSearchcolumn(column:string){
  this.SearchColumn=column
}
}
