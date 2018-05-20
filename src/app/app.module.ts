import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { SessionGuard } from './session-guard.service';
import { ProjectsModule } from './projects/projects.module';
import { EmployeesModule } from './employees/employees.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		EmployeesModule,
		ProjectsModule,
		AuthenticationModule,
		HomeModule,
		SharedModule,
		RouterModule.forRoot([
			{ path: '', component: LoginComponent },
			{
				path: 'employees',
				loadChildren: './employees/employees.module#EmployeesModule',
				canLoad: [ SessionGuard ]
			}
		])
	],
	providers: [ SessionGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
