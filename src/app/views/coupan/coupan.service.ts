import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../envirment';
@Injectable({
  providedIn: 'root'
})
export class CoupanService {
  constructor(private _httpClient: HttpClient) {}

  // API endpoint

  // Create method
  getData(): Observable<any> {
    return this._httpClient.get<any>(environment['apiUrl']+'Coupan/get_coupan');
  }

  addUpdateData(Coupan:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'Coupan/add_update_coupan',Coupan);
  }
  deleteData(Coupan:any): Observable<any> {
    return this._httpClient.post<any>(environment['apiUrl']+'Coupan/deleteData',Coupan);
  }

}
