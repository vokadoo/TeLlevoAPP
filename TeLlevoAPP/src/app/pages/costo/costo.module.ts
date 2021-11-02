import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostoPageRoutingModule } from './costo-routing.module';

import { CostoPage } from './costo.page';
import { ComponenteSedeComponent } from '../../components/componente-sede/componente-sede.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostoPageRoutingModule
  ],
  declarations: [CostoPage, ComponenteSedeComponent]
})
export class CostoPageModule {}
