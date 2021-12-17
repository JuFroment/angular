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

    this.title = 'Ceci est un titre';
    this.subtitle = 'Ceci est un sous-titre';
    this.description = 'Voici une description';
    this.link = 'https://www.google.fr';
  }

  ngOnInit(): void {
  }

}
