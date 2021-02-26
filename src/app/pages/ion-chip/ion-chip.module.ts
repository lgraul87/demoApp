import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonChipPageRoutingModule } from './ion-chip-routing.module';

import { IonChipPage } from './ion-chip.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonChipPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IonChipPage]
})
export class IonChipPageModule {}
