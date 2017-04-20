import { Component, OnInit } from '@angular/core';
import { AuthorizationService }   from '../../../services/authorization.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class signUpComponent implements OnInit {

  constructor(private _authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  send(mail:string, pussword: string, cunfirmPassword: string):void {
    this._authorizationService.singUp();
    console.log(mail);
  }

  valid() {
    this._authorizationService.validTocken();
  }

}
