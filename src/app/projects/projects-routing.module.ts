import { ProjectTableComponent } from './project-table/project-table.component';
import { ProjectInputComponent } from './project-input/project-input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: ProjectTableComponent },
	{ path: 'projects', component: ProjectTableComponent },
	{ path: 'project', component: ProjectInputComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProjectsRoutingModule {}
