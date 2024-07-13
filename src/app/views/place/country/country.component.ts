
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceService } from '../place.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  private name: any;
  countryForm!: FormGroup;
  public selectedLang: any;
  public coun: any = [];
  public country: any = [];
  public country_list: any = [];
 @ViewChild('closebutton') closebutton: any;
 dataInput: any;

  constructor(private appService: PlaceService,
    private formBuilder: FormBuilder) {
    this.createCountryForm();

  }
  createCountryForm() {
     this.countryForm = this.formBuilder.group({
      country_code: ['-1'],
      country_name: ['']
     });
  }
  ngOnInit() {
   this.getData();
 }
//  country = ["Banana", "Orange", "Apple", "Mango"];
  getData() {
    this.appService
      .getDataCountrywebapi()
      .subscribe((response) => {
        let prod = response;


        console.log(this.coun['data']);
       for(let i = 0; i<=this.coun['data'].length;i++){
         this.country.push(this.coun['data'][i]['name']);
        
        }

       });
  }

  onSubmit() {

    this.appService
      .addUpdateCountryData(this.countryForm.value)
      .subscribe((response) => {
        this.reset();
        alert('country save sucessfully');
        this.closebutton.nativeElement.click();
        this.getData();
      });
  }
  reset() {
    this.countryForm.reset();
  }
  adddata(user: any) {
    this.countryForm.reset;
    this.countryForm.patchValue(user);
    }

  editdata(user: any) {
    this.countryForm.patchValue(user);
  }
  deleteData(country: any) {
    this.appService
      .deleteCountryData(country)
      .subscribe((response) => {
        alert('Country Delete sucessfully');
        this.getData();
      });
  }

}
