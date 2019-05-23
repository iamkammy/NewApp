import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empform;
  employeeList: AngularFireList<any>;
  selectedEmployee:Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }
update:boolean = false;
  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee:Employee){
    this.empform = employee;
      this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    })
  }

  updateEmployee(emp: Employee){
    this.employeeList.update(emp.$key, {
      name: emp.name,
      position: emp.position,
      office: emp.office,
      salary: emp.salary
    })
  }

  deleteEmployee(key: string){
    this.employeeList.remove(key);
  }
}
