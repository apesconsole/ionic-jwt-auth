import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import {AuthService} from '../home/authservice';
import {HomePage} from '../home/home';


@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class Userpage {

  userData: any;
  message: string ;
  name = '';
  type = '';

  pages: Array<{type: string, title: string, component: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
      
      this.userData = {};
      this.message = null;
      this.name = '';
      this.type = '';
      this.getinfo();
  }

  logout() {
      this.authservice.logout();
      this.navCtrl.setRoot(HomePage); 
  }
  
  messageBox = {
     resident: 'Control your home appliances from anywhere in the world',
     utility: 'Manage, Monitor and Control Utilities accross all the Zones remotely',
     transport: 'Manage, Track Transportaion Data remotely',
     retail: 'Manage Customer, Product and Outlet Data remotely',
     construction: 'Manage Sites, Analyse Construction Data remotely'
  }

  getinfo() {

      this.authservice.getinfo().then(
      data => {
          this.userData = data;
          this.name = this.userData.data.name;
          this.type = this.userData.data.type;
          this.pages = this.userData.menu;
          this.events.publish('usertype:changed', this.pages);

          this.message = this.messageBox[this.type];
    	}, 
      error => {
          this.navCtrl.setRoot(HomePage, {
              message: error.message
          }); 
      });              
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Userpage');
  }



}
