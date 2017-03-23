import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
}