import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate,CanActivateChild{

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
  }


  canActivateChild ( route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{

    return this.canActivate(route, state);

  }

}
