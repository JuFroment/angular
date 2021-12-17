import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() email: string;

  constructor() {

    this.id = 0;
    this.username= "";
    this.email = "";


   }

  ngOnInit(): void {
  }

}
