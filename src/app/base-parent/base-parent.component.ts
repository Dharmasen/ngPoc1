
import { Component ,Output,EventEmitter} from '@angular/core';
import{ EmoloyeeModel} from '../employee/models/emoloyee-model';
import{EmployeeAddressModel } from '../employee/models/employee-address-model';
import{ StduentDetails} from '../student/models/stduent-details';
import{StduentSubjectDetails } from '../student/models/stduent-subject-details';


import {ParentModel} from './models/parentModel'

@Component({
  selector: 'app-base-parent',
  templateUrl: './base-parent.component.html',
})
export class BaseParentComponent {

  @Output() SendToMain = new EventEmitter();
  
    parent:ParentModel=new ParentModel();

    emp: EmoloyeeModel =new  EmoloyeeModel();
    emp_address=new EmployeeAddressModel();

    std: StduentDetails =new  StduentDetails();
    std_subject: StduentSubjectDetails=new StduentSubjectDetails();

    emp1: EmoloyeeModel =new  EmoloyeeModel();
    emp_address1=new EmployeeAddressModel();

    emp2: EmoloyeeModel =new  EmoloyeeModel();
    emp_address2=new EmployeeAddressModel();

     

     std1: StduentDetails =new  StduentDetails();
     std_subject1: StduentSubjectDetails=new StduentSubjectDetails();
     

  sendToMainParent(){
    
    this.emp.employeeFirstName='virat';
    this.emp.employeeLastName='kohli';

    this.emp_address.pincode=500081;
    this.emp_address.city='hyderabad';

    this.emp1.employeeFirstName='rohit';
    this.emp1.employeeLastName='sharma';

    this.emp_address1.pincode=123123;
    this.emp_address1.city='chennai';

    this.emp2.employeeFirstName='dhoni';
    this.emp2.employeeLastName='mahendra';

    this.emp_address2.pincode=987656;
    this.emp_address2.city='delhi';

    

    this.std.std_firstname='rahul';
    this.std.std_lastname='dravid';

    this.std_subject.std_marks1=67;
    this.std_subject.std_marks2=89;

    this.std1.std_firstname='venu';
    this.std1.std_lastname='kumar';

    this.std_subject1.std_marks1=77;
    this.std_subject1.std_marks2=99;

    
    this.std.std_subjectDetails.push(this.std_subject);
    this.parent.student_list.push(this.std);

    this.std1.std_subjectDetails.push(this.std_subject1);
    this.parent.student_list.push(this.std1);


    this.emp.emp_add.push(this.emp_address);
    this.emp1.emp_add.push(this.emp_address1);
    this.emp2.emp_add.push(this.emp_address2);
    
    this.parent.employee_list.push(this.emp);
    this.parent.employee_list.push(this.emp1);

    this.parent.employee_list.push(this.emp2);
  
    this.SendToMain.emit(this.parent);
    
  }


}
