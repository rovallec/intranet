import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  getAuth() {
    return this._authService.isAuthenticated();

  }

}
