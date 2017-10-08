import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cards } from '../../models/cards';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

	cards : Cards[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.cards = [{img : 'assets/img/sports.jpg',title:'Sports Day',description : 'lorem ipsum'},
  	{img : 'assets/img/culturals.jpg',title:'Culturals Day',description : 'lorem ipsum'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
