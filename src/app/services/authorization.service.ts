import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class AuthorizationService {

  constructor(private _tokenService: Angular2TokenService) {
      this._tokenService.init();
  }

  singUp() {
    this._tokenService.registerAccount({
        email:                'example@example.org',
        password:             'secretPassword',
        passwordConfirmation: 'secretPassword'
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

  validTocken() {
    this._tokenService.validateToken().subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

}
