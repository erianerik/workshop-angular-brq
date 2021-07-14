import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent implements OnInit {

  status:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
