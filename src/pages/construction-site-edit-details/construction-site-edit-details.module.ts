import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteEditDetailsPage } from './construction-site-edit-details';

@NgModule({
  declarations: [
    ConstructionSiteEditDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteEditDetailsPage),
  ],
  exports: [
    ConstructionSiteEditDetailsPage
  ]
})
export class ConstructionSiteEditDetailsPageModule {}
