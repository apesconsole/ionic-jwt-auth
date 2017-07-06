import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionDashboardPage } from './construction-dashboard';

@NgModule({
  declarations: [
    ConstructionDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionDashboardPage),
  ],
  exports: [
    ConstructionDashboardPage
  ]
})
export class ConstructionDashboardPageModule {}
