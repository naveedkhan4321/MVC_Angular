import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
//import { HttpClientModule } from '@angular/common/http';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
  url(arg0: any, arg1: any, arg2: any): any {
    throw new Error("Method not implemented.");
  }
  selectedEmployee: Employee = new Employee();

  constructor(private http: Http) { }

  //postEmployee(emp: Employee) {
  //  var body = JSON.stringify(emp);
  //  var headerOptions = new Headers(  { 'Content-Type': 'application/json' } );

  //  var requestOptions = new RequestOptions(
  //    { method: RequestMethod.Post, headers: headerOptions });
  //  debugger;

  //  return this.http.post('http://localhost:49859/api/Employee', body, requestOptions).map(x => x.json());

  //}


  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:8081/api/Employee', body, requestOptions).map(x => x.json());
  }



  //constructor(private httpClient: HttpClientModule) { }

  //addEmployeeWithPromise(emp: Employee): Promise<Employee> {
  //  let headers = new Headers({ 'Content-Type': 'application/json' });
  //  let options = new RequestOptions({ headers: Headers });
  //  return this.http.post(this.url, emp, options).toPromise()
  //    .then(this.extractData)
  //    .catch(this.handleErrorPromise);
  //}

  //Install-Package Microsoft.AspNet.WebApi.Cors -Version 5.2.3

}
