

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../envirment';

@Injectable({
  providedIn: 'root'
})
export class TourService {
 // Create methodS
 constructor(private _httpClient: HttpClient) {}
 getData(obj : any): Observable<any> {

  return this._httpClient.post<any>(environment['apiUrl']+'tour/get_tour',obj);
}

addUpdateData(tour:any,file:any): Observable<any> {

return  this._httpClient.post<any>(environment['apiUrl']+'tour/add_update_tour',tour);

   
}

  
deleteData(tour:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'tour/deleteData',tour);
}
getCountryTourData(tour:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'tour/getCountryTourData',tour);
}
getAllTourSummaryData(obj : any): Observable<any> {

  return this._httpClient.post<any>(environment['apiUrl']+'tour/getAllTypeSummary',obj);
}
getSubtypeourData(obj : any): Observable<any> {

  return this._httpClient.post<any>(environment['apiUrl']+'tour/getSubtypeourData',obj);
}
getSubcountryourData(obj : any): Observable<any> {

  return this._httpClient.post<any>(environment['apiUrl']+'tour/getSubcountryourData',obj);
}
get_tourtype_help(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'tourtype/get_tourtype_help');
}
getTourTypeListWithCount(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'tourtype/getTourTypeListWithCount');
}
getTourContryListWithCount(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'tourtype/getTourContryListWithCount');
}

get_Contrytype_help(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'tourtype/get_Contrytype_help');
}

get_dashbord_box(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'Dashbord/get_dashbord_box');
}

getTopFiveMostSellingTour(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'Dashbord/getTopFiveMostSellingTour');
}

getTopFiveRecentlyAddedTour(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'Dashbord/getTopFiveRecentlyAddedTour');
}
chartDisplay(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'Dashbord/getchartDisplay');
}

addUpdateBookingData(tour:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'Booking/add_booking',tour);
}
getCustomerTourData(obj:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'Booking/getCustomerTourData',obj);
}

statusHelp(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'Booking/statusHelp');
}
getallTourData(pera:any): Observable<any> {

  return this._httpClient.post<any>(environment['apiUrl']+'tour/get_All_tour',pera);
}
statusChange(obj:any): Observable<any> {
alert();

  return this._httpClient.post<any>(environment['apiUrl']+'Booking/statusChange', obj);
}
private sharedData: Subject<any> = new Subject<any>();
sharedData$: Observable<any> = this.sharedData.asObservable();
setData() {
   return this.tour1;
}
setData_norecord() {
  return this.tour_norecord;
}
private tour1 = new BehaviorSubject<any>({
  tour_code: '',
 tour_name:'',
  tour_day:'',
  tour_night:'',
  tour_price:'',
  tour_rate:'',
 discription:'',
  overview:'',
  included:'',
  excluded:'',
  tour_highlights:'',      
tour_information:''


// contry: []

});
private tour_norecord = new BehaviorSubject<any>({
  tour_code: '0',
 tour_name:'',
  tour_day:'',
  tour_night:'',
  tour_price:'',
  tour_rate:'',
  discription:'',
  overview:'',
  included:'',
  excluded:'',
  tour_highlights:'',      
  tour_information:''








});
gettourInfo() {
  return this.tour1.asObservable();
}
settourInfo(tour: any) {
  console.log(tour);
  this.tour1.next(tour);
  console.log(this.tour1);
}

uploadTicket(file:any,BookingCode:any): Observable<any> {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return this._httpClient.post(environment['apiUrl']+'Booking/imagesave/?BookingCode='+BookingCode, formData);
}

saveImage(file:any,Tourname:any): Observable<any> {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return this._httpClient.post(environment['apiUrl']+'tour/imagesave/?Tourname='+Tourname, formData);
}





}
