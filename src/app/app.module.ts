import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { Angular2TokenService } from 'angular2-token';
//components
import { AppComponent } from './app.component';
import { signUpComponent } from './components/authorization/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { signInComponent } from './components/authorization/sign-in/sign-in.component';
//services
import { AuthorizationService } from './services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    signUpComponent,
    NotFoundComponent,
    HomeComponent,
    signInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Angular2TokenService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
