import { Employer } from './../model/employer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  public listEmployes: Employer[] = [];
  private url: string = "http://localhost:3000/employers/";

  constructor(
    private _http:HttpClient,
  ) { }

  getEmployers():Observable<Employer[]> {
    return this._http.get<Employer[]>(this.url);
  }

  addEmployer(employer: Employer):Observable<Employer> {
    return this._http.post<Employer>(this.url, employer);
  }

  updateEmployer(idEmployer?: number, employer?:Employer): Observable<Employer> {
    return this._http.put<Employer>(`${this.url}${idEmployer}/`, employer);
  }

  deleteEmployer(idEmployer?:number):Observable<Employer> {
    let indexList = this.listEmployes.findIndex((employer) => employer.id == idEmployer);    
    this.listEmployes.splice(indexList, 1);
    return this._http.delete<Employer>(this.url + idEmployer);
  }

}
