import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Campaign } from '../models/campaign'
import { Ad } from '../models/ad'
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AdService {

  constructor(private _tokenService: Angular2TokenService) { }

  public getAdsByCampId(camp_id: number): Observable<Ad[]> {
    return Observable.create((observer: Observer<Ad[]>) => {
      this
        ._tokenService
        .get(`campaigns/${camp_id}/ads`)
        .subscribe(
          response => {
            let res = [];
            response.json().result.Ads.map(x => res.push( new Ad(x)));
            observer.next(res);
            observer.complete();
          },
          response => observer.error(response)
        )
    })
  }

}
