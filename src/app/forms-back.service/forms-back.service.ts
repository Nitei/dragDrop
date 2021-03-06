import { Injectable } from '@angular/core';
import { Formulario } from '../drag-drop/formulario.interface';

@Injectable( {
  providedIn: 'root'
} )
export class FormsBackService {

  public jaBackForms: Formulario[] = [
    {
      id: 1,
      idx: 0,
      nombre: 'Tomate',
      color: 'cyan'
    },
    {
      id: 2,
      idx: 1,
      nombre: 'Patata',
      color: 'pink'
    },
    {
      id: 3,
      idx: 2,
      nombre: 'Zanahoria',
      color: 'Salmon'
    },
    {
      id: 4,
      idx: 3,
      nombre: 'Melón',
      color: 'lightGreen'
    },
    {
      id: 5,
      idx: 4,
      nombre: 'Sandía',
      color: 'Bisque'
    },
    {
      id: 6,
      idx: 5,
      nombre: 'Guisante',
      color: 'GreenYellow'
    },
    {
      id: 7,
      idx: 6,
      nombre: 'Pimiento',
      color: 'Khaki'
    },
    {
      id: 8,
      idx: 7,
      nombre: 'Kiwi',
      color: 'LawnGreen'
    },
    {
      id: 9,
      idx: 8,
      nombre: 'Platano',
      color: 'SandyBrown'
    },
    {
      id: 10,
      idx: 9,
      nombre: 'Pera',
      color: 'Lime'
    },
    {
      id: 11,
      idx: 10,
      nombre: 'Manzana',
      color: 'OrangeRed'
    },
    {
      id: 12,
      idx: 11,
      nombre: 'Paraguaya',
      color: 'Violet'
    },
  ];

  constructor() {
  }

  public sendToServer( algo: object[] | Formulario | Formulario[] ) { }
}
