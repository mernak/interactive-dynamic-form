import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IControl} from '../../interface/IFormControl';
import {IControlData} from '../../interface/IControlData';

@Component({
  selector: 'app-radio-component',
  templateUrl: './radio-component.component.html',
  styleUrls: ['./radio-component.component.css']
})
export class RadioComponentComponent implements IControl, OnInit {
  @Input()controlData: IControlData;
  @Output() sendMessage: EventEmitter<any>;


  constructor() {
    this.sendMessage = new EventEmitter<any>();
  }


  ngOnInit() {
  }

  onchange(val: any): void {
    this.sendMessage.emit({value: 'Sent from radio', controls: this.controlData.dependents});
  }

  doSomething(params: any) {
    // filter dropdown by category id ;
    alert( this.controlData.controlName + ' received from ' + params);
  }
}
