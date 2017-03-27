import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input placeholder="Branch ID" type="text" formControlName="branch">
        <div *ngIf="required('branch')" class="error">
          Branch ID is required
        </div>
        <div *ngIf="invalid" class="error">
          Invalid branch code: 1 letter, 3 numbers
        </div>
        <div *ngIf="unknown" class="error">
          Unknown branch, please check your ID
        </div>
        <input placeholder="Manager Code" type="text" formControlName="code">
        <div *ngIf="required('code')" class="error">
          Manager Code is required
        </div>
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;

  required(name: string) {
    return (
      this.parent.get(`store.${name}`).hasError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }

  get invalid() {
    return (
      !this.required('branch') && 
      this.parent.get('store.branch').hasError('invalidBranch') &&
      this.parent.get('store.branch').dirty
    );
  }
  
  get unknown() {
    return (
      this.parent.get('store.branch').hasError('unknownBranch') &&
      this.parent.get('store.branch').dirty
    );
  }
}
