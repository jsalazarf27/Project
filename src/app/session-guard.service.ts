import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AuthenticateService } from './authentication/authenticate.service';

@Injectable()
export class SessionGuard implements CanLoad {
	constructor(private authenticateService: AuthenticateService) {}

	canLoad(route: Route) {
		// console.log(route);
		// 	console.log(this.authenticateService.getIsLogin());
		return true;
	}
}
