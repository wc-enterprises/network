import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  signuppage = new FormGroup({
    mail: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
      ),
    ]),
  });

  constructor(private router: Router) {}
  goToprofile() {
    this.router.navigate(['./loginpage']);
  }
  onSubmit() {
    localStorage.setItem('User', JSON.stringify(this.signuppage.value));
    this.signuppage.reset();
    this.goToprofile();
  }

  get vmail() {
    return this.signuppage.get('mail');
  }
  get vusername() {
    return this.signuppage.get('username');
  }
  get vpassword() {
    return this.signuppage.get('password');
  }
  goTohome() {
    this.router.navigate(['./welcome']);
  }
}
