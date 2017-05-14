import { Component, OnInit } from '@angular/core';
import { AuthorizationService }   from '../../../services/authorization.service';
import { Angular2TokenService } from 'angular2-token';

interface IUserUp {
  mail:string;
  password: string;
  cunfirmPassword: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class signUpComponent implements OnInit {

  constructor(private _authorizationService: AuthorizationService,
              private _tokenService: Angular2TokenService) { }
public mail:string = 'email';
public password:string = 'pussword';
public cunfirmPussword:string = 'cunfirmPassword';
  ngOnInit() {
  }

  signUp(user: IUserUp):void {
    this._authorizationService.signUp(user.mail, user.password, user.cunfirmPassword);
  }
  //   signUp(user: IUserUp):void {
  //   console.log(user);
  // }

  signOut() {
    this._authorizationService.signOut();
  }

  valid() {
    this._authorizationService.validTocken();
  }

}
