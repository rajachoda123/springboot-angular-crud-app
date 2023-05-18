import { Component } from '@angular/core';
import { Employee } from '../employee';
import { OnSameUrlNavigation, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
employee: Employee = new Employee();
constructor(private employeeService:EmployeeService,private router:Router) {}
 saveEmployee() {
  this.employeeService.createEmployee(this.employee).subscribe(data=>{
    console.log(data);
  })
}

onSubmit() {
  console.log(this.employee);
  this.saveEmployee();
};

}
