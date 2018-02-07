import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoggedHomePage } from  '../logged-home/logged-home'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToLoggedHomepage(){
    this.navCtrl.push(LoggedHomePage);
  }
}
