import { Component ,Input,SimpleChanges,OnChanges,OnInit} from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './employeeDetails.component.html',
})
export class EmployeeDetailsComponent{

@Input() employee_dtls:any=[];



}
