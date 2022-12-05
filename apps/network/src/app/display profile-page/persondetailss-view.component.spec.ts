import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondetailssViewComponent } from './persondetailss-view.component';

describe('PersondetailssViewComponent', () => {
  let component: PersondetailssViewComponent;
  let fixture: ComponentFixture<PersondetailssViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersondetailssViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersondetailssViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
