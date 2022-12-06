import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDisplayPageComponent } from './details-display-page.component';

describe('DetailsDisplayPageComponent', () => {
  let component: DetailsDisplayPageComponent;
  let fixture: ComponentFixture<DetailsDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDisplayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
