import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Counter: {{ counter }}
    </div>
  `
})
export class AppComponent implements OnInit, DoCheck {
  counter = 0;
  constructor(
    private zone: NgZone
  ) {}
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => this.counter++);
      }
      this.zone.run(() => {
        setTimeout(() => this.counter = this.counter, 1000);
      });
    });
  }
  ngDoCheck() {
    console.log('Change detection has been run!');
  }
}
