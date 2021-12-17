import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {

  @Input() cols!: string;
  @Input() indexRow!: number;

  colsTmp!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.colsTmp = Array(+this.cols);
  }

}
