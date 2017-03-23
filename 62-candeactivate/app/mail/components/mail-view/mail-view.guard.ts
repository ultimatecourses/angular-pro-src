import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { MailViewComponent } from './mail-view.component';

@Injectable()
export class MailViewGuard implements CanDeactivate<MailViewComponent> {
  canDeactivate(component: MailViewComponent) {
    if (component.hasUnsavedChanges) {
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}