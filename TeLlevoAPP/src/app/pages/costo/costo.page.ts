/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { RegionesService } from 'src/app/services/regiones.service';


@Component({
  selector: 'app-costo',
  templateUrl: './costo.page.html',
  styleUrls: ['./costo.page.scss'],
})
export class CostoPage {
  Comuna: any = [];

   constructor(public toastController: ToastController
     , private router: Router, private activeroute: ActivatedRoute,
     private menu: MenuController,
   private regionService: RegionesService) {}
  ngOnInit(): void {
    this.getComunas();
  }
  
  getComunas() {
    this.regionService.getRegiones().subscribe(comunas => {
      console.log(comunas);

      this.Comuna = comunas;
    })
  }
  async siguiente() {
    const toast = await this.toastController.create({
      message: 'El precio de su viaje es de $xxxxx',
      duration: 2000
    });
    toast.present();
  }
  toggleMenu(){
   this.menu.open();
  }
  Cargar(){
    this.router.navigate(['main']);
  }
  segmentChanged($event){
    console.log($event)
    let direccion=$event.detail.value
    this.router.navigate(['costo/'+direccion])
  }

}

