import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core/';

@Component({
  selector: 'formly-change-of-income',
  templateUrl: './cheange-of-income.component.html',
})
export class ChangeOfIncomeComponent {
validatingForm: FormGroup;
  closeResult = '';

  form = new FormGroup({});
  model: any;
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Change Of Income</h5>',
    },
    {
      key: 'investments',
      type: 'repeat2',
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
    //alert(JSON.stringify(this.model));
  }

  fetch(cb) {
    cb({
      incomeChanged: true,
      appChangeAmount: 0,
      coAppChangeAmount: 0,
      appChange1: false,
      coAppChange1: false,
      appChagne2: false,
      coAppChange2: false,
      appChange3: false,
      coAppChange3: false,
      appChane4: false,
      coAppChange4: false,
    });
  }


}

