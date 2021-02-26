import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-chip',
  templateUrl: './ion-chip.page.html',
  styleUrls: ['./ion-chip.page.scss'],
})
export class IonChipPage implements OnInit {
input2:HTMLFormElement;
  constructor() { }

  ngOnInit() {
  }

  ocultar(id) {
    var input2 = document.getElementById(id).addEventListener ("click",function () {
      this.style.display="block";
    });
  }

}
