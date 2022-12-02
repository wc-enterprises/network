import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, UrlSerializer } from '@angular/router';
import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

type details = Array<{ id: number; name: string }>;
@Component({
  selector: 'app-persondetailss-view',
  templateUrl: './persondetailss-view.component.html',
  styleUrls: ['./persondetailss-view.component.css'],
})
export class PersondetailssViewComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUser;
  }
  id: any;
  getid: any;

  public users: {
    userid: any;
    image: string;
    name: string;
    place: string;
    contact: number;
    instaId: string;
    facebookId: string;
    linkedIn: string;
    description: string;
    people: string;
  }[] = [
    {
      userid: 1,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      people:
        'Intresting people,Idea people,Business people,Startup people, Sport people',
      place: 'Chennai',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 2,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Neiveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 3,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Gudalur',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 4,
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Thirunalveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 5,
      image: '/assets/images/arun 1.png',
      name: 'Tazeen',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Hosur',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 6,
      image: '/assets/images/arun 2.png',
      name: 'Harish',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Chennai',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 7,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Chennai',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 8,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Neiveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 9,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Gudalur',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 10,
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Thirunalveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 11,
      image: '/assets/images/arun 1.png',
      name: 'Tazeen',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Hosur',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 12,
      image: '/assets/images/arun 2.png',
      name: 'Harish',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Chennai',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },

    {
      userid: 13,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Chennai',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 14,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Neiveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 15,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Gudalur',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
    {
      userid: 16,
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      people:
        ' Intresting people, Idea people,Business people,Startup people, Sport people',
      place: 'Thirunalveli',
      contact: 9789212608,
      instaId: 'madhan177',
      facebookId: 'maddymadhan',
      linkedIn: ' https://www.linkedin.com/in/madhan5944/',
      description:
        'I have always been interested in web and I have the necessary skills required for the role.I have a good understanding of HTML, CSS, JavaScript',
    },
  ];
  currentIndex: any;
  currentUser;

  @Input() receiver: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') !== null) {
        this.id = params.get('id');
        console.log(typeof this.id, this.id);

        this.currentIndex = this.users.findIndex(
          (users) => users.userid == this.id
        );
        console.log(this.currentIndex);
        this.currentUser = this.users[this.currentIndex];
      }
    });

    this.getid = this.users.find((user) => user.userid === +this.id);
  }

  prev() {
    if (this.currentUser !== this.users[0])
      this.currentUser = this.users[this.currentIndex - 1];
    this.getid = this.currentUser;
    console.log(this.currentUser);
    this.router.navigateByUrl(
      `/persondetailss-view/${this.currentUser.userid}`
    );
  }

  next() {
    if (this.currentUser !== this.users[this.users.length - 1])
      this.currentUser = this.users[this.currentIndex + 1];
    this.getid = this.currentUser;
    console.log(this.currentUser);
    this.router.navigateByUrl(
      `/persondetailss-view/${this.currentUser.userid}`
    );
  }
}
