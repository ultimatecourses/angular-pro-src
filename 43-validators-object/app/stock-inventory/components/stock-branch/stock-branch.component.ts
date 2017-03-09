import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input 
          type="text" 
          placeholder="Branch ID"
          formControlName="branch">
        <div
          class="error" 
          *ngIf="required('branch')">
          Branch ID is required
        </div>
        <input 
          type="text" 
          placeholder="Manager Code"
          formControlName="code">
        <div
          class="error" 
          *ngIf="required('code')">
          Manager ID is required
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
}