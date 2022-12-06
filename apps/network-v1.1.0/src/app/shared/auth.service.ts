import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _router: Router) { }
  IsLoggedIn(){
    return sessionStorage.getItem('User');
  }
  // IsLoggedOut(){
  //   sessionStorage.removeItem('User');
  // }
  // logoutUser(){
  //   sessionStorage.removeItem('User')
  //   this._router.navigate(['/welcomepage'])
  // }
}
// private _authService: AuthService