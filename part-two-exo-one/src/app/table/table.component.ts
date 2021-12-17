import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

users: Array<any>;

  constructor() {

    this.users = [];



    const userOne = {
      id: 0,
      username: 'Ju la Tortue',
      email: "julatortue@gmail.com",
    };
    this.users.push(userOne);

    const userTwo = {
      id: 1,
      username: 'Nebel Weirdo',
      email: 'nebelweirdo@gmail.com'
    };
    this.users.push(userTwo);



    // generateStyles(index: number): any {
    //   const styles = {
    //     color: 'blue',
    //     textTransform: '',
    //   };

    //   if (index % 2 !== 0) {
    //     styles.color = 'red';
    //   } else {
    //     styles.textTransform = 'uppercase';
    //   }
    //   return styles;
    // }
  }

  ngOnInit(): void {


  }

}
