import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section1',
  template: `
 

<div id="accordion" class="accordion">
	<div class="accordion-item" *ngFor="let field of field.fieldGroup; let i = index;">
		<h2 class="accordion-header" [id]="'headingOne'+i">
			<button class="accordion-button" type="button" data-bs-toggle="collapse" [attr.data-bs-target]="'#collapseOne'+i" aria-expanded="true" [attr.aria-controls]="'#collapseOne'+i"> {{field.model[field.fieldGroup[0].key]}}</button>
		</h2>
		<div [id]="'collapseOne'+i" class="accordion-collapse collapse" [attr.aria-labelledby]="'headingOne'+i" data-bs-parent="#accordion">
			<div class="accordion-body">
				<formly-field class="col" [field]="field"></formly-field>
				<div>
					<button class="btn btn-danger" type="button"  data-bs-dismiss="modal" (click)="remove(i)">Remove Student</button>
				</div>
			</div>
		</div>
	</div>
</div>

<div style="margin:30px 0;">
	<button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>
</div>
  `,
})
export class RepeatType2Component extends FieldArrayType {}
