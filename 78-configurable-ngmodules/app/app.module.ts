import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FoodStoreModule } from './food-store/food-store.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FoodStoreModule.forRoot({
      storeId: 10292,
      storeToken: 'eca938c99a0e9ff91029dc'
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
