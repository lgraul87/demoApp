import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

import { MensajesService } from '../../services/mensajes.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('raul') refresher: IonRefresher;

  usuarios: Usuario[] = [];
  usuariosPage = 1;

  constructor(private _mensajeService: MensajesService, private _usuarioService: UsuariosService) { }

  ngOnInit() {

  }

  onRefresh(event: any) {
    this._usuarioService.traerUsuarios(this.usuariosPage).subscribe(users => {
      if (users.length > 0) {
        this.usuarios.push(...users);
        this.usuariosPage++;
      }
      event.target.complete();
    });
  }

  onClick() {
    this._mensajeService.muestraMensaje("Usuarios cargados");
  }


}
