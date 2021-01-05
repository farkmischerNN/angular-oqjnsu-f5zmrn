import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StudentPageModalComponent } from '../student-page-modal/student-page-modal.component';
import { StudentPageComponent } from '../student-page/student-page.component';

const routes: Routes = [
  {
    path: 'student-page-modal',
    component: StudentPageModalComponent,
  },
  {
    path: 'student-page',
    component: StudentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
