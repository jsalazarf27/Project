import { ApiProjectService } from './api-project.service';
import { ApiProjectMockService } from './api-project-mock.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		HttpClientInMemoryWebApiModule.forRoot(ApiProjectMockService),
		HttpClientModule
	],
	providers: [ ApiProjectService ],
	declarations: []
})
export class CoreModule {}
