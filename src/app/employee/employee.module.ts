import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeeRoutingModule
  ],
  exports: [EmployeeComponent]
})
export class EmployeeModule { }
