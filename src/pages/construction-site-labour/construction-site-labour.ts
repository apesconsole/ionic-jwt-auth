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
    this.authservice.approvesitedata(this.siteDetail.siteId, this.siteDetail.approvedInventory, true).then(data => {
        if(data) {
            let approvalAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Approved',
                buttons: ['ok']
            });
            approvalAlert.present();
            this.siteDetail.approvedLabour = true;
            this.events.publish('sitelabourstate:approved', true);
        } else {
          let approvalFailureAlert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            approvalFailureAlert.present();
        }
    });
  }

  save(labour){
    this.siteDetail.labour = labour;
    this.authservice.savesitedata(this.siteDetail).then(data => {
        if(data) {
            let dataEditAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Data Saved',
                buttons: ['ok']
            });
            dataEditAlert.present();
            this.siteDetail.approvedLabour = false;
            this.events.publish('sitelabourstate:approved', false);
        } else {
            var dataEditFailureAlert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            dataEditFailureAlert.present();
        }
    });
  }
}
