import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createContact } from '../services/network.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  addPerson = new FormGroup({
    fullName: new FormControl(Validators.required),
    place: new FormControl(),
    tags: new FormControl(),
    contactno: new FormControl(),
    instagram: new FormControl(),
    facebook: new FormControl(),
    linkedin: new FormControl(),
    description: new FormControl(),
  });

  public personForm: {
    fullName: string;
    place: string;
    contact: number;
    instagram: any;
    facebook: any;
    linkedin: any;
    description: any;
  }[] = [
    {
      fullName: 'string',
      place: 'string',
      contact: 655555,
      instagram: 'any',
      facebook: 'any',
      linkedin: 'string',
      description: 'string',
    },
  ];

  title = 'personForm';
  getData(data: NgForm) {
    console.warn(data);
  }

  async onSubmit() {
    console.log('hi am alive');
    const personDetails = {
      userId: localStorage.getItem('userId'),
      ...this.addPerson.value,
      tags: ['t_d3e8f3fd-5ed8-4812-8ecb-e1ecd9fb97ad'],
    };
    console.log('personDetails', personDetails);
    const res = await createContact(personDetails);
    return res;
  }
}
