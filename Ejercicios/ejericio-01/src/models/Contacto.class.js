import { ESTADO } from "./Estado.enum";

export class CONTACTO {
  nombre = '';
  apellido = '';
  email = '';
  conectado = ESTADO.DESCONECTADO

  constructor (nombre, apellido, email, conectado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}