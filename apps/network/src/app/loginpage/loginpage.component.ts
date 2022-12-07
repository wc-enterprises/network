import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { STRING_TYPE } from '@angular/compiler';
import { getAllContacts } from '../services/network.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  signupdata: any;
  logindata: any;

  loginpage = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
      ),
    ]),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {
    const res = getAllContacts({
      userId: 'u_bc6fb931-e55e-4ca7-84f0-fdf5d6b58f5b',
    });
    console.log('res from getAllContacts', res);
  }
  goTosignuppage() {
    this.router.navigate(['./signuppage']);
  }

  goToprofilepage() {
    this.router.navigate(['./profilepage']);
  }
  goTowelcome() {
    this.router.navigate(['./welcome']);
  }

  onSubmit() {
    sessionStorage.setItem('User', JSON.stringify(this.loginpage.value));

    this.signupdata = localStorage.getItem('User');
    this.logindata = sessionStorage.getItem('User');
    this.signupdata = JSON.parse(this.signupdata);
    this.logindata = JSON.parse(this.logindata);

    console.log('This is signupdata  ' + this.signupdata.mail);
    console.log('This is login data  ' + this.logindata.username);
    this.loginpage.reset();
    //  this.loginform = JSON.parse(this.loginform)
    //  console.log(this.loginform.controls.usname.value)

    if (
      this.signupdata.username == this.logindata.username &&
      this.signupdata.password == this.logindata.password
    ) {
      this.goToprofilepage();
    } else {
      alert('Check Your Credentials');
    }
  }

  // for forms validators

  get vusername() {
    return this.loginpage.get('username');
  }
  get vpassword() {
    return this.loginpage.get('password');
  }
}
