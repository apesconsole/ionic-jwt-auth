import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { AuthService } from '../home/authservice';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-construction-site-edit-labour',
  templateUrl: 'construction-site-edit-labour.html',
})
export class ConstructionSiteEditLabourPage {
  message: string;
  siteDetail: any;
  labour: any; 
  serverData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
    this.siteDetail = this.navParams.get('siteDetail');
  	this.labour = this.siteDetail.labour;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteEditLabourPage');
  }
  approvesitedata(){
    this.authservice.approvesitedata(this.siteDetail, 'labour').then(data => {
        this.serverData = data;
        if(this.serverData.operation) {
            let approvalAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Approved',
                buttons: ['ok']
            });
            approvalAlert.present();
            this.siteDetail.labour = this.serverData.siteDetail.labour;
            this.events.publish('sitelabourstate:approved', true);
            this.navCtrl.pop();
        } else {
          let approvalFailureAlert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            approvalFailureAlert.present();
        }
    }, error => {
          this.navCtrl.setRoot(HomePage, {
              message: error.message
          });
    });
  }

 rejectsitedata(){
    this.authservice.rejectsitedata(this.siteDetail, 'labour').then(data => {
        this.serverData = data;
        if(this.serverData.operation) {
            let rejectAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Rejected',
                buttons: ['ok']
            });
            rejectAlert.present();
            this.siteDetail.labour = this.serverData.siteDetail.labour;
            this.events.publish('sitelabourstate:approved', true);
            this.navCtrl.pop();
        } else {
           let rejectionFailureAlert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            rejectionFailureAlert.present();
        }
    }, error => {
          this.navCtrl.setRoot(HomePage, {
              message: error.message
          });
    });
  }

  save(labour){
    this.siteDetail.labour = labour;
    this.siteDetail.approvedLabour = false;
    this.authservice.savesitedata(this.siteDetail).then(data => {
        this.serverData = data;
        if(this.serverData.operation) {
            let dataEditAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Data Saved',
                buttons: ['ok']
            });
            dataEditAlert.present();
            this.siteDetail.labour = this.serverData.siteDetail.labour;
            this.events.publish('sitelabourstate:approved', false);
        } else {
            var dataEditFailureAlert = this.alertCtrl.create({
                title: 'Failure',
                subTitle: 'Data Not Saved',
                buttons: ['ok']
            });
            dataEditFailureAlert.present();
        }
    }, error => {
          this.navCtrl.setRoot(HomePage, {
              message: error.message
          });
    });
  }
}
