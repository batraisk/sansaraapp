import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

import { Campaign } from '../../models/campaign'
import { Ad } from '../../models/ad'

import { CampaignService } from '../../services/campaign.service'
import { AdService } from '../../services/ad.service'

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  public campaigns: Campaign[];
  public ads: Ad[];

  constructor(
    private _campaignService: CampaignService,
    private _adService: AdService,
    private _tokenService: Angular2TokenService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this._adService
          .getAdsByCampId(params['id'])
          .subscribe(
            response => {
            this.ads = response;
        },
        response => console.log(response));
      }
    );


    this
      ._campaignService
      .getCampaigns()
      .subscribe(
        response => {
          this.campaigns = response;
        },
        response => console.log(response)
      )

    // this
    //   ._adService
    //   .getAdsByCampId(1)
    //   .subscribe(
    //     response => {
    //       this.ads = response;
    //     },
    //     response => console.log(response)
    //   )
  }

}
