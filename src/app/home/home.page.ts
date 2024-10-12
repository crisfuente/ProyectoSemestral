import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  // Navegar a la página de Login
  goToLogin() {
    this.navCtrl.navigateForward('/login'); // Asegúrate de que esta ruta esté configurada en tu enrutamiento
  }
}

