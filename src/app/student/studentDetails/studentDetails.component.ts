import { Component ,Input,SimpleChanges,OnChanges,OnInit} from '@angular/core';

@Component({
  selector: 'app-std-details',
  templateUrl: './studentDetails.component.html',
})
export class StudentDetailsComponent{

@Input() student_dtls:any=[];



}
