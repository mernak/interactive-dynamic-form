import { Component } from '@angular/core';
import {FormData} from './data/FormData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-interactive-form';
  data = FormData;
}
