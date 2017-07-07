import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteEditInventoryPage } from './construction-site-edit-inventory';

@NgModule({
  declarations: [
    ConstructionSiteEditInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteEditInventoryPage),
  ],
  exports: [
    ConstructionSiteEditInventoryPage
  ]
})
export class ConstructionSiteEditInventoryPageModule {}
