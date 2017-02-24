import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './one/one.component';
import { ExampleTwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
