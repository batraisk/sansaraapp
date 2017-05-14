import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';
import { signUpComponent } from './components/authorization/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { signInComponent } from './components/authorization/sign-in/sign-in.component';
import { Angular2TokenService } from 'angular2-token';
import { AuthorizationService } from './services/authorization.service';

const routes: Routes = [
  { path: 'signup', component: signUpComponent, pathMatch: 'full' },
  { path: 'signin', component: signInComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [Angular2TokenService] },
  { path: '**', component: NotFoundComponent }
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(){}
}