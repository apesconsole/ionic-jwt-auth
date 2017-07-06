import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConstructionInvoiceUploaderPage } from './construction-invoice-uploader';

@NgModule({
  declarations: [
    ConstructionInvoiceUploaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ConstructionInvoiceUploaderPage),
  ],
  exports: [
    ConstructionInvoiceUploaderPage
  ]
})
export class ConstructionInvoiceUploaderPageModule {}
