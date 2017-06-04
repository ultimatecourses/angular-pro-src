import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <songs-list
        [list]="favourites$ | async">
        Favourites
      </songs-list>
    </div>
  `
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(track => track.favourite));
  }

}