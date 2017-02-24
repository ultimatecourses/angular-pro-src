import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    .example-two {
      background: #9f72e6;
      font-size: 19px;
      color: #fff;
      margin-bottom: 10px;
      padding: 5px 7px;
    }
    .example-one {
      border: 3px solid #9f72e6;
      font-size: 14px;
      color: #9f72e6;
      padding: 5px 7px;
    }
  `],
  template: `
    <div class="example-two">
      Example Two
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleTwoComponent {

}
