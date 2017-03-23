import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {}
