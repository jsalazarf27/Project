import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiProjectService } from '../../core/api-project.service';
import { Employee } from '../employee.interface';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
	selector: 'app-employee-table',
	templateUrl: './employee-table.component.html',
	styleUrls: [ './employee-table.component.css' ]
})
export class EmployeeTableComponent implements OnInit {
	displayedColumns: string[];
	dataSource$: Observable<Employee[]>;
	constructor(private apiProjectService: ApiProjectService, public dialog: MatDialog) {
		this.displayedColumns = [
			'name',
			'company',
			'age',
			'birthday',
			'color',
			'project',
			'buttonEdit',
			'buttonRemove'
		];
		this.refreshData();
	}

	remove(employee) {
		const dialogAdd = this.dialog.open(DialogComponent, {
			width: '300px',
			data: {
				name: employee.name,
				id: employee.id
			}
		});
		dialogAdd.afterClosed().subscribe((result) => {
			this.apiProjectService
				.deleteEmployee<Employee>('employees', result)
				.subscribe((res) => {
					this.refreshData();
				});
		});
	}
	refreshData() {
		this.dataSource$ = this.apiProjectService.getResource<Employee>('employees');
	}

	ngOnInit() {}
}
