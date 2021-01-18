import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationLoginService } from './authentication-login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  

  constructor(public auth:AuthenticationLoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      return false;
    }
  }
}
