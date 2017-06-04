import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async">
        Played
      </songs-list>
    </div>
  `
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(track => track.listened));
  }

}