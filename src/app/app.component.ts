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
  constructor(private _router: Router, private _authService: AuthServiceService) { }

  title = 'NEARSOL';
  username:string = null;
  password:string = null;
  current_site:string = 'Manila';
  global_dir:string = 'Inactive';
  selectedOption:string = 'HOME';

  users: Users[] = [];
  sites: string[] = [];

  ngOnInit() {
    this.users = [{
      username: 'raul.ovalle',
      user_name: 'Raul Ovalle',
      password: 'hello'
    },
    {
      username: 'carl.villaluz',
      user_name: 'Carl Villaluz',
      password: 'Nearsol.2021'
    },
    {
      username: 'violet.pereda',
      user_name: 'Violet Pereda',
      password: 'Marketing2021'
    }]

    this.sites = ['Guatemala', 'Manila', 'Iloilo', 'Colombia'];
  }

  getAuth(): boolean {
    return this._authService.isAuthenticated();
  }

  login() {
    this._authService.changeAuth(false);
    this.users.forEach((user: Users) => {
      if (user.username == this.username) {
        if (user.password == this.password) {
          this._authService.changeAuth(true);
          this._router.navigate(["./home"])
        }
      }
    })
  }

  setCurrentSite(str: string) {
    console.log(str);
    this.current_site = str;
  }

  SetSel(sel:string){
    this.selectedOption = sel;
  }

}
