import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() link: string;


  constructor() {
    this.title = "Tortue";
    this.subtitle = "Une petite tortue";
    this.description = "Une image d'une tortue";
    this.link = "https://i.imgur.com/1bzoUjs.jpeg"

  }

  ngOnInit(): void {
  }

}
