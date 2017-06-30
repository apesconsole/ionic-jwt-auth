import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentDashboardPage } from './resident-dashboard';

@NgModule({
  declarations: [
    ResidentDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentDashboardPage),
  ],
  exports: [
    ResidentDashboardPage
  ]
})
export class ResidentDashboardPageModule {}
