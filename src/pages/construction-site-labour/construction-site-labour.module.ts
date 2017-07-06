import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteLabourPage } from './construction-site-labour';

@NgModule({
  declarations: [
    ConstructionSiteLabourPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteLabourPage),
  ],
  exports: [
    ConstructionSiteLabourPage
  ]
})
export class ConstructionSiteLabourPageModule {}
