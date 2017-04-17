import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodService {
  constructor(
    private http: Http,
    private api: string
  ) {
    console.log(this.api);
  }
  getFood(): Observable<any[]> {
    return this.http.get(this.api)
      .map(response => response.json());
  }
}