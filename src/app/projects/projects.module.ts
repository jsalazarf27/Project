import { ProjectsRoutingModule } from './projects-routing.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from './project-table/project-table.component';
import { MatTableModule } from '@angular/material';
import { ProjectInputComponent } from './project-input/project-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, CoreModule, ProjectsRoutingModule, MatTableModule, SharedModule ],
	declarations: [ ProjectTableComponent, ProjectInputComponent ],
	exports: [ ProjectTableComponent ]
})
export class ProjectsModule {}
