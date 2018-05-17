import { ProjectsModule } from './projects/projects.module';
import { EmployeesModule } from './employees/employees.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material';
@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, EmployeesModule, ProjectsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
