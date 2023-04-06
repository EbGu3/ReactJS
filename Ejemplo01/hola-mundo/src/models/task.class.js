import { NIVEL } from "./nivel.enum";

export class Task {
  //  TODO: Definir atributos
  nombre = '';
  descripcion = '';
  completado = true;
  nivel = NIVEL.NORMAL;

  //  TODO: Definir constructor
  constructor (nombre, descripcion, completado, nivel) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.completado = completado;
    this.nivel = nivel
  }

}