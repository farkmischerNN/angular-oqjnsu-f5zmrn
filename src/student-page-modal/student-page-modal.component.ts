import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-app-example',
  templateUrl: './student-page-modal.component.html',
})
export class StudentPageModalComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Students</h5>',
    },
    {
      key: 'investments',
      type: 'datatable',
      templateOptions: {
        columns: [
          { name: 'First Name', prop: 'studentFirstName' },
        ],
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'studentFirstName',
            templateOptions: {
              required: true,
            },
          },
          {
            type: 'input',
            key: 'studentLastName',
            templateOptions: {
              required: true,
            },
          },
        ],
      },
    },
    {
      key: 'investments',
      type: 'repeat',
      templateOptions: {
        addText: 'Add Student',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'studentFirstName',
            templateOptions: {
              label: 'First Name:',
              required: true,
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'studentLastName',
            templateOptions: {
              label: 'Last Name:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'birthDate',
            className: 'col-sm-4',
            templateOptions: {
              type: 'date',
              label: 'Birth Date:',
            },
          },
          {
            type: 'input',
            key: 'age',
            className: 'col-sm-4',
            templateOptions: {
              type: 'number',
              label: 'Age:',
            },
          },
        ],
      },
    },
  ];

  constructor() {
    this.fetch((data) => this.model = data);
  }

  ngInit(){
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

  fetch(cb) {
    cb({
      name: 'name1',
      surname: 'surname1',
      investments: [
        {
          studentFirstName: 'firstName1',
          studentLastName: 'lastName1',
          birthDate: '',
          age: 1,
        },
        {
          studentFirstName: 'firstName2',
          studentLastName: 'lastName2',
          birthDate: '',
          age: 2,
        },
        {
          studentFirstName: 'firstName3',
          studentLastName: 'lastName3',
          birthDate: '',
          age: 3,
        },
      ],
    });
  }


}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */