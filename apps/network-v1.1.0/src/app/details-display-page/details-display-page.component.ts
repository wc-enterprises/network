// import { Component, OnInit ,Input} from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Router, UrlSerializer } from '@angular/router';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {EventEmitter,OnChanges,Output,SimpleChanges} from '@angular/core';

// type details = Array<{ id: number; name: string }>;

// @Component({
//   selector: 'app-details-display-page',
//   templateUrl: './details-display-page.component.html',
//   styleUrls: ['./details-display-page.component.css']
// })
// export class DetailsDisplayPageComponent implements OnInit {
  
//   constructor(private router: Router,private route: ActivatedRoute) { 
//     this.currentUser
//   }
//   id:any;
  
  
 
//   public users:{userid : any ;facebook : any;  name:  any  ; place :  any  ; image:  any ; category : any ; number : any  ; instagram :  any  ; linkedin :  any  ; description :  any  }[]=[
//     {
//       userid : "1",
//       image:"/assets/images/arun.png",
//       name:'Arun',
//         place: 'Kerala',
//         category : 'Intresting People',
//         facebook: "Aruncopzz",
//         number: '8667263143',
//         instagram : '_arunvjcopzz_',
//         linkedin: 'https://www.linkedin.com/in/arun2599/',
//         description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//       },
//       {
//         userid : "2",
//         image:"/assets/images/arun1.png",
//         name:'Tazzin',
//           place: 'Chennai',
//           category : 'Business People',
//           facebook: "Aruncopzz",
//           number: '8667263143',
//           instagram : '_arunvjcopzz_',
//           linkedin: 'https://www.linkedin.com/in/arun2599/',
//           description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//         },
//         {
//           userid : "3",
//           image:"/assets/images/arun.png",
//           name:'Madhan',
//             place: 'Chennai',
//             category : 'Sport People',
//             facebook: "Aruncopzz",
//             number: '8667263143',
//             instagram : '_arunvjcopzz_',
//             linkedin: 'https://www.linkedin.com/in/arun2599/',
//             description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//           },
//           {
//             userid : "4",
//             image:"/assets/images/arun1.png",
//             name:'Abin',
//               place: 'Chennai',
//               category : 'Intresting People',
//               facebook: "Aruncopzz",
//               number: '8667263143',
//               instagram : '_arunvjcopzz_',
//               linkedin: 'https://www.linkedin.com/in/arun2599/',
//               description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//             },
//             {
//               userid : "5",
//               image:"/assets/images/arun.png",
//               name:'Siva',
//                 place: 'Neyveli',
//                 category : 'Intresting People',
//                 facebook: "Aruncopzz",
//                 number: '8667263143',
//                 instagram : '_arunvjcopzz_',
//                 linkedin: 'https://www.linkedin.com/in/arun2599/',
//                 description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//               },
//               {
//                 userid : "6",
//                 image:"/assets/images/arun1.png",
//                 name:'Aswin',
//                   place: 'Chennai',
//                   category : 'Intresting People',
//                   facebook: "Aruncopzz",
//                   number: '8667263143',
//                   instagram : '_arunvjcopzz_',
//                   linkedin: 'https://www.linkedin.com/in/arun2599/',
//                   description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                 },
//                 {
//                   userid : "7",
//                   image:"/assets/images/arun.png",
//                   name:'Edov',
//                     place: 'Neyveli',
//                     category : 'Intresting People',
//                     facebook: "Aruncopzz",
//                     number: '8667263143',
//                     instagram : '_arunvjcopzz_',
//                     linkedin: 'https://www.linkedin.com/in/arun2599/',
//                     description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                   },
//                   {
//                     userid : "8",
//                     image:"/assets/images/arun1.png",
//                     name:'Vichu',
//                       place: 'Neyveli',
//                       category : 'Intresting People',
//                       facebook: "Aruncopzz",
//                       number: '8667263143',
//                       instagram : '_arunvjcopzz_',
//                       linkedin: 'https://www.linkedin.com/in/arun2599/',
//                       description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                     },
//                     {
//                       userid : "9",
//                       image:"/assets/images/arun.png",
//                       name:'Sai',
//                         place: 'Neyveli',
//                         category : 'Intresting People',
//                         facebook: "Aruncopzz",
//                         number: '8667263143',
//                         instagram : '_arunvjcopzz_',
//                         linkedin: 'https://www.linkedin.com/in/arun2599/',
//                         description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                       },
//                       {
//                         userid : "10",
//                         image:"/assets/images/arun1.png",
//                         name:'Gugesh',
//                           place: 'Neyveli',
//                           category : 'Intresting People',
//                           facebook: "Aruncopzz",
//                           number: '8667263143',
//                           instagram : '_arunvjcopzz_',
//                           linkedin: 'https://www.linkedin.com/in/arun2599/',
//                           description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                         },
//                         {
//                           userid : "11",
//                           image:"/assets/images/arun.png",
//                           name:'Rajan',
//                             place: 'Neyveli',
//                             category : 'Intresting People',
//                             facebook: "Aruncopzz",
//                             number: '8667263143',
//                             instagram : '_arunvjcopzz_',
//                             linkedin: 'https://www.linkedin.com/in/arun2599/',
//                             description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                           },
//                           {
//                             userid : "12",
//                             image:"/assets/images/arun1.png",
//                             name:'Adhi',
//                               place: 'Neyveli',
//                               category : 'Intresting People',
//                               facebook: "Aruncopzz",
//                               number: '8667263143',
//                               instagram : '_arunvjcopzz_',
//                               linkedin: 'https://www.linkedin.com/in/arun2599/',
//                               description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                             },
//                             {
//                               userid : "13",
//                               image:"/assets/images/arun.png",
//                               name:'Goel',
//                                 place: 'Neyveli',
//                                 category : 'Intresting People',
//                                 facebook: "Aruncopzz",
//                                 number: '8667263143',
//                                 instagram : '_arunvjcopzz_',
//                                 linkedin: 'https://www.linkedin.com/in/arun2599/',
//                                 description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                               },
//                               {
//                                 userid : "14",
//                                 image:"/assets/images/arun1.png",
//                                 name:'Dinu',
//                                   place: 'Neyveli',
//                                   category : 'Intresting People',
//                                   facebook: "Aruncopzz",
//                                   number: '8667263143',
//                                   instagram : '_arunvjcopzz_',
//                                   linkedin: 'https://www.linkedin.com/in/arun2599/',
//                                   description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                                 },
//                                 {
//                                   userid : "15",
//                                   image:"/assets/images/arun1.png",
//                                   name:'Dhanz',
//                                     place: 'Neyveli',
//                                     category : 'Intresting People',
//                                     facebook: "Aruncopzz",
//                                     number: '8667263143',
//                                     instagram : '_arunvjcopzz_',
//                                     linkedin: 'https://www.linkedin.com/in/arun2599/',
//                                     description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
//                                   },
  
//   ];
 
//   currentIndex: any;
//   currentUser:any;
//   getid:any;
//   @Input()receiver:any;
//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params: ParamMap) => {
//       if(params.get('id') !== null){
//       this.id = params.get('id');
//       console.log(typeof this.id, this.id);
       
//       const check = (users) => users.userid ==this.id;
//       console.log(this.users.some(check));
//       this.currentIndex = this.users.findIndex(
//         (users) => users.userid == this.id
//       );
//       console.log(this.currentIndex);
//       this.currentUser=this.users[this.currentIndex]
//   }
// });
//   this.getid = this.users.find((user)=>user.userid === +this.id)
// }

 
// // currentUser =this.users[0];
// // setUser(user) {
// //     this.currentUser = user;
// // }

// prev() {
//   if (this.currentUser === this.currentUser) {
//     const currUser = this.currentUser;
//     const i = this.users.findIndex(function (el) {
//       return el === currUser;
//     });
//     this.currentUser = this.users[i - 1];
//     this.currentUser = this.currentUser;
//   }
//   console.log(this.currentUser);
// }

// next() {
//   if (this.currentUser !== this.users[this.users.length - 1]) {
//     const currUser = this.currentUser;
//     const i = this.users.findIndex(function (el) {
//       return el === currUser;
//     });
//     this.currentUser = this.users[i + 1];
//     this.currentUser = this.currentUser;
//   }
//   console.log(this.currentUser);
// }


// // prev() {
// //     if (this.currentUser !== this.users[0]) {
// //         const currUser = this.currentUser;
// //         const i = this.users.findIndex(function (el) {
// //             return el === currUser;
// //         });
// //         this.currentUser = this.users[i - 1];
// //     }
// //     console.log(this.currentUser)
// // }

// // next() {
// //     if (this.currentUser !== this.users[this.users.length - 1]) {
// //         const currUser = this.currentUser;
// //         const i = this.users.findIndex(function (el) {
// //             return el === currUser;
// //         });
// //         this.currentUser = this.users[i + 1];
// //     }
// //     console.log(this.currentUser)
// // }
  
//   showElements: boolean = false;
//  showListElements: boolean = false;
// }

import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, UrlSerializer } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {EventEmitter,OnChanges,Output,SimpleChanges} from '@angular/core';

type details = Array<{ id: number; name: string }>;

@Component({
  selector: 'app-details-display-page',
  templateUrl: './details-display-page.component.html',
  styleUrls: ['./details-display-page.component.css']
})
export class DetailsDisplayPageComponent implements OnInit {
  
  constructor(private router: Router,private route: ActivatedRoute) { 
    this.getid
  }
  id:any;
  
  
 
  public users:{userid : any ;facebook : any;  name:  any  ; place :  any  ; image:  any ; category : any ; number : any  ; instagram :  any  ; linkedin :  any  ; description :  any  }[]=[
    {
      userid : "1",
      image:"/assets/images/arun.png",
      name:'Arun',
        place: 'Kerala',
        category : 'Intresting People',
        facebook: "Aruncopzz",
        number: '8667263143',
        instagram : '_arunvjcopzz_',
        linkedin: 'https://www.linkedin.com/in/arun2599/',
        description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
      },
      {
        userid : "2",
        image:"/assets/images/arun1.png",
        name:'tazeen',
          place: 'Chennai',
          category : 'Business People',
          facebook: "Aruncopzz",
          number: '8667263143',
          instagram : '_arunvjcopzz_',
          linkedin: 'https://www.linkedin.com/in/arun2599/',
          description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
        },
        {
          userid : "3",
          image:"/assets/images/arun.png",
          name:'Madhan',
            place: 'Chennai',
            category : 'Sport People',
            facebook: "Aruncopzz",
            number: '8667263143',
            instagram : '_arunvjcopzz_',
            linkedin: 'https://www.linkedin.com/in/arun2599/',
            description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
          },
          {
            userid : "4",
            image:"/assets/images/arun1.png",
            name:'Abin',
              place: 'Chennai',
              category : 'Intresting People',
              facebook: "Aruncopzz",
              number: '8667263143',
              instagram : '_arunvjcopzz_',
              linkedin: 'https://www.linkedin.com/in/arun2599/',
              description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
            },
            {
              userid : "5",
              image:"/assets/images/arun.png",
              name:'Siva',
                place: 'Neyveli',
                category : 'Intresting People',
                facebook: "Aruncopzz",
                number: '8667263143',
                instagram : '_arunvjcopzz_',
                linkedin: 'https://www.linkedin.com/in/arun2599/',
                description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
              },
              {
                userid : "6",
                image:"/assets/images/arun1.png",
                name:'Aswin',
                  place: 'Chennai',
                  category : 'Intresting People',
                  facebook: "Aruncopzz",
                  number: '8667263143',
                  instagram : '_arunvjcopzz_',
                  linkedin: 'https://www.linkedin.com/in/arun2599/',
                  description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                },
                {
                  userid : "7",
                  image:"/assets/images/arun.png",
                  name:'Edov',
                    place: 'Neyveli',
                    category : 'Intresting People',
                    facebook: "Aruncopzz",
                    number: '8667263143',
                    instagram : '_arunvjcopzz_',
                    linkedin: 'https://www.linkedin.com/in/arun2599/',
                    description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                  },
                  {
                    userid : "8",
                    image:"/assets/images/arun1.png",
                    name:'Vichu',
                      place: 'Neyveli',
                      category : 'Intresting People',
                      facebook: "Aruncopzz",
                      number: '8667263143',
                      instagram : '_arunvjcopzz_',
                      linkedin: 'https://www.linkedin.com/in/arun2599/',
                      description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                    },
                    {
                      userid : "9",
                      image:"/assets/images/arun.png",
                      name:'Sai',
                        place: 'Neyveli',
                        category : 'Intresting People',
                        facebook: "Aruncopzz",
                        number: '8667263143',
                        instagram : '_arunvjcopzz_',
                        linkedin: 'https://www.linkedin.com/in/arun2599/',
                        description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                      },
                      {
                        userid : "10",
                        image:"/assets/images/arun1.png",
                        name:'Gugesh',
                          place: 'Neyveli',
                          category : 'Intresting People',
                          facebook: "Aruncopzz",
                          number: '8667263143',
                          instagram : '_arunvjcopzz_',
                          linkedin: 'https://www.linkedin.com/in/arun2599/',
                          description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                        },
                        {
                          userid : "11",
                          image:"/assets/images/arun.png",
                          name:'Rajan',
                            place: 'Neyveli',
                            category : 'Intresting People',
                            facebook: "Aruncopzz",
                            number: '8667263143',
                            instagram : '_arunvjcopzz_',
                            linkedin: 'https://www.linkedin.com/in/arun2599/',
                            description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                          },
                          {
                            userid : "12",
                            image:"/assets/images/arun1.png",
                            name:'Adhi',
                              place: 'Neyveli',
                              category : 'Intresting People',
                              facebook: "Aruncopzz",
                              number: '8667263143',
                              instagram : '_arunvjcopzz_',
                              linkedin: 'https://www.linkedin.com/in/arun2599/',
                              description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                            },
                            {
                              userid : "13",
                              image:"/assets/images/arun.png",
                              name:'Goel',
                                place: 'Neyveli',
                                category : 'Intresting People',
                                facebook: "Aruncopzz",
                                number: '8667263143',
                                instagram : '_arunvjcopzz_',
                                linkedin: 'https://www.linkedin.com/in/arun2599/',
                                description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                              },
                              {
                                userid : "14",
                                image:"/assets/images/arun1.png",
                                name:'Dinu',
                                  place: 'Neyveli',
                                  category : 'Intresting People',
                                  facebook: "Aruncopzz",
                                  number: '8667263143',
                                  instagram : '_arunvjcopzz_',
                                  linkedin: 'https://www.linkedin.com/in/arun2599/',
                                  description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                                },
                                {
                                  userid : "15",
                                  image:"/assets/images/arun1.png",
                                  name:'Dhanz',
                                    place: 'Neyveli',
                                    category : 'Intresting People',
                                    facebook: "Aruncopzz",
                                    number: '8667263143',
                                    instagram : '_arunvjcopzz_',
                                    linkedin: 'https://www.linkedin.com/in/arun2599/',
                                    description : 'I am so thankful that you’re in my life, and I want to take the time to tell you how much I truly appreciate you. You’re not only a great listener, but you also give the best advice. Whenever I need guidance, I know I can turn to you.' ,
                                  },
  
  ];
 
  currentIndex: any;
  currentUser:any;
  getid:any;
  showElements = false;
  showListElements= false;
  @Input()receiver:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id') !== null){
      this.id = params.get('id');
      console.log(typeof this.id, this.id);
       
      const check = (users: { userid: any; }) => users.userid ==this.id;
      console.log(this.users.some(check));
      this.currentIndex = this.users.findIndex(
        (users) => users.userid == this.id
      );
      console.log(this.currentIndex);
      this.currentUser=this.users[this.currentIndex]
  }
});
  this.getid = this.users.find((user)=>user.userid === +this.id)
}

 


prev() {
  if (this.currentUser !== this.users[0])
  this.currentUser = this.users[this.currentIndex - 1];
this.getid = this.currentUser;
console.log(this.currentUser);
this.router.navigateByUrl(
  `/detailsdisplaypage/${this.currentUser.userid}`
);
}

next() {
if (this.currentUser !== this.users[this.users.length - 1])
  this.currentUser = this.users[this.currentIndex + 1];
this.getid = this.currentUser;
console.log(this.currentUser);
this.router.navigateByUrl(
  `/detailsdisplaypage/${this.currentUser.userid}`
);
}

Logout() {
  sessionStorage.removeItem('User');
  this.router.navigate(['./welcomepage']);
}
  
 
}
  



 