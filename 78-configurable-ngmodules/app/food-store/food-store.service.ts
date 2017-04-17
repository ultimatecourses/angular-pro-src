import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';

@Injectable()
export class FoodStoreService {
  constructor(
    private http: Http,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  getStore() {
    const options = new RequestOptions();

    options.headers = new Headers({
      id: this.config.storeId,
      token: this.config.storeToken
    });

    return this.http.get(`/api/stores`, options)
      .map((res) => res.json()[0]);
  }
}
