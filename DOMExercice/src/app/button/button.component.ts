import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() labelButton: string;
  @Output() onClickEmitter = new EventEmitter();


  constructor() {
    this.labelButton = "";
  }

  ngOnInit(): void {

  }
  onClick() {
    this.onClickEmitter.emit();
  }
}
