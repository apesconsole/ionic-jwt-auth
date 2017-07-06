import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteInventoryPage } from './construction-site-inventory';

@NgModule({
  declarations: [
    ConstructionSiteInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteInventoryPage),
  ],
  exports: [
    ConstructionSiteInventoryPage
  ]
})
export class ConstructionSiteInventoryPageModule {}
