import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
