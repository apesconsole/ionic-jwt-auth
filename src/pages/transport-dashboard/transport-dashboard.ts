import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../home/authservice';


@IonicPage()
@Component({
  selector: 'page-transport-dashboard',
  templateUrl: 'transport-dashboard.html',
})
export class TransportDashboardPage {

  userData: any;
  message: string ;
  type = '';
 
  constructor(public navCtrl: NavController, public authservice: AuthService, public navParams: NavParams) {
  	 this.userData = authservice.getDisplayinfo();
     this.type = this.userData.data.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportDashboardPage');
  }

}
