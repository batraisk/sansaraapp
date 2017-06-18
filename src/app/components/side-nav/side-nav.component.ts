import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../models/campaign'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  public showCampaigns: boolean = false;

  @Input()
  public campaigns: Campaign[] = [];


  constructor() { }

  ngOnInit() {
  }

  public toggleCampaignsList(): void {
    this.showCampaigns = !this.showCampaigns
  }

}
