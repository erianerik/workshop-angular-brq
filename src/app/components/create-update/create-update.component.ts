import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { EmployerService } from 'src/app/service/employer.service';
import { Employer } from './../../model/employer';

@Component({
  selector: 'create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  @Output() addEmployer = new EventEmitter();
  @Input() idEmployer?:number; 

  employer: Employer = {};
  titleAction?: string;

  constructor(
    private _employerService: EmployerService
  ) { }

  ngOnInit(): void {
    if(this.idEmployer) {
      this.titleAction = "Alterar Funcionário";
    }else {
      this.titleAction = "Cadastrar Funcionário";
      
    }
    
  }

  addEmployerStatus() {
    this.addEmployer.emit(false);
  }

  registerEmployer():void {
      this._employerService.addEmployer(this.employer).subscribe((employer) => {
        console.log(employer);
      })
  }

}
