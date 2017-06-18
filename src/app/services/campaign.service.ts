import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Campaign } from '../models/campaign'
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class CampaignService {
  public campaigns: Campaign[] = [];

  constructor(private _tokenService: Angular2TokenService) {
    // this.getCampaigns().subscribe(
    //   resp  => this.campaigns = resp,
    //   resp => console.log(resp)
    // )
  }

  public getCampaigns(): Observable<Campaign[]> {
    return Observable.create((observer: Observer<Campaign[]>) => {
      this._tokenService
        .get('campaigns')
        .subscribe(
          response => {
            let res = [];
            response.json().result.Campaigns.map(x => res.push( new Campaign(x)));
            observer.next(res);

            observer.complete();
          },
          response => observer.error(response)
        );
    });
  }

}
