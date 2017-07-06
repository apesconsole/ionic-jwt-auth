import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-construction-invoice',
  templateUrl: 'construction-invoice.html',
})
export class ConstructionInvoicePage {
  imageUrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionInvoicePage');
    this.menu.swipeEnable(true, 'menu');
  }

}
