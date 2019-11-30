import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  //Define API call
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  //CRUD Operations

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  //HttpClient API get() methos ==> Fetch employees list
  getEmployees(): Observable<Employee>{
    console.log("hello")
    return this.http.get<Employee>(this.apiURL + '/employees/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  

  getEmployee(id): Observable<Employee>{
    return this.http.get<Employee>(this.apiURL+ '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  //HttpClient APi put() method ==> update employee
  createEmployee(employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateEmployee(id, employee): Observable<Employee>{
    return this.http.put<Employee>(this.apiURL + "/employees/" + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteEmployee(id): Observable<Employee>{
    return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
