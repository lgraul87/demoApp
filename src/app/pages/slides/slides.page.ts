import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/interface';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  usuarios : Usuario[] = [];
 

  usuariosPage = 1;
  muestra = true;

  constructor(private _usuarioService: UsuariosService,
    private _mensajeService: MensajesService) { }

  ngOnInit() {
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
            this.muestra = false;
          }
        });
      }, 1500)

    } else {
      this._mensajeService.muestraMensaje("No hay mas datos...");
    }
  }
}


