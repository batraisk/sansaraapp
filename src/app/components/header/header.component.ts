import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: Angular2TokenService) { }
  private user_email: string = '';

  ngOnInit() {
    this.user_email = this.tokenService.currentAuthData.uid;
  }

}
