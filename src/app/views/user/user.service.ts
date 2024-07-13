import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../envirment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) {}

  // API endpoint

  // Create method
  getData(pera:any): Observable<any> {

    return this._httpClient.post<any>(environment['apiUrl']+'User/get_user',pera);
  }

  addUpdateData(user:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'User/add_update_user',user);
  }
  deleteData(user:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'User/deleteData',user);
  }
  get_tour_help(): Observable<any> {
    return this._httpClient.get<any>(environment['apiUrl']+'User/get_tour_help');
  }
  addBooking(booking:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'Booking/add_booking',booking);
  }
  
}
