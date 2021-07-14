import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn = false;

  isAuthentication(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          resolve(this.loggedIn);
        }, 8);
      }
    );

    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false
  }
}
