import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarService } from '../services/car/car.service';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() rows: any;
  @Input() cols: any;

  rowsTmp!: Array<any>;
finalTable: Array<any>;
  // @Output() finalTable = new EventEmitter<any>();

  constructor(private carService: CarService) {
    this.finalTable = [];
  }

  ngOnInit(): void {
    this.rowsTmp = Array(+this.rows);
    this.carService.buildTab(this.rows, this.cols, this.finalTable)
    console.log(this.finalTable)
    //balancer ça dans le card.component.ts, et passer les cols & rows en output
  }

// addNewItem(value: Array<any>) {
//   this.finalTable.emit(value);
// }


}
