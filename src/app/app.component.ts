import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage }                           from '../pages/home/home';
import { Userpage }                           from '../pages/userpage/userpage';
import { TransportDashboardPage }             from '../pages/transport-dashboard/transport-dashboard';

//View
import { ConstructionDashboardPage }          from '../pages/construction-dashboard/construction-dashboard';
//Edit
import { ConstructionSiteEditPage }          from '../pages/construction-site-edit/construction-site-edit';

import { ConstructionInvoiceUploaderPage }    from '../pages/construction-invoice-uploader/construction-invoice-uploader';
import { ConstructionInvoicePage }            from '../pages/construction-invoice/construction-invoice';

@Component({
  templateUrl: 'app.html'
})
export class SmartCom {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  component:any;

  pages: Array<{type: string, title: string, component: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    this.initializeApp();
    this.pages = [];
    events.subscribe('usertype:changed', pages => {
        this.pages = pages;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadPage(){
    this.nav.setRoot(this.component);
  }

  goHome(){
    this.component = Userpage;
    this.loadPage();
  }
  logOut(){
    this.component = HomePage;
    this.loadPage();
  }
  pageDelegation(p){
    if(p.component == 'transport-dashboard') this.component = TransportDashboardPage;
    else if(p.component == 'construction-dashboard') this.component = ConstructionDashboardPage;
    else if(p.component == 'construction-site-edit') this.component = ConstructionSiteEditPage;
    else if(p.component == 'construction-invoice-uploader') this.component = ConstructionInvoiceUploaderPage;
    else if(p.component == 'construction-invoice') this.component = ConstructionInvoicePage;

    this.loadPage();
  }
}

