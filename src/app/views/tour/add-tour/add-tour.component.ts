 import { TourService } from '../tour.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Editor, Validators } from 'ngx-editor';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaceService } from '../../place/place.service';
import { NgSelectConfig } from '@ng-select/ng-select';
@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss']
})
export class AddTourComponent {

  file: any; sharedData: any; updatetourInfo: any; id: any;
  selected_type = [{ id: 1, name: "Solo" }];
  selected_country = [{ id: 1, name: "India" }];
  html_discription = '';
  html_overview = '';
  html_included = '';
  html_excluded = '';
  html_tour_highlights = '';
  html_tour_information = '';
  public tourForm !: FormGroup;
  public selectedLang: any;
  public orders: any = [];
  excluded: Editor;
  included: Editor;
  tour_information: Editor;
  tour_highlights: Editor;
  overview: Editor;
  discription: Editor;
  public itemList: any = [];
  public Typelist: any = [];
  public ContryList: any = [];
  public type: any = [];
  public Contry: any = [];
  public Con: any = [];



  constructor(
    private appService: TourService,
    private appServiceplace: PlaceService,
    private config: NgSelectConfig,
    private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute) {
    this.excluded = new Editor();
    this.included = new Editor();
    this.tour_information = new Editor();
    this.tour_highlights = new Editor();
    this.overview = new Editor();
    this.discription = new Editor();
    
  this.config.notFoundText = 'Custom not found';
  this.config.appendTo = 'body';
  this.config.bindValue = 'value';

  }

  selectedCar: number | undefined;
  selectedtype: number | undefined;
  selectedContry: number | undefined;
  ngOnInit() {
    this.getTourTypeData();
    this.getContryTypeData();
    this.route.params.subscribe((params: Params) => {
      let prodId = params['id'];


      if (prodId !=0) {
   
        this.appService.setData().subscribe(info => {
          this.sharedData = info;
          console.log(this.sharedData);

          this.createtourForm(this.sharedData);
        })
      } else {
  
        this.appService.setData_norecord().subscribe(info => {
          this.sharedData = info;
          this.createtourForm(this.sharedData);
        })
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.tourForm.controls;
  }
  submitted = false;
  createtourForm(updatetourInfo: any) {

 
     this.tourForm = this.formBuilder.group({
      tour_code: [parseInt(updatetourInfo.tour_code)],
      tour_name: [updatetourInfo.tour_name,  [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      tour_day: [updatetourInfo.tour_day,[
        Validators.required
      ]],
      tour_night: [updatetourInfo.tour_night,[
        Validators.required
      ]],
      tour_price: [updatetourInfo.tour_price,[
        Validators.required
      ]],
      // type: [],
      tour_rate: [updatetourInfo.tour_rate,[
        Validators.required
      ]],
      discription: [updatetourInfo.discription,[
        Validators.required
      ]],
      overview: [updatetourInfo.overview],
      tour_highlights: [updatetourInfo.tour_highlights],
      tour_information: [updatetourInfo.tour_information],
      included: [updatetourInfo.included],
      excluded: [updatetourInfo.excluded]
      // contry: []
    });
    this.html_discription = updatetourInfo.discription;
    this.html_overview = updatetourInfo.overview;
    this.html_included = updatetourInfo.included;
    this.html_excluded = updatetourInfo.excluded;
    this.html_tour_highlights = updatetourInfo.tour_highlights;
    this.html_tour_information = updatetourInfo.tour_information;

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
    this.appServiceplace
    .getDataCountrywebapi()
    .subscribe((response) => {
       this.Con = response;
     for(let i = 0; i<=this.Con['data'].length;i++){
      let Cont= {
        "id": i,
        "name": this.Con['data'][i]["name"]
       }
      this.Contry.push(Cont);
     
   }
});
  }
  countrydata :any
  selectedcountry(e:any){
   this.countrydata = e}
  typedata :any
  selectetype(e:any){
    this.typedata = e
  }
 onSubmit() {
  this.submitted = true;
    // console.log(this.typedata.toString());
    // console.log(this.countrydata.toString());
  debugger;
    if (this.tourForm.valid) {

   var listObj = {
      "tour_type": this.typedata.toString(),
      "country_code":this.countrydata.toString()
    };
   var obj = Object.assign(listObj, this.tourForm.value);
   if (this.file) {
      this.appService
        .addUpdateData(obj, this.file)
        .subscribe((response) => {
          alert('Tour save sucessfully');
          debugger;
          this.appService.saveImage(this.file,this.tourForm.controls['tour_name'].value).subscribe(() => {
        alert('file save sucessfully')

            });

          this.reset();

          // console.log(response)
          // if(response.code == 200){
         
          // }
          // else{
          //   alert(response.error);
            
          // }

          // this.router.navigateByUrl('tour/display-Tour');
        });
    }   else {
      alert("please select image")
    }
  }

  }
 onFileChanged(event: any) {
    this.file = event.target.files[0];
  }
 reset() {
    this.tourForm.reset();
  }
  adddata(Coupan: any) {
    this.tourForm.reset;
    this.tourForm.patchValue(Coupan);
  }
 editdata(Coupan: any) {
    this.tourForm.patchValue(Coupan);
  }
  deleteData(Coupan: any) {
    this.appService
      .deleteData(Coupan)
      .subscribe((response) => {
        alert('Coupan Delete sucessfully');
        // this.getData();
      });
  }



}
