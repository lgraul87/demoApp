import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';

import { MensajesService } from '../../services/mensajes.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('refresh') refresher: IonRefresher;
  @ViewChild('infinite') infinite: IonInfiniteScroll;


  usuarios: Usuario[] = [];
  usuariosPage = 1;
  muestra = true;

  constructor(private _mensajeService: MensajesService, private _usuarioService: UsuariosService) { }

  ngOnInit() {

  }

  onRefresh(event: any) {
    if (this.muestra) {
      this._mensajeService.muestraMensaje("Cargando usuarios...");
      setTimeout(() => {
        this._usuarioService.traerUsuarios(this.usuariosPage).subscribe(users => {
          if (users.length > 0) {
            this.usuarios.push(...users);
            this.usuariosPage++;
          }

          else {
            this._mensajeService.muestraMensaje("No hay mas datos...");
            this.infinite.disabled = true;
            this.refresher.disabled = true;
            this.muestra = false;
          }
          event.target.complete();
        });
      }, 1500)

    } else {
      this._mensajeService.muestraMensaje("No hay mas datos...");
    }
  }
    onClick() {
      if (this.muestra) {
        this._mensajeService.muestraMensaje("Cargando usuarios");
        setTimeout(() => {
          this._usuarioService.traerUsuarios(this.usuariosPage).subscribe(users => {
            if (users.length > 0) {
              this.usuarios.push(...users);
              this.usuariosPage++;

            } else {
              this._mensajeService.muestraMensaje("No hay mas datos...");
              this.infinite.disabled = true;
              this.refresher.disabled = true;
              this.muestra = false;
            }
          });
        }, 1500);
      } else {
        this._mensajeService.muestraMensaje("No hay mas datos...");

      }
    }
    
    limpiar() {
      this._mensajeService.muestraMensaje("Limpiando...");
      this.usuariosPage = 1;
      this.usuarios.length = 0;
      this.refresher.disabled = false;
      this.infinite.disabled = false;
      this.muestra = true;

    }

    loadData(event: any) {
      if(this.muestra){
        this._mensajeService.muestraMensaje("Cargando usuarios");
      setTimeout(() => {
        this._usuarioService.traerUsuarios(this.usuariosPage).subscribe(users => {
          if (users.length > 0) {
            this.usuarios.push(...users);
            this.usuariosPage++;

          } else {
            this._mensajeService.muestraMensaje("No hay mas datos...");

            this.infinite.disabled = true;
            this.refresher.disabled = true;
            this.muestra = false;
          }
          event.target.complete();
        });
      }, 1500);

    }else{
      this._mensajeService.muestraMensaje("No hay mas datos...");

    }
  }
}
