export interface Componente {
    nombre: string,
    ruta: string,
    icono: string,
    color: string
}

export interface UsuariosPaginados {
    data: Usuario[]
}

export interface Usuario {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
