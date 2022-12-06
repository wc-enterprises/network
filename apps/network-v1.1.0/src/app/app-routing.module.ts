import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddDetailsFormComponent } from './add-details-form/add-details-form.component';
import { DetailsDisplayPageComponent } from './details-display-page/details-display-page.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path: 'App', component: AppComponent },
  {path:'welcomepage',component:WelcomePageComponent},
  {path: '', redirectTo: '/welcomepage', pathMatch:'full'},
  {path:'loginpage',component:LoginPageComponent},
  {path:'signuppage',component:SignupPageComponent},
  {path:'mainpage',component:MainPageComponent, canActivate:[AuthGuard]},
  {path:'adddetailsform',component:AddDetailsFormComponent,canActivate:[AuthGuard]},
  {path:'detailsdisplaypage/:id',component:DetailsDisplayPageComponent,canActivate:[AuthGuard]},
  {path:'tagselectioncomponent' ,component:TagSelectionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


