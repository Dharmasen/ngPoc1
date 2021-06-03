import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChildCComponent } from './childF/childC.component';
// import { ChildC2Component } from './childF2/childC2.component';
import { BaseParentComponent } from './base-parent/base-parent.component';
// import { Child4Component } from './childF2/child4/child4.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { EmployeeDetailsComponent } from './employee/employeeDetails/employeeDetails.component';
import { StudentDetailsComponent } from './student/studentDetails/studentDetails.component';


import { MainParentComponent } from './main-parent/main-parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,MainParentComponent,
    BaseParentComponent,EmployeeComponent,StudentComponent,
    EmployeeDetailsComponent,StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
