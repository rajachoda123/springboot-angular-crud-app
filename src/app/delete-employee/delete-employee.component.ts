import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit{
  id: number = 1
  employee: Employee = new Employee() 

  constructor(private employeeService: EmployeeService, 
    private route: ActivatedRoute,
    private router: Router) {
      
    }
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }
  

}
