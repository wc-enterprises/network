import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeComponent } from './Homepage/welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './Adding people-information/person-details.component';
import { PersondetailssViewComponent } from './display profile-page/persondetailss-view.component';
import { ProfileDropdownComponent } from './profilelogout-dropdown/profile-dropdown.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Chipsautocompleteexamplecomponent } from './multipletags/chips-autocomplete-example.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';








@NgModule({

  declarations: [
    AppComponent,
    LoginpageComponent,
    routingComponents,
    WelcomeComponent,
    SignupPageComponent,
    ProfilepageComponent,
    HeaderComponent,
    PersonDetailsComponent,
    PersondetailssViewComponent,
    ProfileDropdownComponent,
    Chipsautocompleteexamplecomponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule ,
    MatInputModule,
    NgMultiSelectDropDownModule ,
    MatChipsModule,
    MatAutocompleteModule,
     ReactiveFormsModule,
      NgxPaginationModule
     
  ],
  exports:[MatFormFieldModule,Chipsautocompleteexamplecomponent],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
