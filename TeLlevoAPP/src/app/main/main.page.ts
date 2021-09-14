import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  dato: any;//Gereno variable Any(permite todo valor)
  constructor(private activeroute: ActivatedRoute, private router: Router, private menu: MenuController) {
    this.activeroute.queryParams.subscribe(params => {//utilizamos lamdba
      if (this.router.getCurrentNavigation().extras.state) {
        this.dato = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato);
      }
  });

 }
 toggleMenu(){
   this.menu.open();
 }



}
