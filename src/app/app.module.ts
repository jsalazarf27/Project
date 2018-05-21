import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
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
import { SessionGuard } from './core/session-guard.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { Routes } from '@angular/router';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		AppRoutingModule,
		BrowserModule,
		EmployeesModule,
		ProjectsModule,
		AuthenticationModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
	exports: [ NotFoundComponent ]
})
export class AppModule {}
