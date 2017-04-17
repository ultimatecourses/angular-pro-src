import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { FoodService } from '../food.service';

interface Side {
  name: string,
  price: number
}

export function SideFactory(http) {
  return new FoodService(http, '/api/sides');
}

@Component({
  selector: 'side-viewer',
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
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
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
