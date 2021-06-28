import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component'
import { GuardGuard } from './guard.guard';
import { HrHomepageComponent } from './hr-homepage/hr-homepage.component';
import { LocationHomepageComponent } from './location-homepage/location-homepage.component';

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
    path:'location/:id',
    component:LocationHomepageComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}),
  RouterModule.forChild(routes)],
  exports: [RouterModule],
   
})
export class AppRoutingModule {

}
