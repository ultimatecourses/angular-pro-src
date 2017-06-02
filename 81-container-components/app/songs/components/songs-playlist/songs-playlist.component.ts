import { Component } from '@angular/core';

import { Store } from '../../../store';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      Playlist
    </div>
  `
})
export class SongsPlaylistComponent {

  constructor(
    private store: Store
  ) {}

}