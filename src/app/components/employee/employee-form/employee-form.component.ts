import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import swal from 'sweetalert2';
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
     if(form.value.$key == null){
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Person added Successfully',
        showConfirmButton: false,
        timer: 1500,
        
      })
      
       this.employeeService.insertEmployee(form.value);
     }
     
    else{
      this.employeeService.update = false;
      this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);
  }


  resetForm(form?:NgForm){
    if(form != null)
    form.reset();
    this.employeeService.update = false;
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
      this.employeeService.update = false;
    }
  }
 

}
