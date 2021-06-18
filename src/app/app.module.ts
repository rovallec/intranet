import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component';
import { HrHomepageComponent } from './hr-homepage/hr-homepage.component';
import { LocationHomepageComponent } from './location-homepage/location-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHomepageComponent,
    LoginComponent,
    HrHomepageComponent,
    LocationHomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
