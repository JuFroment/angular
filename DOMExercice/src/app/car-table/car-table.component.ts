import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  cars: Array<any>;

  constructor() {

    this.cars = [];
   }

  ngOnInit(): void {
    this.cars.push({
      id: 1,
      marque: "Tesla",
      modele: "Model 3"
    });
    this.cars.push({
      id: 2,
      marque: "Citroen",
      modele: "C3"
    });
    this.cars.push({
      id: 3,
      marque: "Peugeot",
      modele: "206"
    });
  }

}
