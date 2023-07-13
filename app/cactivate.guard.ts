import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CActivateGuard implements CanActivate {
  constructor(public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("email")==null && localStorage.getItem("password")==null){
        alert("Confirm your Submission");
        this.router.navigate(['login']);
        return false;
      }
      else{
        return true;
      }
  }
  
}
