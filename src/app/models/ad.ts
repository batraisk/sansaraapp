import { Base, Alias } from './_base';

export class Ad extends Base {

  @Alias('Id') public id: string;
  @Alias('AdCategories') public adCategories: string;
  @Alias('AdGroupId') public adGroupId: number;
  @Alias('AgeLabel') public ageLabel: string;
  @Alias('CampaignId') public campaignId: number;
  @Alias('State') public state: string;
  @Alias('Status') public status: string;
  @Alias('StatusClarification') public statusClarification: string;
  @Alias('Subtype') public subtype: string;
  @Alias('Type') public type: string;


  constructor(ad?: Ad) {
    super();

    if (ad) {
      this.deserialize(ad);
    }
  }

}
