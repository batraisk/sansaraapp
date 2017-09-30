import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { Angular2TokenService } from 'angular2-token';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule, MdMenuModule, MdCardModule, MdInputModule,
  MdDatepickerModule, MdNativeDateModule
} from '@angular/material';
import 'hammerjs';

//components
import { AppComponent } from './app.component';
import { signUpComponent } from './components/authorization/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { signInComponent } from './components/authorization/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
//services
import { AuthorizationService } from './services/authorization.service';
import { CampaignService } from './services/campaign.service';
import { AdService } from './services/ad.service';
import { TestComponent } from './components/test/test.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdNewComponent } from './components/ad-new/ad-new.component';
import { CampaignNewComponent } from './components/campaign-new/campaign-new.component';


@NgModule({
  declarations: [
    AppComponent,
    signUpComponent,
    NotFoundComponent,
    HomeComponent,
    signInComponent,
    HeaderComponent,
    SideNavComponent,
    TestComponent,
    AdsComponent,
    AdNewComponent,
    CampaignNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule
  ],
  providers: [
    Angular2TokenService,
    AuthorizationService,
    CampaignService,
    AdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
