import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  disabled = false;
  showMessage = false;
  showButton = true;
  stateTxt = '';
  showSpinner = false;
  tamanho = 1000; // Change for testings

  constructor(public navCtrl: NavController) { }

  start() {
    this.disabled = true;
    this.showButton = false;
    this.showSpinner = true;
    this.stateTxt = 'Started';

    let id = setInterval(() => {
      // Change size of loop for testing
      for(let i = 0; i < 1; i++) {
        let array =  Array.from({length: this.tamanho}, () => 
          1
        );
        array = null;
      }
      this.disabled = false;
      this.showMessage = true;
      this.showSpinner = false;
      this.stateTxt = 'Finished';
    }, 100);
  }
}
