import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Articles } from './articles';
import { environment } from './../environments/environment';
import {  attendences, attendences_adjustment, disciplinary_processes, employees, leaves, periods,
          process_templates, services, terminations, vacations, process, advances } from './collection';

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
    article:" ",
    author:"",
    date:"2021-06-02",
    url: "",
    origin: "",
    label: ""
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

  getEmployeesbyReporter(id: any) {
    return this.httpClient.post<employees>(`${this.PHP_API_SERVER}/phpscripts/getEmployeesbyReporter.php`, id);
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

  getVacationsByReporter(str:any){
    return this.httpClient.post<vacations[]>(`${this.PHP_API_SERVER}/phpscripts/getVacationsByReporter.php`,str);
  }

  getLeaves(str:any){
    return this.httpClient.post<leaves[]>(`${this.PHP_API_SERVER}/phpscripts/getLeaves.php`, str);
  }

  getFilteredLeaves(str: any){
    return this.httpClient.post<leaves[]>(`${this.PHP_API_SERVER}/phpscripts/getFilteredLeaves.php`, str);
  }

  getDPAtt(any:any){
    return this.httpClient.post<disciplinary_processes[]>(`${this.PHP_API_SERVER}/phpscripts/getDPAtt.php`, any);
  }

  getTermdt(emp:employees){
    return this.httpClient.post<terminations>(`${this.PHP_API_SERVER}/phpscripts/getTermdt.php`, emp);
  }

  getAttAdjustments(str:any){
    return this.httpClient.post<attendences_adjustment[]>(`${this.PHP_API_SERVER}/phpscripts/getJustifications.php`, str);
  }

  getAttJustificationsBySup(str:any){
    return this.httpClient.post<attendences_adjustment[]>(`${this.PHP_API_SERVER}/phpscripts/getJustificationsBySup.php`, str);
  }


  getAttAllAdjustments(str:any){
    return this.httpClient.post<attendences_adjustment[]>(`${this.PHP_API_SERVER}/phpscripts/getAttAllAdjustment.php`, str);
  }

  insertVacations(vacation:vacations){
    return this.httpClient.post<vacations>(`${this.PHP_API_SERVER}/phpscripts/insertVacations.php`, vacation);
  }

  updateVacation(vacation:vacations){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/updateVacation.php`, vacation);
  }

  getApprovers(){
    return this.httpClient.get<Users[]>(`${this.PHP_API_SERVER}/phpscripts/getApprovers.php`);
  }

  updateLeaves(leave:leaves){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/updateLeaves.php`, leave);
  }

  insertLeaves(leaves:leaves){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertLeave.php`, leaves);
  }

  insertAttJustification(adj:attendences_adjustment){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertAttJustification.php`, adj);
  }

  updateJustifications(adj:attendences_adjustment) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/updateJustifications.php`, adj);
  }

  revertJustification(any:any){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertCancelAdjustment.php`, any);
  }

  getAttAdjustment(str:any){
    return this.httpClient.post<attendences_adjustment>(`${this.PHP_API_SERVER}/phpscripts/getAttAdjustment.php`, str);
  }

  getServices(any:any){
    return this.httpClient.post<services[]>(`${this.PHP_API_SERVER}/phpscripts/getServices.php`,any);
  }

  updateService(service: services) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/updateService.php`, service);
  }

  insertService(service:services){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertService.php`, service);
  }

  getFacilitesTemplate(){
    return this.httpClient.get<process_templates[]>(`${this.PHP_API_SERVER}/phpscripts/getFacilitiesTemplates.php`);
  }

  deleteService(service: services) {
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/deleteService.php`, service);
  }

  insertProc(proc:process){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertHr_Process.php`, proc);
  }

  insertAdvances(adv:advances){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/insertAdvances.php`, adv);
  }

  getProcRecorded(id:any){
    return this.httpClient.post<process[]>(`${this.PHP_API_SERVER}/phpscripts/getProcRecroded.php`, id);
  }

  getAdvances(proc:process){
    return this.httpClient.post<advances>(`${this.PHP_API_SERVER}/phpscripts/getAdvances.php`, proc);
  }

  setArticlesFragment(str:string){
    let ss:string = '';
    if (str!==null) {
      ss = str.substr(0, 180 + str.substr(179, str.length).search(' '));
      if(str.length > 180){
        ss = ss.substr(0,ss.length - 1) + '...';
      } else {
        ss = str;
      }
    }
    return ss;
  }

  validateDates(Adate1: string, Adate2: string): boolean {
    let date1: Date = new Date(Adate1);
    let date2: Date = new Date(Adate2);

    if (date1 >= date2) {
      return true;
    } else {
      return false;
    }
  }

  sendNotification(any:any){
    return this.httpClient.post<string>(`${this.PHP_API_SERVER}/phpscripts/sendmail_intranet_ne.php`, any);
  }

}
