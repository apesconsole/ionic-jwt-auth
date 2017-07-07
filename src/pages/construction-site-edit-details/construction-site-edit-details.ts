import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ConstructionSiteEditInventoryPage } 	from '../construction-site-edit-inventory/construction-site-edit-inventory';
import { ConstructionSiteEditLabourPage }     from '../construction-site-edit-labour/construction-site-edit-labour';

 
@IonicPage()
@Component({
  selector: 'page-construction-site-edit-details',
  templateUrl: 'construction-site-edit-details.html',
})
export class ConstructionSiteEditDetailsPage {
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
    console.log('ionViewDidLoad ConstructionSiteEditDetailsPage');
  }

  loadInventoryDetail(){
     this.navCtrl.push(ConstructionSiteEditInventoryPage, {
          siteDetail: this.siteDetail
     });
  }

  loadLabourDetail(){
     this.navCtrl.push(ConstructionSiteEditLabourPage, {
          siteDetail: this.siteDetail
     });
  }
}
