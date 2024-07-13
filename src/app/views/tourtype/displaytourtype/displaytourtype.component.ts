import { TypeService } from '../type.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-displaytourtype',
  templateUrl: './displaytourtype.component.html',
  styleUrls: ['./displaytourtype.component.scss']
})
export class DisplaytourtypeComponent {

  private name: any;
  public TypeForm !: FormGroup;
  public selectedLang: any;
  public orders : any=[];
  @ViewChild('closebutton') closebutton: any;
  constructor(private appService: TypeService,
    private formBuilder: FormBuilder) {
      this.createContactForm();
    }
  createContactForm(){

    this.TypeForm = this.formBuilder.group({
      tourtype_code: [-1],  
      tourtype_name: ['']
    
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
  ngOnInit() {
  
    this.getData()
  }
  dataInput: any;
  Tourtype: any =[];
  getData() {
   this.appService
    .getData()
    .subscribe((response) => {
      let prod = response;
      this.Tourtype = prod;

 
    });
  }
  
  onSubmit() {
  
    this.appService
    .addUpdateData(this.TypeForm.value)
    .subscribe((response) => {
      this.reset();
     alert('Type save sucessfully');
     this.closebutton.nativeElement.click();
      this.getData();
     });
}
reset() {
  this.TypeForm.reset();
}
adddata(type: any){
 
  this.createContactForm();


}

editdata(type: any){
    this.TypeForm.patchValue(type);
}
deleteData(type: any){
  this.appService
  .deleteData(type)
  .subscribe((response) => {
    alert('Type  Delete sucessfully');
    this.getData();
  });
}
}
