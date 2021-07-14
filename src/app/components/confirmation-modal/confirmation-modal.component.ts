import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  modalText: string = "Você realmente deseja fazer essa operação?";

  constructor() { }

  ngOnInit(): void {
  }

}
