import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RadioComponentComponent } from './components/radio/radio-component.component';
import { TextboxComponentComponent } from './components/textbox/textbox-component.component';
import { DropdownComponentComponent } from './components/dropdown/dropdown-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    RadioComponentComponent,
    TextboxComponentComponent,
    DropdownComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
