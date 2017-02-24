import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <div *ngIf="showMessage">
          You will be logged in for 30 days
        </div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

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
