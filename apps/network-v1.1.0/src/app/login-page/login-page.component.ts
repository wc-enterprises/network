// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup,Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { STRING_TYPE } from '@angular/compiler';
// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent implements OnInit {


//  signuppagedata :any;
//  loginpagedata :any ;

//  loginform = new FormGroup({ 
//   'usname' : new FormControl(null,Validators.required),
//        'pw' : new FormControl(null,[Validators.required ,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
// });
// constructor(private router: Router) { }

//   ngOnInit(): void {
// //  this.loginform = new FormGroup({
// //       'usname' : new FormControl(null),
// //            'pw' : new FormControl(null),
//     }

//   goTosignuppage() {
//     this.router.navigate(['./signuppage']);
//   }

//   goTomainpage() {  

//     this.router.navigate(['./mainpage']);
//   }


//   onSubmit(){
//     sessionStorage.setItem('User', JSON.stringify(this.loginform.value));
  
//      this.signuppagedata = localStorage.getItem('User');
//      this.loginpagedata = sessionStorage.getItem("User");
//      this.signuppagedata = JSON.parse(this.signuppagedata);
//      this.loginpagedata = JSON.parse(this.loginpagedata)
  
//      console.log("This is signuppagedata  " + this.signuppagedata.mail)
//      console.log("This is loginpagedata  " + this.loginpagedata.usname)
//      this.loginform.reset();
//     //  this.loginform = JSON.parse(this.loginform)
//     //  console.log(this.loginform.controls.usname.value)
  
//     if(this.signuppagedata.username == this.loginpagedata.usname && this.signuppagedata.pw == this.loginpagedata.pw){
//       this.goTomainpage();
//     }
//     else{
//       alert("Check Your Credentials")
//     }
//   }
  
//   // get vname(){
//   //   return this.loginform.get("usname")
//   //    }
//   //     get vpw(){
//   //   return this.loginform.get("pw")
//   //    }
  
//   }



import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { STRING_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signupdata :any;
 logindata :any ;

loginpage= new FormGroup({ 
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null,[Validators.required ,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    });
  constructor(private router: Router) { }

  ngOnInit(): void {
 

  }
  goTosignuppage() {
    this.router.navigate(['./signuppage']);
  }

  goTomainpage() {  

    this.router.navigate(['./mainpage']);
  }


onSubmit(){
  sessionStorage.setItem('User', JSON.stringify(this.loginpage.value));

   this.signupdata = localStorage.getItem('User');
   this.logindata = sessionStorage.getItem("User");
   this.signupdata = JSON.parse(this.signupdata);
   this.logindata = JSON.parse(this.logindata)

   console.log("This is signupdata  " + this.signupdata.mail)
   console.log("This is login data  " + this.logindata.username)
   this.loginpage.reset();
  //  this.loginform = JSON.parse(this.loginform)
  //  console.log(this.loginform.controls.usname.value)

  if(this.signupdata.username == this.logindata.username && this.signupdata.password == this.logindata.password){
    this.goTomainpage();
  }
  else{
    alert("Check Your Credentials")
  }
}
  


   get vusername(){
return this.loginpage.get("username")
 }
  get vpassword(){
return this.loginpage.get("password")
 }

}
