import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router){}

  title = 'NEARSOL';
  username:string = null;
  password:string = null;


  login(){
    if(this.username == 'raul.ovalle' && this.password == 'hello'){
      window.alert("Hello " + this.username);
    }
  }
}
