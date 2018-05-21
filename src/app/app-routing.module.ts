import { NgModule } from '@angular/core';
import { LoginComponent } from './authentication/login/login.component';
import { SessionGuard } from './core/session-guard.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'home',
		loadChildren: './home/home.module#HomeModule',
		canLoad: [ SessionGuard ]
	},
	{
		path: 'projects',
		loadChildren: './projects/projects.module#ProjectsModule',
		canLoad: [ SessionGuard ]
	},
	{
		path: 'employees',
		loadChildren: './employees/employees.module#EmployeesModule',
		canLoad: [ SessionGuard ]
	},
	{ path: '**', component: NotFoundComponent }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
