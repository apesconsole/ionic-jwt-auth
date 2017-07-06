import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionInvoicePage } from './construction-invoice';

@NgModule({
  declarations: [
    ConstructionInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionInvoicePage),
  ],
  exports: [
    ConstructionInvoicePage
  ]
})
export class ConstructionInvoicePageModule {}
