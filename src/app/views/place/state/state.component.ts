

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../place.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  private name: any;
  stateForm!: FormGroup;
  public selectedLang: any;
    public sta: any = [];
  public countrys: any = [];
  public country_list: any = [];
  @ViewChild('closebutton') closebutton: any;
  constructor(private appService: PlaceService,
    private formBuilder: FormBuilder) {
    this.createStateForm();
    this.getcountrys();
  }
  createStateForm() {
    // this.countrys = this.getcountrys();
    this.stateForm = this.formBuilder.group({
      state_code: ['-1'],
      country_code: ['-1'],
      state_name: ['']

    });
  }
  ngOnInit() {

    // this.getData(null);
    // this.getcountrys();
  }
  dataInput: any;
  state: any = [];

  getcountrys() {


    this.appService
      .country_help()
      .subscribe((response) => {
        this.country_list = response;


      });

  }

  // getData() {
  //   this.appService
  //     .getDataState()
  //     .subscribe((response) => {
  //       let prod = response;
  //       this.state = prod;


  //     });
  // }

 
  onSubmit() {

    this.appService
      .addUpdateStateData(this.stateForm.value)
      .subscribe((response) => {
        this.reset();
        alert('state save sucessfully');
        this.closebutton.nativeElement.click();
        this.getData();
      });
  }
  reset() {
    this.stateForm.reset();
  }
  adddata(user: any) {

    this.stateForm.reset;
    this.stateForm.patchValue(user);

  }


country_text = '';
 
  getData() {
    console.log(this.country_text);

    this.appService
    .getDataCountrywebapi()
    .subscribe((response) => {
      let prod = response;
      this.sta = prod;

      this.state=[];
  let country_obj = this.sta['data'].find((obj: any) => obj.name.toLowerCase() === this.country_text.toLowerCase() ); 
console.log(country_obj);
     for(let i = 0; i<=country_obj['states'].length;i++){
       this.state.push(country_obj['states'][i]['name']);
  }

     });

    
    // this.appService
    //   .getDataCountrywebapi()
    //   .subscribe((response) => {
    //     let prod = response;
    //     this.sta = prod;

    //     for(let i = 0; i<=this.sta['data'].length;i++){
    //     let filteredUsers = this.sta.filter((user) => {
    //       return this.sta['data'][i]['name'] > 40 && user.occupation === 'programmer';
    //   });

   
 
          
        
    //     }

    //    });
      }

  editdata(user: any) {
    this.stateForm.patchValue(user);
  }
  deleteData(state: any) {
    this.appService
      .deleteStateData(state)
      .subscribe((response) => {
        alert('State Delete sucessfully');
        this.getData();
      });
  }


}
