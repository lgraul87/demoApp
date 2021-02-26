import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFabButtonPageRoutingModule } from './ion-fab-button-routing.module';

import { IonFabButtonPage } from './ion-fab-button.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonFabButtonPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IonFabButtonPage]
})
export class IonFabButtonPageModule {}
