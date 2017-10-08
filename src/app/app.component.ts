import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { GalleryPage } from '../pages/gallery/gallery';
import { AboutUsPage } from '../pages/about-us/about-us'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.initializeApp();
    this.pages = [
      { title: 'About US', component: AboutUsPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Login', component: LoginPage }
    ];
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // statusBar.styleDefault();
     // splashScreen.hide();
    });

  setTimeout(() => { // AFTER 3 SECONDS YOU'LL SET THE ROOT PAGE TO THE DESIRED PAGE.
    console.log("inside the timeOut");
    //this.nav.setRoot(FirstRunPage);
  this.nav.setRoot(MainPage);
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

      openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    console.log("Inside the openPage");
  }


   initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("Inside the initialize App");
    });
  }
}

