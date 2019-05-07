import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }


  ngOnInit() {
    this.resetForm();
  }


  onSubmit(form:NgForm){
     if(form.value.$key == null)
    this.employeeService.insertEmployee(form.value);
    else{
      this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);
  }


  resetForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.employeeService.selectedEmployee = {
      $key : null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

  onDelete(form: NgForm){
    if(confirm('Are You Sure') == true){
      this.employeeService.deleteEmployee(form.value.$key);
      this.resetForm(form);
    }
  }

}
