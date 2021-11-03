import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostoPageRoutingModule } from './costo-routing.module';

import { CostoPage } from './costo.page';
import { ComponentMenuComponent } from '../../components/component-menu/component-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostoPageRoutingModule
  ],
  declarations: [CostoPage, ComponentMenuComponent]
})
export class CostoPageModule {}
