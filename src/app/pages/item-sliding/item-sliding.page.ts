import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  constructor() { }
  @ViewChild("miList") miLista: IonList;
  lista: string[] = ["Raul", "Alejandro", "Eszter", "David"];
  ngOnInit() {
  }

  favorite(nombre: string) {
    console.log(nombre + " añadido a favoritos")
    this.miLista.closeSlidingItems();
  }

  share(nombre: string) {
    console.log(nombre + " compartido")
    this.miLista.closeSlidingItems();
  }

}
