import { Component ,Output,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
})
export class MainParentComponent {

  mainData=[];
  data=[];



  baseData_get(d){

    this.data=d;
    console.log("came from Base Parent"+this.data);
    this.mainData=this.data;
    
  }

}
