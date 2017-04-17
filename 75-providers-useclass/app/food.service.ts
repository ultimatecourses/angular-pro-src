import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_TOKEN } from './token';

@Injectable()
export class FoodService {
  constructor(
    private http: Http,
    @Inject(API_TOKEN) private api: string
  ) {
    console.log('Ultimate Angular');
  }
  getFood(): Observable<any[]> {
    return this.http.get(this.api)
      .map(response => response.json());
  }
}