import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHomepageComponent } from './global-homepage/global-homepage.component';
import { LoginComponent } from './login/login.component'
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {
    path:'home',
    component:GlobalHomepageComponent,
    canActivate: [GuardGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
