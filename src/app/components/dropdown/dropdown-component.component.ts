import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IControl} from '../../interface/IFormControl';
import {IControlData} from '../../interface/IControlData';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.css']
})
export class DropdownComponentComponent implements IControl, OnInit {
  @Input() controlData: IControlData;
  @Output() sendMessage: EventEmitter<any>;


  constructor() {
    this.sendMessage = new EventEmitter<any>();
  }


  ngOnInit() {
  }

  onchange(val: any): void {
    console.log(val);
    this.controlData.value = val;
    this.sendMessage.emit({value: 'dropdown ' + this.controlData.controlName , controls: this.controlData.dependents});
  }

  doSomething(params: any) {
    // filter dropdown by category id ;
    alert( this.controlData.controlName + ' received from ' + params);
  }

}
