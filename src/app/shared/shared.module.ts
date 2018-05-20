import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
	imports: [ CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule ],
	declarations: [ SidenavComponent ],
	exports: [ SidenavComponent ]
})
export class SharedModule {}
