import {Component} from '@angular/core';
import {EmployeeService} from './app.employeeservice';
import{ROUTES, Router} from '@angular/router';

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent {
 // status:boolean=false;
 constructor(private myservice:EmployeeService,private router:Router){}
 
empData:any;
 empId:any;
 empName:any;
 empSalary:any;
 empDepartment:any;
   
      addEmployee():any{
       
                this.empData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment} ;
                if(this.myservice.addEmployee(this.empData)){
                        this.router.navigate(['show']);
                }
                   
        
      
   }
  
   
}