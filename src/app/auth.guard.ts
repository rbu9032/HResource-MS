import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HrservicesService } from './hrservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private hr:HrservicesService,private  route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!this.hr.isLoggedIn()){
        this.route.navigate(['login']);
        return false;
      }
    return this.hr.isLoggedIn();
  }
}

