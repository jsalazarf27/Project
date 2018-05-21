import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		BrowserAnimationsModule
	],
	declarations: [ LoginComponent ],
	exports: [ LoginComponent ]
})
export class AuthenticationModule {}
