import { Component } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Food Store ({{ (store | async)?.name }})
    </div>
  `
})
export class AppComponent {
  store = this.foodService.getStore();
  constructor(private foodService: FoodStoreService) {}
}
