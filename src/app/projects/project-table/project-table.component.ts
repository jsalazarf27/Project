import { Project } from './../project.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProjectService } from '../../core/api-project.service';

@Component({
	selector: 'app-project-table',
	templateUrl: './project-table.component.html',
	styleUrls: [ './project-table.component.css' ]
})
export class ProjectTableComponent implements OnInit {
	displayedColumns: string[];
	dataSource$: Observable<Project[]>;
	constructor(private apiProjectService: ApiProjectService) {
		this.displayedColumns = [ 'name', 'teamSize', 'clientName' ];
		this.dataSource$ = this.apiProjectService.getResource<Project>('projects');
	}
	ngOnInit() {}
}
