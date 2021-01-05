import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { DatatableTypeComponent } from './datatable.type';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RepeatTypeComponent } from './repeat-section.type';
import { StudentPageModalComponent } from './student-page-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgxDatatableModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'datatable',
          component: DatatableTypeComponent,
          defaultOptions: {
            templateOptions: {
              columnMode: 'force',
              rowHeight: 'auto',
              headerHeight: '40',
              footerHeight: '40',
              limit: '10',
              scrollbarH: 'true',
              reorderable: 'reorderable',
            },
          },
        },
        { name: 'repeat', component: RepeatTypeComponent },
      ],
    }),
  ],
  declarations: [
    DatatableTypeComponent,
    RepeatTypeComponent,
    StudentPageModalComponent,
  ],
  bootstrap: [ StudentPageModalComponent, ]
})
export class StudentPageModalModule { }






