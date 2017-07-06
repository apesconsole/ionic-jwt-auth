import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { SmartCom } from './app.component';
import { HomePage } from '../pages/home/home';
import { Userpage } from '../pages/userpage/userpage';
import { Signup } from '../pages/signup/signup';

import { TransportDashboardPage }             from '../pages/transport-dashboard/transport-dashboard';
import { ConstructionDashboardPage }          from '../pages/construction-dashboard/construction-dashboard';
import { ConstructionSiteDetailsPage }        from '../pages/construction-site-details/construction-site-details';
import { ConstructionSiteInventoryPage }      from '../pages/construction-site-inventory/construction-site-inventory';
import { ConstructionSiteLabourPage }         from '../pages/construction-site-labour/construction-site-labour';

import { ConstructionInvoiceUploaderPage }    from '../pages/construction-invoice-uploader/construction-invoice-uploader';
import { ConstructionInvoicePage }            from '../pages/construction-invoice/construction-invoice';


import { AuthService } from '../pages/home/authservice';

@NgModule({
  declarations: [
    SmartCom,
    HomePage,
    Userpage,
    Signup,

    TransportDashboardPage,
    ConstructionDashboardPage,
    ConstructionSiteDetailsPage,
    ConstructionSiteInventoryPage,
    ConstructionSiteLabourPage,
    ConstructionInvoiceUploaderPage,
    ConstructionInvoicePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(SmartCom)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SmartCom,
    HomePage,
    Userpage,
    Signup,

    TransportDashboardPage,
    ConstructionDashboardPage,
    ConstructionSiteDetailsPage,
    ConstructionSiteInventoryPage,
    ConstructionSiteLabourPage,
    ConstructionInvoiceUploaderPage,
    ConstructionInvoicePage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
