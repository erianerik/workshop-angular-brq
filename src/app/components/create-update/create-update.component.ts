import { EmployerService } from 'src/app/service/employer.service';
import { Employer } from './../../model/employer';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  @Output() addEmployer = new EventEmitter();

  employer: Employer = {};

  constructor(
    private _employerService: EmployerService
  ) { }

  ngOnInit(): void {
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
