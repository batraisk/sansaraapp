import { Component, OnInit } from '@angular/core';
import { AuthorizationService }   from '../../../services/authorization.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class signInComponent implements OnInit {

  constructor(private _authorizationService: AuthorizationService) { } 

  private mail:string = '';
  private password = '';

  ngOnInit() {  
    if (this._authorizationService.currentUserData) { 
      this.mail = this._authorizationService.currentUserData.email || ''
    };
  }

  valid() {
    this._authorizationService.validTocken();
  }

  signIn(mail: string, password: string): void {
      this._authorizationService.signIn(mail, password);
      console.log(mail);
      console.log(password);
      
  }

}
