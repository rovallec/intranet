import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(public apiService: ApiServiceService) { }

  authState:boolean = false;
  autUser:Users = new Users

  changeAuth(state:boolean){
    this.authState = state;
  }

  isAuthenticated(){
    return this.authState;
  }

  saveUsr(usr:Users){
    this.autUser = usr;
    this.apiService.setUser(usr);
  }

  getAuthusr(){
    return this.autUser;
  }
}
