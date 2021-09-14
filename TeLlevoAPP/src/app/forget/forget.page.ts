import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit{

  user: string;
  constructor(private router: Router,public toastController: ToastController) {}
  ngOnInit(){

  }
  usuario(){
    this.presentToast('Se envio un correo a '+this.user+'@duocuc.cl');
  }

  login(){
    this.router.navigate(['/login']);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }

}
