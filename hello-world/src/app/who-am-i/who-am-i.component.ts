import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  @Input() firstname: string;
  @Input() lastname: string;

  @Output() onClickedShowAge: EventEmitter<void>;

  isDisabled: boolean;

  constructor() {
    this.firstname = 'Julien';
    this.lastname = 'la Tortue';
    this.isDisabled = false;

    this.onClickedShowAge = new EventEmitter<void>();
   }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.firstname = 'Tortue'
    //   this.lastname = 'la Julien'
    //   this.isDisabled = true;
    //   this.isChecked = true;
    // }, 2000);

    // setTimeout(() => {
    //   this.firstname = 'Julien'
    //   this.lastname = 'la Tortue'
    //   this.isDisabled = false;
    //   this.isChecked = false;
    // }, 4000);
  }


  onClickShowAge(): void {
    this.onClickedShowAge.emit();
  }
}
