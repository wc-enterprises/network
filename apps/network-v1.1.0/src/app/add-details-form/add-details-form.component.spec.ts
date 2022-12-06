import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsFormComponent } from './add-details-form.component';

describe('AddDetailsFormComponent', () => {
  let component: AddDetailsFormComponent;
  let fixture: ComponentFixture<AddDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
