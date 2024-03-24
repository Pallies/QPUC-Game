import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'qpuc-btn-theming',
  standalone: true,
  imports: [
    MatButtonModule,
    NgStyle,
    NgClass
  ],
  template: `
    <div class="container" [ngStyle]="{'visibility':disabled?'hidden':'visible'}">
      <button mat-stroked-button color="accent" class="box valid" [disabled]="disabled">
         <ng-content/>
        <div class="box_content">
        </div>
      </button>
    </div>
  `,
  styleUrl: './btn-theming.component.scss'
})
export class BtnThemingComponent {

  @Input() disabled:boolean=false;
  @Output() choice=new EventEmitter<boolean>();
}
