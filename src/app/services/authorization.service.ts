import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class AuthorizationService {

  constructor(private _tokenService: Angular2TokenService) {
      // this._tokenService.init({signInRedirect: 'singin'});
  }
  public currentUserData = this._tokenService.currentUserData


  signUp(mail, password, passwordConfirmation) {
    this._tokenService.registerAccount({
        // email:                'example@example.org',
        // password:             'secretPassword',
        email:                mail,
        password:             password,
        passwordConfirmation: password
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

  signOut() {
    this._tokenService.signOut().subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

  signIn(mail, password) {
    this._tokenService.signIn({
        email:    mail,
        password: password
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

}
