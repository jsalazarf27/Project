import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../core/authenticate.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: [ './sidenav.component.css' ]
})
export class SidenavComponent implements OnInit {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(
		private breakpointObserver: BreakpointObserver,
		private authenticationService: AuthenticateService,
		private router: Router
	) {}

	ngOnDestroy(): void {}

	ngOnInit() {}
	logout() {
		this.authenticationService.logout().subscribe((data) => {
			this.redirectLogin();
		});
	}

	redirectLogin() {
		this.router.navigateByUrl('login');
	}
}
