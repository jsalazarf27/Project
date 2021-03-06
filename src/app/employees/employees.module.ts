import { DialogComponent } from './../shared/dialog/dialog.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import {
	MatTableModule,
	MatInputModule,
	MatButtonModule,
	MatDialogModule
} from '@angular/material';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		EmployeesRoutingModule,
		MatTableModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		SharedModule
	],
	declarations: [ EmployeeTableComponent, EmployeeInputComponent ],
	exports: [ EmployeeTableComponent, EmployeeInputComponent ],
	entryComponents: [ DialogComponent ]
})
export class EmployeesModule {}
