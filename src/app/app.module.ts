import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component';
import { HrHomepageComponent } from './hr-homepage/hr-homepage.component';
import { LocationHomepageComponent } from './location-homepage/location-homepage.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { ConfirmAprovalComponent } from './confirm-aproval/confirm-aproval.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHomepageComponent,
    LoginComponent,
    HrHomepageComponent,
    LocationHomepageComponent,
    ChangePasswordComponent,
    ApprovalRequestComponent,
    ConfirmAprovalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:LocationStrategy, 
    useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
