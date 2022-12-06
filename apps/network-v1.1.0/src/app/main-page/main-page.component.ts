import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showMainPage: boolean=true;
  showDetailsDisplayPage: boolean=false;
  selectedReceiver:any;
  goTowelcomepage(){
    this.router.navigate(['./welcomepage']);
  }
  public users =[
   {
    userid:"1",
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    userid:"2",
    image:"/assets/images/arun1.png",
    name:'tazeen',
    place:'Chennai',
   }, 
   {
    userid:"3",
    image:"/assets/images/arun.png",
    name:'madhan',
    place:'Neyveli',
   },
   {
    userid:"4",
    image:"/assets/images/arun1.png",
    name:'Abin',
    place:'Neyveli',
   }, 
   {
    userid:"5",
    image:"/assets/images/arun.png",
    name:'Siva',
    place:'Neyveli',
   }, 
   {
    userid:"6",
    image:"/assets/images/arun1.png",
    name:'Aswin',
    place:'Neyveli',
   }, 
   {
    userid:"7",
    image:"/assets/images/arun.png",
    name:'Edov',
    place:'Neyveli',
   }, 
   {
    userid:"8",
    image:"/assets/images/arun1.png",
    name:'Vichu',
    place:'Neyveli',
   }, 
   {
    userid:"9",
    image:"/assets/images/arun.png",
    name:'Sai',
    place:'Neyveli',
   }, 
   {
    userid:"10",
    image:"/assets/images/arun1.png",
    name:'Gugesh',
    place:'Neyveli',
   },
   {
    userid:"11",
    image:"/assets/images/arun.png",
    name:'Rajan',
    place:'Neyveli',
   }, 
   {
    userid:"12",
    image:"/assets/images/arun1.png",
    name:'Adhi',
    place:'Neyveli',
   }, 
   {
    userid:"13",
    image:"/assets/images/arun.png",
    name:'Goel',
    place:'Neyveli',
   }, 
   {
    userid:"14",
    image:"/assets/images/arun1.png",
    name:'Dinu',
    place:'Neyveli',
   }, 
   {
    userid:"15",
    image:"/assets/images/arun.png",
    name:'Dhanz',
    place:'Neyveli',
   }, 
  ]
  currentUser:any;
  constructor(private router: Router) { }
  userdata :any;
  ngOnInit(): void {
    this.userdata = localStorage.getItem('User');
    this.userdata = JSON.parse(this.userdata)
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  showElements: boolean = false;
  showListElements: boolean = false;
 
  showElements1: boolean = false;
  showListElements1: boolean = false;

  showprofile(){
  console.log (this.userdata)
   }

   Logout() {
    sessionStorage.removeItem('User');
    this.router.navigate(['./welcomepage']);
  }
}
 



// selectCurrentUser(user:any){ console.log("hi",user);this.currentUser=user;
  //  this.showMainPage=false;this.showDetailsDisplayPage=true;}



//   import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.css']
// })
// export class MainPageComponent implements OnInit {
//   showMainPage: boolean=true;
//   showDetailsDisplayPage: boolean=false;
//   selectedReceiver:any;
//   public users =[
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'tazeen',
//     place:'Chennai',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'madhan',
//     place:'Neyveli',
//    },
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//   ]
//   currentUser:any;
//   constructor() { }

//   ngOnInit(): void {
//   }
//   showElements: boolean = false;
//   showListElements: boolean = false;
//   selectCurrentUser(user:any){ console.log("hi",user);this.currentUser=user;
//    this.showMainPage=false;this.showDetailsDisplayPage=true;}
//   showElements1: boolean = false;
//   showListElements1: boolean = false;
// }