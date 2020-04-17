import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {IControlData} from '../../interface/IControlData';
import {FormControl, FormGroup} from '@angular/forms';
import {IControl} from '../../interface/IFormControl';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() controlDataItems: IControlData[];
  @ViewChildren('control') controls: QueryList<IControl>;
  form: FormGroup;
  submitted: boolean;

  constructor() {
  }

  ngOnInit() {
    const formGroup = {};
    this.controlDataItems.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });
    this.form = new FormGroup(formGroup);
  }

  sendMessageToControls(params: any): void {
    this.controls.forEach(control => {
      if (params.controls.indexOf(control.controlData.controlName) > -1) {
        control.doSomething(params.value);
      }
    });
  }

  submitForm() {
    this.submitted = true;
    console.log(this.controlDataItems.forEach(x => console.log(x)));
    console.log('submit');
    console.log(this.form.value);
  }


}
