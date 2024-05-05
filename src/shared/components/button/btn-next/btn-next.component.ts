import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'qpuc-btn-next',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  template: `
    <button [class]="'button-'+size"
            mat-stroked-button [color]="color"
            [routerLink]="routerLink">
      {{ name }}
      <span>
          <mat-icon class="mat-icon-rtl-mirror icon" [fontIcon]="name=='Start'?'navigate_next':'next_plan'"/>
        </span>
    </button>
  `,
  styles: [`.button {
    color: #131432 !important;
    &-large {
      font-size: xxx-large;
      margin: 1rem;
      padding: 2rem;
      .icon {
        font-size: 2rem;
        transform: translate(-25%, -25%);
      }
    }
    &-medium {
      font-size: x-large;
      margin-top: .5rem;
      padding: 1rem;
      .icon {
        font-size: 25px;
      }
    }
  }
  `]
})
export class BtnNextComponent {
  @Input() name = "Start";
  @Input() color="primary";
  @Input() routerLink!: any;
  @Input() size = 'large';
}
