import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { AuthService } from '../home/authservice';

@IonicPage()
@Component({
  selector: 'page-construction-site-labour',
  templateUrl: 'construction-site-labour.html',
})
export class ConstructionSiteLabourPage {
  message: string;
  siteDetail: any;
  labour: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
    this.siteDetail = this.navParams.get('siteDetail');
  	this.labour = this.siteDetail.labour;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteLabourPage');
  }
}
