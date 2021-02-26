import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController,
    private _mensajeService: MensajesService,
    private _usuarioService: UsuariosService) { }

  loading: HTMLIonLoadingElement;

  ngOnInit() {
  }



  onClick() {
    this.muestraLoading();
  }

  onClick2() {
    this.muestraLoadingMensajeService();

  }

  private muestraLoading() {
    this.presentLoading();
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await this.loading.present();
  }

  private async muestraLoadingMensajeService() {
    await this._mensajeService.muestraLoading("Cargando");
    let data = await this._usuarioService.traerUsuarios(1).toPromise();
    console.log(data);
    await this._mensajeService.ocultaLoading();
  }
}
