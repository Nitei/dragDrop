import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class FormsBackService {

  public jaBackForms: object[] = [
    {
      id: 1,
      idx: 0,
      data: {
        first: 'Tomate'
      }
    },
    {
      id: 2,
      idx: 1,
      data: {
        first: 'Patata'
      }
    },
    {
      id: 3,
      idx: 2,
      data: {
        first: 'Zanahoria'
      }
    },
    {
      id: 4,
      idx: 3,
      data: {
        first: 'Melón'
      }
    },
    {
      id: 5,
      idx: 4,
      data: {
        first: 'Lechuga'
      }
    },
  ];

  constructor() { }
}
