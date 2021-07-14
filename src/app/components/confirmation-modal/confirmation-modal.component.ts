import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Output() confirmStatus = new EventEmitter();
  @Input() modalText?: string = "Você realmente deseja fazer essa operação?";

  constructor() { }

  ngOnInit(): void {
  }

  statusModal(actionStatus?: boolean) {
    actionStatus == true ? this.confirmStatus.emit(true) : this.confirmStatus.emit(false);
  }

}
