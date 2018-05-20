import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
	providedIn: 'root'
})
export class AuthenticateService {
	private user: User = { user: 'juan', password: '1234' };
	private isLogin;
	constructor() {}
	isValidUser(user: User) {
		if (this.user.user === user.user && this.user.password === user.password) {
			this.isLogin = true;
		} else {
			this.isLogin = false;
		}
		return this.isLogin;
	}

	getIsLogin() {
		return this.isLogin;
	}
}
