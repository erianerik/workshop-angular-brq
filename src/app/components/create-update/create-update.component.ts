import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Employer } from './../../model/employer';
import { EmployerService } from 'src/app/service/employer.service';

@Component({
  selector: 'create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  @Output() addEmployer = new EventEmitter();
  @Input() idEmployer?:number; 

  employer: Employer = {};
  coordinators?: string[] = ["Marcio Vitor Melo", "Edson Ayabe", "Carlos Minerva"];
  titleAction?: string;

  constructor(
    private _employerService: EmployerService
  ) { }

  ngOnInit(): void {
    if(this.idEmployer) {
      this.titleAction = "Alterar Funcionário";
      this._employerService.listEmployes.findIndex((employer) => {
        employer.id == this.idEmployer ? this.employer = employer : false;
        console.log(this.employer);
         
      });

    }else {
      this.titleAction = "Cadastrar Funcionário";
    }
    
  }

  addEmployerStatus() {
    this.addEmployer.emit(false);
  }

  submit():void {
    if("Cadastrar Funcionário" == this.titleAction) {
     
      this._employerService.addEmployer(this.employer).subscribe((employer) => {
        console.log(employer);
      });
    }else {
      this._employerService.updateEmployer(this.idEmployer, this.employer).subscribe((response) => {
        console.log(response);
      });
    }
  }

}
