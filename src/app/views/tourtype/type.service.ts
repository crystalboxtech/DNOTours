import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../envirment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
 // Create method
 constructor(private _httpClient: HttpClient) {}
 getData(): Observable<any> {
  return this._httpClient.get<any>(environment['apiUrl']+'tourtype/get_tourtype');
}

addUpdateData(type:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'tourtype/add_update_tourtype',type);
}
deleteData(type:any): Observable<any> {
  return this._httpClient.post<any>(environment['apiUrl']+'tourtype/deleteData',type);
}

}
