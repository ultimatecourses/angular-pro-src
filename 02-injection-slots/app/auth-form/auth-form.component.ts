import { Component, Output, EventEmitter } from '@angular/core';

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
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
