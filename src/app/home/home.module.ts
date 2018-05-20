import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [ CommonModule, MatCardModule, SharedModule, HomeRoutingModule ],
	declarations: [ HomeComponent ],
	exports: [ HomeComponent ]
})
export class HomeModule {}
