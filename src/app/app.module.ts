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
import { AuthService } from '../pages/home/authservice';

@NgModule({
  declarations: [
    SmartCom,
    HomePage,
    Userpage,
    Signup
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
    Signup
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
