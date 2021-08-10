import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Articles } from './articles';
import { environment } from './../environments/environment';
import { attendences, attendences_adjustment, disciplinary_processes, employees, leaves, periods, terminations, vacations } from './collection';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  PHP_API_SERVER = environment.PHP_root; 
  user: Users = new Users;

  constructor(private httpClient:HttpClient) { }

  artDefault: Articles = {
    id: '0',
    location:"",
    header:"More Content Soon",
    byline: "",
    multimedia:"./assets/soon.png",
    fragment: "",
    article:"",
    author:'',
    date:'June 2, 2021',
    url: '',
    origin: '',
    label: ''
  };

  login(usr:any){
    return this.httpClient.post<Users>(`${this.PHP_API_SERVER}/phpscripts/login_intranet.php`, usr);
  }

  change_password(username:Users) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/change_password.php`, username);
  }

  getPost(art:Articles){
    return this.httpClient.post<Articles[]>(`${this.PHP_API_SERVER}/phpscripts/postgres/getPost.php`, art);
  }

  getEmployees(id: any) {
    return this.httpClient.post<employees>(`${this.PHP_API_SERVER}/phpscripts/getEmployeebyUser.php`, id);
  }

  setUser(user:Users) {
    this.user = user;
  }

  getPeriods(){
    return this.httpClient.get<periods[]>(`${this.PHP_API_SERVER}/phpscripts/getPeriods.php`);
  }

  getAttendences(flt:any){
    return this.httpClient.post<attendences[]>(`${this.PHP_API_SERVER}/phpscripts/getAttendences.php`, flt);
  }
  
  getVacations(str:any){
    return this.httpClient.post<vacations[]>(`${this.PHP_API_SERVER}/phpscripts/getVacations.php`,str);
  }

  getLeaves(str:any){
    return this.httpClient.post<leaves[]>(`${this.PHP_API_SERVER}/phpscripts/getLeaves.php`, str);
  }

  getDPAtt(any:any){
    return this.httpClient.post<disciplinary_processes[]>(`${this.PHP_API_SERVER}/phpscripts/getDPAtt.php`, any);
  }

  getTermdt(emp:employees){
    return this.httpClient.post<terminations>(`${this.PHP_API_SERVER}/phpscripts/getTermdt.php`, emp);
  }

  getAttAdjustments(str:any){
    return this.httpClient.post<attendences_adjustment[]>(`${this.PHP_API_SERVER}/phpscripts/getAttAdjustments.php`, str);
  }
  
}
