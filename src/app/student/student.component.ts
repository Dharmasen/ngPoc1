import { Component ,Input,SimpleChanges,OnChanges,OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  
 
  @Input() student_dataset: any=[] ;

}
