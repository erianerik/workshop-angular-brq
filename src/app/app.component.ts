import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerStatus = false;
  idEmployer?:number;

  addEmployerStatus(event:boolean) {
    this.registerStatus = event;
  }

  editEmployer(event?:number) {
    this.idEmployer = event;
  }
}
