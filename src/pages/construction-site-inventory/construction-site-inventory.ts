import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, Events} from 'ionic-angular';
import { AuthService } from '../home/authservice'; 

@IonicPage()
@Component({
  selector: 'page-construction-site-inventory',
  templateUrl: 'construction-site-inventory.html',
})
export class ConstructionSiteInventoryPage {
  message: string;
  siteDetail: any;
  inventory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
      this.siteDetail = this.navParams.get('siteDetail');
  	  this.inventory = this.siteDetail.inventory;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteInventoryPage');
  }
}
