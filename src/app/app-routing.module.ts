import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { NotFoundComponent }   from './components/not-found/not-found.component';
import { signUpComponent } from './components/authorization/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdNewComponent } from './components/ad-new/ad-new.component';
import { CampaignNewComponent } from './components/campaign-new/campaign-new.component';
import { signInComponent } from './components/authorization/sign-in/sign-in.component';
import { Angular2TokenService } from 'angular2-token';
import { AuthorizationService } from './services/authorization.service';

const routes: Routes = [
  { path: 'signup', component: signUpComponent, pathMatch: 'full' },
  { path: 'signin', component: signInComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [Angular2TokenService] },
  { path: 'campaign',
    children: [
      { path: 'new', component: CampaignNewComponent },
      { path: ':id/ads', component: AdsComponent },
      { path: ':id/new_ad', component: AdNewComponent }
      // { path: ':id', component: CampaignDetailsPage },
      // { path: ':campaignId/invest', component: InvestPage, canActivate: [AuthGuard] }
    ]
},

  { path: '**', component: NotFoundComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor(){}
}
