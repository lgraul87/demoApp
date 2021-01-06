import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
@ViewChild('miRefresher') refresher: IonRefresher;
  constructor(private _mensajeService:MensajesService) { }
  public datos:string[] = [];
  ngOnInit() {
  }
  onClick(){
    this._mensajeService.muestraMensaje("Usuarios cargados");
  }
  refresca(ev){
    

    setTimeout(()=>{

      this.datos.push("asdasd");
    this.datos.push("asdasd");
    this.datos.push("asdasd");
    this.datos.push("asdasd");
      ev.target.complete();
    },1500);
  }
}
