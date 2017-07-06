import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';
import {ConstructionSiteDetailsPage} from '../construction-site-details/construction-site-details';


@IonicPage()
@Component({
  selector: 'page-construction-dashboard',
  templateUrl: 'construction-dashboard.html',
})
export class ConstructionDashboardPage {
  userData: any;
  message: string ;
  siteData: any;
  sites = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public authservice: AuthService) {
    this.userData = authservice.getDisplayinfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionDashboardPage');
    this.menu.swipeEnable(true, 'menu');
    this.loadSiteInfo();
  }

  loadSiteInfo(){
    this.authservice.constructionsites().then(
    data => {
        this.siteData = data;
        this.sites = this.siteData.data;
    }, error => {
       this.navCtrl.setRoot(HomePage);
       this.message = error.message;
    });
  }

  loadDetail(site){
    this.navCtrl.push(ConstructionSiteDetailsPage, {
        siteDetail: site
    });
  }

}
