import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private _authService:AuthService) { }

  ngOnInit() {
  }
  onLoadServer(){
    //complex calculation
    this.router.navigate(["/servers"])
  }

  onLoggedIn(){
    this._authService.login();
  }

  onLoggedOut(){
    this._authService.logout();
  }
}
