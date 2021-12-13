import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component'
import { GuardGuard } from './guard.guard';
import { HrHomepageComponent } from './hr-homepage/hr-homepage.component';
import { LocationHomepageComponent } from './location-homepage/location-homepage.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { ConfirmAprovalComponent } from './confirm-aproval/confirm-aproval.component';

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
  },
  {
    path:'re-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'admin-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'marketing-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'ops-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'wf-homepage',
    component:HrHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'location/:id',
    component:LocationHomepageComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'change_password',
    component:ChangePasswordComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'approval',
    component:ApprovalRequestComponent,
    canActivate:[GuardGuard]
  },

  {
    path: 'confirm_approval',
    component:ConfirmAprovalComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false}),
  RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
