import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IControl} from '../../interface/IFormControl';
import {IControlData} from '../../interface/IControlData';

@Component({
  selector: 'app-textbox-component',
  templateUrl: './textbox-component.component.html',
  styleUrls: ['./textbox-component.component.css']
})
export class TextboxComponentComponent implements IControl, OnInit {
  @Input()controlData: IControlData;
  @Output() sendMessage: EventEmitter<any>;
  @Input() dependents: string[];

  constructor() {
    this.sendMessage = new EventEmitter<any>();
  }

  ngOnInit() {
    this.controlData.value = '';
  }

  onchange(val: any): void {
    this.controlData.value = val;
    this.sendMessage.emit({value: 'sent from textbox', controls: this.controlData.dependents});
  }

  doSomething(params: any) {
    // filter dropdown by category id ;
    alert( this.controlData.controlName + ' received from ' + params);
  }


}
