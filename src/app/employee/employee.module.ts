import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
