import { User } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthenticateService } from '../../core/authenticate.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	formGroup: FormGroup;
	login$;
	errorMsg = '';
	private user: User;
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

	validateInput(text: string) {
		return (
			(!this.formGroup.get(text).valid && this.formGroup.get(text).touched) ||
			this.formGroup.get(text).untouched
		);
	}

	login() {
		this.user = this.formGroup.value;
		if (
			!(
				this.user.user === 'admin' &&
				this.user.password === '1234' &&
				this.service.login('true').subscribe((data) => {
					this.redirectHome();
				})
			)
		) {
			this.errorMsg = 'Invalid User and Password! try again ...';
		}
	}

	redirectHome() {
		this.router.navigateByUrl('/home');
	}
}
