import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ConstructionSiteInventoryPage } 		from '../construction-site-inventory/construction-site-inventory';
import { ConstructionSiteLabourPage }         	from '../construction-site-labour/construction-site-labour';

@IonicPage()
@Component({
  selector: 'page-construction-site-details',
  templateUrl: 'construction-site-details.html',
})
export class ConstructionSiteDetailsPage {
  message: string;
  siteDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  	  this.siteDetail = this.navParams.get('siteDetail');
      events.subscribe('siteinventorystate:approved', state => {
        this.siteDetail.approvedInventory = state;
      });
      events.subscribe('sitelabourstate:approved', state => {
        this.siteDetail.approvedLabour = state;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteDetailsPage');
    
  }

  loadInventoryDetail(){
     this.navCtrl.push(ConstructionSiteInventoryPage, {
          siteDetail: this.siteDetail
     });
  }

  loadLabourDetail(){
     this.navCtrl.push(ConstructionSiteLabourPage, {
          siteDetail: this.siteDetail
     });
  }
}
