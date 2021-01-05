import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FormlyFieldConfig, FieldArrayType } from '@ngx-formly/core';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'formly-field-datatable',
  template: `
    <div *ngFor="let row of field.fieldGroup; let i = index;" class="row">
      <div *ngFor="let field of row.fieldGroup; let h = index;" class="col-3">
      <div>{{row.model[field.key]}}</div>      
      </div>
      <button type="button" class="btn btn-primary col-2" data-bs-toggle="modal" 
          [attr.data-bs-target]="'#exampleModal'+i">Edit</button>
    </div>
`,
})

export class DatatableTypeComponent extends FieldArrayType implements OnInit {
  @ViewChild('defaultColumn') public defaultColumn: TemplateRef<any>;

  selected = [];

  ngOnInit() {
    this.to.columns.forEach(column => column.cellTemplate = this.defaultColumn);
  }

  getField(field: FormlyFieldConfig, column: TableColumn, rowIndex: number ): FormlyFieldConfig {
    return field.fieldGroup[rowIndex].fieldGroup.find(f => f.key === column.prop);
  }

  onSelect({ selected }) {
    console.log('Select Event', selected);
    this.selected = selected;
  }

  getValues(field: FormlyFieldConfig): {propertyName: string, value: any}[]{

    //if (field.key && !field.fieldGroup) {
      //const control = field.formControl;
      //console.log("lll");//control.value);
      //let valueChanges = control.valueChanges.pipe(distinctUntilChanged());

      //if (control.value !== getFieldValue(field)) {
      //  valueChanges = valueChanges.pipe(startWith(control.value));
      //}
    //}
    //let keys = Object.keys(field.model);
    //for(let key in keys){
    //  console.log(field.model[keys[key]]);
    //}    
    //let test = Object.entries(field.model);
    //console.log(test)
    //for( let value in test){
    //  console.log(value);
    //}
    let values = [];
    let propertyAndValue = Object.entries(field.model);
    //console.log(propertyAndValue);
    for(let i = 0; i < propertyAndValue.length; i++){
      
      values.push({propertyName: propertyAndValue[i][0], value: propertyAndValue[i][1]});
    }
    
    //values.push({propertyName: "test 1", value: "test value 2"});
    //console.log(values);
    return values;

  }

  selectedForEdit(field: FormlyFieldConfig): void{
    field.parent.templateOptions.selectedForEditIndex = field.key;
    console.log(field.parent.templateOptions);
  }

  test(test: any){
    console.log(test);
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */