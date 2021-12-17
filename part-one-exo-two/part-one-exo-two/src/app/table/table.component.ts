import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() email: string;

  users: Array<any>;

  constructor() {

    this.id = 0;
    this.username = "";
    this.email = "";

    this.users = [];
  }

  ngOnInit(): void {

    this.users.push({
      id: 1,
      username: "Julien",
      email: "julatortue@gmail.com"
    });
  }

}
