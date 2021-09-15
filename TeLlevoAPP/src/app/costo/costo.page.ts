import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costo',
  templateUrl: './costo.page.html',
  styleUrls: ['./costo.page.scss'],
})
export class CostoPage {

   constructor(public toastController: ToastController
   , private router: Router) {}

  async siguiente() {
    const toast = await this.toastController.create({
      message: 'El precio de su viaje es de $xxxxx',
      duration: 2000
    });
    toast.present();
  }

  Cargar(){
    this.router.navigate(['main']);
  }
}
