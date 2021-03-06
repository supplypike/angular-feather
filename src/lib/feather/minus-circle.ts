import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-minus-circle',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>`
})
export class IconMinusCircleComponent {}

@NgModule({
  declarations: [ IconMinusCircleComponent ],
  entryComponents: [ IconMinusCircleComponent ],
  exports: [ IconMinusCircleComponent ]
})
export class IconMinusCircle {}
