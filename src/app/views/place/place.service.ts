import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../envirment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

 
  constructor(private _httpClient: HttpClient) {}

  // API endpoint

  getDataState(): Observable<any> {
    return this._httpClient.get<any>(environment['apiUrl']+'State/get_state');
  }

  addUpdateStateData(state:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'State/add_update_state',state);
  }
  deleteStateData(state:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'State/deleteData',state);
  }
  country_help(): Observable<any> {
    return this._httpClient.get<any>(environment['apiUrl']+'State/country_help');
  }

  
  getDataCountry(): Observable<any> {
    return this._httpClient.get<any>(environment['apiUrl']+'Contry/get_country');
  }

  getDataCountrywebapi(): Observable<any> {
    return this._httpClient.get<any>('https://countriesnow.space/api/v0.1/countries/states');
  }

  addUpdateCountryData(Country:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'Contry/add_update_country',Country);
  }
  deleteCountryData(Country:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'Contry/deleteData',Country);
  }
}
