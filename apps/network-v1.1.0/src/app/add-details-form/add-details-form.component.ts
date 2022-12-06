import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { compileNgModule } from '@angular/compiler';
@Component({
  selector: 'app-add-details-form',
  templateUrl: './add-details-form.component.html', 
  styleUrls: ['./add-details-form.component.css'] 
})

export class AddDetailsFormComponent implements OnInit {
  showElements = false;
  showListElements = false;

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
  //   myData = [
  //     { text: 'Intresting people', value: 1 },
  //     { text: 'Idea people', value: 2 },
  //     { text: 'Humour people', value: 3 },
  //     { text: 'Business people', value: 4 },
  //     { text: 'Sport people', value: 5 },
  //     { text: 'Startup people', value: 6 },
  //     { text: 'Game people', value: 7 }
  // ];
   
   title="personForm";
   getData(data:NgForm){
    console.warn(data)
   }
  constructor(private router: Router) { }

  ngOnInit(): void {


  }
  Logout() {
    sessionStorage.removeItem('User');
    this.router.navigate(['./welcomepage']);
  }
 
  
  
  }







// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//     selector: 'multiple-demo',
//     templateUrl: './multiple-demo.html'
// })
// export class MultipleDemoComponent implements OnInit {
//     myForm:FormGroup;
//     disabled = false;
//     ShowFilter = false;
//     limitSelection = false;
//     cities: Array = [];
//     selectedItems: Array = [];
//     dropdownSettings: any = {};
//     constructor(private fb: FormBuilder) {}

//     ngOnInit() {
//         this.cities = [
//             { item_id: 1, item_text: 'New Delhi' },
//             { item_id: 2, item_text: 'Mumbai' },
//             { item_id: 3, item_text: 'Bangalore' },
//             { item_id: 4, item_text: 'Pune' },
//             { item_id: 5, item_text: 'Chennai' },
//             { item_id: 6, item_text: 'Navsari' }
//         ];
//         this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
//         this.dropdownSettings = {
//             singleSelection: false,
//             idField: 'item_id',
//             textField: 'item_text',
//             selectAllText: 'Select All',
//             unSelectAllText: 'UnSelect All',
//             itemsShowLimit: 3,
//             allowSearchFilter: this.ShowFilter
//         };
//         this.myForm = this.fb.group({
//             city: [this.selectedItems]
//         });
//     }

//     onItemSelect(item: any) {
//         console.log('onItemSelect', item);
//     }
//     onSelectAll(items: any) {
//         console.log('onSelectAll', items);
//     }
//     toogleShowFilter() {
//         this.ShowFilter = !this.ShowFilter;
//         this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
//     }

//     handleLimitSelection() {
//         if (this.limitSelection) {
//             this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
//         } else {
//             this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
//         }
        
//     }    
//     "singleSelection": false
//     "defaultOpen": false
//     "idField": "item_id"
//     "textField": "item_text"
//     "selectAllText": "Select All"
//     "unSelectAllText": "UnSelect All"
//     "enableCheckAll": true
//     "itemsShowLimit": 3
//     "allowSearchFilter": true
//   }



 
 
//  @Component({
//   selector: 'chips-autocomplete-example',
//   templateUrl: 'chips-autocomplete-example.html',
//   styleUrls: ['chips-autocomplete-example.css'],
// })
// export class ChipsAutocompleteExample {
  
//   separatorKeysCodes: number[] = [ENTER, COMMA];
//   tagCtrl = new FormControl('');
//   filteredTags: Observable<string[]>;
//   tags: string[] = ['Intresting people'];
//   allTags: string[] = ['Sport people', 'Idea people', 'Business people', 'Startup people', 'Intresting people'];
  
  

//   @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

//   constructor() {
    
//     this.filteredTags = this.tagCtrl.valueChanges.pipe(
//       startWith(null),
//       map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
//     );
//     }

//   add(event: MatChipInputEvent): void {
//     const value = (event.value || '').trim();

    
//     if (value) {
//       this.tags.push(value);
//     }

    
//     event.chipInput!.clear();

//     this.tagCtrl.setValue(null);
//   }

//   remove(tag: string): void {
//     const index = this.tags.indexOf(tag);

//     if (index >= 0) {
//       this.tags.splice(index, 1);
//     }
//   }

//   selected(event: MatAutocompleteSelectedEvent): void {
//     this.tags.push(event.option.viewValue);
//     this.tagInput.nativeElement.value = '';
//     this.tagCtrl.setValue(null);
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
//   }
// }









