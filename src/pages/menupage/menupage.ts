import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Portefeuille } from "../portefeuille/portefeuille";

/**
 * Generated class for the Menupage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-menupage',
  templateUrl: 'menupage.html',
})
export class Menupage {
 pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
 

 }
mobilebanking(){
//this.push.navCtrl(HomePage)
this.navCtrl.push(HomePage);
}

portefeuille(){
this.navCtrl.push(Portefeuille);


}
}
