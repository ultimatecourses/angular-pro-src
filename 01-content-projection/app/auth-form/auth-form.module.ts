import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthFormModule {}