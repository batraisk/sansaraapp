import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Campaign } from '../../models/campaign'

import { CampaignService } from '../../services/campaign.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public campaigns: Campaign[];

  constructor(private _campaignService: CampaignService,
              private _tokenService: Angular2TokenService) { }

  ngOnInit() {
    // this._tokenService.registerAccount({email: 'user1@example.com', password: '123123123', passwordConfirmation: '123123123'})

    this
      ._campaignService
      .getCampaigns()
      .subscribe(
        response => {
          this.campaigns = response;
        },
        response => console.log(response)

      )
  }

}
