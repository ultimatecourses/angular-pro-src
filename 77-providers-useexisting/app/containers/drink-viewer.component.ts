import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { FoodService } from '../food.service';

interface Drink {
  name: string,
  price: number
}

export abstract class DrinkService {
  getDrinks: () => Observable<Drink[]>;
}

@Component({
  selector: 'drink-viewer',
  providers: [
    FoodService,
    { provide: DrinkService, useExisting: FoodService }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]>;
  constructor(private foodService: DrinkService) {}
  ngOnInit() {
    this.items$ = this.foodService.getDrinks();
  }
}
