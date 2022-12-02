import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean=false;
   
  logout(){
  sessionStorage.removeItem('User');
  this.router.navigate(['./welcome'])
}
}
