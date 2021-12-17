import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-col-item',
  templateUrl: './col-item.component.html',
  styleUrls: ['./col-item.component.css']
})
export class ColItemComponent implements OnInit {

  cars!: Car[];


  constructor(private carService: CarService) {
    // this.indexCard = (this.indexRow + this.indexCol)+(this.indexCol * this.indexRow )
    // console.log(this.indexCard); //retourne NaN
    // console.log(this.indexRow)
   }

  ngOnInit(): void {
    this.cars = this.carService.cars;
    }

}
