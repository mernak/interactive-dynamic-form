import {EventEmitter, Output} from '@angular/core';
import {IControlData} from './IControlData';

export interface IControl {
  controlData: IControlData;
  sendMessage: EventEmitter<any>;

  doSomething(params: any): void;

}
