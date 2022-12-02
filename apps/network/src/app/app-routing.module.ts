import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeComponent }  from './Homepage/welcome.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './Adding people-information/person-details.component';
import { PersondetailssViewComponent} from './display profile-page/persondetailss-view.component';
import { ProfileDropdownComponent } from './profilelogout-dropdown/profile-dropdown.component';
import { Chipsautocompleteexamplecomponent } from './multipletags/chips-autocomplete-example.component';
import { AuthGuard } from './Authguard/auth.guard';



const routes: Routes = [
  { path: 'App', component: AppComponent },
  { path: 'loginpage', component: LoginpageComponent },
  
  {path:'welcome',component:WelcomeComponent},
  {path: '',   redirectTo: '/welcome', pathMatch: 'full'},
  {path:'signuppage',component:SignupPageComponent},
  {path:'profilepage',component:ProfilepageComponent,canActivate:[AuthGuard]},
  {path:'header',component:HeaderComponent},
  {path:'person-details',component: PersonDetailsComponent,canActivate:[AuthGuard]},
  {path:'persondetailss-view/:id',component: PersondetailssViewComponent,canActivate:[AuthGuard]},
  {path:'profile-dropdown',component:ProfileDropdownComponent},
  {path:'chips-autocomplete',component:Chipsautocompleteexamplecomponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AppComponent,LoginpageComponent]
