import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: 'http://localhost:3000/contact/sign-up',
      data: {
        email: 'abinwc@surfboard.se',
        password: 'abinwc',
        username: 'ABINWC',
      },
    };

    const r = axios(config);
    console.log(r);
  }

  ngOnInit(): void {}
}
