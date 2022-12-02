import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
  
})
export class PersonDetailsComponent implements OnInit {
  
 
  public personForm:{fullName: string; place: string; contact:number; instagram:any; facebook:any; linkedin:any; description:any;}[] =[
    {
    
    fullName:"string",
    place:"string",
    contact:655555,
    instagram:"any",
    facebook:"any",
    linkedin:"string",
    description:"string",
   
     
    
    },];
   
   title="personForm";
   getData(data:NgForm){
    console.warn(data)
   }
   
    

  constructor() { }

  ngOnInit(): void {
  }

}
