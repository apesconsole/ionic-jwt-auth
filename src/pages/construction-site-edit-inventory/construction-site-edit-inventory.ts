import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, Events} from 'ionic-angular';
import { AuthService } from '../home/authservice';


@IonicPage()
@Component({
  selector: 'page-construction-site-edit-inventory',
  templateUrl: 'construction-site-edit-inventory.html',
})
export class ConstructionSiteEditInventoryPage {
  message: string;
  siteDetail: any;
  inventory: any;

  uomList = [{text:'PC', value: 'PC'}, {text: 'Sack', value: 'Sack'}, {text: 'CFT', value: 'CFT'}, {text:'Box', value: 'Box'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthService, public alertCtrl: AlertController, public events: Events) {
      this.siteDetail = this.navParams.get('siteDetail');
  	  this.inventory = this.siteDetail.inventory;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionSiteEditInventoryPage');
  }

 approvesitedata(){
    this.authservice.approvesitedata(this.siteDetail.siteId, true, this.siteDetail.approvedLabour).then(data => {
        if(data) {
            let approvalAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Approved',
                buttons: ['ok']
            });
            approvalAlert.present();
            this.siteDetail.approvedInventory = true;
            this.events.publish('siteinventorystate:approved', true);
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

  save(inventory){
    this.siteDetail.inventory = inventory;
    this.siteDetail.approvedInventory = false;
    this.authservice.savesitedata(this.siteDetail).then(data => {
        if(data) {
            let dataEditAlert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'Data Saved',
                buttons: ['ok']
            });
            dataEditAlert.present();
            this.siteDetail.approvedInventory = false;
            this.events.publish('siteinventorystate:approved', false);
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

  removeinventory(item){
      let index = this.siteDetail.inventory.indexOf(item);
      if(index > -1){
          this.siteDetail.inventory.splice(index, 1);
      }
  }

  addinventory(){
      this.siteDetail.inventory.push({
        "item": "Some Thing",
        "count": "0",
        "uom": "PC",
      });
  }
}
