import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostoPage } from './costo.page';
import { IonicModule } from '@ionic/angular';
import { ComponentMenuComponent } from '../../components/component-menu/component-menu.component';

const routes: Routes = [
  {
    path: '',
    component: CostoPage,
    //Declaro rutas hijas
    children:[
      {
        path:'menu',
        component: ComponentMenuComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonicModule],
  exports: [RouterModule],
})
export class CostoPageRoutingModule {}
