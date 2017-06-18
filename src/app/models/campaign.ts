import { Base, Alias } from './_base';

export class Campaign extends Base {

  @Alias('Id') public id: string;
  @Alias('Name') public name: string;


  constructor(campaign?: Campaign) {
    super();
    // console.log(campaign);


    if (campaign) {
      this.deserialize(campaign);
    }
  }

}
