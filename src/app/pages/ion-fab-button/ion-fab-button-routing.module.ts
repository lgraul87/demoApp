import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonFabButtonPage } from './ion-fab-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonFabButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonFabButtonPageRoutingModule {}
