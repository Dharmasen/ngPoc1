import { Component ,Input,SimpleChanges,OnChanges,OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent{
  
 
  @Input() employee_dataset: any=[] ;


}
