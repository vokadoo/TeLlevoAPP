import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostoPage } from './costo.page';
import { ComponenteSedeComponent } from '../../components/componente-sede/componente-sede.component';
import { ComponenteComunaComponent } from '../../components/componente-comuna/componente-comuna.component';
import { ComponenteVehiculoComponent } from '../../components/componente-vehiculo/componente-vehiculo.component';


const routes: Routes = [
  {
    path: '',
    component: CostoPage,
    //Declaro rutas hijas
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostoPageRoutingModule {}
