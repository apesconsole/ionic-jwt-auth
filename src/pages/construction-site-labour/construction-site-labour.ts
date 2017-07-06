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

  save(labour){
    this.siteDetail.labour = labour;
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
