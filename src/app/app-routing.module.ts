import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component'
import { GuardGuard } from './guard.guard';
import { HrHomepageComponent } from './hr-homepage/hr-homepage.component';

const routes: Routes = [
  {
    path:'home',
    component:GlobalHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'hr-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}),
  RouterModule.forChild(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule {

}
