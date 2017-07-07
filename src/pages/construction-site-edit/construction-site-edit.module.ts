import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionSiteEditPage } from './construction-site-edit';

@NgModule({
  declarations: [
    ConstructionSiteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionSiteEditPage),
  ],
  exports: [
    ConstructionSiteEditPage
  ]
})
export class ConstructionSiteEditPageModule {}
