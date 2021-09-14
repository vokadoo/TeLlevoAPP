import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  dato: string;
  control: FormGroup;
  isSubmitted = false;

  constructor(private router: Router, public formBuilder: FormBuilder, public alertController: AlertController){}

  ngOnInit(){
    //controla caracteres minimo para validar
    this.control = this.formBuilder.group({
      contraseña: ['',[Validators.required, Validators.minLength(6)]]
    });
  }
  //
  main(){
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}// Al estado le asigno el parametro
    };
    console.log(this.dato);
    this.router.navigate(['/main'],navigationExtras);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Te Llevo APP',
      message: 'Confirmar usuario',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
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



}
