import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){
	  console.log('Registering the details');
	  this.showAlert();
	  this.navCtrl.push(LoginPage);
  }

  showAlert() {
	  let alert = this.alertCtrl.create({
		  title: 'Success',
		  subTitle: 'Please login to the app through the new credentials',
		  buttons: ['OK']
	  });
	  alert.present();
  }



}
