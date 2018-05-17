import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { MatTableModule } from '@angular/material';

@NgModule({
	imports: [ CommonModule, CoreModule, MatTableModule ],
	declarations: [ EmployeeTableComponent ],
	exports: [ EmployeeTableComponent ]
})
export class EmployeesModule {}
