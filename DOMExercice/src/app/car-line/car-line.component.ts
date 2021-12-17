import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-car-line]',
  templateUrl: './car-line.component.html',
  styleUrls: ['./car-line.component.css']
})
export class CarLineComponent implements OnInit {

  @Input() id: string;
  @Input() modele: string;
  @Input() marque: string;

  constructor() {

    this.id = "";
    this.marque = "";
    this.modele ="";

   }

  ngOnInit(): void {
  }

}
