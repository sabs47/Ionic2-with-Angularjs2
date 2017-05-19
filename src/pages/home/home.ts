import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController) {

    menu.enable(true);

  }  

  openMenu(evt) {
      if(evt === "main"){
         this.menu.enable(true, 'menu1');
         this.menu.enable(false, 'menu2');
      }
      this.menu.toggle();
  }

}