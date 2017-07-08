import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';

import { ConstructionSiteEditInventoryPage } 	from '../construction-site-edit-inventory/construction-site-edit-inventory';
import { ConstructionSiteEditLabourPage }     from '../construction-site-edit-labour/construction-site-edit-labour';

 
@IonicPage()
@Component({
  selector: 'page-construction-site-edit-details',
  templateUrl: 'construction-site-edit-details.html',
})
export class ConstructionSiteEditDetailsPage {
  message: string;
  serverData: any;
  siteDetail = {
      siteId: '',
      projectId: '', 
      siteName: '',
      address: '',
      edit: false,
      approve: false,
      geoTag: {},
      inventory: [],
      labour: [],
      status: [],
      updatedBy: '',
      updateDate: '',
      approvedBy: '',
      approvalDate: '',
      approvedInventory: false,
      approvedLabour: false, 
      active: true
  };
  param: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public authservice: AuthService) {
  	  this.param = this.navParams.get('siteDetail');
      this.loadSiteInfo();
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

  loadSiteInfo(){
    this.authservice.editconstructionsite(
        this.param.siteId, 
        this.param.siteEdit, 
        this.param.siteApprove).then(
    data => {
        this.serverData = data;
        this.siteDetail = this.serverData;
    }, error => {
       this.navCtrl.setRoot(HomePage);
       this.message = error.message;
    });
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
