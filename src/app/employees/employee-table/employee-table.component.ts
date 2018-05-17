import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiProjectService } from '../../core/api-project.service';
import { Employee } from '../employee.interface';

@Component({
	selector: 'app-employee-table',
	templateUrl: './employee-table.component.html',
	styleUrls: [ './employee-table.component.css' ]
})
export class EmployeeTableComponent implements OnInit {
	displayedColumns: string[];
	dataSource$: Observable<Employee[]>;
	constructor(private apiProjectService: ApiProjectService) {
		this.displayedColumns = [ 'name', 'company', 'age', 'birthday', 'color', 'project' ];
		this.dataSource$ = this.apiProjectService.getResource<Employee>('employes');
	}

	ngOnInit() {}
}
