import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private _authService:AuthService, private router:Router) { }

  canActivate( route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{

   return this._authService.isAuthentication()
    .then(
      (authenticated: boolean) => {
        if(authenticated){
          return true;
        } else {
         this.router.navigate(['/'])
        }
    });
  }}

