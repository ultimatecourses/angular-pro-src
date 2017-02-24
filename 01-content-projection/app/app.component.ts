import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
      </auth-form>
      <auth-form 
        (submitted)="loginUser($event)">
        <h3>Login</h3>
      </auth-form>
    </div>
  `
})
export class AppComponent {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}