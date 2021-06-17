import { Injectable } from '@angular/core';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }

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
  }

  getAuthusr(){
    return this.autUser;
  }
}
