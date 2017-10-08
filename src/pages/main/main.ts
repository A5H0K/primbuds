import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController , Nav } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { LoginPage } from '../login/login';
import { Pages } from '../../models/pages';
import { AboutUsPage } from '../about-us/about-us';
import { EventsPage } from '../events/events';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

	@ViewChild(Nav) nav: Nav;

	pages: Array<{title: string, component: any}>;

	//pages: Pages[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu : MenuController ) {
  	//this.initializeApp();



  	this.pages = [
  	  { title : 'About Us', component : AboutUsPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Login', component: LoginPage },
      { title: 'Events', component: EventsPage }
    ];

    console.log(this.pages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

    openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(page.component);
    console.log("Inside the openPage");
  }

}
