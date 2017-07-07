import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';

import { SmartCom } from './app.component';
import { HomePage } from '../pages/home/home';
import { Userpage } from '../pages/userpage/userpage';
import { Signup } from '../pages/signup/signup';

import { TransportDashboardPage }             from '../pages/transport-dashboard/transport-dashboard';
//View
import { ConstructionDashboardPage }          from '../pages/construction-dashboard/construction-dashboard';
import { ConstructionSiteDetailsPage }        from '../pages/construction-site-details/construction-site-details';
import { ConstructionSiteInventoryPage }      from '../pages/construction-site-inventory/construction-site-inventory';
import { ConstructionSiteLabourPage }         from '../pages/construction-site-labour/construction-site-labour';
//Edit
import { ConstructionSiteEditPage }           from '../pages/construction-site-edit/construction-site-edit';
import { ConstructionSiteEditDetailsPage }    from '../pages/construction-site-edit-details/construction-site-edit-details';
import { ConstructionSiteEditInventoryPage }  from '../pages/construction-site-edit-inventory/construction-site-edit-inventory';
import { ConstructionSiteEditLabourPage }     from '../pages/construction-site-edit-labour/construction-site-edit-labour';

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
    ConstructionSiteEditPage,
    ConstructionSiteEditDetailsPage,
    ConstructionSiteEditInventoryPage,
    ConstructionSiteEditLabourPage,
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
    ConstructionSiteEditPage,
    ConstructionSiteEditDetailsPage,
    ConstructionSiteEditInventoryPage,
    ConstructionSiteEditLabourPage,
    ConstructionInvoiceUploaderPage,
    ConstructionInvoicePage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
