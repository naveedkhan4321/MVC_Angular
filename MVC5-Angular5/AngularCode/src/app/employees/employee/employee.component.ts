import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  providers: [EmployeeService],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //empService: EmployeeService;

  //constructor() {

  //  empService = new EmployeeService();
  //}
  constructor(private empService: EmployeeService) {
  }

  ngOnInit() {
    this.resetForm();
  }


  onSubmit(form: NgForm) {
    debugger;
    if (form.value.EmployeeID == null) {
      this.empService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          alert('Allah pak ka shuker haa');
          //this.empService.getEmployeeList();
          //this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    //else {
    //  this.empService.putEmployee(form.value.EmployeeID, form.value)
    //    .subscribe(data => {
    //      this.resetForm(form);
    //      this.empService.getEmployeeList();
    //      this.toastr.info('Record Updated Successfully!', 'Employee Register');
    //    });
    //}
  }




  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    

    this.empService.selectedEmployee =
      {
        EmployeeId: null,
        FirstName: 'Allah k banda',
        LastName: '',
      EmpCode: '',
      DOB : ''

      };

  }

}
