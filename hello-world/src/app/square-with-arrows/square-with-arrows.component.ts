import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-with-arrows',
  templateUrl: './square-with-arrows.component.html',
  styleUrls: ['./square-with-arrows.component.css']
})
export class SquareWithArrowsComponent implements OnInit {

  squareStyles: any;

  constructor() {

    this.squareStyles= {
      position: 'relative',
      width: '100px',
      height: '100px',
      backgroundColor: 'black',
      top: '0px',
      left: '0px',
    };

    let i = 0;
    const squareInit = setInterval(() => {
        this.squareStyles.top = parseInt(this.squareStyles.left) + 5 + 'px';
        this.squareStyles.left = parseInt(this.squareStyles.left) + 5 + 'px';
        i++
        if (i === 250) {
          clearInterval(squareInit);
        }
    }, 20);

   }

  ngOnInit(): void {
  }

  move(to: string) {

    switch (to) {

      case 'left':
        this.squareStyles.left = parseInt(this.squareStyles.left) - 10 + 'px';
        break;
      case 'top':
        this.squareStyles.top = parseInt(this.squareStyles.left) - 10 + 'px';
        break;
      case 'bottom':
        this.squareStyles.top = parseInt(this.squareStyles.left) + 10 + 'px';
        break;
      case 'right':
        this.squareStyles.left = parseInt(this.squareStyles.left) + 10 + 'px';

        break;
        default:
          console.log('Erreur !');
    }
  }

}
