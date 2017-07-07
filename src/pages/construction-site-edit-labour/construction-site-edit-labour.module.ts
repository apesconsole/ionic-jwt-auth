import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteEditLabourPage } from './construction-site-edit-labour';

@NgModule({
  declarations: [
    ConstructionSiteEditLabourPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteEditLabourPage),
  ],
  exports: [
    ConstructionSiteEditLabourPage
  ]
})
export class ConstructionSiteEditLabourPageModule {}
