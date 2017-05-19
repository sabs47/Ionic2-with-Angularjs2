import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-portefeuille',
  templateUrl: 'portefeuille.html',
})
export class Portefeuille {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController) {

    menu.enable(true);

  }  

  openMenu(evt) {
      if(evt === "user"){
         this.menu.enable(true, 'menu2');
         this.menu.enable(false, 'menu1');
      }
      this.menu.toggle();
  }

}