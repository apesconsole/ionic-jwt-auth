import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportDashboardPage } from './transport-dashboard';

@NgModule({
  declarations: [
    TransportDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportDashboardPage),
  ],
  exports: [
    TransportDashboardPage
  ]
})
export class TransportDashboardPageModule {}
