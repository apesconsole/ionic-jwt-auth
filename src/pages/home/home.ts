import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

import {AuthService} from './authservice';
import {Userpage} from '../userpage/userpage';
import {Signup} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usercreds = {
    userId: '',
    password: ''
  }

  message = '';

  constructor(public navCtrl: NavController, public authservice: AuthService, public navParams: NavParams) {
    this.message = this.navParams.get('message');
    this.authservice.logout();
  }
  
  login(user) {
    if(user.userId.trim() == ''){
      this.message = 'User Id cannot be Blank';
      return;
    }
    else if(user.password.trim() == ''){
      this.message = 'Password cannot be Blank';
      return;
    }
    this.authservice.authenticate(user).then(data => {
        this.navCtrl.setRoot(Userpage);
    }, error => {
       this.message = error.message;
    });
  }
  signup() {
    this.navCtrl.push(Signup);
  }

}
