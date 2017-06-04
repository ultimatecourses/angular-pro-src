import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Store } from './store';

import { SongsModule } from './songs/songs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    SongsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
