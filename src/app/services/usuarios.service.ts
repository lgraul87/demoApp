import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { UsuariosPaginados } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  traerUsuarios(page: number) {
    return this.http.get<UsuariosPaginados>("https://reqres.in/api/users?page="+page).pipe(
      map(result => result.data)
    );
  }

}
