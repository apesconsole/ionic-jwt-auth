import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-construction-invoice-uploader',
  templateUrl: 'construction-invoice-uploader.html',
})
export class ConstructionInvoiceUploaderPage {
  imageSelected = false;
  imageUrl: String = '';
  imageData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController,private camera: Camera) {
  	this.imageUrl = "https://placehold.it/200x250";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstructionInvoiceUploaderPage');
    this.menu.swipeEnable(true, 'menu');
  }

  selectPhoto() {
     const cameraOptions: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
	  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY 
    };
    this.camera.getPicture(cameraOptions).then((imageData) => {
		this.imageUrl = 'data:image/jpeg;base64,' + imageData;
		this.imageData = imageData;
		this.imageSelected = false;
    }, error => {
       this.imageSelected = false;
       this.imageUrl = "https://placehold.it/200x250";
    });
  }
  uploadFile(){
  	if(this.imageSelected){
  		
  	}
  }

}
