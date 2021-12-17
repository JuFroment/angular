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
  }

  ngOnInit(): void {


    this.users.push({
      id: 1,
      username: "Ju",
      email: "julatortue@gmail.com"
    });
    this.users.push({
      id: 2,
      username: "Nebel",
      email: "nebel@gmail.com"
    });
    this.users.push({
      id: 3,
      username: "Jyym",
      email: "Jyym@gmail.com"
    });
    this.users.push({
      id: 4,
      username: "Juney",
      email: "juney@gmail.com"
    });
  }

}
