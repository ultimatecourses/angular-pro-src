import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}