import { Component } from '@angular/core';
import {RectangleDirective} from "./rectangle.directive";

@Component({
  selector: 'qpuc-rectangle',
  standalone: true,
  imports: [RectangleDirective],
  providers:[RectangleDirective],
  template: `
    <div class="container"  >
      <div class="box" (click)="active=!active">
        <ng-content/>
        <div [qpucRectangle]="active" class="box_content"></div>
      </div>
    </div>
  `,
  styleUrl:'./rectangle.component.scss'
})
export class RectangleComponent {
active=false;
}
