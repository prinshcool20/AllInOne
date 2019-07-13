import {Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'
import { Observable, Subject, empty } from 'rxjs';
//import { runInThisContext } from 'vm';
@Injectable({
    providedIn:'root',
    

})

export class EmployeeService  {

    constructor(private http:HttpClient){
        // this.myMethod=this.subject.asObservable();
     }
     getAllEmployee(){
        return this.http.get("assets/employee.json");
    }
    empId:any;
    empName:any;
    empSalary:any;
    empDepartment:any;
       // myMethod:Observable<any>;
   // private subject = new Subject<any>();

   emp:any[]=[{empId:1001,empName:"raj",empSalary:5000,empDepartment:"Java"},
   {empId:1002,empName:"ram",empSalary:6000,empDepartment:"Java"},
   {empId:1003,empName:"rahul",empSalary:7000,empDepartment:"Java"}];
  
   
  addEmployee(data:any){
      this.emp.push(data);
      return true;
  }
    showEmployee(){
        // return {empId:1002,empName:"ram",empSalary:6000,empDepartment:"Java"};
        //console.log(this.emp);
        return(this.emp);
     }

   


//ngOnChanges():Observable<any>{
  //  return this.subject.asObservable();
//}
//}

//getMessage(): Observable<any> {
   // console.log("hello2");
   // return this.subject.asObservable();
//}
}