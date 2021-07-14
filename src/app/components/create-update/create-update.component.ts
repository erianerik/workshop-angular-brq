import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  @Output() addEmployer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addEmployerStatus() {
    this.addEmployer.emit(false);
  }

}
