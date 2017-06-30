import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UtilityDashboardPage } from './utility-dashboard';

@NgModule({
  declarations: [
    UtilityDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(UtilityDashboardPage),
  ],
  exports: [
    UtilityDashboardPage
  ]
})
export class UtilityDashboardPageModule {}
