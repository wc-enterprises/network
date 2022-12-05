import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router : Router){

  }
  canActivate(){
  
    
      if(this.auth.IsLoggedIn()){
 return true;
      }
      alert("We have not logged In")
  this.router.navigate(['loginpage']);
  return false;
  }
  
}
