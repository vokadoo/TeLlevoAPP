import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato: string;
  control: FormGroup;
  isSubmitted = false;


  constructor(private router: Router,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    //controla caracteres minimo para validar
    this.control = this.formBuilder.group({
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  //
  main() {
    let navigationExtras: NavigationExtras = {
      state: { dato: this.dato }// Al estado le asigno el parametro
    };
    console.log(this.dato);
    this.router.navigate(['/main'], navigationExtras);
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Te Llevo APP',
      message: '¿Confirmar viaje?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'CONFIRMAR',
          handler: () => {
            this.cargar();
            this.main();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async cargar() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor...',
      duration: 1000,
      spinner: 'crescent'
    });
    await loading.present();
  }

}
