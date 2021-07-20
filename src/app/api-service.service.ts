import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  //PHP_API_SERVER = "http://172.18.2.45";
  PHP_API_SERVER = "http://181.114.12.81";

  constructor(private httpClient:HttpClient) { }

  login(usr:any){
    return this.httpClient.post<Users>(`${this.PHP_API_SERVER}/phpscripts/login_intranet.php`, usr);
  }

  change_password(username:Users) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/change_password.php`, username);
  }
}
