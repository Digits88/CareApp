import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public label: string;
  @Input() public action: string;
  @Output() public clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.action);
  }
}
