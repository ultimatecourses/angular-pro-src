import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-list',
  styleUrls: ['songs-list.component.scss'],
  template: `
    <div class="songs-list">
      <h3>
        <ng-content></ng-content>
      </h3>
      <ul>
        <li *ngFor="let item of list; index as i;">
          <p>{{ item.artist }}</p>
          <span>{{ item.track }}</span>
          <div
            class="songs-list__favourite"
            (click)="toggleItem(i, 'favourite')"
            [class.active]="item.favourite">
          </div>
          <div
            class="songs-list__listened"
            (click)="toggleItem(i, 'listened')"
            [class.active]="item.listened">
          </div>
        </li>
      </ul>
    </div>
  `
})
export class SongsListComponent {

  @Input()
  list: Song[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: { ...track, [prop]: !track[prop] }
    });
  }

}