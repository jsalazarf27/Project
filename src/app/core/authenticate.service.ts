import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticateService {
	constructor() {}

	login(isLogin): Observable<boolean> {
		return of(true).pipe(delay(1000), tap((val) => localStorage.setItem('isLogin', isLogin)));
	}

	logout(): Observable<boolean> {
		return this.login('false');
	}

	setIsLogin(isLogin) {
		localStorage.setItem('isLogin', isLogin);
	}

	getIsLogin() {
		console.log(localStorage.getItem('isLogin'));
		const isLogin: string = localStorage.getItem('isLogin');
		return isLogin === 'true' ? true : false;
	}
}
