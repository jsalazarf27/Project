import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable()
export class SessionGuard implements CanLoad {
	constructor(private authenticateService: AuthenticateService) {}

	canLoad(route: Route) {
		return this.authenticateService.getIsLogin();
	}
}
