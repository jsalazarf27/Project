import { User } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	formGroup: FormGroup;
	user: User;
	errorMsg = '';
	// userFormControl = new FormControl('', [ Validators.required ]);
	// passwordFormControl = new FormControl('', [Validators.required]);

	constructor(
		private fb: FormBuilder,
		private service: AuthenticateService,
		private router: Router
	) {
		this.formGroup = this.fb.group({
			password: [ '', Validators.required ],
			user: [ '', Validators.required ]
		});
	}

	login() {
		this.user = this.formGroup.value;
		if (!this.service.isValidUser(this.user)) {
			this.errorMsg = 'Invalid User and Password! try again ...';
		} else {
			// this.router.navigate([ '/employees' ]);
		}
	}
}
