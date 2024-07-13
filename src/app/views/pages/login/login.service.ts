import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import{environment} from './../.././envirment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) {}


 loginData(user:any): Observable<any> {
  console.log(environment['apiUrl']+'User/login_user')

  return this._httpClient.post<any>(environment['apiUrl']+'User/login_user',user);
}
}
