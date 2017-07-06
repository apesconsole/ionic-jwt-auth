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

  uomList = [{text:'PC', value: 'PC'}, {text: 'Sack', value: 'Sack'}, {text: 'CFT', value: 'CFT'}, {text:'Box', value: 'Box'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
      this.siteDetail = this.navParams.get('siteDetail');
  	  this.inventory = this.siteDetail.inventory;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteInventoryPage');
  }

  approvesitedata(){
    this.authservice.approvesitedata(this.siteDetail.siteId).then(data => {
        if(data) {
            var alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Approved',
                buttons: ['ok']
            });
            alert.present();
            this.siteDetail.approved = true;
            this.events.publish('sitestate:approved', true);
        } else {
          var alert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            alert.present();
        }
    });
  }

  save(inventry){
    this.siteDetail.inventry = inventry;
    this.authservice.savesitedata(this.siteDetail).then(data => {
        if(data) {
            var alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Data Saved',
                buttons: ['ok']
            });
            alert.present();
            this.siteDetail.approved = false;
            this.events.publish('sitestate:approved', false);
        } else {
          var alert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            alert.present();
        }
    });
  }
}
