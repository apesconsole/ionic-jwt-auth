import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';
import { ConstructionSiteEditDetailsPage }   from '../construction-site-edit-details/construction-site-edit-details';

 
@IonicPage()
@Component({
  selector: 'page-construction-site-edit',
  templateUrl: 'construction-site-edit.html',
})
export class ConstructionSiteEditPage {
  userData: any;
  message: string ;
  siteData: any;
  sites = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public authservice: AuthService) {
    this.userData = authservice.getDisplayinfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteEditPage');
    this.menu.swipeEnable(true, 'menu');
    this.loadSiteInfo();    
  }

  loadSiteInfo(){
    this.authservice.editconstructionsites().then(
    data => {
        this.siteData = data;
        this.sites = this.siteData.data;
    }, error => {
       this.navCtrl.setRoot(HomePage);
       this.message = error.message;
    });
  }

  loadDetail(site){
    this.navCtrl.push(ConstructionSiteEditDetailsPage, {
        siteDetail: site
    });
  }  

}
