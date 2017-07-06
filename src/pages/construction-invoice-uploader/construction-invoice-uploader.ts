import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ConstructionInvoiceUploaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-construction-invoice-uploader',
  templateUrl: 'construction-invoice-uploader.html',
})
export class ConstructionInvoiceUploaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionInvoiceUploaderPage');
    this.menu.swipeEnable(true, 'menu');
  }

}
