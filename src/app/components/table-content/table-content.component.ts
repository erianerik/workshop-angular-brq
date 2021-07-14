import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { EmployerService } from 'src/app/service/employer.service';

import { Employer } from './../../model/employer';

@Component({
  selector: 'table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit {

  @Output() addEmployer = new EventEmitter; 
  @Output() editEmployerEmmiter = new EventEmitter();
  
  modalText?:string;
  hiddenModal: boolean = true;
  employers:Employer[] = [];
  idEmployer?: number = 0;

  constructor(
    private _employerService: EmployerService
  ) { }

  ngOnInit(): void {  
    this.getEmployers();
  }

  getEmployers():void {
    if(this._employerService.listEmployes.length < 0) {
      this.employers = this._employerService.listEmployes;
    }
    else {
      this._employerService.getEmployers().subscribe((response: Employer[]) => {
        this._employerService.listEmployes = response;
        this.employers = this._employerService.listEmployes;
      });
    }
  } 
  
  registerEmployerActive() {
    this.editEmployerEmmiter.emit(undefined);
    this.addEmployer.emit(true);
  }

  deleteEmployer(idEmployer?:number) {
    this.hiddenModal = false;    
    this.idEmployer = idEmployer;
    this.modalText = "Você realmente deseja excluir esse funcionário?";
  }

  confirmationStatus(status?:boolean) {
    this.hiddenModal = true;
    if(status) {
      this._employerService.deleteEmployer(this.idEmployer).subscribe((response) => {
          this.employers = this._employerService.listEmployes;
      });
    }
  }

  editEmployer(idEmployer?:number) {
    this.editEmployerEmmiter.emit(idEmployer);
    this.addEmployer.emit(true);
  }

}
