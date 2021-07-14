import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployerService } from 'src/app/service/employer.service';

import { Employer } from './../../model/employer';

@Component({
  selector: 'table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit {

  @Output() addEmployer = new EventEmitter; 
  hiddenModal: boolean = true;
  employers:Employer[] = [];

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
        this.employers = response;
      });
    }
  } 
  
  registerEmployerActive() {
    this.addEmployer.emit(true);
  }

  deleteEmployer(idEmployer?:number) {
    this.hiddenModal = false;    
  }

}
