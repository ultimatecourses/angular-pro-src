import { Component, Renderer, ChangeDetectorRef, ElementRef, Output, ViewChild, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: #9f72e6; }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message 
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.setElementClass(this.email.nativeElement, 'email', true);
    this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }
  
  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
