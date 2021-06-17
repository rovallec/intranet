import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from "./auth-service.service"
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private _authService: AuthServiceService, private _router: Router) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this._authService.isAuthenticated()) {
        this._router.navigate(['../intranet']);
        return false;
    }else{
      return true;
    }
  }
  
}
