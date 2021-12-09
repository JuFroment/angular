import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  firstname: string;
  lastname: string;

  constructor() {
    this.firstname = 'Julien';
    this.lastname = 'la Tortue';
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.firstname = 'Tortue'
      this.lastname = 'la Julien'
    }, 2000);
  }

}
