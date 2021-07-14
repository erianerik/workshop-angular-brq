import { Employer } from './../model/employer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  public listEmployes: Employer[] = [];
  private url: string = "http://localhost:3000/employers";

  constructor(
    private _http:HttpClient,
  ) { }

  getEmployers():Observable<Employer[]> {
    return this._http.get<Employer[]>(this.url);
  }

}
