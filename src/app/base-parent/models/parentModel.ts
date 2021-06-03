import {StduentDetails} from '../../student/models/stduent-details';
import {EmoloyeeModel} from '../../employee/models/emoloyee-model';

export class ParentModel {
   
    student_list:StduentDetails[] = new Array<StduentDetails>();
    employee_list:EmoloyeeModel[]= new Array<EmoloyeeModel>();
    
}
