import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from './project-table/project-table.component';
import { MatTableModule } from '@angular/material';

@NgModule({
	imports: [ CommonModule, CoreModule, MatTableModule ],
	declarations: [ ProjectTableComponent ],
	exports: [ ProjectTableComponent ]
})
export class ProjectsModule {}
