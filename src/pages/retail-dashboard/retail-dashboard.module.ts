import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailDashboardPage } from './retail-dashboard';

@NgModule({
  declarations: [
    RetailDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailDashboardPage),
  ],
  exports: [
    RetailDashboardPage
  ]
})
export class RetailDashboardPageModule {}
