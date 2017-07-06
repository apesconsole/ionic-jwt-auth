import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteDetailsPage } from './construction-site-details';

@NgModule({
  declarations: [
    ConstructionSiteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteDetailsPage),
  ],
  exports: [
    ConstructionSiteDetailsPage
  ]
})
export class ConstructionSiteDetailsPageModule {}
