import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FlashCardPage} from  '../../pages/flash-card/flash-card'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
