import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent implements OnInit {
	form: FormGroup;
	constructor(
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) private data
	) {}

	ngOnInit() {}

	submit() {
		this.dialogRef.close(`${this.data.id}`);
	}
}
