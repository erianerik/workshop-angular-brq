import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerStatus = false;

  addEmployerStatus(event:boolean) {
    this.registerStatus = event;
  }
}
