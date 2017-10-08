import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	name: string;
	pwd: string;
	warning: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

	  console.log('Login button clicked');
	  if (this.name == undefined && this.pwd == undefined) {
		  
		  this.showAlert();
	  } else {
		  console.log(this.name);
		  console.log('Navigating to another page');
		  this.navCtrl.push(MainPage);
	  }
  }

  showAlert() {
	  let alert = this.alertCtrl.create({
		  title: 'Mandatory Fields',
		  subTitle: 'Please provide the credentials to proceed further',
		  buttons: ['OK']
	  });
	  alert.present();
  }

  signUp(){
	  console.log('Navigating the control to register page');
	  this.navCtrl.push(RegisterPage);
  }

}