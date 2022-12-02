import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chipsautocompleteexamplecomponent} from './chips-autocomplete-example.component';

describe('Chipsautocompleteexamplecomponent', () => {
  let component: Chipsautocompleteexamplecomponent;
  let fixture: ComponentFixture<Chipsautocompleteexamplecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chipsautocompleteexamplecomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chipsautocompleteexamplecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
