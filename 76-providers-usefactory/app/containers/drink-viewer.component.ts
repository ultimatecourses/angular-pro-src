import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { FoodService } from '../food.service';

interface Drink {
  name: string,
  price: number
}

export function DrinkFactory(http) {
  return new FoodService(http, '/api/drinks');
}

@Component({
  selector: 'drink-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: DrinkFactory,
      deps: [
        Http
      ]
    }
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
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
