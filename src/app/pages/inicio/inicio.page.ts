import { Component, OnInit } from '@angular/core';
import { DatosComponentesService } from 'src/app/services/datos-componentes.service';
import { Componente } from '../../interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _datos:DatosComponentesService) { }
  public misComponentes: Componente[] = [];

  async ngOnInit() {
     this.misComponentes= await this._datos.getDatos();
  }
  
}
