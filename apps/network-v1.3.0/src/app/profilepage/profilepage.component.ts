import { Component, OnInit, Input } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import{Router} from '@angular/router';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent implements OnInit {
  
  showProfilePage: boolean = true;
  showPersonDetailsView: boolean = false;
  selectedReceiver: any;

  public users:{userid:any; image:string;name:string;place:string;}[]=[    {
      userid: "1",
      image: "/assets/images/arun 1.png",
      name: 'Madhan',
      place: 'chennai',
    },
    {
      userid: 2,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      place: 'chennai',
    },
    {
      userid: 3,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      place: 'chennai',
    },
    { userid:"4",
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      place: 'chennai',
    },
    {userid:5,
      image: '/assets/images/arun 1.png',
      name: 'Tazeen',
      place: 'chennai',
    },
    {userid:6,
      image: '/assets/images/arun 2.png',
      name: 'Harish',
      place: 'chennai',
    },
    {userid:7,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:8,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      place: 'chennai',
    },
    {userid:9,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      place: 'chennai',
    },
    {userid:10,
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      place: 'chennai',
    },
   
    {userid:11,
      image: '/assets/images/arun 2.png',
      name: 'Tazeen',
      place: 'chennai',
    },
    {userid:12,
      image: '/assets/images/arun 1.png',
      name: 'Harish',
      place: 'chennai',
    },
    {userid:13,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:14,
      image: '/assets/images/arun 1.png',
      name: 'Arunkumar',
      place: 'chennai',
    },
    {userid:15,
      image: '/assets/images/arun 2.png',
      name: 'Abin',
      place: 'chennai',
    },
     {userid:16,
      image: '/assets/images/arun 1.png',
      name: 'Siva',
      place: 'chennai',
    },
  ];
  currentUser: any;
  constructor(private router:Router) {}
 

  ngOnInit(): void {
   
  }
  selectCurrentUser(data:any){
    console.log('users',data)
  }
  showElements1: boolean = false;
  showListElement1: boolean = false;
  // showElements: boolean = false;
  // showListElements: boolean = false;
  // selectCurrentUser(user: any) {
  //   console.log('hi', user);
  //   this.currentUser = user;
  //   this.showProfilePage = false;
  //   this.showPersonDetailsView = true;
  }
  

