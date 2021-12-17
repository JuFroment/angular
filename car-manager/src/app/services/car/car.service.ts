import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars!: Car[];

  rows!: any;
  cols!: any;


  constructor() {
    this.cars = [];

    for (let i = 1; i < 7; i++) {
      this.cars.push(new Car("image" + i,'Modèle ' + i, 'Marque ' + i, true));
    }

  }
  buildTab(rows: any, cols: any, table:any) {
    let index = 0;
    rows = parseInt(rows);
    cols = parseInt(cols);
    for (let i=0; i<=rows-1; i++) {
      for (let j=0; j<=cols-1; j++) {
        index++;
        table.push([i, j, index]);
      }
    }
    return Array;
  }
}
