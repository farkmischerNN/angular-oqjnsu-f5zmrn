import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core/';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap/';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentPageModalModule } from '../student-page-modal/student-page-modal.module';
import { StudentPageModule } from '../student-page/student-page.module';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    StudentPageModalModule,
    StudentPageModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    ],
  providers: [],
  bootstrap: [ AppComponent, ]
})
export class AppModule {
  constructor() {
  }
}