import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: EmployeeTableComponent },
	{ path: 'employees', component: EmployeeTableComponent },
	{ path: 'employe', component: EmployeeInputComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeesRoutingModule {}
