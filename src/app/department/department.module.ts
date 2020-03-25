import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DepartmentRoutingModule
  ],
  exports: [DepartmentComponent]
})
export class DepartmentModule { }
