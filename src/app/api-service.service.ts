import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Articles } from './articles';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  PHP_API_SERVER = environment.PHP_root; 

  constructor(private httpClient:HttpClient) { }

  login(usr:any){
    return this.httpClient.post<Users>(`${this.PHP_API_SERVER}/phpscripts/login_intranet.php`, usr);
  }

  change_password(username:Users) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/change_password.php`, username);
  }

  getPost(art:Articles){
    return this.httpClient.post<Articles[]>(`${this.PHP_API_SERVER}/phpscripts/getPost.php`, art);
  }
}
