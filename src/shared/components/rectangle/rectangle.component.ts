import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RectangleDirective} from "./rectangle.directive";

@Component({
  selector: 'qpuc-rectangle',
  standalone: true,
  imports: [RectangleDirective],
  providers: [RectangleDirective],
  template: `
    <div class="container">
      <div class="box">
        <ng-content/>
        <div [qpucRectangle]="active"
             (next)="next.emit()" class="box_content"></div>
      </div>
    </div>
  `,
  styleUrl: './rectangle.component.scss'
})
export class RectangleComponent {
  @Output() next = new EventEmitter<void>();
  @Input() active:boolean|undefined = false;
}
