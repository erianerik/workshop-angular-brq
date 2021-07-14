import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit {

  @Output() addEmployer = new EventEmitter; 

  constructor() { }

  ngOnInit(): void {
  }

  registerEmployerActive() {
    this.addEmployer.emit(true);
  }

}
