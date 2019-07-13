import {Component,OnInit} from '@angular/core'
import {EmployeeService} from './app.employeeservice'
import{ROUTES, Router} from '@angular/router';

@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})
export class SearchEmployeeComponent implements OnInit{
    constructor(private myservice:EmployeeService,private router:Router){}
    empId:any;
    flag:number=0;
    result:any[]=[];
    empall:any[]=[];
    
    ngOnInit(){
        //this.empall=this.myservice.showEmployee();
        this.myservice.getAllEmployee().subscribe((data:any)=>this.empall=data);
}
status:any=false;
searchEmp(){
    this.result.splice(0,1);
    this.flag=0;
    
    for(let data of this.empall){
        if(data.empId==this.empId){
          this.result.push(data);
         this.status=true;
         this.flag=1;
        // this.router.navigate(['show',this.empId]); 
        }
       }
  if(this.flag==0)
  {
      alert("NO RECORD FOUND");
  }     
  
}
}
