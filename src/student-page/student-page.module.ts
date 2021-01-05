import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RepeatType2Component } from './repeat-section.type';
import { StudentPageComponent } from './student-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat2', component: RepeatType2Component },
      ],
    }),
  ],
  declarations: [
    RepeatType2Component,
    StudentPageComponent,
  ],
  bootstrap: [ StudentPageComponent, ]
})
export class StudentPageModule { }






