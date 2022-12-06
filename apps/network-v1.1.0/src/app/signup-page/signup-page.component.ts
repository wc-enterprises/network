// // import { Component, OnInit } from '@angular/core';
// // // import { FormControl, FormGroup } from '@angular/forms';
// // import { MatSliderChange } from '@angular/material/slider';
// // import { FormGroup, FormControl, Validators } from '@angular/forms'
// // import { Router } from '@angular/router';
// // import { __values } from 'tslib';

 
// // @Component({
// //   selector: 'app-signup-page',
// //   templateUrl: './signup-page.component.html',
// //   styleUrls: ['./signup-page.component.css']
// // })
// // export class SignupPageComponent  implements OnInit {
  
  
  
// //   signupform!: FormGroup; 
// //   constructor(private router: Router) {}

// //   ngOnInit(): void { 
// //     this.signupform = new FormGroup({
// //       'mail' : new FormControl(),
// //       'username' : new FormControl(null),
// //            'pw' : new FormControl(null),
// //     });
// //   }
  
// //   goTomainpage() {  

// //     this.router.navigate(['./mainpage']);
// //   }
// //  onSubmit(){
// //  localStorage.setItem('User', JSON.stringify(this.signupform.value));
// // this.signupform.reset();
// // this.goTomainpage();

// //  }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signuppage = new FormGroup({
    'mail' : new FormControl(null,[Validators.required,Validators.email]),
    'username' : new FormControl(null,Validators.required),
    'password' : new FormControl(null,[Validators.required ,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
  });
ngOnInit() {  
}

constructor(private router: Router) {}

goTomainpage(){
  this.router.navigate(['./loginpage']);
}
onSubmit(){
localStorage.setItem('User', JSON.stringify(this.signuppage.value));
this.signuppage.reset(); 
this.goTomainpage();
}
get vmail(){
  return this.signuppage.get("mail")
   }
   get vusername(){
  return this.signuppage.get("username")
   }
    get vpassword(){
  return this.signuppage.get("password")
   }
   goTohome(){
    this.router.navigate(['./welcome']);
   }
} 