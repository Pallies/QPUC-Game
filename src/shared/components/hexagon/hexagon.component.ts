import {Component, Input} from '@angular/core';
import {HexagonDirective} from "./hexagon.directive";

@Component({
  selector: 'qpuc-hexagon',
  standalone: true,
  imports: [
    HexagonDirective
  ],
  template: `
    <div class="container">
      <div [qpucHexagon]="active" class="box">
        <ng-content/>
        <div class="box_content"></div>
      </div>
    </div>`,
  styleUrl: './hexagon.component.scss'
})
export class HexagonComponent {
  @Input() active!:number;
}
