export interface Space {
  id: number;
  nombre: string;
  planta: number;
  capacidad: number;
  price: number;
  img: string;
}


export interface Reserva {
  nombre: string;
  email: string;
  fecha: string;
  hora_entrada: string;
  hora_salida: string;
}