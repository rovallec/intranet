import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router, private _authService: AuthServiceService){}

  title = 'NEARSOL';
  username:string = null;
  password:string = null;

  users:Users[] = [];

  ngOnInit(){
    this.users = [{
        username:'raul.ovalle',
        user_name:'Raul Ovalle',
        password:'hello'
    }]
  }


  login(){
    this._authService.changeAuth(false);
    this.users.forEach((user:Users)=>{
      if(user.username == this.username){
        if(user.password == this.password){
          this._authService.changeAuth(true);
          this._router.navigate(["./home"])
        }
      }
    })
  }
}