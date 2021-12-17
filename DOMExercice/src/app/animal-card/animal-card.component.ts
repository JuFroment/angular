import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  @Input() animalName: string;
  @Input() animalSound: string;

  imgPath: string;

  @Output() onClickEmitter = new EventEmitter();

  constructor() {

    this.animalName = '';
    this.animalSound = "";
    this.imgPath = "";

   }

  ngOnInit(): void {
    this.imgPath = 'assets/images/' + this.animalName.toLowerCase() + '.jpg';
  }

  onClick() {
    this.onClickEmitter.emit(this.animalSound);
  }

}
