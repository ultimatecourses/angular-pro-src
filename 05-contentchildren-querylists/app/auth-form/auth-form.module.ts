import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class AuthFormModule {}