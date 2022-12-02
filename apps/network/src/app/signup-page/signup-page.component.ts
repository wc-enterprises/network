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
  goToprofile() {
    this.router.navigate(['./loginpage']);
  }
 onSubmit(){
 localStorage.setItem('User', JSON.stringify(this.signuppage.value));
this.signuppage.reset(); 
this.goToprofile();

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
// formData(){

  
//   let email=document.getElementById('email')
//   let username=document.getElementById('username')
//   let password=document.getElementById('password')


//   localStorage.setItem('userEmail',email);
//   localStorage.setItem('username',username);
//   localStorage.setItem('userpassword',password);
// }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }