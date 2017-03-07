import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
