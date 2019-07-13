import {Component, OnInit} from '@angular/core'
import {EmployeeService} from './app.employeeservice'
import{ActivatedRoute,Params} from '@angular/router'
@Component({
    selector:'show-comp',
    templateUrl:'showEmployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    constructor(private myservice:EmployeeService,private _activate:ActivatedRoute){}

    empall:any[]=[];
    data:any=null;
ngOnInit(){
   // this.empall=this.myservice.showEmployee();
    this.myservice.getAllEmployee().subscribe((data:any)=>this.empall=data);
   // this.myservice.getMessage().subscribe((data1:any)=>this.empall=data1);
   // this.myservice.getMessage().subscribe((message)=> this.empall = message)
  // this.myservice.getMessage().subscribe((message)=> this.empall.push(message));
 // this.data=this._activate.snapshot.params['id'];
  
  
}
deleteEmployee(data:number):any{
    this.empall.splice(data,1); 
   // alert("data deleted.........");
  }
  
  empid:any;
  empname:any;
  empsalary:any;
  empdepartment:any;
  updateEmployee(i:number):any{
   this.empid=this.empall[i].empId;
   this.empname=this.empall[i].empName;
   this.empsalary=this.empall[i].empSalary;
   this.empdepartment=this.empall[i].empDepartment
    this.data=i;
  }
  updateEmp():any{
    if(this.data!=null)
    this.empall.splice(this.data,1,{empId:this.empid,empName:this.empname,empSalary:this.empsalary,empDepartment:this.empdepartment})
   
  }
}