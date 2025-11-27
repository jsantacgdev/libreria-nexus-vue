// src/shared/data.ts
import type { Space } from "./interfaces";

export const spacesData: Space[] = [
  {
    id: 1,
    nombre: 'Sala "Ada Lovelace"',
    planta: 1,
    capacidad: 4,
    img: "https://via.placeholder.com/300?text=Sala+A",
  },
  {
    id: 2,
    nombre: 'Sala "Alan Turing"',
    planta: 1,
    capacidad: 8,
    img: "https://via.placeholder.com/300?text=Sala+B",
  },
  {
    id: 3,
    nombre: "Zona Open Space",
    planta: 2,
    capacidad: 20,
    img: "https://via.placeholder.com/300?text=Open+Space",
  },
  {
    id: 4,
    nombre: "Sala de Juntas",
    planta: 2,
    capacidad: 10,
    img: "https://via.placeholder.com/300?text=Juntas",
  },
  {
    id: 5,
    nombre: "Cabina Individual",
    planta: 1,
    capacidad: 1,
    img: "https://via.placeholder.com/300?text=Cabina",
  },
];
