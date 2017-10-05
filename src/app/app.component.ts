import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // statusBar.styleDefault();
     // splashScreen.hide();
    });

  setTimeout(() => { // AFTER 3 SECONDS YOU'LL SET THE ROOT PAGE TO THE DESIRED PAGE.
    console.log("inside the timeOut");
    //this.nav.setRoot(FirstRunPage);
  this.nav.setRoot(LoginPage);
  }, 3000);
  }


  ionViewDidLoad() {
    console.log("Inside the ionViewDidLoad");

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      //  this.splashScreen.hide();
      //this.splashScreen.show();
    });
  }
}

