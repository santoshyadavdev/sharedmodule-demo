import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
