import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { AuthServiceService } from '../auth-service.service'
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  username: Users = new Users;
  newPassword: string = '';
  newPassword2: string = '';
  

  constructor( private _authService: AuthServiceService, public apiService:ApiServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  change_password(){
    this.username = this._authService.getAuthusr();

    if ((this.newPassword != '') && (this.newPassword == this.newPassword2)) {
      this.username.password = this.newPassword;
      this.apiService.change_password(this.username).subscribe((str: string) => {
        if (str=='changed') {
          this._router.navigate(["./login"]);
        }
      });
    } else {
      window.alert("Passwords don't match.")
    }
  }

}
