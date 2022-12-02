import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'chips-autocomplete-example',
  templateUrl: './chips-autocomplete-example.component.html',
  styleUrls: ['chips-autocomplete-example.component.css'],
})
export class Chipsautocompleteexamplecomponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredtags: Observable<string[]>;
  tags: string[] = []; 
  alltags: string[] = ['Business', 'Idea', 'Entertainment', 'Talented', 'StarupPlan'];
  // fruitInput:ElementRef<HTMLInputElement>;

  @ViewChild('tagInput') tagInput !: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredtags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tags: string | null) => (tags ? this._filter(tags) : this.alltags.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alltags.filter(tags => tags.toLowerCase().includes(filterValue));
  }
}