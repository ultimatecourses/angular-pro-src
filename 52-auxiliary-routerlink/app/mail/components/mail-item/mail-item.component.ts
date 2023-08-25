import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a 
      class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>

    <!-- router link, uses a black string for the first paraemter which keeps it relative -->
    <!--- then it uses outlets uses and object with a pane property then in an array  set the key which is message -->
    <!--- and the value which is the id of the message, which we get from the one way data binding from the compoenent -->
    <!-- add routerLinkActive="active" to the anchor tag which adds css that adds a border to the right-->
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;
}
