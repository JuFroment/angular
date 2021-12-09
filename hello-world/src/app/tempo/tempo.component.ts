import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  city: string;
  isDisabled = false;

  constructor() {
    this.city = 'Lyon'
   }

  ngOnInit(): void {
  }
  onClickChangeCity(): void {
    this.city = 'Besançon'
    this.isDisabled = true;
  }

}


